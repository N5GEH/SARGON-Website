<template>
    <Layout>
         
         <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16">
             <div class="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
                <h1> Tree Browser </h1>
                <TreeBrowser
                    :node="root"
                    @onClick="nodeWasClicked"
                />
             </div>
         </div>

        <!-- <div class="grid grid-flow-col gap-3">
            <div class="bg-blue-100 col-span-1 test">
                <TreeBrowser
                    :node="root"
                    @onClick="nodeWasClicked"
                />
            </div>
            <div class="bg-red-100 col-span-4">
                <h1 v-if="Sina !== 'Bullshit'">{{Sina}}</h1>
            </div>
        </div>  -->




        
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
            this.Sina = node.name;  
        }
    },
    components: {
        TreeBrowser
    }
}
</script>

<style scoped>

.max-h-64 {
    max-height: 16rem;
}
/*Quick overrides of the form input as using the CDN version*/
.form-input,
.form-textarea,
.form-select,
.form-multiselect {
    background-color: #edf2f7;
}

.test{
    min-width:100px; 
    display: inline-block
}
    
    
</style>
