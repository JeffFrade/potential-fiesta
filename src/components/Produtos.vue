<template>
    <div>
        <Header/>

        <main class="container">
            <h1>Produtos</h1>
            <hr/>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#categoriaModal"><i class="fa fa-fw fa-plus"></i>&nbsp; Cadastrar Categoria</button>
        </main>

        <Categoria/>
    </div>
</template>
    
<script>
    import Header from '@/components/Header.vue'
    import Categoria from '@/components/Categoria.vue';

    export default {
        components: {
            Header,
            Categoria
        }
    }
</script>
  
<style scoped>
    main {
        margin-top: 20px;
    }
</style>
