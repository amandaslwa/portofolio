import { Heading, Box, Text, Image, Flex, Link, Spacer } from '@chakra-ui/react';
// import Logo from "../img/logo.png";
import Pic from '../Images/home.png';
import MM1 from '../Images/mm1.png';
import MM2 from '../Images/mm2.png';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far);

function Home() {
  return (
    <Box bgGradient='linear(to-r, #FFE6E8, #FFA7BC)' width={'100%'} height={{base:'100vh', md:'100vh'}} padding={'5% 10% 10% 10%'} alignContent={'center'}>
        <Flex gap={'5'} direction={{base:'column-reverse', md:'row'}} width={'100%'} justifyContent={'center'}>
            <Flex direction={'column'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} width={{base:'100%', md:'70%'}} gap={{base:'5', md:'10'}}>
                <Heading size={{base:'2xl', md:'3xl'}} color="#CD3C68" fontFamily={'Modak'} fontWeight={'light'}>
                    Hi! Welcome to my personal web
                </Heading>
                <Text color={'#CD5A79'} fontSize={{base:'lg', md:'xl'}} fontFamily={'McLaren'}>My name is <span className='highlightPink'>Amanda</span>. I am an undergraduate university student of Sepuluh Nopember Institute of Technology (ITS). I love to <span className='highlightPink'>design UI and UX aspects</span> and personally show ‘em in <span className='highlightPink'>fun and colorful</span> way.</Text>
                <Link href='/#about' width={{base:'100%', md:'95%'}} _hover={{textDecoration:'none'}}>
                  <Flex borderRadius={'10'} padding={'2%'} color={'white'} fontFamily={'McLaren'} className='gradationPink'>
                    Know more about me
                  </Flex>
                </Link>
            </Flex>
            <Image src={Pic} position={'relative'} width={{base:'50%', md:'30%'}} height={{base:'50%', md:'100%'}} alignSelf={'center'}/>
        </Flex>
        <Image src={MM1} position={'absolute'} width={{base:'13%', md:'10%'}} top={{base:'10%', md:'5%'}} left={{base:'63%', md:'85%'}} display={{base:'none', md:'flex'}}/>
        <Image src={MM2} position={'absolute'} width={{base:'20%', md:'15%'}} top={{base:'12%', md:'12%'}} left={{base:'25%', md:'60%'}} display={{base:'none', md:'flex'}}/>
    </Box>
  );
};

export default Home;