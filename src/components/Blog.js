import { Link } from "react-router-dom";

const Blog = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <h2>Blogs details -{id}</h2>
            <Link to='/blogs'>Go to Blogs pages</Link>
        </div>
     );
}
 
export default Blog;