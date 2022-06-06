
import { Link, useLoaderData } from "remix";

export const loader = async() => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users")
    // const data = await res.json()
    
    const data = {
        posts: [
            { _id: 1, userId: 1, title: "This is the post no 01" },
            { _id: 2, userId: 2, title: "This is the post no 02" },
            { _id: 3, userId: 3, title: "This is the post no 03" },
        ]
    }
  return data;
}

const index = () => {
    const {posts} = useLoaderData()
    return (
        <div>
            <h2>Posts</h2>
            <Link to="/post/newPost" className="btn">
                Create Post
            </Link>
      <ul className="posts-list">
        {posts.map(post => (
          <li key={post._id}>
            <Link to={post.userId}  >
                    <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default index;