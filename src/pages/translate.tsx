import React, { useRef, useState } from "react";

export default function TranslatePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [description, setDescription] = useState("");

  // --- New states for Text → ISL translation ---
  const [textInput, setTextInput] = useState("");
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  // ✅ Map words and phrases to ISL image files
  // These should correspond to your /public/isl_images/ files
  const textToISLMap: Record<string, string> = {
    "good morning": "good_morning.jpg",
    "thank you": "thank_you.jpg",
    hello: "hello.jpg",
    yes: "yes.jpg",
    no: "no.jpg",
    please: "please.jpg",
    sorry: "sorry.jpg",
    welcome: "welcome.jpg",
  };

  // ===========================
  // CAMERA SECTION — ISL → TEXT
  // ===========================
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraOn(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Camera access denied or unavailable.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOn(false);
      setPrediction("");
      setDescription("");
    }
  };

  const captureAndPredict = async () => {
    if (!isCameraOn) {
      alert("Camera is not active. Please start it first.");
      return;
    }
    if (!canvasRef.current || !videoRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(videoRef.current, 0, 0, 224, 224);
    const imageData = canvasRef.current.toDataURL("image/jpeg");

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageData }),
      });

      const data = await response.json();
      if (data.sign) {
        setPrediction(data.sign);
        setDescription(data.description);

        const utter = new SpeechSynthesisUtterance(
          `The sign means ${data.sign}. ${data.description}`
        );
        speechSynthesis.cancel();
        speechSynthesis.speak(utter);
      } else {
        setPrediction("Error");
        setDescription(data.error || "Prediction failed.");
      }
    } catch (err) {
      console.error("Prediction error:", err);
      setPrediction("Error connecting to backend");
    }
  };

  // ===========================
  // TEXT → ISL IMAGE SECTION
  // ===========================
  const handleTextToISL = () => {
    const normalized = textInput.toLowerCase().trim();
    const words = normalized.split(" ").filter(Boolean);
    const foundImages: string[] = [];

    // Try full phrase first
    if (textToISLMap[normalized]) {
      foundImages.push(`/isl_images/${textToISLMap[normalized]}`);
    } else {
      // Otherwise, check each word individually
      words.forEach((word) => {
        if (textToISLMap[word]) {
          foundImages.push(`/isl_images/${textToISLMap[word]}`);
        }
      });
    }

    if (foundImages.length === 0) {
      alert("❌ No ISL image found for this text. Please add one in /public/isl_images/");
    }

    setImagePaths(foundImages);
  };

  // ===========================
  // RENDER UI
  // ===========================
  return (
    <div className="flex flex-col items-center p-6 space-y-10 bg-gray-50 min-h-screen">
      {/* =======================
          🖐️ ISL → TEXT SECTION
      ======================== */}
      <div className="w-full max-w-2xl bg-white shadow-md p-6 rounded-xl border">
        <h1 className="text-2xl font-bold mb-4 text-center">
          🖐️ Indian Sign Language Recognizer (ISL → Text)
        </h1>

        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="rounded-lg shadow-md border mb-4"
          width="400"
          height="300"
        />
        <canvas ref={canvasRef} width="224" height="224" className="hidden" />

        <div className="flex justify-center space-x-4 mb-4">
          {!isCameraOn ? (
            <button
              onClick={startCamera}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Start Camera
            </button>
          ) : (
            <button
              onClick={stopCamera}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Stop Camera
            </button>
          )}
          <button
            onClick={captureAndPredict}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Capture & Predict
          </button>
        </div>

        {prediction && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Predicted Sign: <span className="text-blue-700">{prediction}</span>
            </h2>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        )}
      </div>

      {/* =======================
          ✍️ TEXT → ISL SECTION
      ======================== */}
      <div className="w-full max-w-2xl bg-white shadow-md p-6 rounded-xl border mt-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">
          ✍️ Text → Indian Sign Language (Images)
        </h1>

        <textarea
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
          rows={2}
          placeholder="Type text here (e.g. Good Morning, Thank You)"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleTextToISL}
            className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Convert to ISL
          </button>
          <button
            onClick={() => {
              setTextInput("");
              setImagePaths([]);
            }}
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            Clear
          </button>
        </div>

        {/* Display ISL images */}
        {imagePaths.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {imagePaths.map((img, i) => (
              <div
                key={i}
                className="flex flex-col items-center border rounded-xl p-3 bg-gray-50 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt={`ISL sign ${i}`}
                  className="rounded-lg w-56 h-56 object-cover mb-2"
                />
                <span className="text-sm text-gray-600 font-medium">
                  {img.split("/").pop()?.replace(".jpg", "").replace("_", " ")}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
