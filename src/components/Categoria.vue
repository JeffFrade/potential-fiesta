<template>
    <div class="modal fade" id="categoriaModal" tabindex="-1" aria-labelledby="categoriaModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="categoriaModalLabel">Cadastrar Categoria</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group mb-4">
                        <label for="name"><span class="required">*</span> Nome:</label>
                        <input type="text" id="name" class="form-control" placeholder="Nome" v-model="nome">
                    </div>

                    <div class="form-group mb-4">
                        <label for="situacao"><span class="required">*</span> Situação:</label>
                        <select id="situacao" class="form-control" v-model="situacao">
                            <option value="1">Ativo</option>
                            <option value="0">Inativo</option>
                        </select>
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
          situacao: ''
        }
      },

      methods: {
        storeCategoria() {
          this.$store.dispatch('cadastrarCategoria', {
            nome: this.nome,
            situacao: this.situacao
          });

          this.nome = '';
          this.situacao = '';
        }
      }
    }
</script>
