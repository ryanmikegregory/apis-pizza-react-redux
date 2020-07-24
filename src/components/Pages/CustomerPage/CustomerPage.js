import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerPage extends Component {
  state = {
    fname: '',
    lname: '',
    address: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onNextClick = (event) => {
    //dispatch the customer info!
    //goto the next page!
    this.props.dispatch({ type: 'SET_CUSTOMER_INFO', payload: this.state });
    this.props.history.push('/pizza');
  };

  render() {
    console.log(this.props.store.typeReducer);

    return (
      <div>
        <h1>Customer Page</h1>
        <input
          type="text"
          onChange={this.onInputChange('fname')}
          placeholder="Enter First Name"
        />
        <input
          type="text"
          onChange={this.onInputChange('lname')}
          placeholder="Enter Last Name"
        />

        {this.props.store.typeReducer === 'delivery' && (
          <input
            type="text"
            onChange={this.onInputChange('address')}
            placeholder="Enter Address"
          />
        )}

        <button onClick={this.onNextClick}>Next</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(CustomerPage);
