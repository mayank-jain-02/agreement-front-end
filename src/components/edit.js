import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startDate: '',
            endDate: '',
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

    handleStartDateChange(event) {
        this.setState({startDate: event.target.value});
    }

    handleEndDateChange(event) {
        this.setState({endDate: event.target.value});
    }

    handleValueChange(event) {
        this.setState({value: event.target.value});
    }

    handleStatusChange(event) {
        this.setState({status: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <div><b>Update Agreement</b></div>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Agreement Name"
                            onChange={this.handleNameChange} value={this.state.name} />
                    </div>
                    <div className="form-row">                        
                        <div className="form-group col-md-6">
                            <label>Start Date</label>
                            <input type="text" className="form-control" id="inputStartDate" placeholder="Start Date" 
                                onChange={this.handleStartDateChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>End Date</label>
                            <input type="text" className="form-control" id="inputEndDate" placeholder="End Date" 
                                onChange={this.handleEndDateChange}/>
                        </div>
                    </div>                    
                    
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Value</label>
                            <input type="text" className="form-control" id="inputValue" placeholder="Value" 
                                onChange={this.handleValueChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Status</label>
                            <select id="inputStatus" className="form-control" onChange={this.handleStatusChange}>
                                <option selected>Choose...</option>
                                <option>...</option>
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

export default connect(mapDispatchToProps, mapStateToProps)(Edit);