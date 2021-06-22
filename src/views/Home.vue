<template>
    <div>
        <create />
        <show />
    </div>
</template>

<script>
import Create from "../components/Create.vue";
import Show from "../components/Show.vue";

export default {
    name: "Home",

    components: {
        Create,
        Show,
    },
};
</script>
