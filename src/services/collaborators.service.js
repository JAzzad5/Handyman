const API_BASE_URL = require('@/app.config');
const axios = require('axios');


class Collaborators {
    static BASE_URL = `${API_BASE_URL}/servicios`;

    constructor() { }

    async obtenerColaboradores() {
        return axios
            .get(`${Collaborators.BASE_URL}/all`)
            .then(res => res.data);
    }

    async obtenerColaborador(id) {
        return axios
            .get(`${Collaborators.BASE_URL}/${id}`)
            .then(res => res.data);
    }
}

module.exports = Collaborators;