'use client'

import { Stack, Box, Heading, Text, IconButton, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from "@chakra-ui/react";
import { PlusSquareIcon } from '@chakra-ui/icons';
import { useState } from "react";

const FaqSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    const toggleColor = () => {
        setIsOpen(!isOpen);
    };

    const toggleColor2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleColor3 = () => {
        setIsOpen3(!isOpen3);
    };

    const toggleColor4 = () => {
        setIsOpen4(!isOpen4);
    };

    const toggleColor5 = () => {
        setIsOpen5(!isOpen5);
    };

    return (
        <Stack id="faq" className='id-section' data-aos="fade-right" direction={'row'} mt={'50px'} w={'100%'}>
            <Stack className="container-fluid" direction={'row'}>
                <Box className="col-md-1" w={['10px', '10px', '50px', '100px']}></Box>
                <Stack className="col-md-10" direction={'column'} m={'auto'} w={['100%', '100%', '700px', '700px']}>
                    <Heading as="h4" color="#FB923C">
                        Frequently Asked Questions
                    </Heading>
                    <Accordion allowMultiple w={['100%', '100%', '100%', '100%']} m={'auto'}>
                        <AccordionItem mb={['10px', '10px', '20px', '20px']}>
                            <h2>
                                <AccordionButton _expanded={{ bg: '#f3913a', color: 'white' }} bg={'#f3f3f3'} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        What is Parple?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Parple is a versatile event
                                booking app that allows you to easily discover, book,
                                and attend a wide range of events, along with convenient transportation options.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem mb={['10px', '10px', '20px', '20px']}>
                            <h2>
                                <AccordionButton _expanded={{ bg: '#f3913a', color: 'white' }} bg={'#f3f3f3'} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        How do I book events using Parple?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem mb={['10px', '10px', '20px', '20px']}>
                            <h2>
                                <AccordionButton _expanded={{ bg: '#f3913a', color: 'white' }} bg={'#f3f3f3'} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        Can I book transportation through Parple?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem mb={['10px', '10px', '20px', '20px']}>
                            <h2>
                                <AccordionButton _expanded={{ bg: '#f3913a', color: 'white' }} bg={'#f3f3f3'} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        Is Parple available in my city?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem mb={['10px', '10px', '20px', '20px']}>
                            <h2>
                                <AccordionButton _expanded={{ bg: '#f3913a', color: 'white' }} bg={'#f3f3f3'} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        How do I scan my QR code for event entry?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Stack>
                <Box className="col-md-1" w={['10px', '10px', '100px', '100px']}></Box>
            </Stack>
        </Stack>
    );
};

export default FaqSection;
