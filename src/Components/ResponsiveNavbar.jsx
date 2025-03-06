import { Box, Link, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import '../App.css';

function ResponsiveNavbar(props) {
    let currentPath = props.list.filter((item)=> item.to === window.location.pathname)[0].name
    
  return (
    <Box className='nav-center' fontFamily='McLaren' fontSize='14'justifyContent={'end'} alignContent={'center'} width={'100%'} display={props.display}>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} backgroundColor={'transparent'} _hover={{backgroundColor:'none', color:'#CD3C68'}} _focus={{backgroundColor:'none', color:'#CD3C68'}} _active={{backgroundColor:'none', color:'#CD3C68'}} fontWeight={'400'} fontSize={'16'} color={'#AD0035'}>
                {currentPath}
            </MenuButton>
            <MenuList>
                {
                    props.list.map(item => {
                        return <Link href={item.to} color={'#CD5A79'} _hover={{textDecoration:'none'}}>
                                <MenuItem color={'#CD5A79'}>
                                    {item.name}
                                </MenuItem>
                            </Link>
                    })
                }
            </MenuList>
        </Menu>
    </Box>
  );
};

export default ResponsiveNavbar;