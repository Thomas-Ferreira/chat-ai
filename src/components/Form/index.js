import React from 'react';
import { styled } from 'styled-components';

const Form = (props) => {

    const handleSubmit = async (e) => {
        await props.submitFunction(e)
    }


    return (
        <StyledForm onSubmit={handleSubmit}>
        <StyledInput
            type="text"
            value={props.input}
            placeholder='Please ask something to the AI'
            onChange={props.handleInput}
        ></StyledInput>
        <StyledButton
            disabled={props.loading || props.input.length === 0}
            type='submit'
        >
            {props.loading ? "Generating..." : "Generate"}
        </StyledButton>
    </StyledForm>
    );
};

export default Form;

const StyledForm = styled.form`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    background-color: rgb(68, 70, 84);
    display: flex;
    align-items: center;
    padding-bottom: 5vh;
    padding-top: 2vh;
`
const StyledInput = styled.textarea`
    flex: 1;
    padding: 10px;
    margin-left: 5vh;
    margin-right: 5vh;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: dark;
    border-radius: 20px;
`
const StyledButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 5vh;
    margin-right: 5vh;
    cursor: pointer;
    margin-left: 10px;
    &:hover{
        background-color: #0056b3;
    }
`