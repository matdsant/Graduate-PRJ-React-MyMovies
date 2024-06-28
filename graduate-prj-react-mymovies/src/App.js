import { Header } from "./components/Header";
import { MoviesList } from "./components/MoviesList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <section>
          <MoviesList movies ={[]} />
        </section>
      </header>
    </div>
  );
}

export default App;
