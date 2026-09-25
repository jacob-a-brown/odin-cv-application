import { useState } from "react";
import { GeneralInput, GeneralTextArea } from "./general-information.jsx";


function WorkExperienceInputs({ id, companyName="", positionTitle="", mainResponsibilities="", startDate="", endDate="" }){
  return (
    <>
      <GeneralInput
        label="Company Name: "
        value={companyName}
        name={`${id}-company-name`}
      />

      <GeneralInput
        label="Position Title: "
        value={positionTitle}
        name={`${id}-position-title`}
      />

      <GeneralTextArea
        label="Main Responsibilities: "
        value={mainResponsibilities}
        name={`${id}-main-responsibilities`}
      />

      <GeneralInput
        label="Start Date: "
        type="month"
        value={startDate}
        name={`${id}-start-date`}
      />

      <GeneralInput
        label="End Date (Optional): "
        type="month"
        value={endDate}
        name={`${id}-end-date`}
      />
    </>
  )
}

function WorkExperience() {

  // { id, companyName, positionTitle, mainResponsibilities, startDate, endDate }
  const [workExperiences, setWorkExperiences] = useState([]);

  function handleAddWorkExperience() {
    setWorkExperiences([
      ...workExperiences,
      { id: crypto.randomUUID() },
    ]);
  }

  function handleDeleteWorkExperience(id) {
    setWorkExperiences(currentWorkExperiences =>
      currentWorkExperiences.filter(item => item.id !== id)
    );
  }

  return (
    <>
      <button type="button" onClick={handleAddWorkExperience}>Add Work Experience</button>
      {workExperiences.map(workExperience => {
        return (
          <div key={workExperience.id} className="workexperience-inputs" id={workExperience.id}>
            <WorkExperienceInputs {...workExperience} />
            <button
              type="button"
              onClick={() => handleDeleteWorkExperience(workExperience.id)}
            >
              Delete
            </button>
          </div>
        )
      })}
      
    </>
  )

}

export { WorkExperience }