import '../App.css';
import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from 'react-router-dom'
import { Flex, Box, Button, HStack, Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, useDisclosure, Image, DrawerCloseButton, Link } from '@chakra-ui/react';
import SP1 from "../Images/sp1.png";
import { Heading } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname)
  const Navbar= [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Projects',
      to: '/projects',
    },
  ];

  // if (window.scrollY >= 60) setScrolledNavStyle("navigation scrolled")
  return (
      <Flex
        position={'sticky'}
        zIndex={2}
        top={0}
        backgroundColor={'white'}
        boxShadow={'0px 2px rgba(142, 140, 159, 0.1)'}
        width={'100%'}
        fontFamily={'McLaren'}
        fontSize={'lg'}
        fontWeight={400}
        // height={'20'}
        paddingLeft={'10%'}
       >
          <Box className='nav-left' display={'flex'} width={'30%'}>
            <HStack alignItems={'center'} justifyContent={'start'} height={'100%'} className='logo-title'>
                <Image src={SP1} width={'15%'} alt="Logo"/>
                <Box className='nav-center' display={{base: 'none', md: 'flex'}} justifyContent={'center'}>
                    <ul>
                    {
                        Navbar.map(navItem => {
                        return <li>
                                    <Link href={navItem.to} color={location.pathname == navItem.to ? '#AD0035' : '#CD5A79'} _hover={{color:'#AD0035'}}>
                                        {navItem.name}
                                    </Link>
                                </li>
                        })
                    }
                    </ul>
                </Box>
            </HStack>
          </Box>
        </Flex>
  );
}

export default Navbar;