import React, { Component } from 'react';
import Header from './header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>This is Home Component</div>
            </div>
        )
    }
}

export default Home;