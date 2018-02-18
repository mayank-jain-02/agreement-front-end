import React, { Component } from 'react';
import Header from './header';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <div>This is Home Component</div>
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
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;