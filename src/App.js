
import './App.css';
import TermekUrlap from './components/Admin/TermekUrlap';
import Termekek from './components/Public/Termekek';

function App() {
  return (
    <div className="container">
      <header className="App-header">
       <h1>Fakestrore webáruház</h1>
      </header>
      <section className= "p-5">
        <TermekUrlap/>
      </section>
      <article>
      <Termekek/>
      </article>
     
    </div>
  );
}

export default App;
