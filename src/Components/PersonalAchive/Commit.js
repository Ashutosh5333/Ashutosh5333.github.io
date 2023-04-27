import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {GoProject} from "react-icons/go"
import {RiFileSettingsLine} from "react-icons/ri"
import {BiGitMerge} from "react-icons/bi"

const PersonalAchive = () => {


  return (
    <>
     <Box border={"2px solid red"} >
         <Text textAlign={"center"} fontSize={"3rem"} fontWeight={"500"}> Personal Achivement </Text>
       
         <Box border={"3px solid green"} height="40vh" width="50vw" m="auto" bg="#ffffff">
            
             <Box  display={"flex"} justifyContent={"space-around"} width={"30vw"} m="auto" bg="#ffffff"  mt="10" > 
                <Text bg="#ffffff"  m="auto" fontSize={"2rem"}>
                <GoProject/>  </Text>

                <Text bg="#ffffff" color={"black"} fontSize={"1rem"} letterSpacing={2}  m="auto" fontWeight={"500"}>  
                   50 + Mini Projects
                </Text>
             
             </Box>
             <Box  display={"flex"} j justifyContent={"space-around"} width={"30vw"} m="auto" bg="#ffffff" mt="10"> 
                <Text bg="#ffffff"  m="auto" fontSize={"2rem"}>
                <RiFileSettingsLine/>   </Text>

                <Text bg="#ffffff" color={"black"}  fontSize={"1rem"} letterSpacing={2} m="auto" fontWeight={"500"}> 
                   10 + major Projects
                </Text>
             
             </Box>

             <Box  display={"flex"}  justifyContent={"space-around"} width={"30vw"} m="auto" bg="#ffffff" mt="10" > 
                <Text bg="#ffffff" m="auto" fontSize={"2rem"} >
                 <BiGitMerge/>   </Text>

                <Text bg="#ffffff" color={"black"}   fontSize={"1rem"} letterSpacing={2} m="auto" fontWeight={"500"}> 
                   500 +  Git Commits
                </Text>
             
             </Box>
        
           
          </Box>
     </Box>
    </>
  )
}

export default PersonalAchive