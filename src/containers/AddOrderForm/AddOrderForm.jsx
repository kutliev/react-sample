import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Order from '../../store/models/Order';
import styles from './AddOrderForm.scss';

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
    const newPrice = this.state.price;
    if (Number.isNaN(newPrice) || newPrice <= 0) {
      return;
    }
    let newTitle = this.state.title;
    if (newTitle.replace(/ /g, '').length === 0) {
      newTitle = 'No title';
    }

    const newOrder = new Order(newId, newTitle, this.state.price);
    this.props.handleAdd(newOrder);
    this.setState({
      title: '',
      price: 0,
    });
  }

  render() {
    return (
      <div className={styles.order_form}>
        <h2>Add order</h2>
        <div className={styles.add_row}>
          <span>ID</span> { this.props.newOrderId}
        </div>
        <div className={styles.add_row}>
          <span>Title</span> <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </div>
        <div className={styles.add_row}>
          <span>Price</span> <input type="text" value={this.state.price} onChange={this.handlePriceChange} />
        </div>
        <div className={styles.centered}>
          <button className={styles.save_button} onClick={this.handleSave}>Save</button>
        </div>
      </div>
    );
  }
}

AddOrderForm.propTypes = {
  newOrderId: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default AddOrderForm;
