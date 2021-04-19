import './HeaderText.scss';


function HeaderText({headline,children}) {
  

  return (
    <div className="headerText">
      <h1 className="headerText__headline">{headline}</h1>
     {children}
    </div>
  );
}

export default HeaderText;
