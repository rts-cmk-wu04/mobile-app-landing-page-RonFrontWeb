import { Children } from 'react';
import './HeaderText.scss';


function HeaderText({headline,children}) {
  

  return (
    <div className="headerText">
      <h1 className="headerText__headline">{headline}</h1>
      <p className="headerText__text">{children}</p>
    </div>
  );
}

export default HeaderText;
