<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/dashboard"><i class="fa fa-fw fa-solid fa-gauge-high"></i> Dashboard</RouterLink>
                        </li>

                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/categorias"><i class="fa fa-fw fa-solid fa-tags"></i> Categorias</RouterLink>
                        </li>

                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/produtos"><i class="fa fa-fw fa-solid fa-database"></i> Produtos</RouterLink>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="logout()"><i class="fa fa-fw fa-solid fa-power-off"></i> Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        }
    }
</script>
