import ApiHelper from '../APIHelper.js'
import React, { useEffect, useState } from 'react';

import { darkSber } from '@sberdevices/plasma-tokens/themes';
import { Button } from '@sberdevices/ui/components/Button/Button';
import { Container } from '@sberdevices/plasma-ui/components/Grid';
import { Image } from '@sberdevices/ui/components/Image/Image';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { genNextTask } from '../components/math_guru'




const MainPage = () =>{
    return(
        <Container>
            <Button><Link to='/math_guru'>Math Guru</Link></Button>
            <Button><Link to='/g_animal'>Guess Animal</Link></Button>
        </Container>
    )
}

export default MainPage
