import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Header from './header';

require('react-datepicker/dist/react-datepicker.css');

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startDate: moment(),
            endDate: moment(),
            value: '',
            status: ''
        };
    
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleStartDateChange(date) {
        this.setState({startDate: date});
    }

    handleEndDateChange(date) {
        this.setState({endDate: date});
    }

    handleValueChange(event) {
        this.setState({value: event.target.value});
    }

    handleStatusChange(event) {
        this.setState({status: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <div><b>Create Agreement</b></div>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Agreement Name"
                            onChange={this.handleNameChange} value={this.state.name} />
                    </div>
                    <div className="form-row">                        
                        <div className="form-group col-md-6">
                            <label>Start Date</label>
                            <DatePicker className="form-control" selected={this.state.startDate} onChange={this.handleStartDateChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>End Date</label>
                            <DatePicker className="form-control" selected={this.state.endDate} onChange={this.handleEndDateChange} />
                        </div>
                    </div>                    
                    
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Value</label>
                            <input type="number" className="form-control" id="inputValue" placeholder="Value" 
                                onChange={this.handleValueChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Status</label>
                            <select id="inputStatus" className="form-control" onChange={this.handleStatusChange} value={this.state.status}>
                                <option>Choose...</option>
                                <option>Active</option>
                                <option>Active</option>
                                <option>Active</option>
                            </select>
                        </div>                        
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    </form>

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