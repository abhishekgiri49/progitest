import Repository from "./Repository";

const resource = "/user";

export default {
    get() {
        return new Promise((resolve, reject) => {
            Repository.get(`${resource}/list`)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },

    find(id) {
        return new Promise((resolve, reject) => {
            Repository.get(`${resource}/${id}`)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },

    create(payload) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}`, payload)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },

    update(id, payload) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/${id}`, payload)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },

    delete(id) {
        return new Promise((resolve, reject) => {
            Repository.get(`${resource}/delete/${id}`)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    view(id) {
        return new Promise((resolve, reject) => {
            Repository.get(`${resource}/profile`)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updateProfile(payload) {
        return new Promise((resolve, reject) => {
            Repository.post(`/update/profile`, payload)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updatePassword(payload) {
        return new Promise((resolve, reject) => {
            Repository.post(`/update/password`, payload)
                .then(response => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },

}
