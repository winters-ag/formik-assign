import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },
    onSubmit: values => {
      console.log('form: ', values);
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if(!values.email){
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email'
      } 
      
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });
  return (
    <div style={{border:'3px solid darkcyan', borderRadius:'5px',width:'25%',margin:'auto', marginTop:'10%'}}>
      <form onSubmit={formik.handleSubmit}>
        <div style={{marginLeft:'10%'}}>Email</div>
        <input id="emailField" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} style={{width:'80%',marginLeft:'10%',marginRight:'10%'}}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red', marginLeft:'10%'}}>{formik.errors.email}</div>:null}
        <div style={{marginLeft:'10%'}}>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} style={{width:'80%',marginLeft:'10%',marginRight:'10%'}}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red', marginLeft:'10%'}}>{formik.errors.password}</div>:null}
        <br/>
        <button type="submit" id="submitBtn" style={{marginRight:'10%', marginLeft:'70%',Right:'0'}}>Submit</button>
      </form>
    </div>
  );
}

export default App;
