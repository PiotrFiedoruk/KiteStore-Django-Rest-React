import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="">
        <Header />
        <main>
            <Container>
                <h1>Welsome</h1>
            </Container>
        </main>
        <Footer />
    </div>
  );
}

export default App;
