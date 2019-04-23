import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;
  render(){
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {value => value.language === 'english' ? 'Name' : 'Nombre'}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
};

export default Field;