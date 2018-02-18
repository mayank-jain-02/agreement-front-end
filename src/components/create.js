import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';

class Create extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <div>This is Create Component</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapDispatchToProps, mapStateToProps)(Create);