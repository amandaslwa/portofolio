import { Text, Image, Flex, Spacer } from '@chakra-ui/react';
import { Carousel } from "flowbite-react";

export function CarouselComponent(props) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        {
            props.data?.map((item)=> {
                return(
                    <Flex direction={'column'} borderRadius={'10'} alignItems={{base: 'center', md:'center'}} justifyContent={'center'} textAlign={'center'} background={'white'} fontFamily={'McLaren'} padding={'5'} width={'100%'} gap='5'>
                        <Text fontWeight='600' color={'#CD5A79'} fontFamily={'McLaren'} fontSize={{base:'lg', md:'xl'}}>
                            {item.title}
                        </Text>
                        <Spacer/>
                        <Image src={item.img} width={{base:'100%', md:'100%'}} height={'100%'} alignSelf={'center'}/>
                        <Text>{item.desc}</Text>
                    </Flex>
                )
            })
        }
      </Carousel>
    </div>
  );
}
