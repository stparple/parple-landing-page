'use client'

import { Box, Stack, Text, Heading, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import React from 'react';

const Section4 = () => {
    return (
        <div>
            <Stack className='div2'
                data-aos="fade-up"
                direction={['column-reverse', 'column-reverse', 'row', 'row']}
                align={'center'}
                alignContent={'center'}
                pl={['10px', '10px', '0px', '0px']}
                pr={['10px', '10px', '0px', '0px']}
                mt={['50px', '50px', '', '']}
            >
                <Box className='phone2'
                    w={['100%', '100%', '100%', '100%']}
                    h={'500px'}
                >
                    <Image src='/asset/phone1.png' m={'auto'} h={'100%'} />
                </Box>

                <Box className='content2'
                    w={['100%', '100%', '100%', '100%']}
                    h={'500px'}
                    textAlign={['center', 'center', 'left', 'left']}
                    m={['','','20px', '20px']}
                    mt={['', '', '50px', '50px']}
                    pr={['', '', '100px', '100px']}
                >
                    <Text
                    letterSpacing={'2px'}
                    color={'#F3913A'}
                    >
                        FEATURES
                    </Text>
                    <Heading as={'h2'} pb={'20px'}>
                        Featured Events
                    </Heading>
                    <Stack className='list-items'>
                    <UnorderedList styleType="none">
                        <ListItem>
                            <Heading as={'h6'} fontSize={'20px'}>
                            <ArrowRightIcon color={'#F3913A'} display={['none', 'none', 'inline', 'inline']} />  Discover Featured Events
                            </Heading>
                            <Text pb={'20px'} color={'#BFBFBF'}>
                            Explore premier events. Uncover highlighted experiences. 
                            Elevate your outings with Parple's featured events. Unforgettable moments await.
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Heading as={'h6'} fontSize={'20px'}>
                            <ArrowRightIcon color={'#F3913A'} display={['none', 'none', 'inline', 'inline']} />  Nearest Events
                            </Heading>
                            <Text pb={'20px'} color={'#BFBFBF'}>
                            Explore nearby events. Find what's close. 
                            Discover with Parple's nearest events feature. Your next adventure is just around the corner.
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Heading as={'h6'} fontSize={'20px'}>
                            <ArrowRightIcon color={'#F3913A'} display={['none', 'none', 'inline', 'inline']} />  Trending events
                            </Heading>
                            <Text color={'#BFBFBF'}>
                            Stay in the loop. Experience what's trending. 
                            Elevate your outings with Parple's trending events. Join the excitement of the moment.
                            </Text>
                        </ListItem>
                    </UnorderedList>
                    </Stack>
                </Box>
            </Stack>
        </div>
    );
}

export default Section4;