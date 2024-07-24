import axios from "axios";

// using then()
// const getWorkshops = (page : number = 1) => {
//     // then function passed to then() when the data is successfully obtained from the backend
//     return axios
//         .get( `/workshops`, {
//             params: {
//                 _page: page
//             }
//         })
//         .then(response => {
//             // console.log( response.data );
//             return response.data;
//         })
// };

interface IWorkshop {
    name: string;
    category: string;
    id: number;
    description: string;
    endDate: string;
    time: string;
    location: {
        address: string;
        city: string;
        state: string;
    };
    modes: {
        inPerson: boolean;
        online: boolean;
    };
    imageUrl: string;
}

// using async..await - async function always return a promises - even if you return an array, it gets wrapped up in a promise
const getWorkshops = async (page: number = 1) => {
    // then function passed to then() when the data is successfully obtained from the backend
    const response = await axios.get<IWorkshop[]>(`/workshops`, {
        params: {
            _page: page,
        },
    });
    return response.data;
};

const getWorkshopById = async (id: number) => {
    // then function passed to then() when the data is successfully obtained from the backend
    const response = await axios.get<IWorkshop>(`/workshops/${id}`);
    return response.data;
};

export { getWorkshops, getWorkshopById };

export type { IWorkshop };
