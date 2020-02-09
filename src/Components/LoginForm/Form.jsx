import React from 'react';
import {extendObservable} from 'mobx'
import {observer} from 'mobx-react';

import './Form.css';

import Success from './Success';
import Login from '../../Services/Axios';



export default observer (class Form extends React.Component  {
    constructor (props) {
        super (props);

        extendObservable(this, {
           login: '',
           password: '',
        })
    }

    state = {
        // Is User successful logged
        isLogged: false,
        // Loading state
        isLoading: false,
        // Form class
        formClass: 'loginFormOnClick',
    }

    onChange = e => {
        let {name, value} = e.target;
        this[name] = value;
    }

    Submit = async () => {

        // Check Login 
        
        // set loading state
        this.setState({ isLoading: true });

        const loginResult = await Login(this.login, this.password);

        // set loading state
        this.setState({ isLoading: false });

        if ( loginResult ) {
            this.setState({ isLogged: true });
        }else{
            this.setState({ formClass: 'loginFormDenied' });
        }

    }
    render() {
        let {login, password } = this;
        
        // Check if Success logged state
        if (this.state.isLogged){
            return <Success />;
        }
        // else return Form
        return (
            <div className={this.state.formClass}>
                <div className="container">
                    <span>Login</span>
                    <div className="form-group">
                        <input type="login" name="login" onChange={this.onChange} value={login} className="form-control" id="InputLogin" placeholder="Login" />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" onChange={this.onChange} value={password} className="form-control" id="InputPassword" placeholder="Password" />
                    </div>
                    
                    { !this.state.isLoading &&
                        <div className="button">
                            <button onClick={this.Submit} type="button" className="btn btn-info">login</button>
                        </div>
                    }

                    { this.state.isLoading &&
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    }
                </div>
            </div>
        )
    }
})
