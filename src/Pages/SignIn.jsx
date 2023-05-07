import React, { useState } from "react";
import {useToast,Box, Text, Input } from "@chakra-ui/react";
import styles from "../Styles/signup.module.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const toast = useToast();

  const handleSignin = (e) => {
    e.preventDefault()
    if (email && password  ) {
      let payload={
          email,password 
      }
    axios.post("https://lucky-leotard-cod.cyclic.app/user/signin",payload) 
    .then((res)=>{
    if(res.status===200){
      toast({
                title: "Signin Succesfull",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
    console.log(res)
    let userName=res.data.fullName;
    let token=res.data.token.primaryToken;
    localStorage.setItem('userName', userName);
    localStorage.setItem('token', token);
      navigate("/dashboard");
    }
  })
  .catch((err)=>{
    console.log(err.response.status)
    if(err.response.status===401){
      toast({
        title: "Please enter a valid password.", 
        duration: 5000,
        isClosable: true,
      }); 
    }
  });
}
   else {
    toast({
      title: "Fill all fields", 
      duration: 5000,
      isClosable: true,
   });
  }
  };
  return (
    <Box className={styles.container}>
      <Box className={styles.signup}>
        <form onSubmit={handleSignin}>
          <Text fontSize={"22px"} textAlign={"center"}>
            Sign In
          </Text>
          <Box>
            <label>Email</label>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </Box>
          <Box>
            <label>Password</label>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Box className={styles.btn}>
            <Input type="submit" />
          </Box>

          <Text textAlign={'center'} fontFamily={'cursive'} mt={5}>Not a user? <span><a href="/signup">Sign Up</a></span></Text>

        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
