'use client'

import { Box, Stack, Text, Heading, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import React from 'react';

const Section3 = () => {
    return (
        <div>
            <Stack className='div2'
                data-aos="fade-up"
                direction={['column', 'column', 'row', 'row']}
                align={'center'}
                alignContent={'center'}
                pl={['10px', '10px', '0px', '0px']}
                pr={['10px', '10px', '0px', '0px']}
            >
                
                <Box className='content3'
                    w={['100%', '100%', '100%', '100%']}
                    h={'500px'}
                    textAlign={['center', 'center', 'left', 'left']}
                    m={['auto','auto','20px', '20px']}
                    pt={['50px', '50px', '70px', '70px']}
                    pb={['10px', '10px', '', '']}
                    pl={['0px', '0px', '50px', '100px']}
                    pr={['10px', '10px', '50px', '100px']}
                >
                    <Text
                    letterSpacing={'2px'}
                    color={'#F3913A'}
                    >
                        FEATURES
                    </Text>
                    <Heading as={'h2'} pb={'20px'}>
                        Search and Booking
                    </Heading>
                    <Stack className='list-items'>
                    <UnorderedList styleType="none">
                        <ListItem>
                            <Heading as={'h6'} fontSize={'20px'}>
                            <ArrowRightIcon color={'#F3913A'} display={['none', 'none', 'inline', 'inline']} />  Search for Events Near You
                            </Heading>
                            <Text pb={['20px', '20px', '20px', '40px']} color={'#BFBFBF'}>
                            Discover local events effortlessly. Find what's happening nearby. 
                            Elevate your experiences with Parple's event search. Your city, your events.
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Heading as={'h6'} fontSize={'20px'}>
                            <ArrowRightIcon color={'#F3913A'} display={['none', 'none', 'inline', 'inline']} />  Book a Ride to Your Event
                            </Heading>
                            <Text color={'#BFBFBF'}>
                            Arrive in style. Reserve event rides seamlessly. 
                            Enhance your experience book event transportation with Parple. Your journey, our priority.
                            </Text>
                        </ListItem>
                    </UnorderedList>
                    </Stack>
                </Box>

                <Box className='phone2'
                    w={['100%', '100%', '100%', '100%']}
                    h={'500px'}   
                >
                    <Image src='/asset/phone3.png' m={'auto'} h={'100%'} />
                </Box>
            </Stack>
        </div>
    );
}

export default Section3;