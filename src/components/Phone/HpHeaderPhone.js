import React from 'react';
import logo from '../..//assets/hp_logo.png';

class HpHeaderPhone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <header className="App-header">
                <div className="header-splitter">
                <img src={logo} alt="Logo" className="Phone App-logo" />
                </div>
            </header>
            )
        }
    };

export default HpHeaderPhone;