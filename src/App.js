import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer';
import { Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <PortfolioContainer/>
      <Footer/>
      <Form/>
    </div>
  );
}

export default App;