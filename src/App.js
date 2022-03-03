import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;