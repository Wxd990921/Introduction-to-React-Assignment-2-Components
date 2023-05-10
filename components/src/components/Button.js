/* 
  Function components are JS functions that return React elements.
  Function compoents have
*/
function Button(props) {
    return (
      <button className={props.isLoggedIn ?'red' : 'green'}>
       {props.isLoggedIn ? 'log out': 'Log in'}
      </button>
    )
  }
  
  export default Button;