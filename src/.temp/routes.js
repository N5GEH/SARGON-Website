const c1 = () => import(/* webpackChunkName: "page--src--pages--start-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Start.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--webpage-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/templates/Webpage.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--resources-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Resources.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--ontology-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Ontology.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/sinahk/Documents/1. Sargon/1. Sargon/SARGON-Website/src/pages/Index.vue")

export default [
  {
    path: "/start/",
    component: c1
  },
  {
    path: "/resource/",
    component: c2
  },
  {
    path: "/resources/",
    component: c3
  },
  {
    path: "/ontology/",
    component: c4
  },
  {
    path: "/overview/",
    component: c2
  },
  {
    path: "/init/",
    component: c2
  },
  {
    path: "/get-started/",
    component: c2
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
