import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getWorkshopById } from "../services/workshops";
import type { IWorkshop } from "../services/workshops";

// interface IParams {
//     workshopId: string;
// }

const WorkshopDetails = () => {
    const [workshop, setWorkshop] = useState<IWorkshop | null>(null);
    console.log(useParams());

    // object destructuring
    // const { workshopId } = useParams<IParams>(); // { workshopId: "3" }
    const { workshopId } = useParams(); // { workshopId: "3" }
    const workshopIdStr = workshopId as string;

    useEffect(() => {
        const helper = async () => {
            const data = await getWorkshopById(+workshopIdStr);
            setWorkshop(data);
        };

        helper();
    }, []);

    return (
        <div>
            {workshop !== null && (
                <>
                    <h1>{workshop.name}</h1>
                    <hr />
                </>
            )}
        </div>
    );
};

export default WorkshopDetails;
