import React, {Component} from 'react';
import axios from 'axios'
class List extends Component{
  constructor(props){
    super(props)
    this.state= {
      posts:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost/biblio-api/api/read.php').then(response=>{this.setState({posts:response.data})
      console.log(response.data)
    })}
    ClassiqueDelete(id){
      const data= {
        id:id,
      };
     
      
    axios.delete(`http://localhost/biblio-api/api/delete.php`,{data})
    .then(res =>  {
      console.log(res);
      console.log("res data"+res.data);
      
        alert(res.data['message'])
        if (res.data['status'] === 200) {
          this.componentDidMount();
      //
        
      }
    })
    
    }
  

  render(){
    return(<div>
      
        { this.state.posts.map(post => <ul><li>{post.num_ivent}{post.titre_liv}{post.auteur_liv}<a href={"http://localhost/biblio-api/api/getFile.php?id="+post.id}>{post.chemin_liv}</a>
        <button onClick={() => this.ClassiqueUpdate(post.id)}>Update</button> <button onClick={() => this.ClassiqueDelete(post.id)}>Del</button></li></ul>)}
      
    </div>);
  }
}
export default List;