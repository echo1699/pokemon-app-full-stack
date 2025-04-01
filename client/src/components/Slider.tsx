import React from "react"
import '../styles/Slider.css'

interface Slider {
  onCheck: (isChecked: boolean) => void
}
 
const Slider:React.FC<Slider> = ({ onCheck }) => {
  
  function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
    onCheck(event.target.checked)
  }

  return (
    <>
      <div className="shiny-switch">
        <label className="switch">
          <input type="checkbox" onChange={handleCheck}/>
          <span className="slider round"></span>
        </label>
      </div>
    </>
  )
}

export default Slider