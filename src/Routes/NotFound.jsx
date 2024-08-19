import { Heading, Box, Text, HStack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../App.css';

function NotFound() {
  return (
    <Box background='#343434' width={'100%'} height={'100vh'} alignContent={'center'}>
        <HStack h={'100px'} gap={10} display={{md: 'flex'}} justifyContent={'center'}>
            <Heading size={'4xl'} color="white" fontFamily={'McLaren'} textAlign={'center'}>
                404
            </Heading>
            <VStack alignItems={{base: 'center', md:'start'}}>
                <Heading size={'lg'} color="white" fontFamily={'McLaren'} fontWeight={'bold'} marginTop={{base: '5%', md: '0'}}>
                    Mohon maaf, halaman tidak ditemukan :(
                </Heading>
                <Text color={"white"} fontFamily={'McLaren'} fontSize={20}>Kembali ke <Link to='/'><span className='highlightLink'>Home</span></Link></Text>
            </VStack>
        </HStack>
    </Box>
  );
};

export default NotFound;