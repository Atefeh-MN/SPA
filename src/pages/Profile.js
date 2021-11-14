import { Route } from "react-router";
import Dashboard from "../components/Dashboard";
import Downloads from "../components/Downloads";
import SideBar from "../components/SideBar";

const Profile = () => {
    return (
    <>
        <h4>wellcome atefe !!!!</h4>
        <SideBar />
        <Route path='/profile/dashboard' component={Dashboard} />
        <Route path='/profile/downloads' component={Downloads}/>
    </>);
}
 
export default Profile;