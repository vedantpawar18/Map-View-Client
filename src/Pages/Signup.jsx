import React, { useState } from "react";
import { Box, Text, Input, useToast } from "@chakra-ui/react";
import styles from "../Styles/signup.module.css"; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => { 
  const toast = useToast();
  const navigate=useNavigate()
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault()
    if (email && password && fullName ) {
      let payload={
          email,password,fullName
      }
    axios.post("https://lucky-leotard-cod.cyclic.app/user/signup",payload) 
    .then((res)=>{
    if(res.status===200){
      toast({
                title: "Signup Succesfull",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              navigate("/signin");
    }
  })
  .catch((err)=>{
    console.log(err.response.status)
    if(err.response.status===403){
      toast({
        title: "User already exists", 
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
        <form onSubmit={handleSignup}>
          <Text fontSize={"22px"} textAlign={"center"}>
            Sign Up
          </Text>
          <Box>
            <label>Full Name</label>
            <Input onChange={(e) => setFullName(e.target.value)} />
          </Box>
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

          <Text textAlign={"center"} fontFamily={"cursive"} mt={5}>
            Already a user?{" "}
            <span>
              <a href="/signin">Sign In</a>
            </span>
          </Text>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
