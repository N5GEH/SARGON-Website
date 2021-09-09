<template>
    <Layout>
        <div class="container xs:flex-col sm:flex mx-auto my-16 overflow-x-hidden text-normal">
            <TreeBrowser
                :node="root"
                @onClick="nodeWasClicked"
             />
        </div>
    </Layout>
</template>


<script>
import TreeBrowser from '../components/TreeBrowser.vue'
import root from '../root.json'

export default{
    name: 'app',
    data(){
        return{
            root,
        }
    },
    methods:{
        nodeWasClicked(node){
          alert(node.name);   
        }
    },
    components: {
        TreeBrowser
    }
}
</script>

<style scoped>

   

</style>
