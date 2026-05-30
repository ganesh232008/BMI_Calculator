# Ex06 BMI Calculator
## Date: 30-05-2026

## AIM
To create a BMI calculator using React Router 

## ALGORITHM
### STEP 1 State Initialization
Manage the current page (Home or Calculator) using React Router.

### STEP 2 User Input
Accept weight and height inputs from the user.

### STEP 3 BMI Calculation
Calculate the BMI based on user input.

### STEP 4 Categorization
Classify the BMI result into categories (Underweight, Normal weight, Overweight, Obesity).

### STEP 5 Navigation
Navigate between pages using React Router.

## PROGRAM

## BMI.jsx
```
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
```
## Measure.css

```
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:"Segoe UI",sans-serif;
}

body{
  min-height:100vh;
}

/* HOME PAGE */

.hero{
  height:100vh;
  background-image:url("https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg");
  background-size:cover;
  background-position:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.overlay{
  background:rgba(0,0,0,0.45);
  padding:40px;
  border-radius:20px;
  text-align:center;
  color:white;
  width:80%;
  max-width:700px;
}

.overlay h1{
  font-size:50px;
  margin-bottom:15px;
}

.overlay p{
  font-size:20px;
  margin-bottom:25px;
}

.start-btn{
  padding:15px 30px;
  border:none;
  border-radius:10px;
  background:#16a34a;
  color:white;
  font-size:18px;
  cursor:pointer;
  transition:0.3s;
}

.start-btn:hover{
  background:#15803d;
}

/* BMI PAGE */

.calculator-page{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:linear-gradient(
    135deg,
    #14532d,
    #22c55e
  );
}

.card{
  width:400px;
  padding:30px;
  border-radius:20px;
  background:white;
  text-align:center;
  box-shadow:0 10px 25px rgba(0,0,0,0.3);
}

.card h1{
  color:#15803d;
  margin-bottom:20px;
}

input{
  width:100%;
  padding:12px;
  margin:10px 0;
  border-radius:10px;
  border:1px solid #ccc;
  font-size:16px;
}

button{
  width:100%;
  padding:12px;
  margin-top:10px;
  border:none;
  border-radius:10px;
  background:#16a34a;
  color:white;
  font-size:16px;
  cursor:pointer;
  transition:0.3s;
}

button:hover{
  background:#15803d;
}

.result{
  margin-top:20px;
  padding:15px;
  background:#dcfce7;
  border-radius:10px;
}

.result h2{
  color:#166534;
}

.result h3{
  color:#15803d;
}

.back-btn{
  background:#64748b;
}

.back-btn:hover{
  background:#475569;
}

footer{
  margin-top:20px;
  color:white;
  text-align:center;
}

footer h3{
  margin-bottom:5px;
}

@media(max-width:500px){

.card{
  width:90%;
}

.overlay h1{
  font-size:32px;
}

.overlay p{
  font-size:16px;
}

}
```

## App.jsx

```
import BMI from "./BMI";

function App() {
  return <BMI />;
}

export default App;
```
## OUTPUT
![alt text](<Screenshot 2026-05-30 203212.png>)
![alt text](<Screenshot 2026-05-30 203219.png>)
![alt text](<Screenshot 2026-05-30 203242.png>)
## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
