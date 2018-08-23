import React, { Component } from 'react';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import Generic from './Page 2/Generic';
import Element from './Page 3/Element';
library.add(faStroopwafel)

class App extends Component {
    render() {
        return (
            <div>
              <Element/>
            </div>
        );
    }
}

export default App;