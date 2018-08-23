import React, { Component } from 'react';
import './index.css';
import Generic from './Page 2/Generic';
import Header from './../Header';
import Banner from './../Banner';
import One from './../One';
import Two from './../Two';
import Three from './../Three';
import Footer from './../Footer';


class App extends Component {
    render() {
        return (
            <div>               
                <Header/>
                <Banner/>
                <One />
                <Two />
                <Three />
                <Footer />
            </div>
        );
    }
}

export default App;