import { Heading, Box, Text, Image, Flex, Spacer } from '@chakra-ui/react';
import Teratai from '../Images/teratai.png';
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
    <Box bgGradient='linear(to-r, #E6F9FF, #A7C5FF)' width={'100%'} height={{base:'100%', md:'100vh'}} padding={'5% 10% 10% 10%'} alignContent={'center'}>
        <Flex gap={{base:'5', md:'10'}} direction={'column'} width={'100%'} justifyContent={'center'}>
            <Heading size={{base:'2xl', md:'3xl'}} color={'#468ee0'} textAlign={'center'} fontFamily={'Modak'} fontWeight={'light'}>
                Ongoing / Finished Projects
            </Heading>
            <Box borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'}>
                <Flex gap={'5'} direction={{base:'column', md:'row'}}>
                    <Image src={Teratai} width={{base:'100%', md:'60%'}} />
                    <Flex gap={'5'} direction={'column'}>
                        <Heading fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}} color={'#1c6ac4'} fontWeight={'600'}>
                            Teratai
                        </Heading>
                        <Text color={'#5F8ABD'} fontSize={{base:'md', md:'lg'}}>
                            <span className='highlightBlue'>Teratai (Telusur dan Pantau Halal Indonesia)</span> is a <span className='highlightBlue'>halal traceability supply chain guarantee system</span>, especially for meat based product. This web application records information regarding the halal status of a product, from the initial production stages to the materials that will be used in the making of ready-to-eat products. In this project, I am responsible for <span className={'highlightBlue'}>User Research, UI/UX Design, and Front-End Website Development</span>.
                        </Text> 
                        <Link href='https://riset.its.ac.id/teratai-dev/' width={{base:'100%', md:'100%'}} _hover={{textDecoration:'none'}}>
                            <Flex borderRadius={'10'} padding={'2%'} color={'white'} fontFamily={'McLaren'} className='gradationBlue'>
                                See details
                                <Spacer /> 
                                <FontAwesomeIcon icon="fa-solid fa-up-right-from-square"/>
                            </Flex>
                        </Link>
                        {/* <Text color={'#5F8ABD'} fontSize={{base:'md', md:'lg'}} textAlign={'end'}>
                            <Link to='https://riset.its.ac.id/teratai-dev/' target='_blank'><span className='highlightBlue'>See details <FontAwesomeIcon icon="fa-solid fa-up-right-from-square"/></span></Link>
                        </Text>  */}
                    </Flex>
                </Flex>
            </Box>
            <Text fontFamily={'McLaren'} textAlign={'center'} fontSize={{base:'md', md:'lg'}} color={'#5F8ABD'}>You can find my other projects on my <Link to='https://github.com/amandaslwa/' target='_blank'><span className='highlightBlue'>Github <FontAwesomeIcon icon="fa-solid fa-up-right-from-square"/></span></Link></Text>
        </Flex>
    </Box>
  );
};

export default Projects;