import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return ( 
            <div style = {
                {
                    widht: '100%',
                    height: '30px',
                    marginTop: '1%',
                    marginBottom: '2%',
                    borderBottom: '1px solid grey'
                }
            } >
            <Link to='/' style={{ padding: '2px', marginLeft: '2%', marginRight: '2%' }}>Home</Link>
            <Link to='/create' style={{ padding: '2px' }}>Create</Link>
            </div>
        );
    }
}

export default Header;