<template>
    <div :class="mountCssClass" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
                {{ mensagem }}
            </div>

            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            params: {
                type: Object,
                default: () => ({})
            }
        },
        data() {
            return {
                mensagem: this.params.message
            }
        },
        computed: {
            mountCssClass() {
                return `toast align-items-center text-bg-${this.params.color} border-0`
            }
        }
    }
</script>