// import { Container } from '@sberdevices/plasma-ui/components/Grid';
import React,{useEffect,useReducer,useRef}  from 'react';

import './App.css';
import MainPage from './pages/main_page'
import Page0 from './pages/page0'
import Page1 from './pages/page1'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {
  createSmartappDebugger,
  createAssistant,
} from "@sberdevices/assistant-client";
import {reducer} from './store'


const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};


const App = () => {
  
  const [appState, dispatch] = useReducer(reducer, { redirect: 0 });

  const assistantStateRef = useRef();
  const assistantRef = useRef();

  useEffect(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current);

    assistantRef.current.on("data", ({ action }) => {
      if (action) {
        dispatch(action);
      }
    });
  }, []);

  useEffect(() => {
    assistantStateRef.current = appState
    console.log(assistantStateRef.current)
  }, [appState]);



  const render = () => {
    switch(appState.redirect){
      case 0:
        return(
          <Redirect to='/'/>
        )
      case 1:
        return(
          <Redirect to='/math_guru'/> 
        );
      case 2:
        return(
          <Redirect to='/g_animal'/> 
        );
    }
  }

  return(
  <Router>
    { 
      render()
    }
    <Switch>
      <Route path='/main_page' component={MainPage} >
        <MainPage dispatch={dispatch}/>
      </Route>
      <Route path='/math_guru' component={Page0}>
      <Page0 dispatch={dispatch} appState={appState}></Page0>
          </Route>
          <Route path='/g_animal' component={Page1} >
            <Page1 dispatch={dispatch} appState={appState}></Page1>
          </Route>
          <Route path='/' exact >
            <Redirect to='/main_page' exact/>
          </Route>
        </Switch>
  </Router>
  )
}

export default App;



// constructor(props) {
  //   super(props);
  //   console.log('constructor');

  //   this.state = {
  //     notes: [],
  //   }
    
  //   this.assistant = initializeAssistant(() => this.getStateForAssistant() );
  //   this.assistant.on("data", (event/*: any*/) => {
  //     console.log(`assistant.on(data)`, event);
  //     const { action } = event
  //     this.dispatchAssistantAction(action);
  //   });
    
  //   this.assistant.on("start", (event) => {
  //     console.log(`assistant.on(start)`, event);
  //   });
  // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // getStateForAssistant () {
  //   console.log('getStateForAssistant: this.state:', this.state)
  //   const state = {};
  //   console.log('getStateForAssistant: state:', state)
  //   return state;
  // }

  // dispatchAssistantAction (action) {
  //   console.log('dispatchAssistantAction', action);
  //   if (action) {
  //     switch (action.type) {
  //       case 'add_note':
  //         return this.add_note(action);

  //       case 'done_note':
  //         return this.done_note(action);

  //       default:
  //         throw new Error();
  //     }
  //   }
  // }