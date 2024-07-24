import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Alert, Image, Spinner } from "react-bootstrap";

import SessionsList from "./SessionsList";

import { getWorkshopById } from "../services/workshops";
import type { IWorkshop } from "../services/workshops";
import AddSession from "./AddSession";

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
                    <div className="row">
                        {" "}
                        {/* Row */}
                        {/* xs, sm, md, lg, xl, xxl */}
                        <div className="col-12 col-sm-6 col-md-4">
                            {" "}
                            {/* Col */}
                            <Image
                                src={workshop.imageUrl}
                                alt={workshop.name}
                                fluid
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-8">
                            <div className="mb-3">
                                {workshop.location.address},{" "}
                                {workshop.location.city},{" "}
                                {workshop.location.state}
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: workshop.description,
                                }}
                            ></div>
                        </div>
                    </div>
                </>
            )}

            <div className="mt-5">
                <Routes>
                    <Route path="" element={<SessionsList />} />
                    <Route path="add" element={<AddSession />} />
                </Routes>
            </div>
        </div>
    );
};

export default WorkshopDetails;
