import styled from 'styled-components';
import ApiHelper from '../APIHelper.js';
import React, { useEffect, useState } from 'react';

import { darkSber } from '@sberdevices/plasma-tokens/themes';
import { Button } from '@sberdevices/ui/components/Button/Button';
import { Container } from '@sberdevices/plasma-ui/components/Grid';
import { Image } from '@sberdevices/ui/components/Image/Image';
import { Link } from "react-router-dom";
//base64, 
const Wrapper = styled.div`
    
    font-family:'Noto Sans HK', sans-serif;
    width: 53.5%;
    margin: 0 auto;
    .copyright{
        color:#999;
    }
    .sources{
        display: flex;
        justify-content: space-between;
        width: 80%
    }
    .sources a{
        text-decoration: none;
        color:#003569;
        text-transform: uppercase;
        font-size: 14px;
    }
`
const Page1 = () =>{
    return(
        <>
            <Wrapper>
        <Image src="https://images-ext-1.discordapp.net/external/I7hAlfNFHmNLc1oS3Ckl97CttTaRvoC0O_VAyZ2gy8s/https/raw.githubusercontent.com/SkaZo4nikk/KidGuru/master/backend/Picture/Dolphin.jpg?width=1021&height=676" /> 
        
        </Wrapper>
        <Container>  
        <Button>Какое это животное?</Button>
        <Button><Link to='/'>BACK</Link></Button>
        </Container>
        </>
     ) }

export default Page1
