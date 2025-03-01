      import { Heading, Box, Text, Flex } from '@chakra-ui/react';
      import '../App.css';
      
      function AboutMe() {
        return (
            <Box id={'about'} background={'#FFA7BC'} width={'100%'} height={{base:'100%', md:'auto'}} padding={'5% 10% 10% 10%'} alignContent={'center'}>
                <Flex direction={'column'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} width={{base:'100%', md:'100%'}} gap={{base:'5', md:'10'}}>
                    <Heading size={{base:'2xl', md:'3xl'}} color="#CD3C68" fontFamily={'Modak'} fontWeight={'light'}>
                        More about me
                    </Heading>
                    <Box borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'}>
                    <Text color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                    <span className='highlightPink'>From learning to loving</span> is how I describe my passion as a <span className='highlightPink'>Front End Engineering</span>
                    </Text>
                    </Box>
                    <Box borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'}>
                    <Text color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                        I usually work with <span className='highlightPink'>Figma, React.js, and Chakra UI</span>. But I'm also <span className='highlightPink'>willing and happy to learn</span> other frameworks cause I'm a <span className='highlightPink'>person with a big curiousity</span>. I speak in <span className='highlightPink'>Indonesian and English</span>. I can speak <span className='highlightPink'>Japanese</span> a little. So <span className='highlightPink'>はじめまして、よろしくお願いします。</span> I'm a <span className='highlightPink'>person full of responsibility</span>. I'm <span className='highlightPink'>used to working alone and also with a team</span>.
                    </Text>
                    </Box>
                    {/* <Box borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'}>
                    <Text color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                        I'm so <span className='highlightPink'>interested in learning UI/UX, how is the relation between the two aspects</span>. How does this website can appeal user? How to make their works easier by this interface? Why is a simple website can still make users interested? That's what I always think when I create a website. I think, <span className='highlightPink'>UI/UX design is a really powerful thing</span>. Website is a media for users to communicate with the server. <span className='highlightPink'>How good is your design can makes users work faster</span>, they might also like your website too and often use it.
                    </Text>
                    </Box> */}
                {/* <Flex direction={{base: 'column', md:'row'}} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} width={{base:'100%', md:'100%'}} gap={{base:'5', md:'10'}}>
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
                </Flex> */}
                </Flex>
            </Box>
        );
      };
      
      export default AboutMe;