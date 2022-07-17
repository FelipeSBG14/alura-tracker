<template>
    <BoxTracker>
        <div class="columns">
            <div class="column is-7">
                    {{ tarefa?.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <CronometroTracker :tempoEmSegundos="tarefa?.duracaoEmSegundos" />
            </div>
        </div>

    </BoxTracker>

</template>

<script lang="ts">

import ITarefa from "@/interfaces/ITarefa";
import { defineComponent, PropType } from "vue";
import CronometroTracker from "./cronometro.vue";
import BoxTracker from "./box.vue"

export default defineComponent({
    name: 'TarefaTracker',
    components: {
        CronometroTracker,
        BoxTracker,
    },
    props: {
    tarefa: {
        type: Object as PropType<ITarefa>,
        requred: true, 
    },
}
});

</script>

<style scoped>

</style>