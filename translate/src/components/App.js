import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';
import LanguageSelector from '../components/LanguageSelector';

class App extends React.Component {
  render(){
    return(
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />

          <ThemeContext.Provider value={{color:'blue'}}>
              <UserCreate />
          </ThemeContext.Provider>
        </LanguageStore>
      </div>
    );
  }
};

export default App;