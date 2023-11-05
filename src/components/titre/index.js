import React from 'react';
import { styled } from 'styled-components';

const Titre = (props) => {
    const Title = props.title;
    return (
        <StyledTitle>
            {Title}
        </StyledTitle>
    );
};

export default Titre;

const StyledTitle = styled.h1`
    display: flex;
    justify-content: center;
    color: white;
`