import React, { Component } from 'react'
import logo                 from '../assets/logo.svg'
import                           '../css/App.css'
import { establishments }   from './establishments/Fixtures'
import Establishment        from './establishments/Establishment'
import Rebase               from 're-base';
import app                  from '../Base';
var base = Rebase.createClass(app.database());

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        
        establishments: [
          {
              id          : "0890786GH",
              name        : "Biberium",
              description : "Un super bar karaoké"
          },
          {
              id          : "0890786GD",
              name        : "Brew Dogs",
              description : "Un super bar à bière"
          },
          {
              id          : "MJLMH0389",
              name        : "Batonier",
              description : "Un super bar de fin de soirée"
          },
          {
            id              : "0890786GI",
            name            : "Tonton",
            description     : "Un super bar étudiants",
            color           : "yellow", 
        },
        {
            id              : "0890786GE",
            name            : "The Londow Town",
            description     : "Un super bar à bière",
            color           : "purple", 
        },
        {
            id              : "NJLH0389",
            name            : "Australian Bar",
            description     :"Un super bar dansant",
            color           : "black", 
        }
      ]
        // pseudo : "inconnu",
        // searchStringUser: "",
      }
      
    }

    

    componentDidMount(){
      base.syncState(`/`, {
          context: this,
          state: 'establishments',
          asArray: true
      });
  }
  componentDidMount(){
    base.post(`establishments`,{
      data: this.state.establishments
    });
  }

    handleChange(e){
      this.setState({searchStringUser: e.target.value});
    }

    randomPseudo = () => {
      let randomPseudo  = ""
      const possible    = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      const size        = Math.floor(Math.random() * 10) + 5
      for( let i=0; i < size; i++) {
        randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      this.setState({
        pseudo : randomPseudo
      })
    }
  
 
    
  render() {
    const establishmentFilter = establishments.filter((searchText) => {
      let search = searchText.name + " " + searchText.description;
      return search.toLowerCase().match(this.state.searchStringUser);
    })
    const listEstablishment = establishments.map( (establishment) => {
      return (
        <Establishment 
          key={establishment.id} 
          establishment={establishment}
        />
      )
    })
  
    return (
      <div className="App">
        <header className="App-header" style={{background:this.props.background, 
                                               fontFamily:this.props.fontFamily,
                                               color:this.props.color}}>
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome "{ this.state.pseudo }" to { this.props.title }</h1>
        </header>
        <div className="App-intro">
          <p><a onClick={ this.randomPseudo } >Changer le pseudo !</a></p>
          <input
            type="text"
            placeholder="chercher"
            value={this.state.searchStringUser}
            onChange={this.handleChange.bind(this)}
            />
            <form>
          <label>
            Name:
            <input type="text" name="name" placeholder="ajouter un bar" />
            Description:
            <input type="text" name="name" placeholder="Description du bar" />
          </label>
          <input type="submit" value="Submit" />
        </form>
          <section>
            { listEstablishment }
          </section>
        </div>
      </div>
    );
  }
}



export default App;
