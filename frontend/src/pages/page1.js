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
    img{
        margin: 0 auto;
        max-width: 1200 px;
        max-height: 700px;
    }
    .copyright{
        color:#999;
    }
    .sources{
        display: flex;
        justify-content: space-between;
        width: 80%;
    }
    .sources a{
        text-decoration: none;
        color:#003569;
        text-transform: uppercase;
        font-size: 14px;
    }
`

let currentId = 0

function Page1 ({dispatch, appState}){
    const [animal, setAnimal] = useState([]);

    const fetchedData = async () => {
        return await ApiHelper.getAnimal(currentId);
    }
    
    useEffect(() => {
      fetchedData().then((response) => {
            dispatch({type: "animal_guru", options: response.data.options})

            const data = response.data;
            setAnimal(data.options);
        })
    }, []);

    const moveTo = () =>  {
        currentId > 19 ? currentId = 0 : currentId += 1;
        
        fetchedData().then((response) => {
            const data  = response.data;
            dispatch({type: "animal_guru", options: data.options})
            setAnimal(data.options);
        })
    }

    useEffect(() => {
        if(appState.redirect == 2 && appState.next_task == 1){
          moveTo()
        }
      }, [appState.next_task])
    
    return(
        <>
        <Wrapper>
        <Image src={animal.img_url}></Image>
        </Wrapper>
            <Container>  
                <Button onClick={() => moveTo()}>Следующее животное</Button>
                <Button><Link to='/'>На главную</Link></Button>
             </Container>
        </>
     ) }

export default Page1
