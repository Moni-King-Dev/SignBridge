import os
import json
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout

# ---------- CONFIG ----------
DATASET_DIR = r"C:\Users\mrpre\OneDrive\Desktop\Sign Bridge\signbridge\backend\Indian"
IMG_SIZE = (64, 64)
BATCH_SIZE = 32
EPOCHS = 10
MODEL_PATH = "sign_language_interpreter_model.h5"

if not os.path.exists(DATASET_DIR):
    raise FileNotFoundError(f"❌ Dataset folder not found at: {DATASET_DIR}")

print("✅ Dataset found at:", DATASET_DIR)
print("📂 Classes:", os.listdir(DATASET_DIR))

# ---------- DATA GENERATORS ----------
datagen = ImageDataGenerator(
    rescale=1.0 / 255,
    validation_split=0.2,
    rotation_range=10,
    width_shift_range=0.1,
    height_shift_range=0.1,
    horizontal_flip=True
)

train_gen = datagen.flow_from_directory(
    DATASET_DIR,
    target_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    class_mode="categorical",
    subset="training"
)

val_gen = datagen.flow_from_directory(
    DATASET_DIR,
    target_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    class_mode="categorical",
    subset="validation"
)

# ---------- MODEL ----------
model = Sequential([
    Conv2D(32, (3, 3), activation="relu", input_shape=(IMG_SIZE[0], IMG_SIZE[1], 3)),
    MaxPooling2D((2, 2)),

    Conv2D(64, (3, 3), activation="relu"),
    MaxPooling2D((2, 2)),

    Conv2D(128, (3, 3), activation="relu"),
    MaxPooling2D((2, 2)),

    Flatten(),
    Dense(128, activation="relu"),
    Dropout(0.3),
    Dense(train_gen.num_classes, activation="softmax")
])

model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])
model.summary()

# ---------- TRAIN ----------
history = model.fit(
    train_gen,
    steps_per_epoch=max(1, train_gen.samples // BATCH_SIZE),
    validation_data=val_gen,
    validation_steps=max(1, val_gen.samples // BATCH_SIZE),
    epochs=EPOCHS
)

# ---------- SAVE ----------
model.save(MODEL_PATH)
print(f"\n✅ Model saved successfully at: {MODEL_PATH}")

with open("class_indices.json", "w") as f:
    json.dump(train_gen.class_indices, f)
print("✅ Saved class indices mapping.")
