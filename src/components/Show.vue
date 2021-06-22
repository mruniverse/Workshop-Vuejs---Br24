<template>
    <v-container class="mt-n6">
        <v-card elevation="4" class="grayText ma-0 pa-1">
            <div v-if="todos.length > 0">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th class="pa-2">Meus Todos</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(todo, index) of todos" :key="index">
                            <td class="pa-4">
                                <div>
                                    <v-row no-gutters justify="center">
                                        <v-btn icon @click="deleteTodo(index)">
                                            <v-icon>mdi-check</v-icon>
                                        </v-btn>
                                    </v-row>
                                </div>
                            </td>
                            <td class="pa-4">
                                <div>
                                    <v-row no-gutters justify="center">
                                        {{ todo }}
                                    </v-row>
                                </div>
                            </td>
                            <td class="pa-4">
                                <div>
                                    <v-row no-gutters justify="center">
                                        <v-btn icon @click="deleteTodo(index)">
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </v-row>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </v-card>
    </v-container>
</template>

<style>
table,
th,
td {
    border: 2px solid #e3ebf3;
    border-collapse: collapse;
}

table {
    table-layout: auto;
    width: 100%;
}

tbody tr:nth-of-type(odd) {
    background-color: #f5f7fa;
}

.grayText {
    color: #545b62 !important;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Show",

    data: () => ({}),

    computed: {
        ...mapGetters(["todos"]),
    },
    methods: {
        ...mapActions(["deleteTodo"]),
    },
};
</script>
