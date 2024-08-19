import { Heading, Box, Text, HStack, VStack, Divider } from '@chakra-ui/react';
// import Logo from "../img/logo.png";
import { Link } from 'react-router-dom';
import '../App.css';

function NotFound() {
  return (
    <Box bgGradient='linear(to-r, #FFE6E8, #FFA7BC)' width={'100%'} height={'100vh'}>
        <HStack h={'100px'} gap={10} display={{md: 'flex'}}>
            <Heading size={'4xl'} color="#2e2e2e" fontFamily={'DM Sans'}>
                404
            </Heading>
            <Divider orientation='vertical' className='hidden'/>
            <VStack alignItems={{base: 'center', md:'start'}}>
                <Heading size={'lg'} color="#2e2e2e" fontFamily={'DM Sans'} marginTop={{base: '5%', md: '0'}}>
                    Mohon maaf, halaman tidak ditemukan :(
                </Heading>
                <Text color={"#2e2e2e"} fontSize={20}>Kembali ke <Link to='/'><span>Home</span></Link></Text>
            </VStack>
        </HStack>
    </Box>
  );
};

export default NotFound;