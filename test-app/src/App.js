import './App.css';
import NavBar from './components/navBar';
import LandingSection from './components/landingSection';
import BookCollection from './components/bookCollection';
import NewBooks from './components/newBooks';
import Contact from './components/contact';
import Footer from './components/footer';
import { Container, Row, Col} from 'react-bootstrap';







function App() {
  return (
    <div>
      <Container fluid>
        <Row><Col><NavBar /></Col></Row>
         <Row><Col><LandingSection /></Col></Row>
         <Row><Col><BookCollection /></Col></Row>
         <Row><Col><NewBooks /></Col></Row>
         <Row><Col><Contact /></Col></Row>
         <Row><Col><Footer /></Col></Row>
        </Container>
    </div>
  );
}

export default App;
