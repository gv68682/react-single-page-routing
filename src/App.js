
import './styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SavedPage from './containers/SavedPage';
import SearchPage from './containers/SearchPage';
import Navi from './components/Navi';
import Pictures from './components/Pictures';

function App() {
  return (
    <Router>
      <Navi />
      {/* <UserContext.Provider value={{savedGifs}}> */}
        <Routes>
            {/* <Route path="/" element={<App />}/>
            <Route index element={<Home />} />
            <Route index element={<Home />} /> */}
            {/* <br/>
            <userContext.Provider value={{gifs:[]}}/> */}
            <Route index element={<div>Homepage</div>} />
            <Route path='/homepage' element={<Pictures />} />
            <Route path='/saved' element={<SavedPage />} />
            <Route path='/search' element={<SearchPage />} />
        </Routes>
      {/* </UserContext.Provider>   */}
    </Router>
  );
}

export default App;
