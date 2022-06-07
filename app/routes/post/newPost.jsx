import { Link, redirect } from "remix";
import { db } from "~/utils/db.server";

export const action = async ({ request }) => {
    const form = await request.formData()
    const title = form.get('title')
    const body = form.get('body')
    const fields = { title, body }
    const post = await db.post.create({data:fields})
        return redirect(`/post/${post.id}`)
        
    }

export default function newPost() {
    return (
        <>
            <div className="page-header">      
            <h3>You are welcome to create a new post</h3>
                <Link to="/post" className="btn btn-reverse">
                    Back
                </Link>
                </div>
                <div className="page-content">
                    <form method="POST">
                        <div className="form-control">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="body">Title</label>
                            <textarea type="text" name="body" id="body" />
                        </div>
                <button type="submit" className="btn btn-block"> Add post</button>
                </form>
                </div>

            
        </>
    );
};


