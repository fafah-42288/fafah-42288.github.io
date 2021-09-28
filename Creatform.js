import React from 'react';
import axios from 'axios';

export default class Creatform extends React.Component {
  state = {
    id:'',
    thme:'',
  }

  handleChange = event => {
    this.setState({theme: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data= {
      id:this.state.id,
      theme: this.state.theme
    };
    console.log(data)
    axios.post(`http://localhost/biblio-api/api_classification/create.php`, {data})
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
            classification theme:

            <input type="text" name="theme" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}