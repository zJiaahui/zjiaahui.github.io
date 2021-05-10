(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{121:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"Highlight",(function(){return i})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(7),a=(t(0),t(218)),c={slug:"Vue2-TypeScript",title:"\u5728Vue2\u9879\u76ee\u4e2d\u4f7f\u7528TypeScript",author:"zjiaahui",author_title:"\u81ea\u5b66web\u524d\u7aef\u7684\u5c0f\u767d",author_url:"https://github.com/zjiaahui",author_image_url:"https://avatars.githubusercontent.com/u/54567123?s=60&v=4",description:"\u5728Vue2\u9879\u76ee\u4e2d\u4f7f\u7528TypeScript",tags:["Vue2","TypeScript"]},p={permalink:"/blog/Vue2-TypeScript",source:"@site/blog\\2021-04-21-\u5728Vue2\u9879\u76ee\u4e2d\u4f7f\u7528TypeScript.md",description:"\u5728Vue2\u9879\u76ee\u4e2d\u4f7f\u7528TypeScript",date:"2021-04-21T00:00:00.000Z",tags:[{label:"Vue2",permalink:"/blog/tags/vue-2"},{label:"TypeScript",permalink:"/blog/tags/type-script"}],title:"\u5728Vue2\u9879\u76ee\u4e2d\u4f7f\u7528TypeScript",readingTime:4.12,truncated:!0,prevItem:{title:"Vue\u4e2d\u4e3a\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u548c\u503c\uff0c\u5c5e\u6027\u66f4\u65b0\u4e86\u89c6\u56fe\u4e0d\u66f4\u65b0this.$set(obj, key, value)",permalink:"/blog/vue-this.$set"},nextItem:{title:"JS\u7b80\u5199\u5c0f\u6280\u5de7\uff0c\u52a9\u4f60\u9ad8\u6548\u6572\u4ee3\u7801",permalink:"/blog/js-jx"}},l=[{value:"1\u3001Vue2.x\u4f7f\u7528TypeScript",id:"1\u3001vue2x\u4f7f\u7528typescript",children:[{value:"1.1\u3001\u5b89\u88c5\u4f9d\u8d56",id:"11\u3001\u5b89\u88c5\u4f9d\u8d56",children:[]}]},{value:"2\u3001\u7528ts\u5b9e\u73b0\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528VueX",id:"2\u3001\u7528ts\u5b9e\u73b0\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528vuex",children:[{value:"2.1\u3001\u521b\u5efaVueX\u6587\u4ef6",id:"21\u3001\u521b\u5efavuex\u6587\u4ef6",children:[]},{value:"2.2\u3001ts\u7ec4\u4ef6\u4e2d\u4f7f\u7528VueX",id:"22\u3001ts\u7ec4\u4ef6\u4e2d\u4f7f\u7528vuex",children:[]}]},{value:"3\u3001\u4f7f\u7528ts\u5b9e\u73b0\u7ec4\u4ef6\u7684\u88c5\u9970\u5668\u7528\u6cd5",id:"3\u3001\u4f7f\u7528ts\u5b9e\u73b0\u7ec4\u4ef6\u7684\u88c5\u9970\u5668\u7528\u6cd5",children:[{value:"3.1\u3001@Component",id:"31\u3001component",children:[]},{value:"3.2\u3001data",id:"32\u3001data",children:[]},{value:"3.3\u3001method",id:"33\u3001method",children:[]},{value:"3.4\u3001\u8ba1\u7b97\u5c5e\u6027",id:"34\u3001\u8ba1\u7b97\u5c5e\u6027",children:[]},{value:"3.5\u3001\u751f\u547d\u5468\u671f\u51fd\u6570",id:"35\u3001\u751f\u547d\u5468\u671f\u51fd\u6570",children:[]},{value:"3.6\u3001@Prop",id:"36\u3001prop",children:[]},{value:"3.7\u3001@PropSync",id:"37\u3001propsync",children:[]},{value:"3.8\u3001@Watch",id:"38\u3001watch",children:[]},{value:"3.9\u3001@Emit",id:"39\u3001emit",children:[]},{value:"3.10\u3001@Ref",id:"310\u3001ref",children:[]}]}],i=function(e){var n=e.children,t=e.color;return Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:l,Highlight:i};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"\u5728Vue2\u9879\u76ee\u4e2d\u4f7f\u7528TypeScript\uff0c\u76f8\u5173\u914d\u7f6e\u548c\u8bed\u6cd5"))),Object(a.b)("h2",{id:"1\u3001vue2x\u4f7f\u7528typescript"},"1\u3001Vue2.x\u4f7f\u7528TypeScript"),Object(a.b)("h3",{id:"11\u3001\u5b89\u88c5\u4f9d\u8d56"},"1.1\u3001\u5b89\u88c5\u4f9d\u8d56"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm i typescript  ts-loader vue-class-component vue-property-decorator vuex-class \n")),Object(a.b)("h4",{id:"\uff081\uff09-ts-loader\u548ctypescript\u4f7f\u7528typescript\u5fc5\u987b\u7684"},"\uff081\uff09 ",Object(a.b)("inlineCode",{parentName:"h4"},"ts-loader"),"\u548c",Object(a.b)("inlineCode",{parentName:"h4"},"typescript"),"\u4f7f\u7528typescript\u5fc5\u987b\u7684"),Object(a.b)("h4",{id:"\uff082\uff09-vue-class-component-\u53ef\u4ee5\u628a\u7ec4\u4ef6\u5199\u6210-class-\u7684\u6a21\u5f0f\uff0c\u81ea\u5b9a\u4e49\u88c5\u9970\u5668\uff0c\u8def\u7531\u94a9\u5b50"},"\uff082\uff09 ",Object(a.b)("inlineCode",{parentName:"h4"},"vue-class-component")," \u53ef\u4ee5\u628a\u7ec4\u4ef6\u5199\u6210 class \u7684\u6a21\u5f0f\uff0c\u81ea\u5b9a\u4e49\u88c5\u9970\u5668\uff0c\u8def\u7531\u94a9\u5b50"),Object(a.b)("h4",{id:"\uff083\uff09-vue-property-decorator--\u63d0\u4f9b\u8fd9\u4e9b\u88c5\u9970\u5668"},"\uff083\uff09 ",Object(a.b)("inlineCode",{parentName:"h4"},"vue-property-decorator ")," \u63d0\u4f9b\u8fd9\u4e9b\u88c5\u9970\u5668"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@Prop\n@PropSync\n@Model\n@ModelSync\n@Watch\n@Provide\n@Inject\n@ProvideReactive\n@InjectReactive\n@Emit\n@Ref\n@VModel\n@Component //\u7531 vue-class-component \u63d0\u4f9b\nMixins //\u7531 vue-class-component \u63d0\u4f9b\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"vue-class-component\u548cvue-property-decorator\u533a\u522b"),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",{parentName:"pre",className:"language-js"},"import Component from 'vue-class-component';\nimport { Component } from 'vue-property-decorator'\n")),Object(a.b)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u7684 vue-property-decorator \u6b64\u5e93\u5b8c\u5168\u4f9d\u8d56\u4e8e vue-class-component\uff0c\u6240\u4ee5\u90fd\u6709 Component")),Object(a.b)("h4",{id:"\uff084\uff09-vuex-class-\u63d0\u4f9bclass\u7ec4\u4ef6\u7684vuex\u7684\u652f\u6301"},"\uff084\uff09 ",Object(a.b)("inlineCode",{parentName:"h4"},"vuex-class")," \u63d0\u4f9bclass\u7ec4\u4ef6\u7684VueX\u7684\u652f\u6301"),Object(a.b)("h2",{id:"2\u3001\u7528ts\u5b9e\u73b0\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528vuex"},"2\u3001\u7528ts\u5b9e\u73b0\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528VueX"),Object(a.b)("h3",{id:"21\u3001\u521b\u5efavuex\u6587\u4ef6"},"2.1\u3001\u521b\u5efaVueX\u6587\u4ef6"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@/store/index.ts"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import Vue from "vue";\nimport Vuex from "vuex";\n\nVue.use(Vuex);\n\nexport default new Vuex.Store({\n  state: {\n    foo:""\n  },\n  getters: {\n    foo: state => {\n      return state.foo+"\u4f60\u597d"\n    }\n  }\n  mutations: {\n    foo(state,value){\n      state.foo=value\n    }\n  },\n  actions: {\n    foo(context,value){\n      setTimeout(() => {\n        commit(\'foo\',value)\n      }, 1000)\n    }\n  },\n  modules: {},\n});\n')),Object(a.b)("h3",{id:"22\u3001ts\u7ec4\u4ef6\u4e2d\u4f7f\u7528vuex"},"2.2\u3001ts\u7ec4\u4ef6\u4e2d\u4f7f\u7528VueX"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { Component, Ref, Vue } from \"vue-property-decorator\";\nimport {\n  State,\n  Getter,\n  Action,\n  Mutation,\n  namespace\n} from 'vuex-class'\n \nconst someModule = namespace('path/to/module')\n \n@Component\nexport class MyComp extends Vue {\n  @State('foo') stateFoo\n  @State(state => state.bar) stateBar\n  @Getter('foo') getterFoo\n  @Action('foo') actionFoo\n  @Mutation('foo') mutationFoo\n  @someModule.Getter('foo') moduleGetterFoo\n \n  // If the argument is omitted, use the property name \n  //\u5982\u679c\u7701\u7565\u53c2\u6570\uff0c\u8bf7\u4f7f\u7528\u5c5e\u6027\u540d\u79f0\n  // for each state/getter/action/mutation type\n  //\u5bf9\u4e8e\u6bcf\u4e2a\u72b6\u6001/getter/action/mutation\u7c7b\u578b\n  @State foo\n  @Getter bar\n  @Action baz\n  @Mutation qux\n \n  created () {\n    this.stateFoo // -> store.state.foo\n    this.stateBar // -> store.state.bar\n    this.getterFoo // -> store.getters.foo\n    this.actionFoo({ value: true }) // -> store.dispatch('foo', { value: true })\n    this.mutationFoo({ value: true }) // -> store.commit('foo', { value: true })\n    this.moduleGetterFoo // -> store.getters['path/to/module/foo']\n  }\n}\n")),Object(a.b)("h2",{id:"3\u3001\u4f7f\u7528ts\u5b9e\u73b0\u7ec4\u4ef6\u7684\u88c5\u9970\u5668\u7528\u6cd5"},"3\u3001\u4f7f\u7528ts\u5b9e\u73b0\u7ec4\u4ef6\u7684\u88c5\u9970\u5668\u7528\u6cd5"),Object(a.b)("h3",{id:"31\u3001component"},"3.1\u3001@Component"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"@Component(options) \u7684options \u662f\u914d\u7f6e decorator \u5e93\u4e0d\u652f\u6301\u7684\u5c5e\u6027,\n\u5982:name, components, filters, directives\u7b49")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'<template>\n  <div id="app">\n  </div>\n</template>\n\n<script lang="ts">\nimport { Component, Vue } from \'vue-property-decorator\';\n\nimport test from \'./components/test.vue\'\n\n@Component({\n  name:"",\n  components: {\n    test,\n  },\n})\nexport default class Demo extends Vue {\n  \n}\n<\/script>\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { Component, Vue } from "vue-property-decorator";\n@Component\nexport default class Home extends Vue {\n}\n')),Object(a.b)("h3",{id:"32\u3001data"},"3.2\u3001data"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"data\u7684\u7684\u6570\u636e\u53ef\u4ee5\u76f4\u63a5\u5199\u5728\u7c7b\u4e2d")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { Vue, Component, Prop } from \'vue-property-decorator\'\n \n@Component\nexport default class Demo extends Vue {\n  //public\uff08\u516c\u5171\u7684\u4efb\u4f55\u5730\u65b9\u88ab\u8bbf\u95ee\u5230\uff0c\u9ed8\u8ba4\u6240\u6709\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u662f public\uff09 \n  //private (\u79c1\u6709\u7684\uff0c\u4e0d\u80fd\u5728\u58f0\u660e\u5b83\u7684\u7c7b\u7684\u5916\u90e8\u8bbf\u95ee,\u5b50\u7c7b\u4e2d\u4e5f\u4e0d\u5141\u8bb8\u88ab\u8bbf\u95ee\u7684)\n  //protected (\u53d7\u4fdd\u62a4\u7684\uff0c\u5b83\u548c private \u7c7b\u4f3c\uff0c\u533a\u522b\u662f\u5b83\u5728\u5b50\u7c7b\u4e2d\u662f\u5141\u8bb8\u88ab\u8bbf\u95ee\u7684)\n  public isDone: boolean = false;\n  private decLiteral: number = 6;\n  protected name: string = "bob";\n \n  //\u4e0d\u5199\u8bbf\u95ee\u4fee\u9970\u7b26\u9ed8\u8ba4\u662fpublic\u4fee\u9970\u7b26\n  list1: number[] = [1, 2, 3];\n  list2: Array<number> = [1, 2, 3];\n  \n  //\u7c7b\u578b\u63a8\u65ad\uff08\u4e0d\u5199\u660e\u7c7b\u578b\u65f6\u4f1a\u81ea\u52a8\u6839\u636e\u8d4b\u503c\u63a8\u65ad\u7c7b\u578b\uff09\n  isDone = false;\n  decLiteral = 6;\n  name = "bob";\n  list1:= [1, 2, 3];\n  zoo= {};\n}\n')),Object(a.b)("h3",{id:"33\u3001method"},"3.3\u3001method"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u76f4\u63a5\u5199\u65b9\u6cd5\u540d\uff0c\u6709\u8fd4\u56de\u6570\u636e\u5199\u8fd4\u56de\u6570\u636e\u7c7b\u578b\uff0c\u6709\u53c2\u6570\u5199\u53c2\u6570\u7c7b\u578b")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { Vue, Component } from 'vue-property-decorator'\n \n@Component\nexport default class Demo extends Vue {\n  blindBoxItems1(){\n\n  }\n  blindBoxItems2():String {\n\n  }\n  blindBoxItems3(item:any):String {\n\n  }\n}\n")),Object(a.b)("h3",{id:"34\u3001\u8ba1\u7b97\u5c5e\u6027"},"3.4\u3001\u8ba1\u7b97\u5c5e\u6027"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8ba1\u7b97\u5c5e\u6027\u65b9\u6cd5\uff0c\u5728\u65b9\u6cd5\u524d\u52a0get\u5173\u952e\u5b57\u8868\u793a\uff0c\u5176\u4f59\u548cmethod\u662f\u4e00\u6837\u7684")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { Vue, Component } from 'vue-property-decorator'\n \n@Component\nexport default class Demo extends Vue {\n  get blindBoxItems1():String {\n\n  }\n  get blindBoxItems2(item:any):String {\n\n  }\n}\n")),Object(a.b)("h3",{id:"35\u3001\u751f\u547d\u5468\u671f\u51fd\u6570"},"3.5\u3001\u751f\u547d\u5468\u671f\u51fd\u6570"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u548cmethod\u662f\u4e00\u6837\u7684\u76f4\u63a5\u5199\u5728\u7c7b\u4e2d")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { Vue, Component } from 'vue-property-decorator'\n \n@Component\nexport default class Demo extends Vue {\n  created(){\n\n  }\n  mounted(){\n\n  }\n}\n")),Object(a.b)("h3",{id:"36\u3001prop"},"3.6\u3001@Prop"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { Vue, Component, Prop } from 'vue-property-decorator'\n \n@Component\nexport default class YourComponent extends Vue {\n  @Prop(Number) readonly propA: number | undefined\n  @Prop({ default: 'default value' }) readonly propB!: string\n  @Prop({ type: String, default: 'default value' }) readonly propC!: string\n  @Prop([String, Boolean]) readonly propD: string | boolean | undefined\n  //\u65ad\u8a00\u662fnumber\n  @Prop() age!: number\n}\n")),Object(a.b)("h3",{id:"37\u3001propsync"},"3.7\u3001@PropSync"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u53ef\u5b9e\u73b0Prop\u53cc\u5411\u7ed1\u5b9a")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { Vue, Component, PropSync } from 'vue-property-decorator'\n \n@Component\nexport default class YourComponent extends Vue {\n  @PropSync('name', { type: String }) syncedName!: string\n}\n")),Object(a.b)("p",null,"\u539f\u59cb\u975ets\u7ec4\u4ef6\u5199\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"export default {\n  props: {\n    name: {\n      type: String,\n    },\n  },\n  computed: {\n    syncedName: {\n      get() {\n        return this.name\n      },\n      set(value) {\n        this.$emit('update:name', value)\n      },\n    },\n  },\n}\n")),Object(a.b)("h3",{id:"38\u3001watch"},"3.8\u3001@Watch"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { Vue, Component, Watch } from 'vue-property-decorator'\n \n@Component\nexport default class YourComponent extends Vue {\n  //\u5f53child\u6539\u53d8\u65f6\u4f1a\u81ea\u52a8\u8c03\u7528onChildChanged\u65b9\u6cd5\n  @Watch('child')\n  onChildChanged(val: string, oldVal: string) {}\n\n  //\u5f53person\u6539\u53d8\u65f6\u4f1a\u81ea\u52a8\u8c03\u7528onChildChanged\u65b9\u6cd5\u548conPersonChanged2\u65b9\u6cd5\uff08\u76d1\u542c\u5230\u4e00\u4e2a\u6539\u53d8\u6267\u884c\u4e24\u4e2a\u4e0d\u540c\u7684\u65b9\u6cd5\uff09\n  @Watch('person', { immediate: true, deep: true })\n  onPersonChanged1(val: Person, oldVal: Person) {}\n  @Watch('person')\n  onPersonChanged2(val: Person, oldVal: Person) {}\n}\n")),Object(a.b)("p",null,"\u539f\u59cb\u975ets\u5199\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"export default {\n  watch: {\n    child: [\n      {\n        handler: 'onChildChanged',\n        immediate: false,\n        deep: false,\n      },\n    ],\n    person: [\n      {\n        handler: 'onPersonChanged1',\n        immediate: true,\n        deep: true,\n      },\n      {\n        handler: 'onPersonChanged2',\n        immediate: false,\n        deep: false,\n      },\n    ],\n  },\n  methods: {\n    onChildChanged(val, oldVal) {},\n    onPersonChanged1(val, oldVal) {},\n    onPersonChanged2(val, oldVal) {},\n  },\n}\n")),Object(a.b)("h3",{id:"39\u3001emit"},"3.9\u3001@Emit"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"@Emit\u88c5\u9970\u5668\u63a5\u6536\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u4f5c\u4e3a\u4e8b\u4ef6\u540d\uff1b\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u8fd9\u4e2a\u53c2\u6570\uff0c$emit\u4f1a\u5c06\u56de\u8c03\u51fd\u6570\u7684camelCase(\u9a7c\u5cf0\u5f0f)\u8f6c\u4e3akebab-case\uff08\u77ed\u6a2a\u7ebf\u547d\u540d\uff09\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u4e8b\u4ef6\u540d\uff1b\u7236\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u65f6\u76d1\u542c\u8be5\u4e8b\u4ef6\u540d\u5373\u53ef")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"@Emit\u4f1a\u5c06\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5982\u679c\u8fd4\u56de\u503c\u662f\u4e00\u4e2aPromise\u5bf9\u8c61\uff0c$emit\u4f1a\u5c06Promise\u5bf9\u8c61\u72b6\u6001\u4e3aresolved\u4e4b\u540e\u89e6\u53d1\uff1b")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"@Emit\u7684\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\uff0c\u4f1a\u653e\u5728\u5176\u8fd4\u56de\u503c\u4e4b\u540e\uff0c\u4e00\u8d77\u88ab$emit\u5f53\u4f5c\u53c2\u6570\u4f7f\u7528\uff1b"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { Vue, Component, Emit } from 'vue-property-decorator'\n \n@Component\nexport default class YourComponent extends Vue {\n  count = 0\n \n  @Emit()\n  addToCount(n: number) {\n    this.count += n\n  }\n \n  @Emit('reset')\n  resetCount() {\n    this.count = 0\n  }\n \n  @Emit()\n  returnValue() {\n    return 10\n  }\n \n  @Emit()\n  onInputChange(e) {\n    return e.target.value\n  }\n \n  @Emit()\n  promise() {\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        resolve(20)\n      }, 0)\n    })\n  }\n}\n")),Object(a.b)("h3",{id:"310\u3001ref"},"3.10\u3001@Ref"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { Vue, Component, Emit } from \'vue-property-decorator\'\n@Component\nexport default class YourComponent extends Vue {\n  @Ref("blind_box") readonly blind_box!: HTMLButtonElement;\n  getBlindBox() {\n    this.blind_box.style.width = this.width + "px";\n    this.blind_box.style.height = this.height + "px";\n  }\n}\n')))}s.isMDXComponent=!0},218:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),u=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=u(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=o,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return t?r.a.createElement(b,p(p({ref:n},i),{},{components:t})):r.a.createElement(b,p({ref:n},i))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);