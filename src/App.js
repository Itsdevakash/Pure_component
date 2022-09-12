import logo from './logo.svg';
import './App.css';
import Parent_component from './component/Parent_component';
import Pure_component from './component/Pure_component';
import UseMeno_hook from './component/UseMeno_hook';
import Ref from './component/Ref';
import Ref_function from './component/Ref_function';
function parent(data){

  alert(data)
}
function App() {
  return (
    <div className="App">
      <h1>Send Data Child to Parent Component or Lifting State Up</h1>
      <Parent_component alert={parent} />
      <br></br>
      <h1>Pure Component ( Class Function )</h1>
      <Pure_component/>
    <br></br>

      <h1>useMeno Hook ( Function )</h1>
      <UseMeno_hook/>
      <br></br>

      <h1>Ref ( Class ) </h1>
  <Ref/>
  <br></br>
  
  <h1>Ref ( Function ) </h1>
  <Ref_function/>
    
    </div>
  );
}

export default App;
