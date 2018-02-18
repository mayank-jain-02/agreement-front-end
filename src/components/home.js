import React, { Component } from 'react';
import MdEdit from 'react-icons/lib/md/edit';
import MdDelete from 'react-icons/lib/md/delete';

import Header from './header';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Header />                
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td>Value</td>
                            <td>Status</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>rent agreement</td>
                            <td>17-02-2018</td>
                            <td>17-12-2018</td>
                            <td>7000</td>
                            <td>Active</td>
                            <td>
                                <MdEdit />
                                <MdDelete />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;