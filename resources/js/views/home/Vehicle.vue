<!-- app.vue -->
<template>
    <div class="container">
        <h1 class="mt-4 mb-4">Progi Technical test</h1>
        <button @click="showAddModal" class="btn btn-primary mb-4">
            Add Vehicle
        </button>
        <VehicleTable
            :vehicles="vehicles"
            :showEditModal="showEditModal"
            :destroy="destroy"
        />
        <VehicleModal
            :formData="formData"
            :closeModal="closeModal"
            :addVehicle="addVehicle"
            :hasError="hasError"
            :getError="getError"
        />
    </div>
</template>

<script>
import VehicleTable from "./components/VehicleTable";
import VehicleModal from "./components/VehicleModal";
import Alert from "../../lib/Mixins/Alert";
import Error from "../../lib/Mixins/Error";
import Promise from "../../lib/Mixins/ExtendedPromises";
import VehicleModalVue from "./components/VehicleModal.vue";
export default {
    name: "Vehicle",
    mixins: [Error, Alert, Promise],
    inject: ["vehicleRepository"],
    components: {
        VehicleTable,
        VehicleModal,
    },
    data() {
        return {
            title: "Vehicle",
            showModal: false,
            vehicles: [],
            formErrors: [],
            form: this.buildForm(),
            formData: {
                price: null,
                vehicle_type: "",
            },
        };
    },
    mounted() {
        // Fetch existing vehicles from the api
        this.fetchVehicle();
    },
    methods: {
        async fetchVehicle() {
            this.vehicles = await this.vehicleRepository.get();
        },
        buildForm(formData) {
            return new GPForm({
                price: formData ? formData.price : null,
                vehicle_type: formData ? formData.vehicle_type : null,
            });
        },
        openModal() {
            $("#myModal").modal("show");
        },

        // Function to close the modal
        closeModal() {
            $("#myModal").modal("hide");
            this.formData = {
                price: null,
                vehicle_type: "",
            };
        },
        showAddModal() {
            this.formData = { price: null, vehicle_type: "" };
            this.showModal = true;
            this.openModal();
        },
        showEditModal(vehicle) {
            this.openModal();
            this.formData = { ...vehicle };
        },
        addVehicle() {
            this.form.startProcessing();
            let operation = this.formData.id
                ? this.update(this.formData.id)
                : this.add();
            let editstatus = this.formData.id;
            operation
                .then((data) => {
                    if (operation.isFulfilled()) {
                        this.fetchVehicle();
                        this.closeModal();
                        this.success(
                            "SUCCESS",
                            `Successfully ${editstatus ? "updated" : "added"} !`
                        );
                        this.form.finishProcessing();
                    }
                })
                .catch((err) => {
                    if (operation.isRejected()) {
                        if (err.status === 422) {
                            this.errors = err.data.errors;
                        }
                    }
                    this.checherror();
                    this.form.finishProcessing();
                });
        },
        checherror() {
            console.log("here");
            console.log(this.errors);
        },
        add() {
            return this.response(this.vehicleRepository.create(this.formData));
        },
        update(id) {
            return this.response(
                this.vehicleRepository.update(id, this.formData)
            );
        },
        destroy(id) {
            this.confirm((result) => {
                if (result.value) {
                    let deletion = this.response(
                        this.vehicleRepository.delete(id)
                    );
                    deletion.then((data) => {
                        if (deletion.isFulfilled()) {
                            this.vehicles = this.vehicles.filter(
                                (v) => v.id !== id
                            );

                            this.success("Success!", "Successfully deleted");
                        } else if (deletion.isRejected()) {
                            if (error.response.status === 417) {
                                this.$toastr.e(data.response.data.body);
                            }
                        }
                    });
                }
            });
        },
    },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
