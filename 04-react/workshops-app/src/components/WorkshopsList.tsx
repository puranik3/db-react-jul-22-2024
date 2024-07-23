import { useEffect, useState } from 'react';
import { getWorkshops } from "../services/workshops";
import type { IWorkshop } from "../services/workshops";

const WorkshopsList = () => {
    // data that changes with time is called state
    // const [ str, setStr ] = useState('hello'); // [ 'hello', function ]

    // [ data, setter_function_for_changing_the_data ] -> destructuring
    const [ workshops, setWorkshops ] = useState( [] as IWorkshop[] );

    // For side-effects we use useEffect()
    // Hooks are a set of methods in React - begins with use*()
    // hooks can be used ONLY in function component
    // In class-based components, special methods were used to run side-effects - componentDidMount() - "lifecycle methods"
    // componentDidMount() -> to execute logic when component shows up on the screen
    // componentDidUpdate()
    // componentWillUnmount()
    // useEffect() plays the role of these 3 lifecycle methods in function components
    useEffect(
        () => {
            const helper = async () => {
                const data = await getWorkshops(1);
                console.log( data );
                setWorkshops( data ); // React updates the state, and updates the UI
            };
            
            helper();
        },
        []
    );

    // A Fragment - <></> is simply used to group elements
    return (
        <>
            <h1>List of workshops</h1>
            <hr />
            <div>Numbers of workshops = {workshops.length}</div>
            <ol>
                {
                    // [
                    //     <li>Angular</li>,
                    //     <li>React JS Masterclass</li>,
                    //     <li>Crash course in MongoDB</li>,
                    //     ,,,,
                    // ]
                    workshops.map(
                        workshopObj => <li key={workshopObj.id}>{workshopObj.name}</li>
                    )
                }
            </ol>
        </>
    );
}
 
export default WorkshopsList;