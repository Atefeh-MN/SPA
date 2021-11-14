import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUS';
import  NotFound  from './pages/NotFound.js';

const routes = [
    { path: '/', component: HomePage, exact: true },
    { path: '/about-us', component: AboutUs },
    {component:NotFound}
];

export default routes;
