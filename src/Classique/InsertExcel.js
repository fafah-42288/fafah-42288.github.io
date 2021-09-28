import React from 'react';
import axios from 'axios';

export default class InsertExcel extends React.Component {
  state = {
    file:null,
  }

  handleFile(e){
      let file= e.target.files[0]

    this.setState({file:file})
    console.log(file)
  }

  handleUpload(e) {
      let file=this.state.file
      console.log(file)
      let formdata=new FormData()
    
      formdata.append('file', file);
     
      //formdata.append('name','file')
      console.log(formdata)
    axios.post(`http://localhost/biblio-api/api/upload.php`,formdata,{
        headers: {
          "Content-Type": "multipart/form-data",
        }})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="InsertExcel">
        <form onSubmit={this.handleSubmit}>
          <label>Select File</label>
            <input type="file" name="file" onChange={(e)=>this.handleFile(e)} />
          
          <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
        </form>
      </div>
    )
  }
}