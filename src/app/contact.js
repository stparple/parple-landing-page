'use client'

import { Stack, Box, Text, FormControl, FormLabel, Input, Image, Icon, Button, Textarea, FormErrorMessage, FormHelperText, } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import React from "react";

const Contact = () => {
    return (

        <><Stack className="contact-header"
            data-aos="fade-up"
            direction={'row'}
            ml={['10px', '10px', '100px', '100px']}
            mt={'50px'}
            mb={'50px'}
        >
            <Box
                color={'black'}
                bgColor={'#F3913A'}
                p={'10px'}
                borderRadius={'10px'}
                w={['30%', '30%', '8%', '8%']}
            >
                Contact Us
            </Box>
            <Box
                pt={['', '', '10px', '10px']}
                w={['70%', '70%', '', '']}
            >
                Connect with Us: Let's Discuss Your Digital Marketing Needs
            </Box>
        </Stack>
            <Stack
                data-aos="fade-up"
                direction={['column', 'column', 'row', 'row']}
                m={'auto'}
                mr={['10px', '10px', '100px', '100px']}
                ml={['10px', '10px', '100px', '100px']}
                bg={'#f3f3f3'}
                borderRadius={'20px'}
            >
                <Box
                    ml={['10px', '10px', '100px', '100px']}
                    mr={['10px', '10px', '100px', '100px']}
                    pt={'50px'}
                    mb={'20px'}
                >
                    <FormControl
                        mb={'10px'}
                    >
                        <Stack direction={'row'}><CheckCircleIcon color={'#F3913A'} mb={'50px'} mt={'5px'} /> <Text>Say Hi</Text> </Stack>
                        <FormLabel>Name</FormLabel>
                        <Input type='name' placeholder='Name' w={['100%', '100%', '500px', '500px']} bg={'white'} />
                    </FormControl>

                    <FormControl
                        mb={'10px'}
                    >
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder='Email' bg={'white'} />
                    </FormControl>

                    <FormControl
                        mb={'10px'}
                    >
                        <FormLabel>Message</FormLabel>
                        <Textarea placeholder='Message' bg={'white'} />
                    </FormControl>

                    <Button
                        mt={4}
                        bg={'black'}
                        w={'100%'}
                        color={'white'}
                        type='submit'
                    >
                        Send Message
                    </Button>
                </Box>

                <Box></Box>
            </Stack>

        </>

    );
}

export default Contact;