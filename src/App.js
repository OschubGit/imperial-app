import "./styles/main.scss";
import {
  BrowserRouter as Router, Route,
  Routes,
} from "react-router-dom";
import Layout from './containers/Layout';
import Content from './containers/Content';
import Starships from './containers/Starships';

function App() {
  return (
    <Router>
        <Layout>
      <Routes>
          <Route path="/" exact element={<Content/>}/>
          <Route path="/starships" element={<Starships/>}/>
          <Route path="/people" element={<Starships/>}/>
          <Route path="/vehicles" element={<Starships/>}/>
      </Routes>
    </Layout>
    </Router>
  );
}

export default App;
