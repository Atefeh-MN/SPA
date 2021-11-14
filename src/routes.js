import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUS';
import  NotFound  from './pages/NotFound.js';
import Blog from './components/Blog';
import BlogsPage from './pages/BlogsPage';

const routes = [
    { path: '/blogs/:id', component: Blog },
    { path: '/blogs', component: BlogsPage },
    { path: '/about-us', component: AboutUs },
    { path: '/', component: HomePage, exact: true },
    {component:NotFound}
];

export default routes;
