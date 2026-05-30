import React, { useState } from "react";
import "./measure.css";

function BMI() {
  const [page, setPage] = useState("home");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter Weight and Height");
      return;
    }

    const h = height / 100;
    const bmiValue = (weight / (h * h)).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5)
      setStatus("⚠ Underweight");
    else if (bmiValue < 25)
      setStatus("✅ Normal Weight");
    else if (bmiValue < 30)
      setStatus("🟠 Overweight");
    else
      setStatus("🔴 Obese");
  };

  if (page === "home") {
    return (
      <div className="hero">
        <div className="overlay">
          <h1>🌿 Healthy Life BMI Calculator</h1>

          <p>
            Small health checks lead to big lifestyle improvements.
          </p>

          <button
            className="start-btn"
            onClick={() => setPage("calculator")}
          >
            Get Started →
          </button>
        </div>

        <footer>
          <h3>L Ganesh Kanna</h3>
          <p>Register Number: 212225230072</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="calculator-page">
      <div className="card">
        <h1>🌿 BMI Calculator</h1>

        <input
          type="number"
          placeholder="Enter Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <h3>{status}</h3>
          </div>
        )}

        <button
          className="back-btn"
          onClick={() => setPage("home")}
        >
          ← Back
        </button>
      </div>

      <footer>
        <h3>L Ganesh Kanna</h3>
        <p>Register Number: 212225230072</p>
      </footer>
    </div>
  );
}

export default BMI;