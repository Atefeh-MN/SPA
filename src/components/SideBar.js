import { Link } from "react-router-dom";

const SideBar = () => {
    return ( 
        <aside>
            <ul>
                <li>
                    <Link to='/profile/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/profile/downloads'>Downloads</Link>
                </li>
            </ul>
        </aside>
     );
}
 
export default SideBar;
