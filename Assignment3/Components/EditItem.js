import React, {Component} from 'react';

class EditTodo extends Component {
  state = {
    edited: false
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editTodo(this.state.title); 
    this.setState({ title: ''}); 
  }

  onChange = (e) =>
  this.setState({
    [e.target.name]: e.target.value  
  }
  );


  render() {
    return (
      <View>
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Edit Your Todo"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button
          type="submit">
          Edit
        </button>
      </form>
      </View>
    )
  }
}