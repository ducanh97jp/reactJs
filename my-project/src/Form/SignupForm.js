import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import React, {useState} from 'react'


const SignupForm = () => {
  const [form, setForm] = useState({name: "", phone: "", address: ""});
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    phone: Yup.string().required("Please enter your phone number").min(10).max(11),
    address: Yup.string().required("Please enter your address").min(3),
  });
  const handleChange =(e) => {
    setForm({...form, [e.target.name]: e.target.value});
    console.log(form);
  }  
  return (
    <div className='container'>
      <Formik 
      initialValues = {form}
      validationSchema = {validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
      >
        

        <Form>
          <p>Name:</p>
          <Field name='name' placeholder='Enret your Name' value={form.name || ""} onChange={handleChange}></Field>
          <ErrorMessage name='name' component="div" className="text-danger"></ErrorMessage>
          <p>Phone:</p>
          <Field name='phone' placeholder='Enret your phone' value={form.phone || ""} onChange={handleChange}></Field>
          <ErrorMessage name='phone' component="div" className="text-danger"></ErrorMessage>
          <p>Address:</p>
          <Field name='address' placeholder='Enret your address' value={form.address || ""} onChange={handleChange}></Field>
          <ErrorMessage name='address' component="div" className="text-danger"></ErrorMessage>
          <br></br>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignupForm