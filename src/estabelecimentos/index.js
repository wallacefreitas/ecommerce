import React, {Component} from 'react';
//import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import { Card, CardTitle } from 'material-ui/Card';
import { API_KEY, URL_CORS } from '../helper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
//import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';

class Estabelecimentos extends Component {
    render(){
        return (
            <div>
                olá/
                </div>
        )
    }
}

export default withRouter(connect(null,null)(Estabelecimentos));