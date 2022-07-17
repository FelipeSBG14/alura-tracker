<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <LateralBar @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTracker @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaTracker v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      <BoxTracker v-if="listaEstaVazia">
        Você não está muito produtivo hoje :(
      </BoxTracker>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LateralBar from './components/lateralBar.vue'
import FormularioTracker from './components/form.vue'
import TarefaTracker from './components/tarefa.vue'
import ITarefa from './interfaces/ITarefa'
import BoxTracker from './components/box.vue'

export default defineComponent({
  name: 'App',
  components: {
    LateralBar,
    FormularioTracker,
    TarefaTracker,
    BoxTracker,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema (modoEscuroAtivo : boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    },
  },
  computed: {
    listaEstaVazia () : boolean{
      return this.tarefas.length === 0
    }
  }

});

</script>

<style>

.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo{
  background-color: var(--bg-primario) ;
}
</style>
