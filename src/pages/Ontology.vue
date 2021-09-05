<template>
    <Layout>
        <div class="container xs:flex-col sm:flex mx-auto my-16 overflow-x-hidden text-normal">
            <TreeBrowser />
        </div>
    </Layout>
</template>


<script>
import TreeBrowser from '../components/TreeBrowser.vue'
export default{
    name: 'app',
    components: {
        TreeBrowser
    }
}
</script>

<style scoped>

   

</style>
