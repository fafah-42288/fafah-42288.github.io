import React from 'react';
import axios from 'axios';

export default class Delete extends React.Component {
  state = {
    id: '',
    theme:'',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const data= {
        id:this.state.id,
        theme:this.state.theme
      };
      console.log(data);
    axios.delete(`http://localhost/biblio-api/api_classification/delete.php`,{data})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Classification ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}