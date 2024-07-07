<template>
    <div>
        <Header/>

        <main class="container">
            <h1>Produtos</h1>
            <hr/>

            <div class="card">
                <div class="card-header bg-dark">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <select id="categoria" class="form-control" @change="onChange($event)">
                                    <option v-for="categoria in $store.state.categorias" :key="categoria.id" :value="categoria.id">{{ categoria.nome }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#categoriaModal"><i class="fa fa-fw fa-plus"></i>&nbsp; Cadastrar Categoria</button>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#produtoModal"><i class="fa fa-fw fa-plus"></i>&nbsp; Cadastrar Produto</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body p-0">
                    <table class="table table-striped table-hover table-bordered">
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
                    <Pagination :data="$store.state.produtos" :params="{id_categoria: categoria}"/>
                </div>
            </div>
        </main>

        <Categoria/>
        <Produto/>
    </div>
</template>
    
<script>
    import Header from '@/components/Header.vue'
    import Categoria from '@/components/Categoria.vue';
    import Pagination from '@/components/Pagination.vue';
    import Produto from '@/components/Produto.vue'

    export default {
        components: {
            Header,
            Categoria,
            Pagination,
            Produto
        },
        data() {
            return {
                categoria: null
            }
        },
        methods: {
            onChange(event) {
                this.categoria = event.target.value;
                this.$store.dispatch('listarProdutos', {
                    params: {
                        id_categoria: this.categoria
                    }
                });
            }
        },
        mounted() {
            this.$store.dispatch('listarProdutos', {});
            this.$store.dispatch('listarCategorias', {});
        }
    }
</script>
  
<style scoped>
    main {
        margin-top: 20px;
    }
</style>
