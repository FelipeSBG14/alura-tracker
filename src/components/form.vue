<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-8" role="forms" area-label="formulario para ciração de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar ?" v-model="descricao" />
            </div>
            <div class="column">
                <TemporizadorTracker @ao-temporizador-finalizado="finalizarTarefa"/>
                <div class="lista">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import CronometroTracker from "./cronometro.vue";
import TemporizadorTracker from "./temporizador.vue";

export default defineComponent({
    name: "FormularioTracker",
    emits: ['aoSalvarTarefa'],
    components: { TemporizadorTracker },
    data() {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number) : void {
            console.log('Tempo da tarefa', tempoDecorrido)
            console.log('Descricao da tarefa', this.descricao)
            this.$emit('aoSalvarTarefa', {duracaoEmSegundos: tempoDecorrido, descricao: this.descricao})
            this.descricao = ''
        }
    }
});

</script>

<style>

.form {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}

</style>