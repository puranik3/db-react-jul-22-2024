import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";

import { getWorkshopById } from "../services/workshops";
import type { IWorkshop } from "../services/workshops";

// interface IParams {
//     workshopId: string;
// }

const WorkshopDetails = () => {
    const [workshop, setWorkshop] = useState<IWorkshop | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    console.log(useParams());

    // object destructuring
    // const { workshopId } = useParams<IParams>(); // { workshopId: "3" }
    const { workshopId } = useParams(); // { workshopId: "3" }
    const workshopIdStr = workshopId as string;

    useEffect(() => {
        const helper = async () => {
            try {
                const data = await getWorkshopById(+workshopIdStr);
                setWorkshop(data);
                setLoading(false);
            } catch (error) {
                setError(error as Error);
                setLoading(false);
            }
        };

        helper();
    }, []);

    return (
        <div>
            {loading === true && (
                <div className="text-center">
                    <Spinner />
                </div>
            )}
            {error !== null && <Alert variant="danger">{error.message}</Alert>}
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
