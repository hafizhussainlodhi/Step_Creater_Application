import { useState } from "react";
import "./App.css"; // CSS file import hona zaroori hai

export default App;

function App() {
  const [step, setStep] = useState(1);
  const [next, setNext] = useState("Next");

  return (
    <div className="main-wrapper">
      <div className="card-style">
        {/* Beautiful Heading */}
        <h1 className="heading-style">✨ Step Creator Application</h1>

        <Number count={step} />
        <StepMessage step={step} />
        <Button step={step} setStep={setStep} next={next} setNext={setNext} />
      </div>
    </div>
  );
}

function Number({ count }) {
  return (
    <ul className="number-list">
      <li className={`number-item ${count === 1 ? "active" : ""}`}>1</li>
      <li className={`number-item ${count === 2 ? "active" : ""}`}>2</li>
      <li className={`number-item ${count === 3 ? "active" : ""}`}>3</li>
    </ul>
  );
}

function StepMessage({ step }) {
  const data = [
    "Hi, I am Hafiz M. Hussain Lodhi, currently enhancing my skills as an intern at Saylani Tech.",
    "I am privileged to be under the mentorship of Sir Sufiyan, focusing on advanced web development.",
    "My goal is to build professional-grade applications and contribute to impactful tech solutions."
  ];
  return (
    <p className="step-message">
      {data[step - 1]}
    </p>
  );
}

function Button({ step, setStep, next, setNext }) {
  return (
    <div className="btn-container">
      <button 
        disabled={step === 1} 
        className="btn-style"
        onClick={() => { step <= 1 ? "" : setStep(step - 1), setNext("Next") }}
      >
        Previous
      </button>

      <button 
        className="btn-style"
        onClick={() => step >= 3 ? setNext("Finish") : setStep(step + 1)}
      >
        {next}
      </button>
    </div>
  );
}