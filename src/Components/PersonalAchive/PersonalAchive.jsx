import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import prolemStar from "./prolemStar.jpeg"
import Hacker from "./Hacker.jpeg"

const PersonalAchive = () => {


  return (
    <>
     <Box border={"2px solid red"} >
         <Text textAlign={"center"} fontSize={"3rem"} fontWeight={"500"}> Personal Achivement </Text>
       
         <Box border={"3px solid green"} height="50vh" width="50vw" m="auto" bg="#ffffff">
            
               <Box    width="20vw" m="auto" bg="#FFFFFF" justifyContent={"center"} justifyItems={"center"} >
                 <Image src={prolemStar} alt="ProblemStar"  m="auto" />
               </Box>

               <Box width="40vw" m="auto" mt="30" bg="#FFFFFF" justifyContent={"center"} justifyItems={"center"}>
               <Image src={Hacker} alt="hacker"/>
               </Box>
            
           
          </Box>
     </Box>
    </>
  )
}

export default PersonalAchive