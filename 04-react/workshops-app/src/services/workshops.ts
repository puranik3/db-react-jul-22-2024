import axios from 'axios';

const getWorkshops = (page : number = 1) => {
    // then function passed to then() when the data is successfully obtained from the backend
    return axios
        .get( `/workshops`, {
            params: {
                _page: page
            }
        })
        .then(response => {
            // console.log( response.data );
            return response.data;
        })
};

export {
    getWorkshops
}