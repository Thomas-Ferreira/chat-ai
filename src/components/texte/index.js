import React, {useEffect, useState} from 'react';
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { styled } from 'styled-components';
import Highlight from 'react-highlight'

const Texte = (props) => {

    const result = props.text.split('```')
    //console.log(result);

    /*useEffect(() => {
        hljs.highlightAll();
      });*/

    return (
        <div>
            {props.text}
        </div>
    );
};

export default Texte;

const StyledCode = styled.code`
    background-color: #000000;
    color: #ffffff;
`