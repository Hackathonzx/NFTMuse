'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NotFoundProps {
    // Add any props specific to your component here, if needed
}

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;


const Heading = styled.h1`
    font-size: 3rem;
    color: #333;
    margin-bottom: 1rem;
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
`;


const StyledLink = styled(Link)`
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;


const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <NotFoundContainer>
            <Heading>404</Heading>
            <Paragraph>Page Not Found</Paragraph>
            <StyledLink to="/">Go to Homepage</StyledLink>
        </NotFoundContainer>
    );
};

export default NotFound;