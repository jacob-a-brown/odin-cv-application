import { useState } from "react";

function GeneralInput({ label, name, value="", type="text", className="general-input" }){
  const id = crypto.randomUUID();
  const [info, setInfo] = useState(value);

  function handleInfoChange(e) {
    setInfo(e.target.value);
  }

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label><input id={id} onChange={handleInfoChange} value={info} type={type} name={name}/>
    </div>
  )
}

function GeneralTextArea({ label, name, value="", className="general-input"}){
  const id = crypto.randomUUID();
  const [info, setInfo] = useState(value);

  function handleInfoChange(e) {
    setInfo(e.target.value);
  }

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label><textarea id={id} onChange={handleInfoChange} value={info} name={name}></textarea>
    </div>
  )
}

export { GeneralInput, GeneralTextArea }