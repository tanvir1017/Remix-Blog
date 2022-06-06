import { useParams } from "remix";
const $forumsId = () => {
    const param = useParams()
    return (
        <div>
            <h2>The nested forums is {param.forumsId}</h2>
        </div>
    );
};

export default $forumsId;