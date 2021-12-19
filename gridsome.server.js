const fs = require("fs");
const path = require("path");
const pick = require("lodash.pick");
const sargonClasses = require("./static/ontology/all_objects.json");


const { pathPrefix } = require("./gridsome.config");
const cacheVersion = new Date().getTime();

module.exports = function (api, options) {
    api.loadSource((store) => {
    
        const cleanedPathPrefix = `${
            pathPrefix
                ? ["", ...pathPrefix.split("/").filter((dir) => dir.length)].join("/")
                : ""
        }`;
        store.addMetadata("pathPrefix", cleanedPathPrefix);
        store.addMetadata("cacheVersion", cacheVersion);

        

        const classes = store.addCollection({
            typeName: "Class",
        });
        const relationships = store.addCollection({
            typeName: "Relationship",
        });
        const namespaces = store.addCollection({
            typeName: "Namespace",
        });

        sargonClasses.forEach((node) => {
            if (node.path.charAt(0) == "/")
                classes.addNode({
                    id: node.id,
                    name: node.name,
                    version: node.version,
                    type: node.type,
                    types: node.types,
                    namespace: store.createReference("Namespace", node.namespace),
                    path: node.path,
                    labels: node.labels,
                    rdfs_label: node.rdfs_label,
                    generatedLabel: node.generatedLabel,
                    generatedAlias: node.generatedAlias,
                    superclasses: store.createReference("Class", node.superclasses),
                    subclasses: store.createReference("Class", node.subclasses),
                    comments: node.comments,
                    definitions: node.definitions,
                    equivalentClasses: store.createReference(
                        "Class",
                        node.equivalentClasses
                    ),
                    hierarchy: node.hierarchy,
                    inRangeOf: store.createReference("Class", node.inRangeOf),
                    inDomainOf: store.createReference("Class", node.inDomainOf),
                    shaclDetails: node.shaclDetails,
                });
        });
       
    });

    api.beforeBuild(({ config, store }) => {
        // Generate an index file for Fuse to search webpages
    });
};
