import { Link } from "react-router-dom";

const Blog = (props) => {
    const id = props.match.params.id ;
    return (
        <div>
            <h2>Blogs details -{id}</h2>
            <Link to='/blogs'>Go to Blogs pages</Link>
            <br/>
            <Link to={`/blogs/${parseInt(id)+1}`}>Go to next page</Link>
        </div>
     );
}
 
export default Blog;