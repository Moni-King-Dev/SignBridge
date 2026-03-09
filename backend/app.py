import os
import json
import base64
import cv2
import numpy as np
import tensorflow as tf
from flask import Flask, request, jsonify
from flask_cors import CORS

# ----------------------------------------------------
# Configuration
# ----------------------------------------------------
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"

app = Flask(__name__)
CORS(app)

# Dynamic path resolution (works anywhere)
BASE_DIR = os.path.dirname(__file__)
MODEL_PATH = os.path.join(BASE_DIR, "sign_language_interpreter_model.h5")
CLASS_INFO_PATH = os.path.join(BASE_DIR, "class_info.json")
CLASS_INDEX_PATH = os.path.join(BASE_DIR, "class_indices.json")

IMG_SIZE = (64, 64)

# ----------------------------------------------------
# Model Loading
# ----------------------------------------------------
print("🔍 Loading model from:", MODEL_PATH)

if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(
        f"❌ Model file not found! Please train it first using train_model.py.\nExpected at: {MODEL_PATH}"
    )

model = tf.keras.models.load_model(MODEL_PATH)
print("✅ Model loaded successfully!")

# Load class indices mapping (from training)
if os.path.exists(CLASS_INDEX_PATH):
    with open(CLASS_INDEX_PATH, "r") as f:
        class_indices = json.load(f)
    index_to_label = {v: k for k, v in class_indices.items()}
    print("✅ Loaded class index mapping.")
else:
    print("⚠️ class_indices.json not found — using default A–Z labels.")
    index_to_label = {i: chr(65 + i) for i in range(26)}

# Load descriptive info (optional)
if os.path.exists(CLASS_INFO_PATH):
    with open(CLASS_INFO_PATH, "r") as f:
        class_info = json.load(f)
    print("✅ Loaded class_info.json successfully.")
else:
    class_info = {}
    print("⚠️ class_info.json not found. Descriptions disabled.")

# ----------------------------------------------------
# Routes
# ----------------------------------------------------
@app.route("/")
def home():
    return jsonify({"message": "✅ SignBridge backend is running!"})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        image_b64 = data.get("image", "")
        if not image_b64:
            return jsonify({"error": "No image provided"}), 400

        # Remove base64 prefix if present
        if "data:" in image_b64:
            image_b64 = image_b64.split(",")[1]

        img_bytes = base64.b64decode(image_b64)
        frame = cv2.imdecode(np.frombuffer(img_bytes, np.uint8), cv2.IMREAD_COLOR)

        # Preprocess for model
        frame = cv2.resize(frame, IMG_SIZE)
        frame = frame.astype("float32") / 255.0
        frame = np.expand_dims(frame, axis=0)

        # Predict
        prediction = model.predict(frame)
        idx = int(np.argmax(prediction))
        confidence = float(np.max(prediction) * 100)

        label = index_to_label.get(idx, "Unknown")
        description = class_info.get(label, "No description available for this sign.")

        print(f"🖐 Predicted: {label} ({confidence:.2f}%)")

        return jsonify({
            "sign": label,
            "confidence": f"{confidence:.2f}%",
            "description": description
        })

    except Exception as e:
        print("❌ Prediction error:", e)
        return jsonify({"error": str(e)}), 500

# ----------------------------------------------------
# Run Server
# ----------------------------------------------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
