import React , { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { login,init } from './actions';

//Material - ui
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

const form  = {
    width:250,
    margin: '80px auto'
}
const container = {
    padding:15
}
/***
 * const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)
 */
class Login extends Component {
    componentDidMount(){
        this.props.init();
    }
    render(){
        const { handleSubmit } = this.props
        return (
            <div style={form}>
                <form onSubmit={handleSubmit}>
                    <Card style={container}>
                        <h3>
                            Conectar-se
                        </h3>
                        <Field   
                            name="login"
                            label="Login"
                            required={'required'}
                            autoFocus={true}
                            type={"text"}
                            component={
                                ({ input, label, meta: { touched, error }, ...custom})=> (
                                    <TextField
                                        hintText={label}
                                        floatingLabelText={label}
                                        floatingLabelFixed={true}
                                        fullWidth={true}
                                        {...input}
                                        {...custom}

                                    />
                                )
                            }
                        />
                         <Field   
                            name="password"
                            label="Password"
                            required={'required'}
                            autoFocus={true}
                            type={"password"}
                            component={
                                ({ input, label, meta: { touched, error }, ...custom}) => ( 
                                    <TextField
                                        hintText={label}
                                        floatingLabelText={label}
                                        floatingLabelFixed={true}
                                        type='password'
                                        fullWidth={true}
                                        name="password"
                                        {...input}
                                        {...custom}
                                    />
                                )
                            }
                        />
                        <br />
                        <RaisedButton
                            label="Entrar" fullWidth={true}
                            backgroundColor="#a4c639"
                            labelColor="#fff"
                            type="submit"
                        />

                    </Card>

                </form>
            </div>
        )
    }
}

Login = reduxForm({
    form: 'loginForm', 
    destroyOnUnmount:false,
    onSubmit:function(data,actions, loginForm){
        loginForm.login(data);
    }
})(Login)

const selector = formValueSelector('loginForm')

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login,
    init
},dispatch);

export default withRouter(connect(null,mapDispatchToProps)(Login));