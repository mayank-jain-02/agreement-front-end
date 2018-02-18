import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';

class AdvanceSearch extends Component {
    constructor() {
        super();

        this.state = {
            field: '',
            operator: '',
            status: '',

            name: '',
            startDate: moment(),
            value: '',
            searchValue: ''
        }

        this.handleField = this.handleField.bind(this);
        this.handleOperator = this.handleOperator.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleField(event) {
        this.setState({ field: event.target.value });
    }

    handleOperator(event) {
        this.setState({ operator: event.target.value });
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleStartDateChange(date) {
        this.setState({startDate: date});
    }

    // handleValueChange(event) {
    //     this.setState({value: event.target.value});
    // }
    handleValueChange(event) {
        this.setState({ searchValue: event.target.value });
    }

    handleStatusChange(event) {
        this.setState({status: event.target.value});
    }

    handleSubmit(event) {
        const { handleAdvanceSearch } = this.props;
        handleAdvanceSearch(this.state);
    }

    render() {
        return ( 
            <div className='container' style={{ magringTop: '1%', marginBottom: '1%' }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Field</label>
                            <select id="inputField" className="form-control" onChange={this.handleField} value={this.state.field}>
                                <option>Choose...</option>
                                <option>Name</option>
                                <option>Start Date</option>
                                <option>Value</option>
                                <option>Status</option>
                            </select>
                        </div>                                                
                        <div className="form-group col-md-4">
                            <label>Operator</label>
                            <select id="inputOperator" className="form-control" onChange={this.handleOperator} value={this.state.operator}>
                                <option>Choose...</option>
                                <option>Equal To</option>
                                <option>Not Equal To</option>
                                <option>Contains</option>
                                <option>Greater than equal to</option>
                                <option>Less than equal to</option>
                            </select>
                        </div>                        
                        <div className="form-group col-md-4">
                            <label>Value</label>

                            <input type="text" className="form-control" id="inputName" placeholder="name" 
                                onChange={this.handleValueChange} value={this.state.searchValue} />

                            {/* <DatePicker className="form-control" selected={this.state.startDate} onChange={this.handleStartDateChange} 
                                style={{ display: `${this.state.field}` === 'Start Date' ? 'block' : 'none' }} />

                            <input type="number" className="form-control" id="inputValue" placeholder="Value" 
                                onChange={this.handleValueChange} value={this.state.value} 
                                style={{ display: `${this.state.field}` === 'Value' ? 'block !important' : 'none  !important' }}
                                />

                            <select id="inputValue" className="form-control" onChange={this.handleStatusChange} value={this.state.status}
                                style={{ display: `${this.state.field}` === 'Status' ? 'block' : 'none' }}>
                                <option>Choose...</option>
                                <option>Active</option>
                                <option>Renewed</option>
                                <option>Amended</option>
                            </select> */}
                        </div>                        
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        );
    }
}

AdvanceSearch.propTypes = {
    handleAdvanceSearch: PropTypes.func
}

export default AdvanceSearch;