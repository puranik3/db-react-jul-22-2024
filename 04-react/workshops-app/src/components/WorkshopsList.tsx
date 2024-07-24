import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getWorkshops } from "../services/workshops";
import type { IWorkshop } from "../services/workshops";

const WorkshopsList = () => {
    // data that changes with time is called state
    // const [ str, setStr ] = useState('hello'); // [ 'hello', function ]

    // [ data, setter_function_for_changing_the_data ] -> destructuring
    const [workshops, setWorkshops] = useState([] as IWorkshop[]);
    const [page, setPage] = useState(1);

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
                const data = await getWorkshops(page);
                console.log(data);
                setWorkshops(data); // React updates the state, and updates the UI
            };

            helper();
        },
        // [] // run this side-effect when the component shows up on the screen (after first render only)
        // if you dont provide a second argument (array) - the side-effect executes on every render
        [page] // run this side-effect when the component shows up on the screen, and also when the variables mentioned change during a rendering
    );

    function previous() {
        if (page <= 1) {
            return;
        }

        setPage(page - 1);
    }

    function next() {
        setPage(page + 1);
    }

    // toggling description
    const [show, setShow] = useState(false);

    function toggleDescription() {
        setShow(!show);
    }

    // A Fragment - <></> is simply used to group elements
    return (
        <>
            <h1>List of workshops</h1>
            <hr />
            <div>Numbers of workshops = {workshops.length}</div>

            <div className="my-4">
                <div>You are viewing page {page}</div>
                <button
                    onClick={previous}
                    className="btn btn-sm btn-primary me-2"
                >
                    Previous
                </button>
                <button onClick={next} className="btn btn-sm btn-primary me-4">
                    Next
                </button>
                <button
                    onClick={toggleDescription}
                    className="btn btn-sm btn-primary"
                >
                    Toggle description
                </button>
            </div>

            <ListGroup>
                {
                    // [
                    //     <li>Angular</li>,
                    //     <li>React JS Masterclass</li>,
                    //     <li>Crash course in MongoDB</li>,
                    //     ,,,,
                    // ]
                    workshops.map((workshopObj) => (
                        <ListGroupItem key={workshopObj.id}>
                            <Link to={"/workshops/" + workshopObj.id}>
                                {workshopObj.name}
                            </Link>

                            {/* For if-else rendering use ? : (ternary conditional operator) */}
                            {show === true && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: workshopObj.description,
                                    }}
                                ></div>
                            )}
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </>
    );
};

export default WorkshopsList;
