import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';

class MessageDialog extends Component {
    constructor(){
        super();

        this.state = {
            open: false
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen(){
        this.setState({open: true});
    }

    handleClose(){
        this.setState({open: false});
    }

    render(){
        return(
            <Dialog
                title={this.props.titulo}
                actions={this.props.acoes}
                modal={false}
                open={this.state.open || this.props.open}
                onRequestClose={this.handleClose}
            >
                {this.props.mensagem}
            </Dialog>
        );
    }
}

export default MessageDialog;