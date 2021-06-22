<template>
        <v-row align="center" justify="center" class="centered" no-gutters>
            <v-card color="secondary" class="pa-8">
                <v-form @submit="submit()">
                    <v-text-field
                        v-model="email"
                        label="Email"
                        class="text-field"
                        required
                        outlined
                        dark
                        filled
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Senha"
                        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPass = !showPass"
                        :type="showPass ? 'text' : 'password'"
                        required
                        outlined
                        dense
                        dark
                        filled
                    ></v-text-field>
                    <div class="text-center">
                        <v-btn class="signin-btn" type="submit" text color="white" dark>
                            Registrar
                        </v-btn>
                        <v-btn class="signin-btn" type="submit" rounded color="white">
                            Login
                        </v-btn>
                    </div>
                </v-form>
            </v-card>
        </v-row>
</template>

<style scoped>
.centered {
    height: 100%;
    padding-bottom: 50px;
}
.text-field{
  width: 300px;
}
</style>

<script>
export default {
    name: "Login",

    data: () => ({
        email: "",
        password: null,
        showPass: false,
    }),

    methods: {
        async submit() {
          this.$router.push('Home');
        },

        clear() {
            this.email = "";
            this.password = null;
        },
    },
};
</script>
