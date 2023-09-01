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
                <Box className="col-md-1" w={['10px', '10px', '100px', '100px']}></Box>
                <Stack className="col-md-10" direction={'column'}>
                    <Heading as="h4" color="#FB923C">
                        Frequently Asked Questions
                    </Heading>
                    {/*
                    <Box id="orange_main" bg={'#f3f3f3'} borderBottom={'2px'} borderColor={'black'} borderRadius={'10px'} w={'100%'}>
                        <Text ml={'20px'} mt={['10px', '10px', '20px', '20px']} mb={['10px', '10px', '20px', '20px']} fontSize={['12px', '12px', '100%', '100%']}>
                            What is Parple?{" "}
                            <PlusSquareIcon
                                boxSize={'6'}
                                float={'right'}
                                pr={['10px', '10px', '0px', '0px']}
                                id="toggleButton"
                                src="/asset/plus.png"
                                alt="Toggle Button"
                                className="icons"
                                onClick={toggleColor}
                            />
                        </Text>
                        <Stack direction={'row'}>
                            <Box w={'10%'}></Box>
                            <Box id="toggleContent" display={isOpen ? "block" : "none"} mb={['10px', '10px', '20px', '20px']} fontSize={['8px', '8px', '90%', '90%']}>
                                Parple is a versatile event booking app that allows you to easily
                                discover, book, and attend a wide range of events, along with
                                convenient transportation options.
                            </Box>
                            <Box w={'10%'}></Box>
                        </Stack>
                    </Box>

                    <Box id="orange_main" bg={'#f3f3f3'} borderBottom={'2px'} borderColor={'black'} borderRadius={'10px'} w={'100%'}>
                        <Text ml={'20px'} mt={['10px', '10px', '20px', '20px']} mb={['10px', '10px', '20px', '20px']} fontSize={['12px', '12px', '100%', '100%']}>
                            How do I book events using Parple?{" "}
                            <PlusSquareIcon
                                boxSize={'6'}
                                float={'right'}
                                pr={['10px', '10px', '0px', '0px']}
                                id="toggleButton2"
                                src="images/plus.png"
                                alt="Toggle Button"
                                className="icons"
                                onClick={toggleColor2}
                            />
                        </Text>
                        <Stack direction={'row'}>
                            <Box w={'10%'}></Box>
                            <Box id="toggleContent2" display={isOpen2 ? "block" : "none"} mb={['10px', '10px', '20px', '20px']} fontSize={['8px', '8px', '90%', '90%']}>
                                Parple is a versatile event booking app that allows you to easily
                                discover, book, and attend a wide range of events, along with
                                convenient transportation options.
                            </Box>
                            <Box w={'10%'}></Box>
                        </Stack>
                    </Box>


                    <Box id="orange_main" bg={'#f3f3f3'} borderBottom={'2px'} borderColor={'black'} borderRadius={'10px'} w={'100%'}>
                        <Text ml={'20px'} mt={['10px', '10px', '20px', '20px']} mb={['10px', '10px', '20px', '20px']} fontSize={['12px', '12px', '100%', '100%']}>
                            Can I book transportation through Parple?{" "}
                            <PlusSquareIcon
                                boxSize={'6'}
                                float={'right'}
                                pr={['10px', '10px', '0px', '0px']}
                                id="toggleButton3"
                                src="images/plus.png"
                                alt="Toggle Button"
                                className="icons"
                                onClick={toggleColor3}
                            />
                        </Text>
                        <Stack direction={'row'}>
                            <Box w={'10%'}></Box>
                            <Box id="toggleContent3" display={isOpen3 ? "block" : "none"} mb={['10px', '10px', '20px', '20px']} fontSize={['8px', '8px', '90%', '90%']}>
                                Parple is a versatile event booking app that allows you to easily
                                discover, book, and attend a wide range of events, along with
                                convenient transportation options.
                            </Box>
                            <Box w={'10%'}></Box>
                        </Stack>
                    </Box>


                    <Box id="orange_main" bg={'#f3f3f3'} borderBottom={'2px'} borderColor={'black'} borderRadius={'10px'} w={'100%'}>
                        <Text ml={'20px'} mt={['10px', '10px', '20px', '20px']} mb={['10px', '10px', '20px', '20px']} fontSize={['12px', '12px', '100%', '100%']}>
                            Is Parple available in my city?{" "}
                            <PlusSquareIcon
                                boxSize={'6'}
                                float={'right'}
                                pr={['10px', '10px', '0px', '0px']}
                                id="toggleButton4"
                                src="images/plus.png"
                                alt="Toggle Button"
                                className="icons"
                                onClick={toggleColor4}
                            />
                        </Text>
                        <Stack direction={'row'}>
                            <Box w={'10%'}></Box>
                            <Box id="toggleContent4" display={isOpen4 ? "block" : "none"} mb={['10px', '10px', '20px', '20px']} fontSize={['8px', '8px', '90%', '90%']}>
                                Parple is a versatile event booking app that allows you to easily
                                discover, book, and attend a wide range of events, along with
                                convenient transportation options.
                            </Box>
                            <Box w={'10%'}></Box>
                        </Stack>
                    </Box>


                    <Box id="orange_main" bg={'#f3f3f3'} borderBottom={'2px'} borderColor={'black'} borderRadius={'10px'} w={'100%'}>
                        <Text ml={'20px'} mt={['10px', '10px', '20px', '20px']} mb={['10px', '10px', '20px', '20px']} fontSize={['12px', '12px', '100%', '100%']}>
                            How do I scan my QR code for event entry?{" "}
                            <PlusSquareIcon
                                boxSize={'6'}
                                float={'right'}
                                pr={['10px', '10px', '0px', '0px']}
                                id="toggleButton5"
                                src="images/plus.png"
                                alt="Toggle Button"
                                className="icons"
                                onClick={toggleColor5}
                            />
                        </Text>
                        <Stack direction={'row'}>
                            <Box w={'10%'}></Box>
                            <Box id="toggleContent5" display={isOpen5 ? "block" : "none"} mb={['10px', '10px', '20px', '20px']} fontSize={['8px', '8px', '90%', '90%']}>
                                Parple is a versatile event booking app that allows you to easily
                                discover, book, and attend a wide range of events, along with
                                convenient transportation options.
                            </Box>
                            <Box w={'10%'}></Box>
                        </Stack>
                    </Box>
                    {/* 5th question stops */}

                    <Accordion allowMultiple w={['100%', '100%', '260%', '260%']}>
                        <AccordionItem mb={['10px', '10px', '20px', '20px']}>
                            <h2>
                                <AccordionButton _expanded={{ bg: '#f3913a', color: 'white'}} bg={'#f3f3f3'} >
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
