import { Heading, Box, Text, Image, Flex, Link, Spacer, Grid } from '@chakra-ui/react';
import '../App.css';
import isef from '../Images/isef.png';
import sch from '../Images/sch.JPG';
import kesma from '../Images/kesma.jpg';


function Experiences() {
  return (
      <Box id={'experiences'} background={'#FFA7BC'} width={'100%'} height='auto' padding={'5% 10% 10% 10%'} alignContent={'center'}>
          <Flex direction='column' alignItems={{base: 'start', md:'start'}} justifyContent={'center'} width={{base:'100%', md:'100%'}} gap={{base:'5', md:'10'}}>
            <Heading size={{base:'2xl', md:'3xl'}} color="#CD3C68" fontFamily={'Modak'} fontWeight={'light'}>
                Volunteer and Experiences
            </Heading>
            <Grid templateColumns={{base:'repeat(1,1fr)', md:'repeat(2, 1fr)'}} gap={{base:'5', md:'10'}}> 
              <Flex direction={'column'} borderRadius={'10'} alignItems={{base: 'center', md:'center'}} justifyContent={'center'} textAlign={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'} gap='5'>
                <Text fontWeight='600' color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                    ISEF 2024
                </Text>
                <Spacer/>
                <Image src={isef} width={{base:'100%', md:'100%'}} height={'100%'} alignSelf={'center'}/>
                <Text>ISEF (International Sharia Economic Festival) is an annual event that promotes the sharia economy and halal industry organized by Bank Indonesia. This is where we introduce Trace Halal application to gain feedback from many attendees.</Text>
              </Flex>
              <Flex direction={'column'} borderRadius={'10'} alignItems={{base: 'center', md:'center'}} justifyContent={'center'} textAlign={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'} gap='5'>
                <Text fontWeight='600' color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                    INFORMATICS STUDENT ASSOCIATION 2023
                </Text>
                <Spacer/>
                <Image src={kesma} width={{base:'100%', md:'100%'}} height={'100%'} alignSelf={'center'}/>
                <Text>Positioned as Coordinator of Academic Division. Providing services to students regarding academic needs. Handling, supervising, and evaluating staff work programs. Guiding and directing staff.</Text>
              </Flex>
              <Flex direction={'column'} borderRadius={'10'} alignItems={{base: 'center', md:'center'}} justifyContent={'center'} textAlign={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'} gap='5'>
                <Text fontWeight='600' color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                    SCHEMATICS ITS 2022
                </Text>
                <Spacer/>
                <Image src={sch} width={{base:'100%', md:'100%'}} height={'100%'} alignSelf={'center'}/>
                <Text>Positioned as Vice Head of Kestari/Kesekretariatan Department. Handling participant registration, certification, planning and designing workspace. Working as team to make sure the event runs successfully.</Text>
              </Flex>
            </Grid>
          </Flex>
      </Box>
  );
};

export default Experiences;