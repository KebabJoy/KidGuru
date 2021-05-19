import ApiHelper from '../APIHelper.js'
import React, { useEffect, useState } from 'react';
import { TextBox } from '@sberdevices/ui/components/TextBox/TextBox'
import { darkSber } from '@sberdevices/plasma-tokens/themes';
import { Button } from '@sberdevices/ui/components/Button/Button';
import { Container } from '@sberdevices/plasma-ui/components/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let currentId = 0;

function Page0() {
  const [items, setItems] = useState([]);

    const fetchedData = async (id) => {
        return await ApiHelper.getMathGuru(id);
    }
    
    useEffect(() => {
        fetchedData(currentId).then((response) => {
            console.log(response.data);
            const  data  = response.data;
            setItems(data);
        })
    }, []);

    const moveTo = (nextId) => () =>  {
        fetchedData(nextId).then((response) => {
            const data  = response.data;
            setItems(data);
        })
    }    

  const reload = () => {
    window.location.reload();
  }

  return (
    <>
      <Container styles={darkSber}>
      
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '1'}}>
        {items.first_arg} {items.operator} {items.second_arg}= ?
        </div>
        <Button onClick={moveTo(1)}>SUBMIT</Button>

        <Button><Link to='/'>BACK</Link></Button>
      </Container>
    </>
  );
}



export default Page0