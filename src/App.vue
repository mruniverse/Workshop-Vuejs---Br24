<template>
    <v-app>
        <v-app-bar app height="50" color="primary" dark>
            <div class="d-flex align-center">
                <v-img
                    alt="Br24 Logo"
                    src="./assets/logo-br24.png"
                    transition="scale-transition"
                    width="100"
                />
            </div>

            <v-spacer></v-spacer>

            <v-btn href="" target="_blank" text>
                <span class="mr-2">Register</span>
                <v-icon>mdi-account-plus</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        //
    }),
};
</script>

<style scoped>
main {
    background-color: red; /* For browsers that do not support gradients */
    background-image: linear-gradient(to bottom right, #2fc6f6, #2f61f6);
}
</style>