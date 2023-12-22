<template>
    <table class="table">
        <!-- Table content -->
        <thead>
            <tr>
                <th>ID</th>
                <th>Vehicle Price</th>
                <th>Vehicle Type</th>
                <th>Basic Price</th>
                <th>Special Price</th>
                <th>Association</th>
                <th>Storage</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="vehicle in vehicles" :key="vehicle.id">
                <td>{{ vehicle.id }}</td>
                <td>{{ vehicle.price }}</td>
                <td>{{ vehicle.vehicle_type }}</td>
                <td>{{ vehicle.basic_fee }}</td>
                <td>{{ vehicle.special_fee }}</td>
                <td>{{ vehicle.association_fee }}</td>
                <td>{{ vehicle.storage_fee }}</td>
                <td>{{ vehicle.total }}</td>
                <td>
                    <button
                        @click="showEditModal(vehicle)"
                        class="btn btn-primary btn-sm"
                    >
                        Edit
                    </button>
                    <button
                        @click.prevent="destroy(vehicle.id)"
                        class="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        vehicles: {
            type: Array,
            required: true,
        },

        showEditModal: {
            type: Function,
            required: true,
        },
        destroy: {
            type: Function,
            required: true,
        },
    },
};
</script>
