import { useState } from "react";

function GeneralInformation({ labelText, type, className="general-information" }){
  const [info, setInfo] = useState("");

  function handleInfoChange(e) {
    setInfo(e.target.value);
  }

  return (
    <div className={className}>
      <label htmlFor="input">{labelText}: </label><input id="input" onChange={handleInfoChange} value={info} type={type}/>
    </div>
  )
}

export default GeneralInformation