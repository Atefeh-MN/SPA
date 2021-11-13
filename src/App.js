import {BrowserRouter,Route}from 'react-router-dom'
import AboutUs from './pages/AboutUS';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
function App() {
  return (
   
    <BrowserRouter>
      <div>
      <Navigation/>
      <Route path='/' exact={true} component={HomePage} />
      <Route path='/about-us' component={AboutUs}/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
