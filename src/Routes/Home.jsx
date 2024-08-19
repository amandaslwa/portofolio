import { Heading, Box, Text, HStack, VStack, Image, Flex } from '@chakra-ui/react';
// import Logo from "../img/logo.png";
import Pic from '../Images/home.png';
import MM1 from '../Images/mm1.png';
import MM2 from '../Images/mm2.png';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <Box bgGradient='linear(to-r, #FFE6E8, #FFA7BC)' width={'100%'} height={'100vh'} padding={'5% 10% 10% 10%'}>
        <Flex gap={'5'} direction={'row'} width={'100%'} justifyContent={'center'}>
            <Flex direction={'column'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} width={'70%'} gap={'10'}>
                <Heading size={'3xl'} color="#CD3C68" fontFamily={'Modak'} fontWeight={'light'}>
                    Hi! Welcome to my personal web
                </Heading>
                <Text color={'#CD5A79'} fontSize={'xl'} fontFamily={'McLaren'}>My name is <span className='highlightPink'>Amanda</span>. I am an undergraduate university student of Sepuluh Nopember Institute of Technology (ITS). I love to <span className='highlightPink'>design UI and UX aspects</span> and personally show ‘em in <span className='highlightPink'>fun and cute</span> way.</Text>
                <Text color={'#CD5A79'} fontSize={'xl'} fontFamily={'McLaren'}>I hope this website will help you <span className='highlightPink'>know more about my self</span>. </Text>
            </Flex>
            <Image src={Pic} position={'relative'} width={'30%'}/>
        </Flex>
        <Image src={MM1} position={'absolute'} width={'10%'} top={'20%'} left={'85%'}/>
        <Image src={MM2} position={'absolute'} width={'15%'} top={'60%'} left={'60%'}/>
    </Box>
  );
};

export default Home;