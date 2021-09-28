import React, {Component} from 'react';
import axios from 'axios'
class Listclassification extends Component{
  constructor(props){
    super(props)
    this.state= {
      posts:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost/biblio-api/api_classification/read.php').then(response=>{this.setState({posts:response.data})
      console.log(response.data)
    })
  }
  render(){
    return(<div>
      <ul>
        { this.state.posts.map(post => <li>{post.theme}</li>)}
      </ul>
    </div>);
  }
}
export default Listclassification;