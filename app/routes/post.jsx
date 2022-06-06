import { Outlet } from "remix";

const post = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default post;