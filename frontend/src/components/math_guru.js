import React, { Component } from 'react';
import { render } from 'react-dom';
import { ApiHelper } from '../APIHelper'


export async function genNextTask(){
    let response= await fetch('http://localhost:3000/math_guru')
    let data= await response.json()
    console.log(data)
    return data
   // useEffect(()=>{data})
  }

export default {genNextTask}