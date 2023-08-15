import './App.css';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path='/detail/:movie_id' element={<MovieDetails/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
