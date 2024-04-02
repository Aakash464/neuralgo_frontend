import { Box, Button, TextField } from "@mui/material"
import { Formik} from "formik";
import * as yup from "yup";
import logo from "./assests/logo.svg"
import "./App.css"
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';


import CloudUploadIcon from '@mui/icons-material/CloudUpload';




const initialValues = {
    
    Name:"",
    email:"",
    contact:"",
    address:"",
    myFile:'',


};

const phoneRegEx = /^\d{3}-\d{3}-\d{4}$/;
const nameRegex = /^[A-Za-z\s]+$/;
const addressRegex = /^\w{5,100}$/;




const userSchema = yup.object().shape({
    
    Name : yup.string().matches(nameRegex,"Invalid Name").required("Please Enter Your Name"),
    email:  yup.string().email("Invalid Email").required("Please Enter Your Email"),
    contact:  yup.string().matches(phoneRegEx,"Please Enter in the format XXX-XXX-XXXX").required("Please Enter Your Phone Number"),
    address:  yup.string().matches(addressRegex,"Invalid Address").required("Please Enter Your Address"),
    myFile: yup.mixed()
    .test('fileFormat', 'PDF & Docx are only supported', value => {
      if (value) {
        const supportedFormats = ['pdf','docx'];
        return supportedFormats.includes(value.name.split('.').pop());
      }
      return true;
    })
      .test('fileSize', 'File size must be less than 5MB', value => {
        if (value) {
          return value.size <= 5145728;
        }
        return true;
      }),    
});


const Form=()=>{
    const handleFormSubmit =() =>{
        alert("Succesfully Submitted");
        
    }
  
    return (
        <>
        <Box
            sx={{height:"100%" ,width:"100%"}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#141b2d"
        > 
            <Box sx={{mb:"20px"}}><h1>Job Application Form</h1></Box>
        </Box>
       
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="2%"
            marginTop="20px"
        > 
            <Box
              padding="20px"
              sx={{backgroundColor: "#141b2d"}}
              height="60%" 
              width="20%"
            >
              
              <Box
               sx={{borderBottom:"4px solid"}}
               display="flex"
               alignItems="center"
               justifyContent="center"
              >
                <h1>Get in Contact</h1>
              </Box>

              <Box
                m="20px"
               display="flex"
               flexDirection="column"
               gap="25px"
               height="100%"
               justifyContent="center"
              >
                <Box display="flex" gap="15px">
                  <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                   sx={{backgroundColor:"#fff",color:"#141b2d",padding:"5px",borderRadius:"50%"}}
                  >
                  <LocalPhoneRoundedIcon />
                  </Box>
                  <Box m="5px 0 0 0">Contact us : 000 000 0000</Box>
                </Box>
                
                <Box display="flex" gap="15px">
                  <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                   sx={{backgroundColor:"#fff",color:"#141b2d",padding:"5px",borderRadius:"50%"}}
                  >
                  <EmailOutlinedIcon/>
                  </Box>
                  <Box m="5px 0 0 0">Email : neuralgo@gmail.com</Box>
                </Box>

                <Box display="flex" gap="15px">
                  <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                   sx={{backgroundColor:"#fff",color:"#141b2d",padding:"5px",borderRadius:"50%"}}
                  >
                  <LanguageOutlinedIcon />
                  </Box>
                  <Box m="5px 0 0 0">Website : https://neuralgo.ai/</Box>
                </Box>

                <Box display="flex" gap="15px">
                  <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                   sx={{backgroundColor:"#fff",color:"#141b2d",padding:"5px",borderRadius:"50%"}}
                  >
                  <TwitterIcon />
                  </Box>
                  <Box m="5px 0 0 0">Twitter :   @neuralgoOfficial.ai</Box>
                </Box>

                <Box display="flex" gap="15px">
                  <Box
                  display="flex"
                  height="25px"
                  mt="5px"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                   sx={{backgroundColor:"#fff",color:"#141b2d",padding:"5px",borderRadius:"50%"}}
                  >
                  <AddLocationAltOutlinedIcon />
                  </Box>
                  <Box m="5px 0 0 0">Location : Lorem ipsum dolor sit , reprehenderit aliquid reiciendis at quibusdam, soluta expedita harum fugit odio recusandae possimus sit. Iusto, ratione accusantium!</Box>
                </Box>
               
              </Box>

            </Box>
            
            <Box
                padding="20px"
                sx={{backgroundColor: "#fff",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
                height="150%" 
                width="40%"
            > 
                <Box m="20px 0" width="100%" display="flex" justifyContent="center" alignItems="center" padding="0 20px"><img width="250px" src={logo} alt=""/></Box>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={userSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        setFieldValue,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                    }) => (
                <form onSubmit={handleSubmit}>
                    
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                >

              
              <TextField

                fullWidth
                variant="standard"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Name}
                name="Name"
                error={!!touched.Name && !!errors.Name}
                helperText={touched.Name && errors.Name}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
              
              <Button
                component="label"
                role={undefined}
                
                variant="contained"
                tabIndex={-1}
                onChange={(e)=>{
                  setFieldValue('myFile', e.target.files[0])
                }}
                value={values.myFile}
                name="myFile"
                startIcon={<CloudUploadIcon />}
                height="40px"
                sx={{ gridColumn: "span 2",gridRow:"span 3",}}
              >
                Upload file
                
                <input hidden type="file" name="myFile"/>
                <Box paddingLeft="5px"> 
                  {(errors.myFile) ? <p style={{color:'black'}}>{errors.myFile}</p> : null}
                </Box>
                
                </Button>

              

                <Button onSubmit={handleFormSubmit} type="submit"  color="secondary" variant="contained" sx={{ gridColumn: "span 2" , gridRow:"span 3"}}>
                    Submit
                </Button>

            </Box>
            
           
            
          </form>
        )}
      </Formik>

            </Box>
        </Box>
        </>
    )
}

export default Form;