import { useState } from 'react';
import Alert from '@mui/material/Alert';
import './App.css';

function App() {

  const lowestNumber = 1
  const highestNumber = 10
  const [userResponse, setUserResponse] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [msg, setMsg] = useState("")
  // console.log(trueValue)

  const handleSubmit = () => {
    let trueValue = Math.floor(Math.random() * (highestNumber - lowestNumber) + lowestNumber)

    try {
      const guessedValue = parseInt(userResponse)
      if (guessedValue < 1 || guessedValue > 10) {

        setMsg("Input must be a number between 1 and 10")
        setShowSuccess(false)
        setShowError(true)
        setTimeout(() => {
          setShowSuccess(false)
          setShowError(false)
        }, 2000)
      } else if (guessedValue === trueValue) {
        setMsg(`Yaaay you got yes ${guessedValue}`)
        setShowSuccess(true)
        setShowError(false)
        setTimeout(() => {
          setShowSuccess(false)
          setShowError(false)
        }, 2000)
        trueValue = generate()
      } else {
        setMsg("Incorrect answer ):")
        setShowSuccess(false)
        setShowError(true)
        setTimeout(() => {
          setShowSuccess(false)
          setShowError(false)
        }, 2000)
      }
    } catch {
      setMsg("Input must be an integer")
      setShowSuccess(false)
      setShowError(true)
      setTimeout(() => {
        setShowSuccess(false)
        setShowError(false)
      }, 2000)
    }
  }
  const generate = () => {
    return Math.floor(Math.random() * (highestNumber - lowestNumber) + lowestNumber)
  }
  return (
    <div className="App">
      <h1>Guess a number between 1 and 10</h1>
      <div>
        <input onChange={(e) => {
          setUserResponse(e.target.value)
        }} type="text" />
      </div>

      <button className='btn' onClick={() => {
        handleSubmit()
      }}>
        Submit
      </button>
      <Alert severity="error" className='alert' style={{ visibility: showError ? "visible" : "hidden" }}>
        {msg}
      </Alert>
      <Alert severity="success" className='alert' style={{ visibility: showSuccess ? "visible" : "hidden" }}>
        {msg}
      </Alert>
    </div>
  );
}

export default App;
