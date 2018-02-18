import React, { Component } from 'react';
import MdEdit from 'react-icons/lib/md/edit';
import MdDelete from 'react-icons/lib/md/delete';

import { hashHistory } from 'react-router';

import Header from './header';
import { getAllAgreements, deleteAgreement } from '../back-end-helper';


class Home extends Component {
    constructor() {
        super();

        this.state = {
            agreements: [],
            loading: false,
            deleting: false
        };

        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        this.setState({loading: true})

        getAllAgreements()
        .then((data) => { 
            this.setState({ agreements: data, loading: false })
        })
        .catch((error) => console.error(error));
    }

    handleDelete(name) {
        this.setState({ deleting: true });

        deleteAgreement(name)
        .then((data) => {            
            this.setState({ deleting: false });
            
            const remainingAgreements = this.state.agreements.filter((value, index) => value.name !== name);

            this.setState({ agreements: remainingAgreements });
        })
        .catch((error) => console.error(error));
    }
    render() {
        return (
            <div className='container'>
                <Header />            

                <div style={{ color: 'blue', textAlign: 'center', display: `${this.state.loading}` === 'true' ? 'block' : 'none' }}>loading ...</div>
                <div style={{ color: 'blue', textAlign: 'center', display: `${this.state.deleting}` === 'true' ? 'block' : 'none' }}>deleting ...</div>

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
                        {
                            this.state.agreements.map((value, index) => (
                                <tr itemID={index}>
                                    <td>{value.name}</td>
                                    <td>{value.startDate}</td>
                                    <td>{value.endDate}</td>
                                    <td>{value.value}</td>
                                    <td>{value.status}</td>
                                    <td>
                                        <MdEdit style={{ cursor: 'pointer' }} onClick={() => hashHistory.push('/edit')} />
                                        <MdDelete style={{ cursor: 'pointer' }} onClick={() => this.handleDelete(value.name)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;