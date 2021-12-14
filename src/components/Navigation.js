import { NavLink, useParams } from "react-router-dom";
import './nav.css'
const items = [
    {name: 'Home', to: '/', exact: true},
    { name: 'About US', to: '/about-us' },
    {name:'Profile',to:'/profile'},
    { name: 'Blogs', to: '/blogs' },
    {name:'Post',to:'/post'}
]

const Navigation = () => {
    const params = useParams();
    return (
        
        <nav>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.to}>
                            <NavLink to={item.to} className={(navData) => (navData.isActive ?'activelink':'')}>
                            {item.name}
                            </NavLink>
                    </li>
                )})}
               
            </ul>
        </nav>
    
       );
}
 
export default Navigation;