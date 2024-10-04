import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;

const loaderAnimation = keyframes`
    100% { transform: rotate(360deg); }
`;

const Loading = styled.div`
    border: 10px solid #D8D9DA;
    border-right: 10px solid #000000;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    animation: ${loaderAnimation} 1s ease-in-out infinite;
`;

const Loader: React.FC = () => {
    return (
        <LoaderContainer>
            <Loading />
        </LoaderContainer>
    );
};

export default Loader;