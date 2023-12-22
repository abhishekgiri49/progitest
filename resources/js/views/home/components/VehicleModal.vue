<!-- VehicleModal.vue -->
<template>
    <div
        class="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add/Edit Vehicle</h5>
                    <button
                        @click="closeModal"
                        type="button"
                        class="close"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="price">Base Price</label>
                            <input
                                v-model="formData.price"
                                type="number"
                                class="form-control"
                                id="price"
                            />
                            <div class="text-danger" v-if="hasError('price')">
                                {{ getError("price") }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="vehicle_type">Vehicle Type</label>
                            <select
                                v-model="formData.vehicle_type"
                                class="form-control"
                                id="vehicle_type"
                            >
                                <option value="Common">Common</option>
                                <option value="Luxury">Luxury</option>
                            </select>
                            <div
                                class="text-danger"
                                v-if="hasError('vehicle_type')"
                            >
                                {{ getError("vehicle_type") }}
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button
                        @click="closeModal"
                        type="button"
                        class="btn btn-secondary"
                    >
                        Cancel
                    </button>
                    <button
                        @click="addVehicle"
                        type="button"
                        class="btn btn-primary"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Error from "../../../lib/Mixins/Error";
export default {
    mixins: [Error],
    props: {
        formData: {
            type: Object,
            required: true,
        },
        closeModal: {
            type: Function,
            required: true,
        },
        addVehicle: {
            type: Function,
            required: true,
        },
        hasError: {
            type: Function,
            required: true,
        },
        getError: {
            type: Function,
            required: true,
        },
    },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
