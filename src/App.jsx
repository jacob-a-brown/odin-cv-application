import GeneralInformation from "./components/general-information.jsx";

function App() {

  return (
    <>
      <h2>General Information</h2>
      <GeneralInformation
        labelText="Name"
        type="text"
      />
      <GeneralInformation
        labelText="Email"
        type="email"
      />
      <GeneralInformation
        labelText="Phone Number"
        type="tel"
      />
    </>
  )
}

export default App
