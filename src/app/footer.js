'use client'

import { Stack, Box } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return ( 

        <Stack
        w={'100%'}
        h={'100px'}
        bg={'#FEF8F2'}
        mt={'50px'}
        >
            <Box
            m={'auto'}
            >
                © 2023 Parple All Rights Reserved
            </Box>
        </Stack>

     );
}
 
export default Footer;