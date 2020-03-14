import React from 'react';
import './Navbar.css';
import logo from './logo.svg';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
    }

    render() {
        return (
            <nav className="navbar">
                <img src={logo} alt="logo" className ="logo"></img>
                <button className="botao1">Linha do Tempo</button>
                <button className="botao2">Perfil</button> 
                <span className="right">{this.name}</span>
            </nav>
        );
    }
}

export default Navbar;