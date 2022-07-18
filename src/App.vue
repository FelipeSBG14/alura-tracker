<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <LateralBar @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarters conteudo">
     <!--  AQUI VAI A VIEW CORRESPONDENTE -->
     <router-view></router-view>
     
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LateralBar from './components/lateralBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    LateralBar,
  },
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    },
  },

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

.conteudo {
  background-color: var(--bg-primario);
}
</style>
