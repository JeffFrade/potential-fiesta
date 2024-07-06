<template>
    <div>
        <Header/>

        <main class="container">
            <h1>Produtos</h1>
            <hr/>

            <div class="card">
                <div class="card-header">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#categoriaModal"><i class="fa fa-fw fa-plus"></i>&nbsp; Cadastrar Categoria</button>
                </div>

                <div class="card-body">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Categoria</th>
                                <th>Preço</th>
                                <th>Situação</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="produto in $store.state.produtos.data" :key="produto.id">
                                <td>{{ produto.id }}</td>
                                <td>{{ produto.nome }}</td>
                                <td>{{ produto.categoria.nome }}</td>
                                <td>{{ produto.preco }}</td>
                                <td>{{ produto.situacao ? 'Ativo' : 'Inativo' }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card-footer">
                    <Pagination :data="$store.state.produtos"/>
                </div>
            </div>
        </main>

        <Categoria/>
    </div>
</template>
    
<script>
    import Header from '@/components/Header.vue'
    import Categoria from '@/components/Categoria.vue';
    import Pagination from '@/components/Pagination.vue';

    export default {
        components: {
            Header,
            Categoria,
            Pagination
        },  
        mounted() {
            this.$store.dispatch('listarProdutos', {});
        }
    }
</script>
  
<style scoped>
    main {
        margin-top: 20px;
    }
</style>
