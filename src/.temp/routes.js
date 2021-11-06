const c1 = () => import(/* webpackChunkName: "page--src--templates--class-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/templates/Class.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--ontology-page-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/templates/OntologyPage.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--start-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Start.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--webpage-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/templates/Webpage.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--resources-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Resources.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--ontology-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Ontology.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Index.vue")

export default [
  {
    path: "/ontology/1.0/classes/Angle/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Building/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Channel/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Close_Command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Floor/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Frequency/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Get_Command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Get_Current_Meter_Value_Command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Get_Meter_Data_Command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Get_Meter_History_Command/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Maqnitute/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Rocf/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Room/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Tenant/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Timestamp/",
    component: c1
  },
  {
    path: "/ontology/1.0/classes/Zone/",
    component: c1
  },
  {
    path: "/ontology/1.0/",
    component: c2
  },
  {
    path: "/start/",
    component: c3
  },
  {
    path: "/resource/",
    component: c4
  },
  {
    path: "/resources/",
    component: c5
  },
  {
    path: "/ontology/",
    component: c6
  },
  {
    path: "/overview/",
    component: c4
  },
  {
    path: "/init/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
