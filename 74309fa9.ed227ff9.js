(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(234)),i={id:"advanced-features",title:"Advanced Features"},c={unversionedId:"schema-generator/customizing-schemas/advanced-features",id:"schema-generator/customizing-schemas/advanced-features",isDocsHomePage:!1,title:"Advanced Features",description:"Adding Custom Additional Types",source:"@site/docs/schema-generator/customizing-schemas/advanced-features.md",slug:"/schema-generator/customizing-schemas/advanced-features",permalink:"/graphql-kotlin/docs/next/schema-generator/customizing-schemas/advanced-features",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/advanced-features.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613844876,sidebar:"docs",previous:{title:"Deprecating Schema",permalink:"/graphql-kotlin/docs/next/schema-generator/customizing-schemas/deprecating-schema"},next:{title:"Fetching Data",permalink:"/graphql-kotlin/docs/next/schema-generator/execution/fetching-data"}},s=[{value:"Adding Custom Additional Types",id:"adding-custom-additional-types",children:[{value:"<code>SchemaGenerator::generateSchema</code>",id:"schemageneratorgenerateschema",children:[]},{value:"<code>SchemaGenerator::addAdditionalTypesWithAnnotation</code>",id:"schemageneratoraddadditionaltypeswithannotation",children:[]}]}],d={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"adding-custom-additional-types"},"Adding Custom Additional Types"),Object(o.b)("p",null,"There are a couple ways you can add more types to the schema without having them be directly consumed by a type in your schema.\nThis may be required for ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/next/schema-generator/federation/apollo-federation"},"Apollo Federation"),", or maybe adding other interface implementations that are not picked up."),Object(o.b)("h3",{id:"schemageneratorgenerateschema"},Object(o.b)("inlineCode",{parentName:"h3"},"SchemaGenerator::generateSchema")),Object(o.b)("p",null,"When generating a schema you can optionally specify additional types and input types to be included in the schema. This will\nallow you to link to those types from your custom ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks")," implementation using GraphQL reference instead of\nmanually creating the underlying GraphQL type."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nval myConfig = SchemaGeneratorConfig(supportedPackages = listOf("com.example"))\nval generator = SchemaGenerator(myConfig)\n\nval schema = generator.generateSchema(\n        queries = myQueries,\n        additionalTypes = setOf(MyCustomObject::class.createType()),\n        additionalInputTypes = setOf(MyCustomInputObject::class.createType())\n)\n\n')),Object(o.b)("h3",{id:"schemageneratoraddadditionaltypeswithannotation"},Object(o.b)("inlineCode",{parentName:"h3"},"SchemaGenerator::addAdditionalTypesWithAnnotation")),Object(o.b)("p",null,"This method is protected so if you override the ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaGenerator")," used you can call this method to add types that have a specific annotation.\nYou can see how this is used in ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/FederatedSchemaGenerator.kt"},"an example"),"."))}p.isMDXComponent=!0},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,h=l["".concat(i,".").concat(m)]||l[m]||u[m]||o;return n?r.a.createElement(h,c(c({ref:t},d),{},{components:n})):r.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);