import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen"
import BasketScreen from "./screens/BasketScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"

function App() {
  return (
    <Router>
        <Header />
            <main className="py-3">
                <Container>
                    <Route path='/' component={HomeScreen} exact/>
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/basket/:id?' component={BasketScreen} />
                    <Route path='/login/' component={LoginScreen} />
                    <Route path='/register/' component={RegisterScreen} />
                    <Route path='/profile' component={ProfileScreen} />
                </Container>
            </main>
        <Footer />
    </Router>
  );
}

export default App;