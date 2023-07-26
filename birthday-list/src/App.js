import List from './List';
import Create from './create';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<List />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
