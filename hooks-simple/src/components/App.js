import React from 'react';

class App extends React.Component{
  state = { currentResource: 'posts' }
  render(){
    return (
      <div>
        <div>
          <button onClick={() => this.setState({currentResource:'posts'})}>
            Posts
          </button>
          <button onClick={() => this.setState({currentResource:'todos'})}>
            Todos
          </button>
        </div>
        {this.state.currentResource}
      </div>
    );
  }
}

export default App;