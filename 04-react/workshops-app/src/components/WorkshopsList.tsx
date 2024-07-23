import { useEffect } from 'react';
import { getWorkshops } from "../services/workshops";

const WorkshopsList = () => {
    useEffect(
        () => {
            getWorkshops(1)
                .then(data => console.log(data))
        },
        []
    );

    // A Fragment - <></> is simply used to group elements
    return (
        <>
            <h1>List of workshops</h1>
            <hr />
        </>
    );
}
 
export default WorkshopsList;