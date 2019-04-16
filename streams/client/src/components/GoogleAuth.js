import React from 'react';

class GoogleAuth extends React.Component{
  state = {isSignedIn: null}

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:'346784763335-pnesontn09gsqcgi02ksg6n6uni8csu3.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState( {isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn) {
      return (
        <button className="ui green google button" onClick={this.onSignOut}>
          <i className="google icon"/> 
          Sign Out
        </button>
      );
    }else if (!this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon"/> 
          Sign in with Google
        </button>
      );
    }else {
      return null;
    }
  }

  render(){
    return(
      <div>
          {this.renderAuthButton()}
      </div>
    );
  }
};

export default GoogleAuth;