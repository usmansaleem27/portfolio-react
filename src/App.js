import './App.css';
import Header from './MyComponents/Header';
import './responsive.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NewPage from './MyComponents/NewPage';
import Footer from './MyComponents/Footer';
import ContactPage from './MyComponents/ContactPage';


function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route exact path='/' element={<Header/>}/>
          <Route path='/new_page' element={<NewPage/>}/>
          <Route path='/contact_page' element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
