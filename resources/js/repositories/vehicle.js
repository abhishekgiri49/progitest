const resource = "/api/vehicle";
import axios from "axios";
export default {
    get() {
        return new Promise((resolve, reject) => {
            axios
                .get(`${resource}/list`)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },

    find(id) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${resource}/${id}`)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },

    create(payload) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${resource}/create`, payload)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },

    update(id, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${resource}/update/${id}`, payload)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },

    delete(id) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${resource}/delete/${id}`)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },
};
