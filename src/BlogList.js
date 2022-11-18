
const BlogList = ({blogs, header, handleDelete}) => {

    return (
        <div>
            <h2>{ header }</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>written by { blog.author }</p>
                <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
            </div>
        ))}
        </div>
    )
}
 
export default BlogList;