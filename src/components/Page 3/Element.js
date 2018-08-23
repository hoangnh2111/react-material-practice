import React, { Component } from 'react';
import Header from './../Header';
import Main from './Main';
import './../index.css';
import Table from './Table';
import Footer from '../Footer';

class Element extends Component {
    render() {
        return (
            <div>
               <Header />
               <Main/>
                <Table />
                <Footer />
            </div>
        );
    }
}

export default Element;