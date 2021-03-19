(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(180)),i={id:"introspection",title:"Introspection"},c={unversionedId:"schema-generator/execution/introspection",id:"schema-generator/execution/introspection",isDocsHomePage:!1,title:"Introspection",description:"By default, GraphQL servers expose a built-in system, called introspection, that exposes details about the underlying schema.",source:"@site/docs/schema-generator/execution/introspection.md",slug:"/schema-generator/execution/introspection",permalink:"/graphql-kotlin/docs/schema-generator/execution/introspection",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/introspection.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1616190218,sidebar:"docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/schema-generator/execution/subscriptions"},next:{title:"Apollo Federation",permalink:"/graphql-kotlin/docs/schema-generator/federation/apollo-federation"}},s=[{value:"Introspection types",id:"introspection-types",children:[]},{value:"Disabling Introspection",id:"disabling-introspection",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, GraphQL servers expose a built-in system, called ",Object(o.b)("strong",{parentName:"p"},"introspection"),", that exposes details about the underlying schema.\nClients can use introspection to obtain information about all the supported queries as well as all the types exposed in the schema."),Object(o.b)("h2",{id:"introspection-types"},"Introspection types"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"_","_","schema")," - root level query field that provides information about all entry points (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"queryType"),"), all types exposed\nby the schema (including built-in scalars and introspection types) as well as all directives supported by the system"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"_","_","type(name: String!)")," - root level query field that provides information about the requested type (if it exists)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"typename")," - field that can be added to ",Object(o.b)("em",{parentName:"strong"},"ANY")," selection and will return the name of the enclosing type, ","`"),"typename","`","\nis often used in polymorphic queries in order to easily determine underlying implementation type"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Directive"),", ","_"),"DirectiveLocation","_",", ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"EnumValue"),", ","_"),"Field","_",", ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"InputValue"),", ","_"),"Schema","_",", ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Type"),", ","_"),"TypeKind","_"," - built-in\nintrospection types that are used to describe the schema.")),Object(o.b)("p",null,"For example, the query below will return a root Query object name as well as names of all types and all directives."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"\nquery {\n  __schema {\n    queryType {\n      name\n    }\n    types {\n      name\n    }\n    directives {\n      name\n    }\n  }\n}\n\n")),Object(o.b)("p",null,"Additional information on introspection can be found on ",Object(o.b)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/"},"GraphQL.org"),"."),Object(o.b)("h2",{id:"disabling-introspection"},"Disabling Introspection"),Object(o.b)("p",null,"Introspection system can be disabled by specifying ",Object(o.b)("inlineCode",{parentName:"p"},"introspectionEnabled=false")," configuration option on an instance of\n",Object(o.b)("inlineCode",{parentName:"p"},"SchemaGeneratorConfig")," that will be used by the ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaGenerator")," to generate the GraphQL schema."),Object(o.b)("p",null,"Many GraphQL tools (e.g. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-playground"},"GraphQL Playground")," or ",Object(o.b)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL"),")\nrely on introspection queries to function properly. Disabling introspection will prevent clients from accessing ",Object(o.b)("inlineCode",{parentName:"p"},"__schema"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"__type")," fields. This may break some of the functionality that your clients might rely on and should be used with\nextreme caution."))}l.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);