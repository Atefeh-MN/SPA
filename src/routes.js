import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUS';
import NotFound  from './pages/NotFound.js';
import Blog from './components/Blog';
import BlogsPage from './pages/BlogsPage';
import PostPage from './pages/PostsPage';

const routes = [
    { path: '/post/:id([0-9]+)?', component: PostPage },
    { path: '/blogs/:id', component: Blog },
    { path: '/blogs', component: BlogsPage },
    { path: '/about-us', component: AboutUs },
    { path: '/', component: HomePage, exact: true },
    {component:NotFound}
];

export default routes;
