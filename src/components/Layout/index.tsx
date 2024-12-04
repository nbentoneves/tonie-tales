'use client';

import { Alert, AlertIcon, Box, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import { maxWidthProps } from './styles/customTheme';

const LayoutWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Box minHeight="100vh" transition="0.4s ease-out">
            <Meta />
            <Header />
            <Flex {...maxWidthProps} px={8} py={0}>
                <Alert status="info" textAlign="center" flexDirection="column">
                    <AlertIcon mb={2} />
                    <Box>Please note that TonieTales is an independent platform and
                    is not affiliated with, endorsed by, or associated with
                    Tonies.com or its parent company. Our website is dedicated
                    to providing a space for users to create and upload their
                    own stories for use with the Tonie Box. For official
                    products and services, please visit <Link href='https://tonies.com/' target='_blank'>Tonies.com</Link> directly.</Box>
                </Alert>
            </Flex>
            <Box>
                <Box {...maxWidthProps} as="main" mb={22}>
                    {children}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default LayoutWrapper;
