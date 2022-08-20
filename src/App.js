import './App.css';
import requests from './request'
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" frtchUrl={requests.fetchTrending}/>
     
    </div>
  );
}

export default App;
