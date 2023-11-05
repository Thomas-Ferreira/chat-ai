import React, { useState } from 'react';
import { styled } from 'styled-components';
import Titre from '../titre';
import OpenAI from 'openai';
import env from "react-dotenv";
import { BiUser } from 'react-icons/bi'
import { GiArtificialHive } from 'react-icons/gi'
import Form from '../Form';

const ImgGenerator = () => {
    const OPENAI_API = env.REACT_APP_OPENAI_API_KEY

    const ai = new OpenAI({
        apiKey: OPENAI_API,
        dangerouslyAllowBrowser: true,
    })
    const [input, setInput] = useState('')
    const [apiResponse, setApiResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [historique, setHistorique] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await ai.images.generate({
                prompt: input,
                n:1,
                size:"512x512"
            })
            console.log(result)
            setApiResponse(result['data'][0]['url'])
        } catch (error) {
            setApiResponse("Something is going wrong, Please try again.");
        }
        setLoading(false);
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <StyledWrapper>
            <Titre title={'Image Generator'} />
            <div>
                {apiResponse && (
                <div>
                    <StyledText isBot={false}>
                        <StyledIMG>
                            <BiUser size={50} />
                        </StyledIMG>
                        <p>{input}</p>
                    </StyledText>
                    <StyledText isBot={true}>
                        <StyledIMG>
                            <GiArtificialHive size={50} />
                        </StyledIMG>
                        <img src={apiResponse}/>
                    </StyledText>
                )
                </div>
                )}
                
                <div>
                    <Form input={input} handleInput={handleInput} submitFunction={handleSubmit} loading={loading}/>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default ImgGenerator;

const StyledWrapper =styled.div`
    min-height: 100%;
    padding-bottom: 100px;
    position: relative;
`
const StyledText = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: ${props=>{
        let result
        props.isBot ? result='rgb(68, 70, 84)' : result = 'rgb(52, 53, 65)'
        return result
    }};
    color: white;
    font-size: 20px;
    overflow-wrap: break-word;
    white-space: pre-wrap; /* Preserve line breaks */
    padding: 2vh 0;
    text-align: justify;
    p{
        padding-left: 25px;
        padding-right: 100px;
    }
`
const StyledIMG = styled.div`
    padding-left: 25px;
`