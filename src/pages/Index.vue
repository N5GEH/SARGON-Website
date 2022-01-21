<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="mt-16 mb-4 sm:mt-0 sm:mb-0">
        <img src="../../static/n5geh.png" alt="hero" class="w-64 mx-auto sm:mx-0">
      </div>
    
      <div class="text-3xl w-full sm:w-3/5 text-center sm:text-left ">
        <div class="text-gray-600">SARGON</div>
        <div class="font-bold text-customcolors-blue1">ontology for smart energy domain</div>
      </div>
    </div> <!-- end hero -->

    <div class="container-inner mx-auto">
      
      <p class="text-xl leading-9 max-w-full">
        SARGON ( <em>SmArt eneRGy dOmain oNtology</em> ) is an open-source effort to define semantic descriptions of the <b>smart assets</b> in building automation and smart grid and <b>the relationships between them</b>. SARGON consists of an <b>extensible dictionary</b> of terms and concepts in and around building and smart grid, a set of relationships for linking and composing concepts together, and a <b>flexible data model</b> permitting seamless integration of SARGON with existing tools and databases. Through the use of powerful Semantic Web technology, SARGON can describe the broad set of Devices and custom features, assets and subsystems found across the building stock in a consistent matter.
      </p>

      </br>

      <p class="text-xl leading-9 max-w-full">
        The source code for SARGON, this website, and related tools are available on <a :href="href" class="text-customcolors-blue2">GitHub</a>.
      </p> 

      </br>
      
     
    </div>
  </Layout>
</template>

<script>
export default {

  data: () => ({
      href: 'https://github.com/N5GEH/SARGON-Website'
  }),

  metaInfo: {
    title: 'Home'
  }
};
</script>


<style>

</style>

<page-query>
{
  overviewPage: webpage(path:"/overview")
    {
      content
    }
}
</page-query>