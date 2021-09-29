<template>
    <Layout>
        <div class="grid grid-rows-3 grid-flow-col gap-4 container xs:flex-col sm:flex mx-auto my-16 overflow-x-hidden text-normal">
            <div class="row-span-3">
                <TreeBrowser
                    :node="root"
                    @onClick="nodeWasClicked"
                />
            </div>
            <div class="col-span-2">
                {{Sina}}
            </div>
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
            Sina: '',
            root,
        }
    },
    methods:{
        nodeWasClicked(node){
            // if(!isNaN(node.info)){
            //     this.Sina = node.info;
            // }else{
            //     this.Sina = node.name; 
            // }
            this.Sina = node.info;  
        }
    },
    components: {
        TreeBrowser
    }
}
</script>

<style scoped>

   

</style>
