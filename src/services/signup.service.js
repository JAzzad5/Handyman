const API_BASE_URL = require('@/app.config');
const axios = require('axios');


class SignUpService {
    static BASE_URL = `${API_BASE_URL}/usuarios/new`;

    constructor() { }

    async signup(usuario) {
        return axios
            .post(`${SignUpService.BASE_URL}`, usuario)
            .then(res => res.data);
    }
}

module.exports = SignUpService;