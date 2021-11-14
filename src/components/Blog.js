import { Link } from "react-router-dom";
import queryString from 'query-string'

const Blog = ({location,match}) => {

    const parsed = queryString.parse(location.search);
    console.log(parsed);
    const id = match.params.id ;
    return (
        <div>
            <h2>Blogs details -{id}</h2>
            <Link to='/blogs'>Go to Blogs pages</Link>
            <br/>
            <Link to={ `/blogs/${parseInt(id) + 1}` }>Go to next page</Link>
        </div>
     );
}
 
export default Blog;