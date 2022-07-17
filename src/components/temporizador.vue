<template>

    <div class="is-flex is is-align-items-center is-justify-content-space-between">
        <CronometroTracker :tempoEmSegundos="tempoEmSegundos" />
        <button class="button" @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>

</template>

<script lang="ts">

import { defineComponent } from "vue";
import CronometroTracker from "./cronometro.vue";

export default defineComponent({
    name: "TemporizadorTracker",
    emits: ['aoTemporizadorFinalizado'],
    components: { CronometroTracker },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
        };
    },
    methods: {
        iniciar() {
            //Começar a contagem
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                console.log("Incrementando o contador");
                this.tempoEmSegundos += 1;
            }, 1000),
                console.log("Iniciando");
        },
        finalizar() {
            //Parar contagem
            console.log("Finalizando");
            this.cronometroRodando = false
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        },
    },

})

</script>