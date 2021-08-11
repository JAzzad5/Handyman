const API_BASE_URL = require('@/app.config');
const axios = require('axios');


class LoginService {
    static BASE_URL = `${API_BASE_URL}/usuarios/login`;

    constructor() { }

    async login(usuario) {
        return axios
            .post(`${LoginService.BASE_URL}`, usuario)
            .then(res => res.data);
    }
}

module.exports = LoginService;