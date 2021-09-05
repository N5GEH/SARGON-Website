const fs = require("fs");
const path = require("path");
const { pathPrefix } = require("./gridsome.config");
const cacheVersion = new Date().getTime();



module.exports = function (api, options) {
  api.loadSource((store) => {
    /*
        Clean the pathPrefix
        ====================
        not used =>  '/'
        ''       =>  '/'
        '/'      =>  '/'
        '/path'  =>  '/path'
        'path'   =>  '/path'
        'path/'  =>  '/path'
        '/path/' =>  '/path'
        */
        const cleanedPathPrefix = `${
          pathPrefix
              ? ["", ...pathPrefix.split("/").filter((dir) => dir.length)].join("/")
              : ""
      }`;
      /*
        Query
        =====
        <static-query>        <!-- or a page-query -->
        {
          metadata{
            pathPrefix
          }
        }
        </static-query>
        Requests for static files should look like this:
        ===============================================
        Using static-queries: axios( this.$static.metadata.pathPrefix + "/fileName" )
        Using page-queries,   axios( this.$page.metadata.pathPrefix   + "/fileName" )
        */
        store.addMetadata("pathPrefix", cleanedPathPrefix);
        store.addMetadata("cacheVersion", cacheVersion);

        let usageData = {}
        const usageDetails = store.getCollection('UsageDetail').collection.data;
        usageDetails.forEach(usageDetail=>{
            usageDetail.targets.forEach(id=>{
                if(!usageData[id]){
                    usageData[id] = []
                }
                usageData[id].push(usageDetail.id)
            })
        })


  })
  
}
