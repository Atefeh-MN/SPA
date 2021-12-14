import { Outlet} from "react-router";
import SideBar from "../components/SideBar";

const Profile = () => {
    return (
    <>
        <h4>wellcome atefe !!!!</h4>
            <SideBar />
            <Outlet/>
       
    </>);
}
 
export default Profile;