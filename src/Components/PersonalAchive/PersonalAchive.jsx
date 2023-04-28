import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import STAR from "./STAR.jpeg" 
import Project from "./Project.jpeg"
import codingimg from "./codingimg.jpg"
import miniproject from "./miniproject.jpeg"


const PersonalAchive = () => {


  return (
    <>
     <Box border={"2px solid red"} >
         <Text textAlign={"center"} fontSize={"3rem"} fontWeight={"500"}> Personal Achivement </Text>
         {/* columns={[1, 3, 4]}  */}
         {/* columns={{sm: 2, md: 3}} */}
         {/* <Box   border={"3px solid green"}  height="50vh" width="90vw" m="auto" > */}
               <SimpleGrid  minChildWidth='120px' spacing='40px' gap={5}>

              <Box>
                  <Image src={STAR} width="300px" height={"300px"}/>
              </Box>
              
              <Box>
                  <Image src={codingimg}  width="300px" height={"300px"} />
              </Box>
              
              <Box>
                  <Image  src={miniproject}  width="300px" height={"300px"} />
              </Box>

               <Box>
                  <Image src={Project}  width="300px" height={"300px"} />
              </Box>

               </SimpleGrid>
           
          {/* </Box> */}


     </Box>
    </>
  )
}

export default PersonalAchive