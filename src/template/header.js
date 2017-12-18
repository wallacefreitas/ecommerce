import React from 'react';
import AppBar from 'material-ui/AppBar';

import Badge from 'material-ui/Badge';
//import IconButton from 'material-ui/IconButton';
//import ShoppinCartIcon from 'material-ui/svg-icons/action/shopping-cart';
import RaisedButton from 'material-ui/RaisedButton'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import { logout } from '../login/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Header extends React.Component{
	constructor(props){
		super(props)
		this.state = { contador: 0 }
	}
	componentDidMount(){

	}
	render(){
		return (
			<div>
				<AppBar
					title="ITudo - App"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					iconElementRight={
						<RaisedButton 
							label="Logout"
							onClick={this.props.logout}
						/>
					}
				>
					{/*
					<RaisedButton label="Teste" onClick={
						()=>{
							console.log(this.props.carrinho)
							this.props.consultarCarrinho();
						}
					}>
						<Badge
      						badgeContent={this.state.contador}
					      	primary={true}
						>
      						<NotificationsIcon />
    					</Badge>
					</RaisedButton>
				*/}
				</AppBar>
			</div>
		)
	}

}

const mapDispatchToProps = (dispatch) => bindActionCreators(
	{
		logout
	}
,dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Header));