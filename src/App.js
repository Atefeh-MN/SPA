import {Route}from 'react-router-dom'
import AboutUs from './pages/AboutUS';
import HomePage from './pages/HomePage';
import Layout from './Layout/Layout';
function App() {
  return (
      <Layout>
      <Route path='/' exact={true} component={HomePage} />
      <Route path='/about-us' component={AboutUs}/>
      </Layout>
      
    
  );
}

export default App;
