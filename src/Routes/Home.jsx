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
    <>
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
          <Image src={MM2} position={'absolute'} width={{base:'20%', md:'15%'}} top={{base:'23%', md:'25%'}} left={{base:'25%', md:'60%'}} display={{base:'none', md:'flex'}}/>
      </Box>
      <Box marginTop={'-5%'} bgGradient='linear(to-r, #FFE6E8, #FFA7BC)' width={'100%'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CD3C68" fill-opacity="1" d="M0,128L8.3,138.7C16.6,149,33,171,50,202.7C66.2,235,83,277,99,277.3C115.9,277,132,235,149,192C165.5,149,182,107,199,117.3C215.2,128,232,192,248,224C264.8,256,281,256,298,240C314.5,224,331,192,348,149.3C364.1,107,381,53,397,58.7C413.8,64,430,128,447,138.7C463.4,149,480,107,497,117.3C513.1,128,530,192,546,197.3C562.8,203,579,149,596,138.7C612.4,128,629,160,646,154.7C662.1,149,679,107,695,85.3C711.7,64,728,64,745,74.7C761.4,85,778,107,794,128C811,149,828,171,844,192C860.7,213,877,235,894,245.3C910.3,256,927,256,943,218.7C960,181,977,107,993,106.7C1009.7,107,1026,181,1043,181.3C1059.3,181,1076,107,1092,112C1109,117,1126,203,1142,202.7C1158.6,203,1175,117,1192,96C1208.3,75,1225,117,1241,144C1257.9,171,1274,181,1291,160C1307.6,139,1324,85,1341,58.7C1357.2,32,1374,32,1390,32C1406.9,32,1423,32,1432,32L1440,32L1440,320L1431.7,320C1423.4,320,1407,320,1390,320C1373.8,320,1357,320,1341,320C1324.1,320,1308,320,1291,320C1274.5,320,1258,320,1241,320C1224.8,320,1208,320,1192,320C1175.2,320,1159,320,1142,320C1125.5,320,1109,320,1092,320C1075.9,320,1059,320,1043,320C1026.2,320,1010,320,993,320C976.6,320,960,320,943,320C926.9,320,910,320,894,320C877.2,320,861,320,844,320C827.6,320,811,320,794,320C777.9,320,761,320,745,320C728.3,320,712,320,695,320C678.6,320,662,320,646,320C629,320,612,320,596,320C579.3,320,563,320,546,320C529.7,320,513,320,497,320C480,320,463,320,447,320C430.3,320,414,320,397,320C380.7,320,364,320,348,320C331,320,314,320,298,320C281.4,320,265,320,248,320C231.7,320,215,320,199,320C182.1,320,166,320,149,320C132.4,320,116,320,99,320C82.8,320,66,320,50,320C33.1,320,17,320,8,320L0,320Z"></path></svg>
      </Box>
      <Box id={'about'} background={'#CD3C68'} width={'100%'} height={{base:'100%', md:'100vh'}} padding={'5% 10% 10% 10%'} alignContent={'center'}>
            <Flex direction={'column'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} width={{base:'100%', md:'100%'}} gap={{base:'5', md:'10'}}>
                <Heading size={{base:'2xl', md:'3xl'}} color="white" fontFamily={'Modak'} fontWeight={'light'}>
                    More about me
                </Heading>
                <Box borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'}>
                  <Text color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                    I usually work with <span className='highlightPink'>Figma, React.js, and Chakra UI</span>. But I'm also <span className='highlightPink'>willing and happy to learn</span> other frameworks cause I'm a <span className='highlightPink'>person with a big curiousity</span>. I'm proficient in <span className='highlightPink'>Indonesian and English</span>. I can speak <span className='highlightPink'>Japanese</span> a little. So <span className='highlightPink'>はじめまして、よろしくお願いします。</span> I'm a <span className='highlightPink'>person full of responsibility</span>. I'm <span className='highlightPink'>used to working alone and also with a team</span>.
                  </Text>
                </Box>
                <Box borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'}>
                  <Text color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                    I'm so <span className='highlightPink'>interested in learning UI/UX, how is the relation between the two aspects</span>. How does this website can appeal user? How to make their works easier by this interface? Why is a simple website can still make users interested? That's what I always think when I create a website. I think, <span className='highlightPink'>UI/UX design is a really powerful thing</span>. Website is a media for users to communicate with the server. <span className='highlightPink'>How good is your design can makes users work faster</span>, they might also like your website too and often use it.
                  </Text>
                </Box>
              <Flex direction={{base: 'column', md:'row'}} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} width={{base:'100%', md:'100%'}} gap={{base:'5', md:'10'}}>
                <Flex direction={'row'} borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'}>
                  <Text color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                    Javascript 
                  </Text>
                  <Spacer/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                </Flex>
                <Flex direction={'row'} borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'}>
                  <Text color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                    React.js
                  </Text>
                  <Spacer/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                </Flex>
                <Flex direction={'row'} borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'}>
                  <Text color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                    Figma
                  </Text>
                  <Spacer/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                    <FontAwesomeIcon icon={'fa-solid fa-star'} color={'#AD0035'} size={'xl'}/>
                </Flex>
              </Flex>
            </Flex>
      </Box>
    </>
  );
};

export default Home;