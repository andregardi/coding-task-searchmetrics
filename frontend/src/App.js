import Container from './components/Container/Container';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <MainContent />
      </Container>
    </div>
  );
}

export default App;
