import { Box,  Image,  Text } from '@chakra-ui/react'
import React from 'react'
import "./personal.css"

import {Data} from  "./Data"


const PersonalAchive = () => {


  return (
    <>
     <Box className='personalcontainer'>
         <Text  textAlign={"center"} fontSize={"3rem"} fontWeight={"500"} color="#FFFFFF"> Personal Achivement </Text>
        
         <Box className="personalAchive"> 
             
             {
              Data.length>0 && Data.map((el) =>{
                return <Box   data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"  m="auto" className='Card' >
                <Image className='img' src={el.img} 
                   width="250px"
                  height="300px" 
                 />                  
                </Box>
              })
             }
           
               </Box>

     </Box>
    </>
  )
}

export default PersonalAchive