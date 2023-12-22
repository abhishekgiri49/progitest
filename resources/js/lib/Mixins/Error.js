module.exports = {
    data() {
        return {
            errors: [],
        };
    },
    methods: {
        hasError(key) {
            return `${key}` in this.errors;
        },

        getError(key) {
            return this.errors[`${key}`][0]
                .replace(".", "")
                .replace(new RegExp("[0-9]", "g"), " ")
                .replace(/#|_/g, " ");
        },

        setDefaultErrors() {
            this.errors = [];
        },
    },
};
