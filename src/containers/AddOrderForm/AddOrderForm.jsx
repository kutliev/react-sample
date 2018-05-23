import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Order from '../../store/models/Order';

class AddOrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: 0,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleTitleChange(e) {
    const title = e.target.value;
    // if (title.replace(/ /g, '').length === 0) {
    //   return;
    // }
    this.setState({ title });
  }

  handlePriceChange(e) {
    const price = e.target.value;
    if (Number.isNaN(price)) {
      return;
    }
    this.setState({ price });
  }

  handleSave() {
    const newId = this.props.newOrderId;
    const newOrder = new Order(newId, this.state.title, this.state.price);
    this.props.handleAdd(newOrder);
    this.setState({
      title: '',
      price: 0,
    });
  }

  render() {
    return (
      <div>
        <h2>New order</h2>
        ID: { this.props.newOrderId}<br />
        Title: <input value={this.state.title} onChange={this.handleTitleChange} /><br />
        Price: <input value={this.state.price} onChange={this.handlePriceChange} /><br />
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

AddOrderForm.propTypes = {
  newOrderId: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default AddOrderForm;
