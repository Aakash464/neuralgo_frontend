
import { useFormik } from "formik";
import { Box, Button, TextField } from "@mui/material"

import * as yup from 'yup';


const phoneRegEx = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
const nameRegex = /^[A-Za-z\s]+$/;
const addressRegex = /^\w{5,100}$/;

const MyForm = () => {
  const validationRules = yup.object().shape({
    Name : yup.string().matches(nameRegex,"Invalid Name").required("Please Enter Your Name"),
    email:  yup.string().email("Invalid Email").required("Please Enter Your Email"),
    contact:  yup.string().matches(phoneRegEx,"Phone Number is Not Valid").required("Please Enter Your Phone Number"),
    address:  yup.string().matches(addressRegex,"Invalid Address").required("Please Enter Your Address"),
    myFile: yup.mixed().required('required')
      .test('fileFormat', 'Only PDF files are allowed', value => {
        if (value) {
          const supportedFormats = ['pdf'];
          return supportedFormats.includes(value.name.split('.').pop());
        }
        return true;
      })
      .test('fileSize', 'File size must not be more than 3MB', 
      value => {
        if (value) {
          return value.size <= 3145728;
        }
        return true;
      }),
  })

  const formik = useFormik({
    initialValues: {
      myFile: '',
      Name:"",
      email:"",
      contact:"",
      address:"",
    },
    onSubmit: () => {
      console.log('Submitted')
    },
    validationSchema: validationRules,
  })

  const handleChange = (e) => {
    formik.setFieldValue('myFile', e.target.files[0]);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
        <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        >
            <TextField type='text' name='Name'/>
            <div>{(formik.errors.Name) ? <p style={{color: 'white'}}>{formik.errors.Name}</p> : null}</div>
            <TextField type='file' name='myFile' accept='.pdf' onChange={handleChange}/>
            <div>{(formik.errors.myFile) ? <p style={{color: 'white'}}>{formik.errors.myFile}</p> : null}</div>
        </Box>
      

      
      
    </form>
  )
}

export default MyForm;