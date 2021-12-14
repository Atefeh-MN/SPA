import { Route,Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUS';
import NotFound from './pages/NotFound.js';
import Blog from './components/Blog';
import BlogsPage from './pages/BlogsPage';
import PostPage from './pages/PostsPage';
import Profile from './pages/Profile';
import Dashboard from "./components/Dashboard";
import Downloads from "./components/Downloads";



function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/post/:id([0-9]+)?' element={<PostPage />}/>
        <Route path='/blogs/:id' element={<Blog />}/>
        <Route path='/blogs' element={<BlogsPage />}/>
        <Route path='/profile/*' element={<Profile />}>
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='downloads' element={<Downloads/>} />
        </Route>
        <Route path='/about-us'element={<AboutUs />}/>
        <Route path='/' element={<HomePage />}/>
        <Route element={<NotFound />}/>
      </Routes>
    </Layout>
      
    
  );
}

export default App;
