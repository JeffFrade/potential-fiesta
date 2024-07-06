<template>
    <div class="modal fade" id="produtoModal" tabindex="-1" aria-labelledby="produtoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="produtoModalLabel">Cadastrar Produto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group mb-4">
                        <label for="name"><span class="required">*</span> Nome:</label>
                        <input type="text" id="name" class="form-control" placeholder="Nome" v-model="nome">
                    </div>

                    <div class="form-group mb-4">
                        <label for="categoria"><span class="required">*</span> Categoria:</label>
                        <select id="categoria" class="form-control" v-model="categoria">
                            <option v-for="categoria in $store.state.categorias" :key="categoria.id" :value="categoria.id">{{ categoria.nome }}</option>
                        </select>
                    </div>

                    <div class="form-group mb-4">
                        <label for="situacao"><span class="required">*</span> Situação:</label>
                        <select id="situacao" class="form-control" v-model="situacao">
                            <option value="1">Ativo</option>
                            <option value="0">Inativo</option>
                        </select>
                    </div>

                    <div class="form-group mb-4">
                        <label for="preco"><span class="required">*</span> Preço:</label>
                        <input type="text" id="preco" class="form-control" placeholder="Preço" v-model="preco">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="fa fa-fw fa-times"></i> Fechar</button>
                    <button type="button" class="btn btn-primary" @click="storeCategoria()" data-bs-dismiss="modal"><i class="fa fa-fw fa-save"></i> Salvar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .required {
        color: #F00;
    }
</style>

<script>
    export default {
      data() {
        return {
          nome: '',
          categoria: '',
          preco: '',
          foto: '',
          situacao: ''
        }
      },
      methods: {
        storeCategoria() {
          this.$store.dispatch('cadastrarProduto', {
            nome: this.nome,
            id_categoria: this.categoria,
            preco: this.preco,
            foto: this.foto,
            situacao: this.situacao
          });

          this.nome = '';
          this.categoria = '';
          this.preco = '';
          this.foto = '';
          this.situacao = '';
        }
      }
    }
</script>
