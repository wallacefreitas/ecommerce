import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import { Card, CardTitle } from 'material-ui/Card';
import {API_KEY} from './helper';
import BottomNavigationComponent from './components/BottomNavigationComponent';
import HeaderComponent from './components/HeaderComponent';
import Estabelecimentos from './estabelecimentos/index';


//REtirar
import Consumidores from './consumidores/index';

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let main = this;

        return (
            <div style={{width: '100%'}}>
                <HeaderComponent />
                <Estabelecimentos />
                <Consumidores />
                <BottomNavigationComponent />
            </div>
        );
    }
}

export default App;