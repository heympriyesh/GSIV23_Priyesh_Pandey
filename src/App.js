import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import MovieList from './pages/MovieList';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieList/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
