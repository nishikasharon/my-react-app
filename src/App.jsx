

import Student from './Student.jsx'
function App(){
  return(
    <>
    <Student name="Sponegbob" 
    age = {30}
    isStudent = {true}/>

    <Student name="Patrick" 
    age = {40}
    isStudent = {false}/>

    <Student name="Jessica" 
    age = {50}
    isStudent = {false}/>

    <Student name="Sandy" 
    age = {28}
    isStudent = {true}/>

    <Student/>

    </>
  );
}

export default App
