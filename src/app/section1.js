'use client'

import { Box, Stack, Text, Heading, Input, Button, Image } from '@chakra-ui/react';
import React from 'react';

const Section1 = () => {
  return (
    <div>
      <Stack className='div1'
        data-aos="fade-up"
        direction={['column', 'column', 'row', 'row']}
        align={'center'}
        alignContent={'center'}
        mb={'50px'}
        pl={['10px', '10px', '50px', '100px']}
        pr={['10px', '10px', '0px', '0px']}
        mt={['20px', '20px', '50px', '50px']}
      >
        <Box className='content1'
          w={['100%', '100%', '100%', '100%']}
          h={'500px'}
        >
          <Heading
            m={['auto', 'auto', '0px', '0px']}
            align={'center'}
            pb={'20px'}
            textAlign={['center', 'center', 'left', 'left']}
          >
            Discover and join exciting parties near you.
            Let's get the party started!
          </Heading>
          <Text
            m={['auto', 'auto', '0px', '0px']}
            align={'center'}
            pb={['20px', '20px', '30px', '50px']}
            textAlign={['center', 'center', 'left', 'left']}
          >
            Getting to and from your favourite events has never been this convininet.
            With the parple Event App, you have a reliable and efficient transportation solution at our fingertips.
          </Text>
          <Stack className='input area' direction={['column', 'column', 'row', 'row']}>
            <Input
              placeholder='Enter your Email'
              bg={'#d9d9d9'}
              h={'50px'}
              w={['100%', '100%', '85%', '85%']}
            />
            <Button colorScheme='blackAlpha' variant='solid' h={'50px'} w={['50%', '50%', '100px', '100px']} m={'auto'} bg={'black'} fontSize={['', '', '12px', '15px']}>
              Join Waitlist
            </Button>
          </Stack>
        </Box>
        <Box className='phone1'
          w={['100%', '100%', '100%', '100%']}
          h={'500px'}
        >
          <Image src='/asset/phone1.png' m={'auto'} h={'100%'} />
        </Box>
      </Stack>
    </div>
  );
}

export default Section1;