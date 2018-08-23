import React, { Component } from 'react';
import Header from './../Header';
import './../index.css';
import Footer from './../Footer';
import Main from './main';

class Generic extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default Generic;