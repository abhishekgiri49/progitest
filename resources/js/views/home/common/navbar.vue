<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Progi Test</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"
                            >Vehicle Biding</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
const { getToken, removeToken, removeUser } = require("../../../lib/storage");
import Promise from "../../../lib/Mixins/ExtendedPromises";

export default {
    name: "navbar",

    mixins: [Promise],
    data() {
        return {};
    },

    methods: {},
};
</script>

<style lang="scss" scoped>
.btn-user {
    text-transform: capitalize !important;
}
</style>
