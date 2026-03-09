## SignBridge – AI‑Based Sign Language Interpreter

SignBridge is an AI‑powered web application that translates sign language gestures captured from a webcam into readable text and speech, helping improve communication accessibility for hearing‑impaired users.

### Features
- **Real‑time sign recognition**: Uses a TensorFlow CNN model and OpenCV to detect and classify hand signs.
- **Web interface**: Modern React + Vite + Tailwind CSS frontend.
- **REST API backend**: Flask API endpoint for image classification.
- **Extensible dataset & model**: `train_model.py` lets you retrain/update the model with your own dataset.

### Tech Stack
- **Backend**: Python, Flask, Flask‑CORS, TensorFlow, NumPy, OpenCV, Pillow
- **Frontend**: React, TypeScript, React Router, Vite, Tailwind CSS, HTML, CSS, JavaScript

### Project Structure
- `backend/` – Flask API + TensorFlow model (`app.py`, `train_model.py`, `requirements.txt`)
- `src/` – React frontend (pages, components, routes)
- `public/` – Static assets
- `sign_language_interpreter_model.h5` – Pretrained model weights
- `class_indices.json` – Label mapping generated during training

### Backend – Run Locally
1. Create and activate a virtual environment:
   ```bash
   cd backend
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # macOS / Linux
   source venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Ensure `sign_language_interpreter_model.h5` and `class_indices.json` are present in `backend/`.
4. Start the Flask server:
   ```bash
   python app.py
   ```
   The API will run on `http://localhost:5000`.

### Frontend – Run Locally
1. From the project root:
   ```bash
   npm install
   npm run dev
   ```
2. Open the printed `http://localhost:5173` (or similar) URL in your browser.
3. Use the translate page to capture webcam frames and send them to the backend for prediction.

### Model Training (Optional)
If you want to retrain the model:
1. Place your dataset in a directory and update `DATASET_DIR` in `backend/train_model.py`.
2. From `backend/` with your venv activated:
   ```bash
   python train_model.py
   ```
3. This script will:
   - Train a CNN on your dataset.
   - Save `sign_language_interpreter_model.h5`.
   - Generate/update `class_indices.json`.

### License
Personal/educational use only unless you add a specific license file.

