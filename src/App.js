import './index.css';
import Nav from './components/Nav';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home"

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/books" exact component={Home} />
      <Nav />
      <Home />
      <Footer />
    </div>
    </Router>
  )
}

export default App;