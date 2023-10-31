import './App.css';

let title = "Welcome to My Application";
  // let  person = {
  //   name: 'John',
  //   city: 'Bangalore',
  //   occupation: 'Developer',
  // }
function Profile(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <img src="https://avatars.githubusercontent.com/u/83471987?v=4" alt="Profile Pic"></img>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <h1>{title}!</h1>
      <h2>
        <Profile name="Sai Prathik R"/>
      </h2>
    </div>
  );
}

export default App;