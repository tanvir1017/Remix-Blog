import { useParams } from "remix";

const dynamicPost = () => {
const param = useParams()
    return (
        <div>
            <h2>This is dynamic post {param.postId}</h2>
        </div>
    );
};

export default dynamicPost;