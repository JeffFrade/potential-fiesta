<template>
    <div>
        <Header/>

        <main>
            <h1>Logado</h1>
        </main>
    </div>
</template>
    
<script>
    import Header from '@/components/Header.vue'

    export default {
        components: {
            Header
        }
    }
</script>
  
<style scoped>
    main {
        margin-top: 20px;
    }
</style>
