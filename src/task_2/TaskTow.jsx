import TextBox from "./TextBox"
import './Task2.css'
import { useRef, useState } from "react"

function TaskTow() {
    const inputRef = useRef()
    const [showInput, setShowInput] = useState(false)
  return (
    <div className="task-2-container">
        <button onClick={() => {setShowInput(!showInput)}}>Show Value</button>
        <TextBox ref={inputRef}/><br />
        <p>{showInput && inputRef.current}</p>
    </div>
  )
}

export default TaskTow