import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';

class Button extends React.Component {
  renderSubmit(language){
    return  language === 'english' ? 'Submit' : 'Enviar';
  }

  render(){
    return (
      <ThemeContext.Consumer>
        {value => 
          <button className={`ui button ${value.color}`}>
            <LanguageContext.Consumer>
              { ({language}) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
          </button>
        }
      </ThemeContext.Consumer>
      
    );
  }
};

export default Button;