import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import {MdMessage, MdImage, MdMore} from 'react-icons/md'
import Titre from '../components/titre';

const Home = () => {
    return (
        <>
        <Titre title={'AI App'} />
            <StyledDiv>
                <Element>
                    <Link to={'/chatBot'}>
                        <Icon color='rgb(84, 54, 218)'>
                            <MdMessage size={100}/>
                        </Icon>
                    </Link>
                    <StyledText>
                        ChatBot: Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                    </StyledText>
                </Element>

                <Element>
                    <Link to={'/imageGenerator'}>
                        <Icon color='rgb(25, 195, 125)'>
                            <MdImage size={100}/>
                        </Icon>
                    </Link>
                    <StyledText>
                        ImageGenerator : Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                    </StyledText>
                </Element>

                <Element>
                    <Icon color='rgb(244, 172, 54)'>
                        <MdMore size={100}/>
                    </Icon>
                    <StyledText>
                        More to come : Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                    </StyledText>
                </Element>
            </StyledDiv>

        </>
    );
};

export default Home;

const StyledDiv = styled.div`
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    display: flex;
    text-decoration: none;
    color: #FFFFFF;
`
const Element = styled.div`
    display: flex;
    margin-top: 5vh ;
    margin-bottom: 5vh;
    font-size: 18px;
`
const StyledText = styled.div`
    padding: 5vh;
    display: flex;
    text-align: justify;
`
const Icon = styled.div`
    cursor: pointer;
    background-color: ${props=>{
        return props.color
    }};
    padding: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
`