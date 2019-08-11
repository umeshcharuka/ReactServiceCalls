import React, { Component } from 'react';
import Todos from './todos';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    let ddd=[];
    // axios.get('http://localhost:3500/customer/getALLData').then(res => {
    //   console.log("results are here", res);
    //   this.setState({posts:res.data})
    // })
    //added comment
    fetch('http://localhost:3500/customer/getALLData')
      .then(response => response.json())
      .then(data => {
        console.log("data here",data);
       ddd=data;
       this.savedata(ddd);
       console.log("ddd",ddd);
    }
        );

      



     
  }



  savedata(ddd){
    console.log("addadada",ddd[0]);
    fetch('http://localhost:3500/customer/Save', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(ddd[3]),
     }).then(
      a=>{
        if (a.ok) {
          return a.json();
        } else {
          throw new Error('Something went wrong');
        }
      }
     ).then(
       a=>{
        alert("Succcessfully saved");
       }
      
     )
     .catch(a=>{
       console.log("errrer",a);
       alert("error occured");
     });
     console.log("save");

  }

  

  state = {
    todos: [
      {
        id: 1,
        name: "wanna play harder"
      },
      {
        id: 2,
        name: "Not wanna play harder"
      }

    ],
    posts: []
  }

  delete = (id) => {
    console.log(id);
    let data = this.state.todos.filter(a => { return a.id != id }
    )
    this.setState({ todos: data });
  }
  render() {
    const {posts}=this.state;
    const downloadedlist= posts.length? (
      posts.map(
        p=>{
          return <div key={p.Id}>
            <p>
              {p.Name}

            </p>
            <pre>{p.Email}</pre>
          </div>
        }
      )
    ) :(
      <div>No data ...................................</div>
    )
    return (
      <div className="App">
        <Todos todos={this.state.todos} deleteT={this.delete} />
        {downloadedlist.length}
        {downloadedlist}
      </div>
    );
  }
}

export default App;
