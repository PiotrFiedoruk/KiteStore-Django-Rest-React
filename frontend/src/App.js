import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
        <Header />
            <main className="py-3">
                <Container>
                    <p>My app here</p>
                </Container>
            </main>
        <Footer />
    </div>
  );
}

export default App;
