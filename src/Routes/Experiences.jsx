import { Heading, Box, Text, Image, Flex, Spacer, Grid } from '@chakra-ui/react';
import '../App.css';
import isef from '../Images/isef.png';
import sch from '../Images/sch.JPG';
import kesma from '../Images/kesma.jpg';
import { CarouselComponent } from '../Components/Carousel';


function Experiences() {
  const experiencesList = [
    {
      title: 'ISEF 2024',
      img: isef,
      desc: 'ISEF (International Sharia Economic Festival) is an annual event that promotes the sharia economy and halal industry organized by Bank Indonesia. This is where we introduce Trace Halal application to gain feedback from many attendees.'
    },
    {
      title: 'INFORMATICS STUDENT ASSOCIATON 2023',
      img: kesma,
      desc: 'Positioned as Coordinator of Academic Division. Providing services to students regarding academic needs. Handling, supervising, and evaluating staff work programs. Guiding and directing staff.'
    },
    {
      title: 'SCHEMATICS ITS 2022',
      img : sch,
      desc: 'Positioned as Vice Head of Kestari/Kesekretariatan Department. Handling participant registration, certification, planning and designing workspace. Working as team to make sure the event runs successfully.'
    }
  ];

  return (
      <Box id={'experiences'} background={'#CD3C68'} width={'100%'} height={{base:'100%', md:'auto'}} padding={'5% 10% 10% 10%'} alignContent={'center'}>
          <Flex direction='column' alignItems={{base: 'start', md:'start'}} justifyContent={'center'} width={{base:'100%', md:'100%'}} gap={{base:'5', md:'10'}}>
            <Heading size={{base:'2xl', md:'3xl'}} color="white" fontFamily={'Modak'} fontWeight={'light'}>
                Volunteer and Experiences
            </Heading>
            {/* <CarouselComponent data={experiencesList} /> */}
            <Grid templateColumns={{base:'repeat(1,1fr)', md:'repeat(2, 1fr)'}} gap={{base:'5', md:'10'}}> 
            {
                experiencesList.map((item)=> {
                  return(
                    <Flex direction={'column'} borderRadius={'10'} alignItems={{base: 'center', md:'center'}} justifyContent={'center'} textAlign={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'} gap='5'>
                      <Text fontWeight='600' color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                          {item.title}
                      </Text>
                      <Spacer/>
                      <Image src={item.img} width={{base:'100%', md:'100%'}} height={'100%'} alignSelf={'center'}/>
                      <Text>{item.desc}</Text>
                    </Flex>
                  )
                })
              }
            </Grid>
          </Flex>
      </Box>
  );
};

export default Experiences;