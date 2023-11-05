import React, { useState } from 'react';
import OpenAI from 'openai';
import env from "react-dotenv";
import Titre from '../titre';
import { styled } from 'styled-components';
import { BiUser } from 'react-icons/bi'
import { GiArtificialHive } from 'react-icons/gi'
import Texte from '../texte';
import Form from '../Form';

const ChatBot = () => {

    const OPENAI_API = env.REACT_APP_OPENAI_API_KEY

    const ai = new OpenAI({
        apiKey: OPENAI_API,
        dangerouslyAllowBrowser: true,
    })
    const [input, setInput] = useState('')
    const [apiResponse, setApiResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [historique, setHistorique] = useState([])

    const Submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await ai.chat.completions.create(
            {
                messages: [{ role: "user", content: input }],
                model: "gpt-3.5-turbo",
            })
            console.log(result);
            const data =[
                ...historique,
                {
                    question: input,
                    answer: result.choices[0].message.content
                }
            ]
            setHistorique(data)
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
            <Titre title={'Chat Bot'} />
            <div>
                {historique && (
                <div>
                    {historique.map((item) => {
                        return(
                            <>
                            <StyledText $isbot={false}>
                                <StyledIMG>
                                    <BiUser size={50} />
                                </StyledIMG>
                                <p>{item.question}</p>
                            </StyledText>
                            <StyledText $isbot={true}>
                                <StyledIMG>
                                    <GiArtificialHive size={50} />
                                </StyledIMG>
                                <Texte text={item.answer} />
                            </StyledText>
                            </>
                        )
                    })}
                </div>
                )}
                <div>
                    <Form input={input} handleInput={handleInput} submitFunction={Submit} loading={loading}/>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default ChatBot;

const StyledWrapper =styled.div`
    min-height: 100%; /* Ensure the wrapper spans the entire viewport height */
    padding-bottom: 100px; /* Add some padding at the bottom for the form */
    position: relative; /* Needed for absolute positioning of the form */
`
const StyledText = styled.pre`
    display: flex;
    align-items: flex-start;
    background-color: ${props=>{
        let result
        props.$isbot ? result='rgb(68, 70, 84)' : result = 'rgb(52, 53, 65)'
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