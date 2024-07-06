<template>
    <nav aria-label="Page navigation example">
        <h6>{{ mountMessage }}</h6>
        <ul class="pagination">
            <li class="page-item"><a :class="isFirstPage" href="#" @click="navigateDown()" title="Página Anterior"><i class="fa fa-fw fa-angle-left"></i></a></li>
            <li class="page-item"><a :class="isLastPage" href="#" @click="navigateUp()" title="Página Posterior"><i class="fa fa-fw fa-angle-right"></i></a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            data: {
                type: Object,
                default: () => ({})
            }
        },

        data() {
            return {
                max_page: this.data.last_page,
                current_page: parseInt(this.data.current_page)
            }
        },

        methods: {
            navigateDown() {
                this.$store.dispatch('listarProdutos', {
                    params: {
                        page: this.data.current_page - 1
                    }
                });
            },

            navigateUp() {
                this.$store.dispatch('listarProdutos', {
                    params: {
                        page: this.data.current_page + 1
                    }
                });
            }
        },

        computed: {
            isFirstPage() {
                return this.data.current_page <= 1 ? 'page-link disabled' : 'page-link';
            },

            isLastPage() {
                return this.data.current_page >= this.max_page ? 'page-link disabled' : 'page-link';
            },

            mountMessage() {
                return `Listando ${this.data.from} de ${this.data.to} num total de ${this.data.total} registros`;
            }
        }
    }
</script>
