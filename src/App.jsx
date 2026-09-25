import { useState } from "react";
import { GeneralInput } from "./components/general-information.jsx";
import { WorkExperience } from "./components/work-experience.jsx";

function App() {

  const [renderedCV, setRenderedCV] = useState({
    generalInformation: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    school: {
      schoolName: "",
      studies: "",
      graduationDate: "",
    },
    workExperience: []
  });

  function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    const updatedCV = {
      generalInformation: {},
      school: {},
      workExperience: []
    };
    updatedCV["generalInformation"]["name"] = values["name"];
    
    updatedCV["generalInformation"]["email"] = values["email"];
    updatedCV["generalInformation"]["phoneNumber"] = values["phone-number"];

    updatedCV["school"]["schoolName"] = values["school-name"];
    updatedCV["school"]["studies"] = values["studies"];
    updatedCV["school"]["graduationDate"] = values["graduation-date"];

    const workExperienceDivs = document.querySelectorAll(".workexperience-inputs");
    workExperienceDivs.forEach(item => {
      const id = item.id;
      const companyName = values[`${id}-company-name`];
      const positionTitle = values[`${id}-position-title`];
      const mainResponsibilities = values[`${id}-main-responsibilities`];
      const startDate = values[`${id}-start-date`];
      const endDate = values[`${id}-end-date`];

      updatedCV["workExperience"].push({
        companyName,
        positionTitle,
        mainResponsibilities,
        startDate,
        endDate
      })
    })

    setRenderedCV(updatedCV);
  }

  return (
    <div className="container">
      <div className="input-section">
        <form onSubmit={handleSubmit}>
          <div className="general-information">
            <h2>General Information</h2>
            <GeneralInput
              label="Name: "
              name="name"
            />
            <GeneralInput
              label="Email: "
              type="email"
              name="email"
            />
            <GeneralInput
              label="Phone Number: "
              type="tel"
              name="phone-number"
            />
          </div>
          <div className="school">
            <h2>School</h2>
            <GeneralInput
              label="School Name: "
              name="school-name"
            />
            <GeneralInput
              label="Studies: "
              name="studies"
            />
            <GeneralInput
              label="Graduation Date: "
              type="month"
              name="graduation-date"
            />
          </div>
          <div className="work-experience">
            <h2>Work Experience</h2>
            <WorkExperience />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className="input-render">
        <h1>General Information</h1>
        <p>Name: {renderedCV["generalInformation"]["name"]}</p>
        <p>Email: {renderedCV["generalInformation"]["email"]}</p>
        <p>Phone Number: {renderedCV["generalInformation"]["phoneNumber"]}</p>
        <h1>School</h1>
        <p>Name: {renderedCV["school"]["schoolName"]}</p>
        <p>Studies: {renderedCV["school"]["studies"]}</p>
        <p>Graduation Date: {renderedCV["school"]["graduationDate"]}</p>
        <h1>Work Experience</h1>
        {renderedCV["workExperience"].map((we) => {
          return (
            <div className="rendered-work-experience">
              <p>Company Name: {we.companyName}</p>
              <p>Position Title: {we.positionTitle}</p>
              <p>Main Responsibilities: {we.mainResponsibilities}</p>
              <p>Start Date: {we.startDate}</p>
              <p>End Date: {we.endDate}</p>
            </div>
            
          )
        })}
      </div>
    </div>


  )
}

export default App
