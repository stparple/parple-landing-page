"use client";

import {
  Box,
  Stack,
  Text,
  Heading,
  Input,
  Button,
  Img,
} from "@chakra-ui/react";
import React from "react";
import Axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
// Import the functions you need from the SDKs you need

import firebaseApp from "./firebase";

const Section1 = () => {
  // Create state to store the email input value
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false); // State for sending/loading state

  // Function to handle the email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  // Initialize Firestore
  const db = getFirestore(firebaseApp);
  async function addEmailToWaitlist() {
    setIsSending(true);
  
    try {
      // Check if the email already exists in the "waitlist" collection
      const waitlistRef = collection(db, 'waitlist');
      const emailQuery = query(waitlistRef, where('email', '==', email));
      const querySnapshot = await getDocs(emailQuery);

       // Regular expression for email validation
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
       if (!emailRegex.test(email)) {
         // If the email format is invalid, reject the promise
         toast.error("Invalid email format" );
         return;
       }
  
      if (querySnapshot.size > 0) {
        // Email already exists in the "waitlist" collection, show an error toast
        toast.error('Email already exists in the waitlist.');
      } else {
        // Email doesn't exist, add it to the "waitlist" collection
        const newEmailDocRef = doc(waitlistRef);
        await setDoc(newEmailDocRef, { email });
        toast.success('Email added to the waitlist successfully.');
      }
    } catch (error) {
      // Handle any errors that occur during the Firestore operations
      console.error('Error adding email to waitlist:', error);
      toast.error('An error occurred while adding the email to the waitlist.');
    } finally {
      setIsSending(false);
    }
  }
  // Function to handle the button click and make the POST request

  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <Stack
        className="div1"
        direction={["column", "column", "row", "row"]}
        align={"center"}
        alignContent={"center"}
        mb={"50px"}
        pl={["10px", "10px", "50px", "100px"]}
        pr={["10px", "10px", "0px", "0px"]}
        mt={["20px", "20px", "50px", "50px"]}
      >
        <Box
          className="content1"
          w={["100%", "100%", "100%", "100%"]}
          h={"500px"}
        >
          <Heading
            m={["auto", "auto", "0px", "0px"]}
            align={"center"}
            pb={"20px"}
            textAlign={["center", "center", "left", "left"]}
          >
            Discover and join exciting parties near you. Let's get the party
            started!
          </Heading>
          <Text
            m={["auto", "auto", "0px", "0px"]}
            align={"center"}
            pb={["20px", "20px", "30px", "50px"]}
            textAlign={["center", "center", "left", "left"]}
          >
            Getting to and from your favourite events has never been this
            convininet. With the parple Event App, you have a reliable and
            efficient transportation solution at our fingertips.
          </Text>
          <Stack
            className="input area"
            direction={["column", "column", "row", "row"]}
          >
            <Input
              placeholder="Enter your Email"
              bg={"#d9d9d9"}
              h={"50px"}
              w={["100%", "100%", "85%", "85%"]}
              value={email} // Set the input value
              onChange={handleEmailChange} // Handle input change
            />
            <Button
              onClick={addEmailToWaitlist}
              colorScheme="blackAlpha"
              variant="solid"
              h={"50px"}
              w={["50%", "50%", "100px", "100px"]}
              m={"auto"}
              bg={"black"}
              fontSize={["", "", "12px", "15px"]}
              isLoading={isSending}
              isDisabled={isSending}
            >
              Join Waitlist
            </Button>
          </Stack>
        </Box>
        <Box
          className="phone1"
          w={["100%", "100%", "100%", "100%"]}
          h={"500px"}
        >
          <Img src="/asset/phone1.png" m={"auto"} h={"100%"} />
        </Box>
      </Stack>
    </div>
  );
};

export default Section1;
