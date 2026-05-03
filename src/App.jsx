import { useState } from "react"

function App() {
  const [step, setStep] = useState(1)
  const [next, setNext] = useState("Next")

  // --- Background Animation Styles ---
  const mainWrapper = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(-45deg, #f0f4f8, #e0e7ff, #f3e8ff, #fdf2f8)',
    backgroundSize: '400% 400%',
    animation: 'softGradient 15s ease infinite',
  }

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    width: '90%',
    maxWidth: '500px',
    border: '1px solid rgba(255, 255, 255, 0.5)'
  }

  return (
    <div style={mainWrapper}>
      <style>
        {`
          @keyframes softGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      
      <div style={cardStyle}>
        <Number count={step} />
        <StepMessage step={step} />
        {/* Aapki exact original buttons wali logic */}
        <Button step={step} setStep={setStep} next={next} setNext={setNext} />
      </div>
    </div>
  )
}

export default App

function Number({ count }) {
  const ulHandler = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0
  }
  
  let liStyle = {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    transition: '0.3s'
  }

  return (
    <ul style={ulHandler}>
      <li style={{
        ...liStyle,
        backgroundColor: count == 1 ? '#8789' : '#e5e7eb',
        color: count == 1 ? 'white' : 'black'
      }}>1</li>
      <li style={{
        ...liStyle,
        backgroundColor: count == 2 ? '#8789' : '#e5e7eb',
        color: count == 2 ? 'white' : 'black'
      }}>2</li>
      <li style={{
        ...liStyle,
        backgroundColor: count == 3 ? '#8789' : '#e5e7eb',
        color: count == 3 ? 'white' : 'black'
      }}>3</li>
    </ul>
  )
}

function StepMessage({ step }) {
  const data = [
    "Hi, I am Hafiz M. Hussain Lodhi, currently enhancing my skills as an intern at Saylani Tech.",
    "I am privileged to be under the mentorship of Sir Sufiyan, focusing on advanced web development.",
    "My goal is to build professional-grade applications and contribute to impactful tech solutions."
  ];
  return (
    <p style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      textAlign: 'center',
      marginTop: '50px', 
      minHeight: '80px',
      color: '#4b5563',
      fontSize: '1.1rem',
      lineHeight: '1.5'
    }}>
      {data[step - 1]}
    </p>
  )
}

function Button({ step, setStep, next, setNext }) {
  // Styling for button container
  const btnContainer = { 
    display: 'flex', 
    justifyContent: 'center', 
    marginTop: '50px', 
    gap: '20px' 
  }

  const btnStyle = {
    padding: '10px 25px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: '#8789',
    color: 'white'
  }

  return (
    <div style={btnContainer}>
      {/* Aapki original logic: comma separated functions inside arrow function */}
      <button 
        disabled={step === 1} 
        style={{...btnStyle, opacity: step === 1 ? 0.5 : 1}}
        onClick={() => { step <= 1 ? "" : setStep(step - 1), setNext("Next") }}
      >
        Previous
      </button>

      <button 
        style={btnStyle}
        onClick={() => step >= 3 ? setNext("Finish") : setStep(step + 1)}
      >
        {next}
      </button>
    </div>
  )
}