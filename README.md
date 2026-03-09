# ✋ SignBridge – AI-Based Sign Language Interpreter

**SignBridge** is an AI-powered web application that translates sign language gestures captured from a webcam into **readable text and speech in real time**.
The system uses computer vision and deep learning to recognize hand gestures, helping improve communication accessibility for **hearing-impaired users**.

---

# ✨ Features

### 🎥 Real-Time Sign Recognition

Uses **TensorFlow CNN models** and **OpenCV** to detect and classify hand gestures captured from a webcam.

### 🌐 Modern Web Interface

Interactive frontend built using **React, Vite, and Tailwind CSS** for a fast and responsive user experience.

### ⚙️ REST API Backend

A **Flask-based API** processes incoming images and returns predicted sign labels.

### 🧠 Extensible Model Training

`train_model.py` allows developers to **retrain the model with custom datasets** to improve accuracy or support additional signs.

---

# 🛠 Tech Stack

### Backend

* Python
* Flask
* Flask-CORS
* TensorFlow
* NumPy
* OpenCV
* Pillow

### Frontend

* React
* TypeScript
* React Router
* Vite
* Tailwind CSS
* HTML
* CSS
* JavaScript

---

# 📂 Project Structure

```id="snb3dl"
SignBridge
│
├── backend
│   ├── app.py
│   ├── train_model.py
│   ├── requirements.txt
│   ├── sign_language_interpreter_model.h5
│   └── class_indices.json
│
├── src
│   ├── components
│   ├── pages
│   └── routes
│
├── public
│   └── static assets
│
└── README.md
```

---

# ⚙️ Backend Setup

### 1️⃣ Navigate to backend

```bash id="srrysn"
cd backend
```

### 2️⃣ Create a virtual environment

Windows

```bash id="mso1gr"
python -m venv venv
venv\Scripts\activate
```

macOS / Linux

```bash id="pnj0y5"
python3 -m venv venv
source venv/bin/activate
```

### 3️⃣ Install dependencies

```bash id="ukilji"
pip install -r requirements.txt
```

### 4️⃣ Ensure model files exist

The following files must be inside `backend/`:

```id="bq6k2u"
sign_language_interpreter_model.h5
class_indices.json
```

### 5️⃣ Start the backend server

```bash id="smr77r"
python app.py
```

The API will run at:

```
http://localhost:5000
```

---

# 💻 Frontend Setup

From the **project root directory**:

### Install dependencies

```bash id="otzjtu"
npm install
```

### Start development server

```bash id="xfqqc1"
npm run dev
```

Open the URL printed in the terminal (usually):

```
http://localhost:5173
```

Use the **Translate page** to capture webcam frames and send them to the backend for prediction.

---

# 🧠 Model Training (Optional)

If you want to retrain the model with your own dataset:

### 1️⃣ Place dataset

Update the dataset path in:

```
backend/train_model.py
```

### 2️⃣ Run training

```bash id="mq9c5p"
python train_model.py
```

The training script will:

* Train a CNN model on your dataset
* Generate a new `sign_language_interpreter_model.h5`
* Update `class_indices.json`

---

# 🔮 Future Improvements

* Add **more sign language gestures**
* Improve model accuracy with larger datasets
* Add **speech output using Web Speech API**
* Deploy using **Docker or cloud services**

---

# 📜 License

Currently intended for **personal and educational use**.

