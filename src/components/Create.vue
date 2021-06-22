<template>
    <v-container>
        <v-text-field
            label="Escreva aqui"
            v-model="todo"
            filled
            solo
            @keyup.enter="submit()"
        ></v-text-field>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "Create",

    data: () => ({
        todo: "",
    }),

    methods: {
        submit() {
            this.setTodo(this.todo);
            this.todo = '';
        },
        ...mapActions(["setTodo"]),
    },
};
</script>
