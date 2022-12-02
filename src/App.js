import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Card } from './components/Card';


function App() {
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setData(response));
  },[page]);

    function handlePrev(){
      setPage(page - 1);
    }

    function handleNext(){
      setPage(page + 1);
    }

  return data ? (
    <div className="App">
      <h2>API RICK AND MORTY</h2>
        <div>
          <button disabled={page <= 1} onClick={handlePrev}>Prev</button>
          <button disabled={page == data.info.pages }onClick={handleNext}>Next</button>
        </div>

      <main className="containerDosCards">
        {data.results.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </main>
    </div>
  ) : null;
}

export default App;
