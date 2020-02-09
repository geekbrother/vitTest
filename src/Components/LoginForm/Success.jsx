import React from 'react';
import './Form.css';

export default class Success extends React.Component  {
    render() {
        return (
            <div>
                <div className="SuccessImage"><img src="https://www.jusco-easterntravels.com/images/Successful-icon.png" alt='success' /></div>
                <div className="succesLogged">Succesfull logged</div>
            </div>
        )
    }
}