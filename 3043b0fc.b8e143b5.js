(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{180:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return m}));var t=a(0),i=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=t,m=u["".concat(r,".").concat(d)]||u[d]||g[d]||o;return a?i.a.createElement(m,l(l({ref:n},p),{},{components:a})):i.a.createElement(m,l({ref:n},p))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return r})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return c})),a.d(n,"default",(function(){return s}));var t=a(3),i=a(7),o=(a(0),a(180)),r={id:"maven-plugin-usage",title:"Maven Plugin Usage",sidebar_label:"Usage"},l={unversionedId:"plugins/maven-plugin-usage",id:"plugins/maven-plugin-usage",isDocsHomePage:!1,title:"Maven Plugin Usage",description:"Downloading Schema SDL",source:"@site/docs/plugins/maven-plugin-usage.md",slug:"/plugins/maven-plugin-usage",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-usage",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/plugins/maven-plugin-usage.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1616190218,sidebar_label:"Usage",sidebar:"docs",previous:{title:"Maven Plugin Goals",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-goals"},next:{title:"Schema Generator Hooks Provider",permalink:"/graphql-kotlin/docs/plugins/hooks-provider"}},c=[{value:"Downloading Schema SDL",id:"downloading-schema-sdl",children:[]},{value:"Introspecting Schema",id:"introspecting-schema",children:[]},{value:"Generating Client",id:"generating-client",children:[]},{value:"Generating Client with Custom Scalars",id:"generating-client-with-custom-scalars",children:[]},{value:"Generating Client using Kotlinx Serialization",id:"generating-client-using-kotlinx-serialization",children:[]},{value:"Generating Test Client",id:"generating-test-client",children:[]},{value:"Minimal Configuration Example",id:"minimal-configuration-example",children:[]},{value:"Complete Configuration Example",id:"complete-configuration-example",children:[]},{value:"Generating Multiple Clients",id:"generating-multiple-clients",children:[]},{value:"Generating SDL Example",id:"generating-sdl-example",children:[]},{value:"Generating SDL with Custom Hooks Provider Example",id:"generating-sdl-with-custom-hooks-provider-example",children:[]}],p={toc:c};function s(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"downloading-schema-sdl"},"Downloading Schema SDL"),Object(o.b)("p",null,"Download SDL Mojo requires target GraphQL server ",Object(o.b)("inlineCode",{parentName:"p"},"endpoint")," to be specified. Task can be executed directly from the\ncommand line by explicitly specifying ",Object(o.b)("inlineCode",{parentName:"p"},"graphql.endpoint")," property."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:download-sdl -Dgraphql.endpoint="http://localhost:8080/sdl"\n')),Object(o.b)("p",null,"Mojo can also be configured in your Maven build file"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>download-sdl</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/sdl</endpoint>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"download-sdl")," goal will be executed as part of the ",Object(o.b)("inlineCode",{parentName:"p"},"generate-sources")," ",Object(o.b)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"build lifecycle phase"),"."),Object(o.b)("h2",{id:"introspecting-schema"},"Introspecting Schema"),Object(o.b)("p",null,"Introspection Mojo requires target GraphQL server ",Object(o.b)("inlineCode",{parentName:"p"},"endpoint")," to be specified. Task can be executed directly from the\ncommand line by explicitly specifying ",Object(o.b)("inlineCode",{parentName:"p"},"graphql.endpoint")," property"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:introspect-schema -Dgraphql.endpoint="http://localhost:8080/graphql"\n')),Object(o.b)("p",null,"Mojo can also be configured in your Maven build file"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>introspect-schema</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"introspect-schema")," goal will be executed as part of the ",Object(o.b)("inlineCode",{parentName:"p"},"generate-sources")," ",Object(o.b)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"build lifecycle phase"),"."),Object(o.b)("h2",{id:"generating-client"},"Generating Client"),Object(o.b)("p",null,"This Mojo generates GraphQL client code based on the provided queries using target GraphQL ",Object(o.b)("inlineCode",{parentName:"p"},"schemaFile"),". Classes are\ngenerated under specified ",Object(o.b)("inlineCode",{parentName:"p"},"packageName"),". When using default configuration and storing GraphQL queries under ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources"),"\ndirectories, task can be executed directly from the command line by explicitly providing required properties."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:generate-client -Dgraphql.schemaFile="mySchema.graphql" -Dgraphql.packageName="com.example.generated"\n')),Object(o.b)("p",null,"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("p",null,"This will process all GraphQL queries located under ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources")," and generate corresponding GraphQL Kotlin client\ndata models. Generated classes will be automatically added to the project compile sources."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: You might need to explicitly add generated clients to your project sources for your IDE to recognize them. See\n",Object(o.b)("a",{parentName:"p",href:"https://www.mojohaus.org/build-helper-maven-plugin/"},"build-helper-maven-plugin")," for details.")),Object(o.b)("h2",{id:"generating-client-with-custom-scalars"},"Generating Client with Custom Scalars"),Object(o.b)("p",null,"By default, all custom GraphQL scalars will be serialized as Strings. You can override this default behavior by specifying\ncustom ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-client/src/main/kotlin/com/expediagroup/graphql/client/converter/ScalarConverter.kt"},"scalar converter"),"."),Object(o.b)("p",null,"For example given following custom scalar in our GraphQL schema"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"scalar UUID\n")),Object(o.b)("p",null,"We can create a custom converter to automatically convert this custom scalar to ",Object(o.b)("inlineCode",{parentName:"p"},"java.util.UUID")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: String): UUID = UUID.fromString(rawValue)\n    override fun toJson(value: UUID): String = value.toString()\n}\n")),Object(o.b)("p",null,"Afterwards we need to configure our plugin to use this custom converter"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <allowDeprecatedFields>false</allowDeprecatedFields>\n                <customScalars>\n                    <customScalar>\n                        \x3c!-- custom scalar UUID type --\x3e\n                        <scalar>UUID</scalar>\n                        \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n                        <type>java.util.UUID</type>\n                        \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n                           used to convert to/from raw JSON and scalar type --\x3e\n                        <converter>com.example.UUIDScalarConverter</converter>\n                    </customScalar>\n                </customScalars>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("h2",{id:"generating-client-using-kotlinx-serialization"},"Generating Client using Kotlinx Serialization"),Object(o.b)("p",null,"GraphQL Kotlin plugins default to generate client data models that are compatible with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"Jackson"),".\nWe can change this default behavior by explicitly specifying serializer type and configuring ",Object(o.b)("inlineCode",{parentName:"p"},"kotlinx.serialization")," compiler\nplugin. See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},"kotlinx.serialization documentation")," for details."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<project>\n    <dependencies>\n        \x3c!-- other dependencies omitted for clarity --\x3e\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <packageName>com.example.generated</packageName>\n                            <schemaFile>mySchema.graphql</schemaFile>\n                            \x3c!-- optional configuration below --\x3e\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")),Object(o.b)("h2",{id:"generating-test-client"},"Generating Test Client"),Object(o.b)("p",null,"This Mojo generates GraphQL Kotlin test client code based on the provided queries using target GraphQL ",Object(o.b)("inlineCode",{parentName:"p"},"schemaFile"),". Classes\nare generated under specified ",Object(o.b)("inlineCode",{parentName:"p"},"packageName"),". When using default configuration and storing GraphQL queries under ",Object(o.b)("inlineCode",{parentName:"p"},"src/test/resources"),"\ndirectories, task can be executed directly from the command line by explicitly providing required properties."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:generate-test-client -Dgraphql.schemaFile="mySchema.graphql" -Dgraphql.packageName="com.example.generated"\n')),Object(o.b)("p",null,"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-test-client</goal>\n            </goals>\n            <configuration>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("p",null,"This will process all GraphQL queries located under ",Object(o.b)("inlineCode",{parentName:"p"},"src/test/resources")," and generate corresponding GraphQL Kotlin test clients.\nGenerated classes will be automatically added to the project test compile sources."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: You might need to explicitly add generated test clients to your project test sources for your IDE to recognize them.\nSee ",Object(o.b)("a",{parentName:"p",href:"https://www.mojohaus.org/build-helper-maven-plugin/"},"build-helper-maven-plugin")," for details.")),Object(o.b)("h2",{id:"minimal-configuration-example"},"Minimal Configuration Example"),Object(o.b)("p",null,"Following is the minimal configuration that runs introspection query against a target GraphQL server and generates a corresponding schema.\nThis generated schema is subsequently used to generate GraphQL client code based on the queries provided under ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources")," directory."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n                <packageName>com.example.generated</packageName>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: Both ",Object(o.b)("inlineCode",{parentName:"p"},"introspect-schema")," and ",Object(o.b)("inlineCode",{parentName:"p"},"generate-client")," goals are bound to the same ",Object(o.b)("inlineCode",{parentName:"p"},"generate-sources")," Maven lifecycle phase.\nAs opposed to Gradle, Maven does not support explicit ordering of different goals bound to the same build phase. Maven\nMojos will be executed in the order they are defined in your ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml")," build file.")),Object(o.b)("h2",{id:"complete-configuration-example"},"Complete Configuration Example"),Object(o.b)("p",null,"Following is a configuration example that downloads schema SDL from a target GraphQL server that is then used to generate\nthe GraphQL client data modles using ",Object(o.b)("inlineCode",{parentName:"p"},"kotlinx.serialization")," that are based on the provided query."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<project>\n    <dependencies>\n        \x3c!-- other dependencies omitted for clarity --\x3e\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>download-sdl</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/sdl</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            \x3c!-- optional configuration below --\x3e\n                            <schemaFile>${project.build.directory}/mySchema.graphql</schemaFile>\n                            <allowDeprecatedFields>true</allowDeprecatedFields>\n                            <customScalars>\n                                <customScalar>\n                                    \x3c!-- custom scalar UUID type --\x3e\n                                    <scalar>UUID</scalar>\n                                    \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n                                    <type>java.util.UUID</type>\n                                    \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n                                       used to convert to/from raw JSON and scalar type --\x3e\n                                    <converter>com.example.UUIDScalarConverter</converter>\n                                </customScalar>\n                            </customScalars>\n                            <headers>\n                                <X-Custom-Header>My-Custom-Header</X-Custom-Header>\n                            </headers>\n                            <timeoutConfiguration>\n                                \x3c!-- timeout values in milliseconds --\x3e\n                                <connect>1000</connect>\n                                <read>30000</read>\n                            </timeoutConfiguration>\n                            <queryFiles>\n                                <queryFile>${project.basedir}/src/main/resources/queries/MyQuery.graphql</queryFile>\n                            </queryFiles>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")),Object(o.b)("h2",{id:"generating-multiple-clients"},"Generating Multiple Clients"),Object(o.b)("p",null,"In order to generate GraphQL clients targeting multiple endpoints, we need to configure separate executions targeting\ndifferent endpoints."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <id>generate-first-client</id>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n                <packageName>com.example.generated.first</packageName>\n                <queryFiles>\n                    <queryFile>${project.basedir}/src/main/resources/queries/FirstQuery.graphql</queryFile>\n                </queryFiles>\n            </configuration>\n        </execution>\n        <execution>\n            <id>generate-second-client</id>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8081/graphql</endpoint>\n                <packageName>com.example.generated.second</packageName>\n                <queryFiles>\n                    <queryFile>${project.basedir}/src/main/resources/queries/SecondQuery.graphql</queryFile>\n                </queryFiles>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("h2",{id:"generating-sdl-example"},"Generating SDL Example"),Object(o.b)("p",null,"GraphQL schema can be generated directly from your source code using reflections. ",Object(o.b)("inlineCode",{parentName:"p"},"generate-sdl")," mojo will scan your\nclasspath looking for classes implementing ",Object(o.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Mutation")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Subscription")," marker interfaces and then generates the\ncorresponding GraphQL schema using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and default ",Object(o.b)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". In order to\nlimit the amount of packages to scan, this mojo requires users to provide a list of ",Object(o.b)("inlineCode",{parentName:"p"},"packages")," that can contain GraphQL\ntypes."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-sdl</goal>\n            </goals>\n            <configuration>\n                <packages>\n                    <package>com.example</package>\n                </packages>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("h2",{id:"generating-sdl-with-custom-hooks-provider-example"},"Generating SDL with Custom Hooks Provider Example"),Object(o.b)("p",null,"Plugin will default to use ",Object(o.b)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks")," to generate target GraphQL schema. If your project uses custom hooks\nor needs to generate the federated GraphQL schema, you will need to provide an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider"),"\nservice provider that will be used to create an instance of your custom hooks."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"generate-sdl")," mojo utilizes ",Object(o.b)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service provider.\nConfiguration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact to generate federated\nGraphQL schema."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-sdl</goal>\n            </goals>\n            <configuration>\n                <packages>\n                    <package>com.example</package>\n                </packages>\n            </configuration>\n        </execution>\n    </executions>\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-federated-hooks-provider</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n</plugin>\n")))}s.isMDXComponent=!0}}]);