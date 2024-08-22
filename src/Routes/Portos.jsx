import { Heading, Box, Text, Image, Flex, Spacer, Link } from '@chakra-ui/react';
import Teratai from '../Images/pos.png';
import { useNavigate } from 'react-router-dom';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far);

function Portos() {
    let navigate = useNavigate();
  return (
    <Box bgGradient='linear(to-r, #FFE6E8, #FFA7BC)' width={'100%'} height={{base:'100%', md:'100vh'}} padding={'5% 10% 10% 10%'} alignContent={'center'}>
        <Flex gap={{base:'5', md:'10'}} direction={'column'} width={'100%'} justifyContent={'center'}>
            <Heading size={{base:'2xl', md:'3xl'}} color={'#CD3C68'} textAlign={'center'} fontFamily={'Modak'} fontWeight={'light'}>
                UI / UX Portofolios
            </Heading>
            <Box borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'}>
                <Flex gap={'5'} direction={{base:'column', md:'row'}}>
                    <Image src={Teratai} width={{base:'100%', md:'57%'}} height={'100%'} alignSelf={'center'}/>
                    <Flex gap={'5'} direction={'column'}>
                        <Heading fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}} color={'#CD3C68'} fontWeight={'600'}>
                            POS System of Teratai
                        </Heading>
                        <Text color={'#CD5A79'} fontSize={{base:'md', md:'lg'}}>
                            <span className='highlightPink'>Teratai (Telusur dan Pantau Halal Indonesia)</span> is a <span className='highlightPink'>halal traceability supply chain guarantee system</span>. In order to design UI properly based on user needs, UX research is needed. In this works, POS system is added based on <span className='highlightPink'>study case of ITS Mart</span> and <span className='highlightPink'>Double Diamond</span> is used as design framework.
                        </Text> 
                        <Link onClick={()=> {navigate(`pos-teratai`)}} width={{base:'100%', md:'100%'}} _hover={{textDecoration:'none'}}>
                            <Flex borderRadius={'10'} padding={'2%'} color={'white'} fontFamily={'McLaren'} className='gradationPink'>
                                Read more
                                <Spacer /> 
                                <FontAwesomeIcon icon="fa-solid fa-arrow-right"/>
                            </Flex>
                        </Link>
                        {/* <Text color={'#5F8ABD'} fontSize={{base:'md', md:'lg'}} textAlign={'end'}>
                            <Link to='https://riset.its.ac.id/teratai-dev/' target='_blank'><span className='highlightPink'>See details <FontAwesomeIcon icon="fa-solid fa-up-right-from-square"/></span></Link>
                        </Text>  */}
                    </Flex>
                </Flex>
            </Box>
            {/* <Text fontFamily={'McLaren'} textAlign={'center'} fontSize={{base:'md', md:'lg'}} color={'#CD5A79'}>You can find my other projects on my <Link to='https://github.com/amandaslwa/' target='_blank'><span className='highlightPink'>Github <FontAwesomeIcon icon="fa-solid fa-up-right-from-square"/></span></Link></Text> */}
        </Flex>
    </Box>
  );
};

export default Portos;