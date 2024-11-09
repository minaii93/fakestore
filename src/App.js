
import './App.css';
import Termekek from './components/Termekek';

function App() {
  return (
    <div className="container">
      <header className="App-header">
       <h1>Fakestrore webáruház</h1>
      </header>
      <article>
      <Termekek/>
      </article>
     
    </div>
  );
}

export default App;
