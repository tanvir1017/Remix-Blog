import { Outlet } from "remix";

const Forums = () => {
    return (
        <div>
            <h2>Hello Forums</h2>
            <Outlet/>
        </div>
    );
};

export default Forums;