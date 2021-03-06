import { Link } from "react-router-dom";

const items = [
    { name: 'blog-1', to: '/blogs/1' },
    { name: 'blog-2', to: '/blogs/2' },
    { name: 'blog-3', to:'/blogs/3'}
]
const BlogsPage = () => {

    return (
        <>
            <h2>Blogs</h2>
            {items.map((item) => {
                return (
                    <li key={item.to}>
                        <Link to={{ pathname: item.to, search: "sort=name&age=33" }}>
                            {item.name}
                        </Link>
                    </li>
                )
            })}
            
        </>
     );
}
 
export default BlogsPage;