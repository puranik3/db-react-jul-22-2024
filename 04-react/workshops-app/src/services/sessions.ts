import axios from "axios";

/**
 * sessions related API calls go in here
 */

// you code, export etc..
// ....

interface ISession {
    id: number;
    workshopId: number;
    sequenceId: number;
    name: string;
    speaker: string;
    duration: number;
    level: string;
    abstract: string;
    upvoteCount: number;
}

const addSession = async (sessionData: Omit<ISession, "id">) => {
    const response = await axios.post<ISession>(`/sessions`, sessionData, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
};

export { addSession };
