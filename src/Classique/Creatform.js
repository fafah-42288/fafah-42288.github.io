import React from 'react';
import axios from 'axios';

export default class Creatform extends React.Component {
  state = {
    id:'',
    num_ivent: '',
    titre_liv:'',
    auteur_liv:'',
    lieu_edit_liv:'',
    edition:'',
    lieu:'',
    date_edit_liv:'',
    isbn_liv:'',
    chemin_liv:'',
    categorie:'',
    sous_categorie:'',
    chemin_couv:'',
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data= {
      id:this.state.id,
      num_ivent:this.state.num_ivent,
    titre_liv:this.state.titre_liv,
    auteur_liv:this.state.auteur_liv,
    lieu_edit_liv:this.state.lieu_edit_liv,
    edition:this.state.edition,
    lieu:this.state.lieu,
    date_edit_liv:this.state.date_edit_liv,
    isbn_liv:this.state.isbn_liv,
    chemin_liv:this.state.chemin_liv,
    categorie:this.state.categorie,
    sous_categorie:this.state.sous_categorie,
    chemin_couv:this.state.chemin_couv,
    };
    console.log(data)
    axios.post(`http://localhost/biblio-api/api/update.php`, {data})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    const{id,num_ivent,titre_liv,auteur_liv,lieu_edit_liv,edition,lieu,date_edit_liv,isbn_liv,chemin_liv,categorie,sous_categorie,chemin_couv}=this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
        <label>classique id: </label>
            

            <input type="text" name="id" value={id} onChange={this.handleChange} />
            </div>
            
        <div>
        <label>classique numero inventaire: </label>
            

            <input type="text" name="num_ivent" value={num_ivent} onChange={this.handleChange} />
            </div>
            <div>
            
            <label>classique titre </label>
            <input type="text" name="titre_liv" value={titre_liv} onChange={this.handleChange} />
            </div>
            <div>
            
            <label> classification auteur:</label>
            <input type="text" name="auteur_liv" value={auteur_liv} onChange={this.handleChange} />
            </div>
            <div>
            
            <label>classification Lieu d'edition: </label>
            <input type="text" name="lieu_edit_liv" value={lieu_edit_liv} onChange={this.handleChange} />
            </div>
            <div>
            
            <label>classification edition: </label>
            <input type="text" name="edition" value={edition} onChange={this.handleChange} />
            </div>
            <div>
            
            <label>classification lieu: </label>
            <input type="text" name="lieu" value={lieu} onChange={this.handleChange} />
            </div>
            <div>
            
            <label> classification date d'edition:</label>
            <input type="text" name="date_edit_liv"value={date_edit_liv}  onChange={this.handleChange} />
            </div>
            <div>
            
            <label> classification isbn:</label>
            <input type="text" name="isbn_liv" value={isbn_liv} onChange={this.handleChange} />
            </div>
            <div>
            
            <label> classification chemin_liv:</label>
            <input type="text" name="chemin_liv" value={chemin_liv} onChange={this.handleChange} />
            </div>
            <div>
            
            <label> classification id cat:</label>
            <input type="text" name="categorie" value={categorie} onChange={this.handleChange} />
            </div>
            <div>
            
            <label> classification sous_categorie:</label>
            <input type="text" name="sous_categorie" value={sous_categorie} onChange={this.handleChange} />
            </div>
            <div>
            
            <label> classification chemin_couv:</label>
            <input type="text" name="chemin_couv" value={chemin_couv} onChange={this.handleChange} />
            </div>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}