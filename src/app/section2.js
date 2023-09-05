'use client'

import { Box, Stack, Text, Heading, Img, UnorderedList, ListItem } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import React from 'react';

const Section2 = () => {
    return (
        <div>
            <Stack className='div2'
                data-aos="fade-up"
                direction={['column-reverse', 'column-reverse', 'row', 'row']}
                align={'center'}
                alignContent={'center'}
                pl={['10px', '10px', '0px', '0px']}
                pr={['10px', '10px', '0px', '0px']}
            >
                <Box className='phone2'
                    w={['100%', '100%', '100%', '100%']}
                    h={'500px'}
                >
                    <Img src='/asset/phone2.png' m={'auto'} h={'100%'} />
                </Box>

                <Box className='content2'
                    w={['100%', '100%', '100%', '100%']}
                    h={'500px'}
                    textAlign={['center', 'center', 'left', 'left']}
                    m={['auto','auto','20px', '20px']}
                    mt={['', '', '50px', '50px']}
                    pr={['', '', '0px', '100px']}
                >
                    <Text
                    letterSpacing={'2px'}
                    color={'#F3913A'}
                    >
                        FEATURES
                    </Text>
                    <Heading as={'h2'} pb={'20px'}>
                        QR code Ticketing
                    </Heading>
                    <Stack className='list-items'>
                    <UnorderedList styleType="none">
                        <ListItem>
                            <Heading as={'h6'} fontSize={'20px'}>
                            <ArrowRightIcon color={'#F3913A'} display={['none', 'none', 'inline', 'inline']} />  Digital Tickets, Effortless Entry
                            </Heading>
                            <Text pb={'20px'} color={'#BFBFBF'}>
                            Parple's QR code tickets: Swift, secure event entry. 
                            Your pass to seamless experiences. Simplify, scan, celebrate hassle-free.
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Heading as={'h6'} fontSize={'20px'}>
                            <ArrowRightIcon color={'#F3913A'} display={['none', 'none', 'inline', 'inline']} />  Scan Your Unique QR Code to Access Events
                            </Heading>
                            <Text pb={'20px'} color={'#BFBFBF'}>
                            Gain event entry with ease. Scan your exclusive QR code. 
                            Instant access to unforgettable experiences. Elevate your events with Parple.
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Heading as={'h6'} fontSize={'20px'}>
                            <ArrowRightIcon color={'#F3913A'} display={['none', 'none', 'inline', 'inline']} />  No More Paper Tickets
                            </Heading>
                            <Text color={'#BFBFBF'}>
                            Leave paper behind. Embrace eco-friendly digital tickets. 
                            Effortless entry to events. Go green with Parple your paperless event companion.
                            </Text>
                        </ListItem>
                    </UnorderedList>
                    </Stack>
                </Box>
            </Stack>
        </div>
    );
}

export default Section2;