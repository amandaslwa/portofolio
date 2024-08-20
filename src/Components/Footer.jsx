import '../App.css';
import { useLocation } from 'react-router-dom'
import { Flex, Box, Text, Link } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far);

function Footer() {
  const location = useLocation();

//   console.log(location)
  const Footer= [
    {
      icon: 'fa-brands fa-github',
      to: 'https://github.com/amandaslwa',
    },
    {
      icon: 'fa-brands fa-linkedin',
      to: 'https://www.linkedin.com/in/amandaslwa',
    },
    {
      icon: 'fa-brands fa-square-instagram',
      to: 'https://www.instagram.com/amandaslwa',
    },
    // {
    //   icon: 'fa-solid fa-envelope',
    //   to: 'https://www.instagram.com/amandaslwa',
    // },
  ];

  return (
      <Flex
        backgroundColor={'white'}
        width={'100%'}
        fontFamily={'McLaren'}
        fontSize={'lg'}
        fontWeight={400}
        // height={'20'}
        padding={'1% 0% 1% 10%'}
       >
            <Flex width={'100%'} direction={'column'} gap={'1'}>
                <Flex direction={'row'} gap={'2'} justifyContent={'start'}>
                    <FontAwesomeIcon icon={'fa-solid fa-envelope'} color={location.pathname == '/' ? '#AD0035' : '#1c6ac4'} size={'xl'}/>
                    <Text fontFamily={'McLaren'} textAlign={'left'} justifySelf={'center'} fontSize={{base:'md', md:'lg'}} color={location.pathname == '/' ? '#CD5A79' : '#5F8ABD'}>meluatke@gmail.com</Text>
                </Flex>
                <Box className='foot-center' display='flex' justifyContent={'start'}>
                    <ul>
                    {
                        Footer.map(footItem => {
                        return <li>
                                    <Link href={footItem.to} target='_blank' marginRight={'1.25rem'}>
                                        <FontAwesomeIcon icon={footItem.icon} color={location.pathname == '/' ? '#AD0035' : '#1c6ac4'} size='xl'/>
                                    </Link>
                                </li>
                        })
                    }
                    </ul>
                </Box>
            </Flex>
        </Flex>
  );
}

export default Footer;