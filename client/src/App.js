import React, { Component } from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import logo from './logo.svg';
// import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

class App extends Component
{
  render() {
    const header = <img alt='Logo CNA' src='/images/LogoCNA.png' style={{width:'200px', height:'200px'}}/>;
   return (
    //  <div className='p-grid p-align-center vertical-container'>
    //   <div className='p-col p-col-align-center'>
    /* <div className="Aligner"> */
        <Card header={header} style={{textAlign: "center", width: "50%", margin: "auto"}} className='ui-card-shadow'>
            <div className="p-fluid">
              <div className="p-field">
                  <label htmlFor="firstname1">Firstname</label>
                  <InputText id="firstname1" type="text"/>
              </div>
              <div className="p-field">
                  <label htmlFor="lastname1">Lastname</label>
                  <InputText id="lastname1" type="text"/>
              </div>
            </div> 
          </Card>
      /* </div> */
    //   </div>
    // </div>
   );
  }
}

export default App;
