import { Heading, Box, Text, Image, Flex, Spacer, Link } from '@chakra-ui/react';
import Teratai from '../Images/pos.png';
import DD from '../Images/dd.png';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far);

function PosTeratai() {
  return (
    <Box bgGradient='linear(to-r, #FFE6E8, #FFA7BC)' width={'100%'} height={{base:'100%', md:'100%'}} padding={'5% 10% 10% 10%'} alignContent={'center'}>
        <Flex gap={{base:'5', md:'10'}} direction={'column'} width={'100%'} justifyContent={'center'}>
            <Box borderRadius={'10'} alignItems={{base: 'start', md:'start'}} justifyContent={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'}>
                <Flex gap='5' width={'100%'} direction={'column'}>
                    <Heading fontFamily={'McLaren'} fontSize={{base:'xl', md:'2xl'}} color={'#CD3C68'} fontWeight={'600'}>
                        POS System of Teratai
                    </Heading>
                    <Text color={'#CD5A79'} fontSize={{base:'md', md:'lg'}}>
                        Teratai (Telusur dan Pantau Halal Indonesia) is a halal traceability supply chain guarantee system. In order to design UI properly based on user needs, UX research is needed. In this works, POS system is added based on study case of ITS Mart and Double Diamond is used as design framework.
                    </Text> 
                    <Heading fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}} color={'#CD3C68'} fontWeight={'600'}>
                        What is Double Diamond?
                    </Heading>
                    <Image src={DD} width={{base:'100%', md:'57%'}} height={'100%'} alignSelf={'center'}/>    
                    <Text color={'#CD5A79'} fontSize={{base:'md', md:'lg'}}>
                        Double Diamond is a design framework created by Design Council. In this framework, there are 4 stages in designing.
                    </Text> 
                </Flex>
            </Box>
        </Flex>
    </Box>
  );
};

export default PosTeratai;