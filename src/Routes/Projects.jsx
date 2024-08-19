import { Heading, Box, Text, HStack, VStack, Image, Flex } from '@chakra-ui/react';
// import Logo from "../img/logo.png";
import Pic from '../Images/home.png';
import Teratai from '../Images/teratai.png';
import MM1 from '../Images/mm1.png';
import MM2 from '../Images/mm2.png';
import { Link } from 'react-router-dom';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far);

function Projects() {
  return (
    <Box bgGradient='linear(to-r, #E6F9FF, #A7C5FF)' width={'100%'} height={'100vh'} padding={'5% 10% 10% 10%'}>
        <Flex gap={'5'} direction={'column'} width={'100%'} justifyContent={'center'}>
            <Heading size={'3xl'} color={'#246DC3'} textAlign={'center'} fontFamily={'Modak'} fontWeight={'light'}>
                Ongoing / Finished Projects
            </Heading>
            <Box borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'}>
                <Flex gap={'5'} direction={'row'}>
                    <Image src={Teratai} width={'50%'} />
                    <Flex gap={'5'} direction={'column'}>
                        <Heading fontFamily={'McLaren'} fontSize={'xl'} color={'#CD5A79'} fontWeight={'600'}>
                            Teratai
                        </Heading>
                        <Text color={'#5F8ABD'} fontSize={'lg'}>
                            <span className='highlightBlue'>Teratai (Telusur dan Pantau Halal Indonesia)</span> is a <span className='highlightBlue'>halal traceability supply chain guarantee system</span>, especially for meat based product. This web application  <span className={'highlightBlue'}>records information regarding the halal status of a product</span>, from the initial production stages to the materials that will be used in the making of ready-to-eat products. In this project, I am responsible for <span className={'highlightBlue'}>User Research, UI/UX Design, and Front-End Website Development</span>.
                        </Text> 
                        <Text color={'#5F8ABD'} fontSize={'lg'} textAlign={'end'}>
                            <Link to='https://riset.its.ac.id/teratai-dev/' target='_blank'><span className='highlightBlue'>See more <FontAwesomeIcon icon="fa-solid fa-up-right-from-square"/></span></Link>
                        </Text> 
                    </Flex>
                </Flex>
            </Box>
            {/* <Box borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'}>
                Tes
            </Box> */}
            <Text fontFamily={'McLaren'} textAlign={'center'} fontSize={'lg'} color={'#5F8ABD'}>You can find my other projects on my <Link to='https://github.com/amandaslwa/' target='_blank'><span className='highlightBlue'>Github <FontAwesomeIcon icon="fa-solid fa-up-right-from-square"/></span></Link>.</Text>
        </Flex>
    </Box>
  );
};

export default Projects;