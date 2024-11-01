
import './App.css'
import Grandfather from './Components/Grandfather/Grandfather'
// import HookForm from './Components/HookForm/HookForm'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/Simple-form/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  
// const handleRegistrationSubmit = data => {
//  console.log('Registration', data); 
// }
// const handleUpdateSubmit = data => {
//   console.log('Modified', data);  
// }
  return (
    <>
      
      <h1>Form Master</h1>
      <Grandfather></Grandfather>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Registration Now!'} handleSubmit={handleRegistrationSubmit}  >
        <div>
          <h2>Registration</h2>
          <h5>Registration Now Quickly!!</h5>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'profile Update'} submitBtnText={'Update'} handleSubmit={handleUpdateSubmit}>
      <div>
          <h2>profile Update</h2>
          <h5>profile Update Now Quickly!!</h5>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
