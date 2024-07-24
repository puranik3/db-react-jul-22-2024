import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addSession as addSessionSvc } from "../services/sessions";

interface IProps {
    workshopId: number;
}

// Pattern 2: Controlled components
// destructuring the props object and creating a variable called workshopId
const AddSession = ({ workshopId }: IProps) => {
    // you create a state for every input
    const [sequenceId, setSequenceId] = useState("10");
    const [name, setName] = useState("");
    const [speaker, setSpeaker] = useState("");
    const [duration, setDuration] = useState("");
    const [level, setLevel] = useState("");
    const [abstract, setAbstract] = useState("");

    const [sequenceIdError, setSequenceIdError] = useState("");

    // react-hook-form / Formik for validations

    function validateSequenceId() {
        if (sequenceId.trim() === "") {
            setSequenceIdError("Sequence ID is required");
            return false;
        }

        const numberPat = /^[1-9][0-9]+$/;

        if (numberPat.test(sequenceId.trim()) === false) {
            setSequenceIdError("Sequence ID should be a number");
            return false;
        }

        // no error
        setSequenceIdError("");

        return true;
    }

    function validateForm() {
        // actually we need to collect the return from ALL validations functions, and if all are true, return true, else false
        return validateSequenceId();
    }

    async function addSession(event: FormEvent) {
        event.preventDefault();

        const newSession = {
            // workshopId: workshopId
            // sequenceId: sequenceId
            workshopId,
            sequenceId: +sequenceId.trim(),
            name,
            speaker,
            duration: +duration,
            level,
            abstract,
            upvoteCount: 0,
        };

        console.log(newSession);

        const isValid = validateForm();

        // ready to send this to the backend
        if (isValid) {
            try {
                const data = await addSessionSvc(newSession);
                console.log(data);
                alert("Successfully added");
            } catch (error) {
                alert((error as Error).message);
            }
        }
    }

    return (
        <div>
            <h2>Add a new session</h2>

            <hr />

            <Form onSubmit={addSession}>
                <Form.Group className="mb-3" controlId="sequenceId">
                    <Form.Label>Sequence ID</Form.Label>{" "}
                    {/* for of label is htmlFor in JSX */}
                    <Form.Control
                        type="text"
                        placeholder="Sequence ID"
                        value={sequenceId}
                        onChange={(event) => setSequenceId(event.target.value)}
                    />
                    {
                        <div
                            className="text-danger"
                            style={{ fontSize: "12px" }}
                        >
                            {sequenceIdError}
                        </div>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="New session name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="speaker">
                    <Form.Label>Speaker</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John Doe"
                        value={speaker}
                        onChange={(event) => setSpeaker(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="1.5"
                        value={duration}
                        onChange={(event) => setDuration(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="level">
                    <Form.Label>Level</Form.Label>
                    <Form.Select
                        aria-label="Level of the session"
                        value={sequenceId}
                        onChange={(event) => setLevel(event.target.value)}
                    >
                        <option>Select a level</option>
                        <option>Basic</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="abstract">
                    <Form.Label>Abstract</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={abstract}
                        onChange={(event) => setAbstract(event.target.value)}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    data-testid="btn-submit"
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddSession;
