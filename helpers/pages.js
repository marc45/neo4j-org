var render = require('./render');
var content = require("./content.js").content;
var video = require("./content.js").video;
var _graphgist = require("./content.js").graphgist;
var lookup = require("./content.js").lookup;
var asset = require("../helpers/utils.js").asset;

exports.pages = {
    index : {
       path : "/index",
       title: null,
       config: { tile_page: true, no_slides: true },
       featured: [
//           content.videos.strata,
//           content.install.download_button
           content.videos.what_is_neo4j,
           {
               type: "include",
               path: "partials/version/_download_button"
//               path: "partials/version/_download_button_milestone"
           },
           content.links.online_intro_training,
           {
               type: "include",
               path: "participate/events_map"
           }
       ],
       related: [
           content.action.signup ,
           content.books.neo4j20_de,
           "graphgist",
//           "events",
           "trainings",
           "licensing",
           content.books.graphdatabases,
           "use_cases",
           "getting_started",
           content.links.manual,
           content.links.scale,
           "learn",
//           "cypher_track_start",
           "develop",
           "participate"
//           "graphistas_map",
       ]
    },
    learn: {
        path: "/learn",
        title: "Learn",
        introText: "Learn about concepts behind Neo4j, graph databases, NOSQL and start to dive into our Cypher query language.",
        thumbnail: asset('img/neo4j/visually_refcard_small.gif'),
        featured: [content.books.graphdatabases, content.videos.why_graphs],
        related: ["graphdatabase", "neo4j", "nosql","neo4j_server","use_cases", content.links.online_intro_training, "trainings","getting_started",
                  "tracks", "cypher", "modeling", content.videos.graphdb101,
                  "production","licensing", content.links.manual, content.links.slides, "scientific"]
    },
    learn_graphdb: {
        path: "/learn_graphdb",
        title: "Learn",
        introText: "Learn about concepts behind Neo4j, graph databases, NOSQL and start to dive into our Cypher query language.",
        featured: [content.videos.graphdb101, content.books.graphdatabases, content.videos.why_graphs],
        related: ["graphdatabase", "neo4j", "nosql", "tracks", "cypher", content.links.online_intro_training, "production", "licensing", content.links.manual, content.links.slides, "scientific"]
    },
    develop: {
        path: "/develop",
        title: "Develop",
        introText: "Find what you need to develop applications with Neo4j in a variety of languages and deployment scenarios.",
        thumbnail: asset("img/still/neo4j_drivers.png"),
//        badge: "<a href='/trainings' target='_blank'><img src='" + asset("img/events/n4jtutorial_ad-150x150.png") + "'></a> ",
        featured: ["getting_started"],
        related: ["tracks", "drivers", "import", "tools", "cloud", content.links.online_intro_training, "trainings", "ops", "java", "javascript", "spring", "ruby", "dotnet", "python", "scala", "php", "clojure","linked_data","jee", "spatial", content.links.manual]
    },
    participate: {
        path: "/participate",
        title: "Participate",
        introText: "Connect with a friendly, engaging, and ever expanding community online or in person.",
        thumbnail: asset("img/still/graphistas_map.png"),
        featured: null,
        related: [
            content.links.online_intro_training,
            "events",
            {
                type: "include",
                title: "@Neo4j Tweets",
                path: "/participate/twitter"
            },
           "contributors", content.links.jobs, content.links.team, "trainings", "channels", "graphistas_map", "beer","music", content.projects.neo4j_org
        ]
    },
    training: {
        path: "/training",
        title: "Training",
        introText: "Neo4j trainings and courses allow you to quickly gain practical knowledge into the concepts and usage of Neo4j. These are presented by experienced trainers and Neo4j developers",
        thumbnail: asset("img/events/training.png"),
        featured: [
            content.links.online_intro_training,
            {
                type: "include",
                path: "participate/events_map",
                params: {requestedType:"Training"}
            },
//             {title: "Neo4j Tutorials",
//                introText: "We developed a hands-on, full day training course to teach the basics of using a graph database as Neo4j. After the training you should feel confident to start your own Neo4j based project.",
//                type: "video",
//                src: "http://player.vimeo.com/video/55473433",
//                thumbnail: "http://secure-b.vimeocdn.com/ts/383/938/383938829_295.jpg",
//                content: function (params) {
//                    return render.include("/learn/training", params)
//                }
//            }
            "trainings"
        ],
        related: [
            content.links.course_neo4j_in_60,
            content.links.neo4j_koans_skillsmatter,
            content.links.neotech_services,
            content.links.partners_graph,
            content.links.centrum_training,
            content.links.neo4j_koans,
            content.links.manual,
            content.links.slides
        ]
    },
    download_thanks: {
        path: "/download_thanks",
        title: "Neo4j is downloading, you are almost there",
        introText: "Your download should have started, if not please click the link. Enjoy the video in the meantime.",
        content: function (params) {
            return render.include("_download_thanks", params);
        },
        featured: [ "installing_neo4j" ],
        related: [
            "neo4j",
            "trainings",
            "other_versions",
            content.install.upgrading
//            {
//                type: "link",
//                title: "Detailed Installation Instructions",
//                introText: "For detailed explanations on how to install Neo4j please refer to the Manual",
//                path: "http://docs.neo4j.org/chunked/stable/server-installation.html"
//            },
////            "linux",
//            "windows",
//            content.install.homebrew,
//            "maven"
        ]
    },
    download: {
        path: "/download",
        title: "Download and Install Neo4j",
        introText: "Your Neo4j installation is just one click away. Grab the Community Edition to get started, or <br/>" +
            "use our Enterprise bundles for your production setup. <a href='/learn/licensing'>More details on licensing and bundled offerings</a>.",
        thumbnail: asset("img/neo4j/neo4j-logo.png"),
        content: ""// render.include("download/installation")
        ,
        featured: [
            {
                type: "include",
                path: "partials/version/_download_community"
            },
            {
                type: "include",
                path: "browser_matrix"
            },
            content.install.subscriptions
            //,  content.install.releases
            //content.videos.installing_neo4j,
            // content.install.milestone
            //,content.install.stable
        ],
        related: [
            //content.videos.installing_neo4j,
//            content.install.milestone,
            "other_versions",
            "getting_started",
//            content.install.stable,
            //"graphdatabase",
            //"develop",
            //"participate",
            "windows",
            "linux",
            "licensing",
            content.install.upgrading,
            {
                type: "link",
                title: "Detailed Installation Instructions",
                introText: "For detailed explanations on how to install Neo4j please refer to the Manual",
                path: "http://docs.neo4j.org/chunked/stable/server-installation.html"
            },
            "maven",
            content.install.homebrew
        ]
    },
    other_versions: {
        type: "page",
        title: "Other Neo4j Versions",
        introText: "All available Neo4j versions and editions.",
        path: "/download/other_versions",
        thumbnail: asset("img/neo4j/logo.png"),
        related: [
            content.install.stable,
//            content.install.milestone,
            content.install["2_0_4"],
            content.install["1_9_8"],
            content.install["1_8_3"],
            content.install["1_7_2"],
            content.install["1_6_3"],
            content.install["1_5_3"],
            content.install.upgrading
//            content.install.snapshot
        ]
    },
    maven: {
        path: "/download/maven",
        title: "Maven Dependency",
        actionText: "Add dependency",
        introText: "If you want to include Neo4j in the build of your JVM language project (Java,Scala, Groovy, Clojure) just add the correct dependency",
        featured: [ content.install.maven ],
        related: [content.tracks.java_intro]
    },
    linux: {
        path: "/download/linux",
        config: { tile_page: true, no_slides: true },
        thumbnail: asset("img/logo/linux.jpg"),
        title: "Linux Installation",
        actionText: "Install on Linux",
        introText: "Installing Neo4j on Linux for instance by using apt, puppet or chef.",
        featured: [
            content.install.debian,
            content.install.puppet
        ],
        related: [
            content.install.chef
        ]

    },
    windows: {
        path: "/download/windows",
        title: "Windows Installation",
        thumbnail: asset("img/logo/Windows_8.png"),
        actionText: "Install on Windows",
        introText: "Installing Neo4j on Windows from scratch is just a few steps away",
        featured: [
//            content.install.windows7,
//            content.install.windows,
//            content.install.releases
            {
                type: "include",
                path: "partials/version/_download_community_windows"
            },
            content.install.subscriptions
        ],
        related: [
            content.install.stable,
//            content.install.milestone,

//            content.links.install_windows,
//            content.links.start_with_neo4j_neo4jclient,
            "dotnet",
            content.drivers.neo4jclient,
            content.drivers.cyphernet,
            "azure"
        ]
    },
    scientific: {
        path: "/learn/scientific",
//        thumbnail: asset("img/logo/scientific.png"),
        title: "Neo4j in the scientific community",
        introText: "There is a lot of research going on around Graph Databases in general and Neo4j in particular. Below you will find some of the more recent works in this field.",
        featured: null,
        actionText: "Read more",
        related: [content.scientific.wordnet_using_graphdbs, content.scientific.the_graph_traversal_pattern,"linked_data",content.drivers.rneo4j]
    },
    /*
     <li>Open the <a href='http://localhost:7474' target='_blank'>Neo4j Web Interface</a></li>
     <li>Explore the Data Browser Tab</li>
     <li>Switch to the Console Tab</li>
     <li>Read about the <a href="/learn/cypher">Cypher</a> Query Language</li>
     <li>Follow the source links for some example cypher queries</li>

     */
    example_data: {
        path: "/develop/example_data",
        title: "Example Datasets",
        introText: "Prepared data sets for you to explore",
        content: "<p>The ZIP-Files contain the content of the <code>graph.db</code> directory. To use them:</p>" +
            " <ul> " +
            "<li>Stop your Neo4j server</li> " +
            "<li>Extract the file into <code>/path/to/neo/data/graph.db</code></li> " +
            "<li>Start the server again</li> " +
            "<li>Open the <a href='http://localhost:7474' target='_blank'>Neo4j Web Interface</a></li>" +
            "<li>Read about the <a href='/learn/cypher'>Cypher</a> Query Language</li>" +
            "<li>Follow the source links for some example cypher queries</li>" +
            "</ul> " +
            "<p> All data sets are compatible with Neo4j version 1.6 and later. </p> " +
            "<p> You can also point the <a href='http://docs.neo4j.org/chunked/milestone/shell.html' target='_blank'>neo4j-shell</a> to the extracted directory to run cypher-queries directly: </p> " +
            "<pre>/path/to/neo/bin/neo4j-shell -path /path/to/graph.db</pre>",
        featured: [ content.videos.importing_sample_data],
        actionText: "Get some data",
        related: [
            content.example_data.dr_who
            , content.example_data.fec_2012
            , content.example_data.heroku_waza_2013
            , content.example_data.cineasts_small
            , content.example_data.cineasts_large
            , content.example_data.hubway
            , content.example_data.conceptnet
            , content.example_data.neo_love
            , content.example_data.neo_permissions
            , content.example_data.musicbrainz_large
            , content.example_data.snapplr
            , content.videos.neo4j_recommendation_engine
            , content.links.cypher_cheat_sheet
            , content.links.graphgist
        ]
    },
    tracks: {
        path: "/learn/tracks",
        title: "Neo4j learning tracks",
        introText: "This is the starting point for a number of different tracks to learn more about Neo4j. Follow a track that you are interested in to learn more about different aspects of Neo4j.",
        featured: null,
        actionText: "Choose your track",
        related: ["java", "cypher_track_start"]
    },
    java: {
        path: "/develop/java",
        type: "track",
        title: "Neo4j for Java devs",
        thumbnail: asset("img/languages/java.jpg"),
        introText: "The Java track covers the Neo4j Core-API as well as interacting with the Neo4j Server from Java and other JVM languages.",
        actionText: "Start",
        next: ["java_basics", "jvm"],
        prev: ["server_plugins"],
        featured: [
            content.tracks.java_intro
        ],
        related: [
            "spring",
            "neo4j_server",
            content.links.javadoc,
            content.links.manual_java,
            "jee"
        ]
    },

    cypher_track_start: {
        path: "/tracks/cypher_track_start",
        type: "track",
        title: "The Cypher track",
        thumbnail: asset("img/logo/cypher_small.gif"),
        introText: "This path explores the incredible usefulness of the Cypher Graph Query language, which allows you work with Neo4j in an expressive and powerful way across all APIs.",
        actionText: "Start",
        next: ["cypher", "cypher_track_use"],
        prev: [],
        featured: [content.videos.cypher, content.videos.cypher_console],
        related: [ content.links.cypher_cheat_sheet,
            content.videos.cypher,
            video('Interview: Michael Hunger discusses Cypher transition from SQL'),
            content.videos.cypher_sublime,
            content.links.graphgist
        ]
    },
    cypher_track_use: {
        path: "/tracks/cypher_track_use",
        type: "track",
        title: "Use Cypher",
        thumbnail: asset("img/logo/cypher_small.gif"),
        introText: "",
        actionText: "Begin to use Cypher",
        next: ["cypher_track_develop"],
        prev: ["cypher", "cypher_track_start"],
        featured: [
            content.videos.cypher_vs_sql,
            video("0123 - Optimizing Cypher Queries in Neo4j")
        ],
        related: [
            content.videos.cypher_advanced,
            content.links.cypher_cheat_sheet,
            content.links.wes_cypher,
            {
                type: "video",
                title: "Got a graph database? Need a Query Language!",
                introText: "Cypher is a graph query language that is powerful and easy to use, and a unique feature of Neo4j.  Much like SQL, Cypher is a declarative language and is the easiest way to query one’s graph.  Whereas first-generation graph query languages require you to specify exactly how the database will walk the graph, with Cypher you simply tell the database what you want, and the database engine takes care of the low-level details.  This results in less code, improved readability, and faster development cycles.  Cypher has been embraced with great enthusiasm by the Neo4j user community, and is now the preferred language for Neo4j development.",
                thumbnail: asset("img/still/got_a_graph_talk.png"),
                src: "http://player.vimeo.com/video/45318365"
            },
            "neoclipse"
            // import with cypher
            // the shell
            // the rest-cypher
            // profiling
        ]
    },
    cypher_track_develop: {
        path: "/tracks/cypher_track_develop",
        type: "track",
        title: "Develop with Cypher",
        thumbnail: asset("img/logo/cypher_small.gif"),
        introText: "",
        actionText: "Start",
        next: ["java"],
        prev: ["cypher_track_use", "cypher"],
        featured: [
            // demo app
            // how to use cypher from java
        ],
        related: [
            content.links.mark_cypher,
            // import with cypher
            // the shell
            // the rest-cypher
            // profiling
            // demo apps
            "shell",
            content.videos.neo4j_recommendation_engine,
            "import",
            content.drivers.anorm_cypher,
            content.drivers.neography,
            content.drivers.node_neo4j,
            content.drivers.node_neo4j_embedded,
            content.drivers.cyphernet
        ]
    },
    test: {
        path: "/develop/test",
        title: "Testing with Neo4j",
        introText: "Testing with Databases is always a challenge, there are some ways and tools to make testing easier with Neo4j.",
        featured: [
            content.links.gatling
        ],
        related: [
            {
                type: "link",
                title: "NoSQL-Unit for testing Neo4j and Spring Data Neo4j",
                author: "alexsotob",
                path: "https://github.com/lordofthejars/nosql-unit#neo4j-engine",
                introText: "Blog posts about using <a href='http://www.lordofthejars.com/2012/08/nosqlunit-032-released.html'>NOSQL-Unit with Neo4j</a>" +
                    " and <a href='http://www.lordofthejars.com/2013/03/testing-spring-data-neo4j-applications.html'>Testing Spring Data Neo4j applications</a>"
            },
            {
                type: "link",
                title: "Manual: Basic Unit Testing Neo4j",
                author: "nawroth",
                path: "http://docs.neo4j.org/chunked/stable/tutorials-java-unit-testing.html",
                introText: "Short tutorial on how to unit-test embedded Neo4j applications."
            },
            {
                type: "link",
                title: "Maven Plugin for Running a Neo4j Community Server",
                author: {name: "Robert Herschke", twitter: "rherschke"},
                path: "https://github.com/rherschke/neo4j-maven-plugin#maven-plugin-for-neo4j-community-server",
                github: "https://github.com/rherschke/neo4j-maven-plugin",
                introText: "This is a (yet very simple) maven plugin to start and stop an embedded Neo4j Community Server on a given port. With this plugin, it is possible, to run integration tests, that depends on an existing Neo4j Server."
            }
        ]
    },
    labels: {
        path: "/develop/labels",
        title: "New: Labels and Indexes",
        introText: "A big new feature in Neo4j 2.0 are node labels and real, automatic indexes. Here you can quickly get an update on this extension of the property graph model.",
        featured: [
            {
                type: "video",
                thumbnail: asset("img/still/new_neo4j_20.png"),
                introText: "The 2.0 release of Neo4j makes an important change to the graph data model, the introduction of labels. Using labels, Neo4j 2.0 is able to do much more powerful indexing, enable data constraints and bring Cypher to a whole new level. <a href='https://docs.google.com/presentation/d/1jv3Yv6F99tjT0iy---3K2NpJEpU4Ngj4ABhxBlYNtSY/embed?start=false&loop=false&delayms=3000'>Slides</a>",
                author: "Jacob Hansson",
                src: "http://player.vimeo.com/video/82319888",
                title: "Webinar, Neo4j 2.0 Feature Overview"
            }
        ],
        related: [
//            content.install.milestone,
            {
                type: "link",
                path: "http://docs.neo4j.org/chunked/milestone/rest-api-transactional.html",
                title: "Transactional http endpoint for Cypher",
                author: ["neo4j"],
                introText: "The Neo4j transactional HTTP endpoint allows you to execute a series of Cypher statements within the scope of a transaction. The transaction may be kept open across multiple HTTP requests, until the client chooses to commit or roll back. Each HTTP request can include a list of statements, and for convenience you can include statements along with a request to begin or commit a transaction."
            },
            {
                type: "article",
                path: "http://docs.neo4j.org/chunked/stable/what-is-a-graphdb.html",
                title: "Manual: Labels and Indexes",
                author: ["systay", "jakewins", "boggle", "tinwelint"],
                introText: "All major Neo4j API's can handle labels:<ul>\
                    <li>General: <a href='http://docs.neo4j.org/chunked/stable/graphdb-neo4j-schema.html'>schema</a></li>\
                    <li>Cypher: <a href='http://docs.neo4j.org/chunked/stable/query-match.html#match-match-with-labels'>match</a>,\
                                <a href='http://docs.neo4j.org/chunked/stable/introduction-pattern.html#_labels'>patterns</a>,\
                                <a href='http://docs.neo4j.org/chunked/stable/query-where.html#where-filter-on-node-label'>where</a>,\
                                <a href='http://docs.neo4j.org/chunked/stable/query-create.html#create-create-node-and-add-labels'>create</a>,\
                                <a href='http://docs.neo4j.org/chunked/stable/query-function.html#_collection_functions'>functions</a>,\
                                <a href='http://docs.neo4j.org/chunked/stable/query-schema-index.html'>indexes</a></li>\
                    <li>REST: <a href='http://docs.neo4j.org/chunked/stable/rest-api-node-labels.html'>labels</a>, <a href='http://docs.neo4j.org/chunked/stable/rest-api-schema-indexes.html'>indexes</a></li>\
                    <li>Core: <a href='http://docs.neo4j.org/chunked/stable/tutorials-java-embedded-new-index.html'>example</a>, <a href='http://docs.neo4j.org/chunked/stable/rest-api-schema-indexes.html'>indexes</a></li>\
                    </ul>"
            },
            {
                type: "link",
                path: "http://docs.neo4j.org/refcard/2.0/",
                title: "Cypher 2.0 Reference Card",
                author: ["nawroth","mesirii"],
                introText: "The brand new reference card covering the new syntax of Cypher for Neo4j 2.0 (labels, indexes, constraints, MERGE, list comprehensions, subscripts, ...)"
            },
            {
                type: "link",
                path: "http://wes.skeweredrook.com/cypher-it-doesnt-all-start-with-the-start/",
                title: "Cypher: It doesn't all start with the START (in Neo4j 2.0!)",
                author: ["wefreema"],
                introText: "Extensive post about how labels affect future Cypher queries"
            },
            {
                type: "link",
                path: "http://jexp.de/blog/2013/04/cool-first-neo4j-2-0-milestone-now-with-labels-and-real-indexes/",
                title: "Cool first Neo4j 2.0 milestone – Now with Labels and “real” Indexes",
                author: ["mesirii"],
                introText: "Introducing labels in the cineasts domain model, and featuring a screencast upgrading cineasts to use labels instead of indexes."
            },
            {
                type: "link",
                path: "http://www.terminalstate.net/2013/05/labels-and-schema-indexes-in-neo4j.html",
                title: "Labels and Schema Indexes in Neo4j",
                author: [{name: "Tareq Abedrabbo", twitter:"tareq_abedrabbo"}],
                introText: "Neo4j recently introduced the concept of labels and their sidekick, schema indexes. I would like to shed some light in this blog post on how these new constructs work together. Some details will be inevitably specific to the current version of Neo4j and might change in the future but I still think it’s an interesting exercise."
            },
            content.links.mapdb_index,
            {
                type: "link",
                path: "http://neo4j.com/blog/nodes-are-people-too",
                title: "Nodes are people too",
                author: ["akollegger", "prathle"],
                introText: "Release blog for 2.0.0-M01 discussing the reasoning behind labels and potential applications."
            },
            {
                type: "video",
                src: "http://player.vimeo.com/video/61876938",
                title: "Screencast Labels and Indexes",
                author: ["Mattias Persson"],
                introText: "Quick Console session to show off labels and indexes."
            }
        ]
    },
    java_basics: {
        path: "/java/java_basics",
        title: "Java programming basics with Neo4j",
        introText: "",
        next: ["jvm"],
        prev: ["java"],
        featured: [
            content.tracks.java_basics
        ],
        related: ["neo4j", content.links.eclipse_maven_neo4j_setup, "cypher_track_start"]

    },
    jvm: {
        path: "/java/jvm",
        title: "JVM projects",
        introText: "Here you can see a number of components, projects and products that are useful and interesting if you are working on the JVM ecosystem with Neo4j.",
        next: ["server_plugins"],
        prev: ["java_basics"],
        featured: [
        ],
        related: [content.projects.neoclipse, content.apps.structr, "jee", "spatial", content.projects.jdbc, content.projects.jpa, content.drivers.neo4j_rest, content.projects.graph_collections, content.links.kundera, content.apps.route_planner]
    },
    server_plugins: {
        path: "/java/server_plugins",
        title: "Server plugins",
        introText: "If you are using Neo4j Server, you can use Server plugins written in Java to extend the functionality of the REST API.",
        next: ["java"],
        prev: ["jvm"],
        featured: [
            content.tracks.tracks_server_plugins
        ],
        related: [
            content.links.manual_server, content.projects.spatial, content.projects.gremlin_plugin
        ]
    },

    production: {
        path: "/learn/production",
        title: "Going into Production",
        introText: "In order to run Neo4j in production scenarios, there are a number of aspects that need to be covered. Here you will find some resources on putting Neo4j into production.",
        featured: [content.videos.production_secrets],
        actionText: "Go into production",
        related: [
            "licensing",
            content.links.neotech_services,
            content.videos.high_availability,
            {
                type:"link", author:"maxdemarzi",
                title: "Blog Post: Scaling Up",
                path: "http://maxdemarzi.com/2013/11/25/scaling-up/",
                introText: "Like rock climbing, scaling a database is a challenge. That’s one of the driving forces of the NOSQL movement, so when it comes to your database you’ll want to make sure you are making the right choices."
            },
            "ops",
            content.links.partners_graph
        ]
    },
    licensing: {
        path: "/learn/licensing",
        title: "Neo4j Licenses",
        introText: "Neo4j's enterprise editions are provided by Neo Technology for use in commercial, non open-source deployments.",
        thumbnail: asset("img/logo/neotechnology_small.png"),
        featured: [
            content.articles.licensing_guide
            , content.articles.enterprise_features
//            , content.articles.licensing_guide_which
        ],
        related: [
            content.books.graphdatabases,
            content.links.neotech_services,
            {
                title: "Contact Neo Technology",
                thumbnail: asset("img/logo/neotechnology_small.png"),
                introText: "A Neo Technology representative can help you to determine how to proceed to a production deployment of Neo4j.",
                path: "http://neotechnology.com/contactus/"
            },
            content.links.customers,
            content.links.whitepapers,
//            content.links.use_cases,
            content.articles.partner_graph
        ]
    },
    partners: {
        path: "/learn/partners",
        title: "Partner Graph",
        //path : "http://www.neotechnology.com/partners/",
        introText: "Neo Technology works with a large, worldwide partner network which provide local consulting and training services.",
        actionText: "Read more",
        featured: [
            content.articles.partner_graph
        ],
        related: []
    },
    graphdatabase: {
        path: "/learn/graphdatabase",
        title: "What is a Graph Database?",
        introText: "A graph database stores data in a graph, the most generic of data structures, capable of elegantly representing any kind of data in a highly accessible way.",
        content: "Let’s follow along some graphs, using them to express themselves. We’ll “read” a graph by following arrows around the diagram to form sentences.",
        thumbnail: asset("img/propertygraph/graphdb-gve.png"),
        config: {no_slides:false},
        //next: ["nosql", "neo4j"],
        //prev: [],
        featured: [
            content.articles.graphdb.graph,
            content.articles.graphdb.graphdb_traversal,
            content.articles.graphdb.graphdb_indexes
        ],
        actionText: "Learn more",
        related: [
            content.videos.why_graphs,
            content.books.graphdatabases,
            "neo4j",
            content.videos.graphdb101, "cypher_track_start", "nosql","modeling"]
    },
    nosql: {
        path: "/learn/nosql",
        title: "NoSQL Data Models",
        thumbnail: asset("img/propertygraph/nosql-space.png"),
        introText: "Understanding data stores for your application.",
        config: {no_slides:false},
        // next: ["graphdatabase"],
        //prev: ["concepts"],
        featured: [
            content.articles.nosql.nosql,
            content.articles.nosql.rdbms,
            content.articles.nosql.keyvalue,
            content.articles.nosql.document
        ],
        actionText: "Not only SQL",
        related: ["graphdatabase", "neo4j", "cypher_track_start", "licensing"]
    },
    drivers: {
        path: "/develop/drivers",
        title: "Language Drivers",
        introText: "Friends of Neo4j speak many languages, and work in many frameworks.",
        thumbnail: asset("img/still/neo4j_drivers.png"),
        featured: null,
        related: ["neo4j_rest", "spring_data_neo4j", "neo4j_java", "neo4j_rb", "neography", "neo4jphp" ,"neo4jclient", "py2neo", "node_neo4j", "neocons", "neo4j_rest_client","anorm_cypher",content.drivers.rneo4j,"cyphernet","pacer", "neo4j_js","node_neo4j_embedded",content.drivers.borneo,  /*"neo4j_python"*/, "gremlin", content.drivers.bulbflow, "keymaker", "neoid", "neo4django",  "neo4p", content.drivers.scala, "grails", "haskell", "datanucleus", "neoism","neo4j_go", "kundera", "neomodel"]
    },
    tools: {
        path: "/develop/tools",
        title: "Tools and Resources",
        introText: "There are a lot of tools and resources around Neo4j.",
        thumbnail: asset("img/still/cypher.png"),
        featured: [content.videos.cypher],
        related: ["drivers", "try", "neoclipse", "visualize", "jee"]
    },
    neo4j20_de: {
        path: "/learn/books/neo4j20_de",
        thumbnail: asset("img/books/neo4j20_de_small.jpg"),
        title: "Neo4j 2.0 - Eine Graphdatenbank für alle",
        introText: "Das einzige deutsche Buch zu Neo4j, umfassend und aktuell für Version 2.0",
        featured: [content.books.neo4j20_de],
        related: [
            content.action.signup,
            "trainings_DE",
            "conferences_DE",
            "meetups_DE",
            video("92114085"), // 0415 - Einführung in Neo4j
            video("0327 - Datenimport in Neo4j")
        ]
    },
    cloud: {
        path: "/develop/cloud",
        title: "Neo4j in the Cloud",
        introText: "Neo4j can be run in various cloud scenarios and on a number of cloud stacks.",
        thumbnail: asset("img/neo4j/neo4j_cloud.png"),
        actionText: "Neo4j in the Cloud",
        featured: [
            content.links.graphenedb,
            "ec2"
        ],
        related: ["heroku", "linux", "azure"]
    },
    azure: {
        path: "/develop/cloud/azure",
        title: "Deploying Neo4j to Microsoft Azure",
        introText: "It gets easier to deploy Neo4j Server on Azure every day, so here you can find some step-by-step instructions and hints on how to achieve that",
        actionText: "Go Azure",
        thumbnail: "http://blog.newrelic.com/wp-content/uploads/windows_azure2.jpg",
        featured: [content.videos.azure_channel9],
        related: [content.links.azure_vs2012, content.links.azure_one_click, content.links.azure_vmdepot,content.links.azure_openstack, content.links.azure, "dotnet", content.drivers.neo4jclient, "windows"]
    },
    ec2: {
        path: "/develop/ec2",
        title: "Easy Neo4j on Amazon EC2",
        introText: "Setup your EC2 instance AND Neo4j using Puppet <a href='https://github.com/neo4j-contrib/neo4j-puppet/blob/master/README.CLOUDFORMATION.md' target='_blank'>(source)</a>",
        actionText: "Easy Neo4j on Amazon EC2",
        thumbnail: "http://tctechcrunch2011.files.wordpress.com/2012/12/aws-logo-640.jpg?w=200",
        featured: [
            {
                title: "Puppet Setup",
                type: "article",
                thumbnail: "http://blog.netways.de/wp-content/uploads/2010/04/Puppet_Logo.png",
                content: "\
            <blockquote class='external markdown'>\
                <%-: content.ec2_template | md %>\
            </blockquote>"
            }
        ],
        related: ["ec2_detailed", "develop", "drivers", content.links.ec2_aws_tools]
    },
    ec2_detailed: {
        path: "/develop/ec2_detailed",
        title: "Set up your EC2 instance and Neo4j manually",
        actionText: "Manual Setup",
        thumbnail: "http://tctechcrunch2011.files.wordpress.com/2012/12/aws-logo-640.jpg?w=200",
        featured: [
            {
                type: "article",
                title: "Setup <strong>Neo4j only</strong> using Puppet <a href='https://github.com/neo4j-contrib/neo4j-puppet/blob/master/README.md' target='_blank'>(source)</a>",
                content: "\
            <blockquote class='external markdown'>\
                <%-: content.puppet | md %>\
            </blockquote>"
            }
        ],
        related: ["ec2", "cloud", content.links.ec2_aws_tools,
            , "ec2_manual",
            {
                type: "link",
                title: "Deploy Neo4j on Eucalyptus",
                path: "http://blogs.mindspew-age.com/2012/12/04/another-great-example-of-aws-fidelity-neo4j-cloud-init-and-eucalyptus/"
            }]
    },
    ec2_manual: {
        type: "page",
        path: "/develop/ec2_manual",
        title: "Manually set up an AWS EC2 instance",
        featured: [
            {
                type: "include",
                path: "/develop/_ec2_manual",
                title: "Manually set up an AWS EC2 instance"
            }
        ]
    },
    heroku: {
        path: "/develop/heroku",
        title: "Neo4j on Heroku",
        thumbnail: asset("img/logo/heroku.png"),
        introText: "A managed graph database in the cloud, perfect for getting to know Neo4j on your favorite PaaS platform.",
        actionText: "Do it now",
        featured: [
            content.articles.neo4j_on_heroku
        ],
        related: [
            content.links.graphenedb,
            content.videos.neo4j_heroku_gdocs,
//            {
//                thumbnail: asset("img/logo/heroku.png"),
//                title: "Heroku Neo4j Add-on",
//                path: "http://addons.heroku.com/neo4j"
//
//            },
            {
                thumbnail: asset("img/logo/heroku.png"),
                title: "Heroku devcenter article on hosted Neo4j",
                path: "https://devcenter.heroku.com/articles/graphenedb"
            },
//            {
//                thumbnail: asset("img/logo/github.png"),
//                title: "Clone an example Github Herkou template",
//                path: "https://github.com/neo4j-contrib/neo4j-heroku-seeds"
//            },
            {
                thumbnail: asset("img/contributors/maxdemarzi.jpg"),
                title: "Max De Marzi's Heroku examples",
                path: "http://maxdemarzi.com/tag/heroku/"
            },
            {
                thumbnail: asset("img/neo4j/neo4j_cloud.png"),
                title: "Neo4j Heroku Challenge Applications",
                path: "http://neo4j.com/blog/heroku-challengers-vote-now"
            },
            {
                thumbnail: "https://waza.heroku.com/images/layout/waza-bookmark.png",
                title: "Neo4j at Heroku Waza 2013",
                path: "http://waza.neo4j.org"
            },
            "cloud",
            "azure"
//            content.videos.james_ward_neo4j
        ]
    },
    jee: {
         path: "/develop/jee",
        title: "Neo4j for Java Enterprise Edition developers"  ,
        introText: "For JEE developers, there are a number of projects making Neo4j available in JEE environments.",
        related: [content.links.kundera]
    }   ,
    spring: {
        path: "/develop/spring",
        title: "Spring Data Neo4j",
        introText: "Spring Data Neo4j was the founding project of Spring Data and integrates Neo4j very well with the Spring Framework.",
        actionText: "Go ahead",
        thumbnail: asset("img/languages/sdn.png"),
        featured: [content.videos.good_relationships, content.books.goodrelationships],
        related: [
            {
                title: "Spring Data Neo4j Resources",
                type: "article",
                introText: "<ul>\
                    <li><a href='http://spring.neo4j.org/notes' target='_blank'>Developer Notes</a></li>\
                    <li><a href='http://spring.neo4j.org/docs' target='_blank'>Reference documentation</a></li>\
                    <li><a href='http://spring.neo4j.org/issues' target='_blank'>Issue Tracker</a></li>\
                    <li><a href='http://spring.neo4j.org/discussions' target='_blank'>Spring Forum</a></li>\
                    <li><a href='http://spring.neo4j.org/build' target='_blank'>Build Status</a></li>\
                    <li><a href='http://spring.neo4j.org/api' target='_blank'>API JavaDoc</a></li>\
                    </ul>\
                    "
            },
            {
                thumbnail: "http://www.springsource.org/files/imagefield_thumbs/project/images/Project_Data.png",
                title: "Spring Data Neo4j page on springsoure.org",
                path: "http://projects.spring.io/spring-data-neo4j/"
            },
            content.videos.sdn_cineasts,
            {
                type: "link",
                thumbnail: "",
                title: "Importing Data for SDN using Batch-Inserter",
                author: "Tero Paananen",
                path: "http://code.paananen.fi/2012/04/05/neo4j-batchinserter-and-spring-data-for-neo4j/"
            },
            {
                type: "link",
                thumbnail: "",
                title: "Spring MVC 3.1 - Implement CRUD with Spring Data Neo4j (5 part series)",
                introText: "In this tutorial, we will create a simple CRUD web-application using Spring 3.1 and Neo4j.",
                github: "https://github.com/krams915/spring-neo4j-tutorial",
                author: "Mark Serrano",
                path: "http://krams915.blogspot.mx/2012/03/spring-mvc-31-implement-crud-with_3045.html"
            },
            content.links.spring_heroku_james_ward,
            {
                type: "link",
                thumbnail: "",
                title: "Bootstrapping Neo4j With Spring-Data – Without XML",
                author: {"name": "Jochen Mader", "twitter": "@codepitbull"},
                path: "http://codepitbull.wordpress.com/2013/05/12/bootstrapping-neo4j-with-spring-data-without-xml/"
            },
            {
                type: "link",
                thumbnail: asset("img/logo/github.png"),
                title: "Tutorial & repository for a Spring Data Neo4j eclipse project setup",
                introText: "We decided to provide a very brief how-to guide including a base project skeleton preventing you from these setup issues and instead of this start coding immediately - enjoy!",
                author: {"name": "Florian Müller", "twitter": "@kiteflo"},
                path: "https://github.com/kiteflo/neo4jSpringEclipseSkeleton"
            },
            {
                type: "link",
                thumbnail: "http://1.bp.blogspot.com/-1wuzYs5eO1A/T3UQSaOrTnI/AAAAAAAAATY/OKRFYhWP_EY/s320/scala_with_sdn.png",
                title: "Using Spring Data Neo4j from Scala",
                author: "Jan Machacek",
                path: "http://neo4j.com/blog/spring-data-neo4j-from-scala"
            },
            {
                type: "link",
                thumbnail: "",
                github: "http://tomasmuller.com.br/2013/04/28/playframework-with-spring-data-neo4j/",
                introText: "Sample application/template for using Play with SDN and deploying to Heroku or self hosted capistrano.",
                title: "PlayFramework with Spring Data Neo4j ",
                author: {name: "Tomás Augusto Müller", twitter: "tomasmuller"},
                path: "https://github.com/tomasmuller/playframework-neo4j-template#playframework-spring-data-neo4j-template"
            },
            {
                type: "link",
                thumbnail: "http://skillsmatter.com/custom/images/skills-matter_150x60_logo_2010.gif",
                title: "Connecting to Neo4j using Spring Data",
                introText: "Anirvan shows building a 'User Management System' using Spring Data Neo4j.",
                author: "Anirvan Chakraborty",
                path: "http://skillsmatter.com/podcast/java-jee/akka-scala-spring"
            },
            {
                type: "link",
                thumbnail: "http://skydingo.com/blog/wp-content/uploads/2011/12/abstract_graph-300x261.png",
                title: "Domain Modeling using SDN",
                introText: "Willie uses SDN to build the configuration management database, he details the modeling process and describes in details the thinking and the code written for that.",
                author: "Willie Wheeler",
                path: "http://www.javacodegeeks.com/2012/01/domain-modeling-with-spring-data-neo4j.html"
            },
            {
                type: "article",
                thumbnail: "http://springinpractice.com/wp-content/uploads/2008/08/sip-cover-small1.jpg",
                title: "Cypher query examples when using Spring Data Neo4j",
                introText: "This post shows how to perform various sample <a target='_blank' href='http://springinpractice.com/2012/03/06/neo4j-1-6-1-cypher-query-examples-when-using-spring-data-neo4j-2-0/'>Cypher queries</a> when using Neo4j and Spring Data Neo4j (SDN).\
                Here I show how to <a target='_blank' href='http://springinpractice.com/2011/12/28/initializing-lazy-loaded-collections-with-spring-data-neo4j/'>initialize lazy-loaded collections</a> with Spring Data Neo4j\
                ",
                author: "Willie Wheeler",
                path: ""
            },
            {
                type: "link",
                title: "Graph Analysis with Scala and Spring Data Neo4j",
                author: "Hendy Irawan",
                path: "http://scala-enterprise.blogspot.ca/2011/12/graph-analysis-with-scala-and-spring.html"
            } ,
            content.example_data.hubway
        ]

    },
    // people : {
    //     path : "/participate/people",
    //     title : "People around Neo4j",
    //     introText : "See who drives Neo4j",
    //     featured : {
    //         title : "We need you",
    //         type : "video",
    //         thumbnail : "http://photos3.meetupstatic.com/photos/event/8/3/a/6/600_149253702.jpeg",
    //         introText : "(TODO) we need an introductory video about why people matter to Neo4j",
    //         src : "http://player.vimeo.com/video/53838744"
    //     },
    //     related : ["contributors", "neo_staff", "speakers", "authors"]
    // },
    linked_data: {
        tags: ["rdf", "sparql", "linked data", "semantic web"],
        path: "/develop/linked_data",
        title: "Linked Data: RDF and SparQL with Neo4j",
        introText: 'The core engine of Neo4j supports the <a href="/learn/graphdatabase">property graph model</a>. This model can easily be adapted to support the LinkedData <a href="http://en.wikipedia.org/wiki/Resource_Description_Framework">RDF model</a>, consisting of Triples.' +
            'This turns Neo4j into a full triple store, or you can just import and use LinkedData resources from e.g. <a href="http://dbpedia.org/">DBPedia</a> and others. ',
        url:"test",
        featured: [
            {
                
                type: "link",
                title: "What is Linked Data?",
                introText: "The concept of LinkedData is to make the wealth of information on the Internet machine-readable, interchangeable and editable by anyone. Read more on the LinedData pages.",
                thumbnail: asset("img/still/linked_data.gif"),
                path: "http://linkeddata.org/"
            }
        ],
        related: [
            {
                type: "link",
                title: "A SparQL plugin for the Neo4j Server",
                introText: "With this plugin, you can wrap a neo4j server to act as a triple store",
                author: "peterneubauer",
                github: "https://github.com/neo4j-contrib/sparql-plugin",
                url: "http://neo4j-contrib.github.io/sparql-plugin/"
            },
            {
                type: "link",
                title: "The Linked Data Benchmarking Council project",
                introText: "Neo Technology is part of the LDBC project, working on a good benchmarking framework for graphs and LinkedData/",
                thumbnail: "http://www.ldbc.eu/sites/default/files/logo.png",
                author: "rab_i",
                url: "http://architects.dzone.com/articles/state-linked-data-benchmark"
            },
            content.links.dbpedia_clojure,
            {
                type: "link",
                title: "Importing Turtle Ontologies in Neo4j",
                introText: "With a Turtle parser, it is quite easy to parse DBPedia dumps into neo4j.",
//                thumbnail: "http://i.imgur.com/9eu7kRp.png",
                author: "Michael Bach",
                url: "http://michaelbloggs.blogspot.de/2013/05/importing-ttl-turtle-ontologies-in-neo4j.html"
            }  ,
            {
                type: "link",
                title: "Using OWL with Neo4j",
                introText: "It's quite easy to map and query ontologies in a property graph model, here is an example for this.",
                thumbnail: "http://1.bp.blogspot.com/-AfPJhGuMY08/UhMt1e0AuSI/AAAAAAAAAAM/ze08DayNioc/s320/provontology.jpg",
                author: "Stefanie Wiegand",
                url: "http://neo4j.com/blog/and-now-for-something-completely"
            }
        ]
    },
    neoclipse: {
        tags: ["workbench", "rcp", "cypher"],
        title: "Neoclipse",
        path: "/develop/tools/neoclipse",
        thumbnail: asset("img/apps/neoclipse.png"),
        author: ["nawroth", {twitter: "nrkkalyan", name: "Radhakrishna Kalyan"}],
        introText: "Neoclipse is a standalone workbench application to interact with Neo4j (database directory or server). It supports Cypher, index searches, visualisation, graph updates. You can <a href='https://github.com/neo4j/neoclipse/downloads'>download the latest versions here.</a> ",
        /*
         Main features:

         visualize the graph
         increase/decrease the traversal depth
         filter the view by relationship types
         add/remove nodes/relationships
         create relationship types
         add/remove/change properties on nodes and relationships
         highlight nodes/relationships in different ways
         add icons to nodes
         */

        featured: [
            {
                type: "video",
                title: "Getting Started with Neoclipse",
                introText: "This is a short tutorial to get started with Neoclipse and get nice graph decorations onto your graph.",
                thumbnail: "https://github.com/neo4j/neoclipse/wiki/img/Neoclipse.introduction.png",
                author: "peterneubauer",
                src: "https://player.vimeo.com/video/12014944"
            },
            {
                type: "video",
                title: "Getting Started with Neoclipse Part 2",
                introText: "Shows the new functionality including the Cypher query window and remote Server connections.",
                thumbnail: "https://github.com/neo4j/neoclipse/wiki/img/bigGraph1.png",
                author: "nrkkalyan",
                src: "http://www.youtube.com/embed/9j3FjMEp32M?rel=0&autoplay=1"
            }
        ],
        related: [
            {
                type: "link",
                author: "@nawroth",
                title: "Neoclipse Documentation and source",
                url: "https://github.com/neo4j/neoclipse/wiki",
                github: "https://github.com/neo4j/neoclipse",
                thumbnail: asset("img/apps/neoclipse.png")
            },
            {
                type: "link",
                author: "@nawroth",
                title: "New Features in Neoclipse",
                introText: "The post discusses handling of properties, relationship types, visualization",
                url: "http://blog.nawroth.com/2009/04/neoclipse-reloaded.html",
                thumbnail: "http://3.bp.blogspot.com/_sm_3KdSgQMg/SdVNZLa7K6I/AAAAAAAAADE/v6gDiadFOlw/s200/neoclipse-relationship.png"
            },
            {
                type: "link",
                author: "Jaime",
                title: "Neoclipse and Neo4j",
                introText: "The home icon is the built-in starting point* for my database. From there I can traverse nodes, relationships to find what I am looking for. (<a href='http://mybraincrack.blogspot.de/search/label/Neo4j'>more Neo4j posts</a>)",
                url: "http://mybraincrack.blogspot.de/2012/03/neoclipse-and-neo4j.html",
                thumbnail: "http://4.bp.blogspot.com/-5fvS7z7Te1o/T2e-ayueDGI/AAAAAAAAAC8/5GBVKXhlqjw/s200/Subreference+Nodes.JPG"
            },
            {
                type: "link",
                author: "Sefol",
                title: "Neoclipse – setting node labels",
                introText: "The Neoclipse documentation is a little bit confusing on this point.  You must tell Neoclipse which (String) property of a node should be used for rendering its visible node label. ...",
                url: "http://www.sefol.com/?p=870",
                thumbnail: "http://www.sefol.com/wp-content/themes/sefol/images/sefol/sefollogo.jpg"
            }
        ]
    },
    contributors: {
        path: "/participate/contributors",
        title: "Contributors - you rock.",
        introText: "The Neo4j project is driven by the community. Here are some individuals that you might encounter in the discussion forums or come across their projects.\
        For a full list of all code contributors, please see <a href='http://docs.neo4j.org/chunked/stable/contributors.html' target='_blank'>The official docs.</a>",
        previewText: "We're very proud to have such an engaged group of contributors to Neo4j and its ecosystem.",
        actionText: "See our contributors",
        featured: [content.videos.neo4j_code_2012],
        thumbnail: asset("img/still/neo4j_code_2012.gif"),
//        type: "_contributors",
        related: ["maxdemarzi", "mhluongo", "ronge", "craigtaverner", "technige", "pablopareja", "espeed", "rhetonik"]
    },
    channels: {
        path: "/participate/channels",
        thumbnail: asset("img/logo/survey.png"),
        title: "How do you learn?",
        introText: "We are interested in which communication channels you, but also especially your co-workers, friends and customer developers use to learn more about technology and software development.",
        content: function (params) {
            return render.include("/participate/_channels", params);
        },
        featured: [],
        related: [],
        actionText: "Participate in survey"
    },
    videos: {
        type: "track",
        next: ["videos_webinar"],
        path: "/learn/videos",
        title: "Neo4j videos, webinars and screencasts",
        thumbnail: asset("img/events/webinar.png"),
        introText: "Enjoy yourself watching these videos that were produced to entertain and educate about graph databases, Neo4j and Cypher",
        featured: [],
        related: ["videos_webinar", "videos_interview", "videos_graphconnect"],
        actionText: "Watch them"
    },
    videos_webinar: {
        type: "track",
        path: "/learn/videos_webinar",
        title: "Neo4j webinars",
        prev: ["videos"],
        next: ["videos_interview"],
        thumbnail: asset("img/events/webinar.png"),
        img: asset("img/still/webinars_slide.jpg"),
        introText: "Enjoy yourself watching these webinar-videos that were produced to entertain and educate you about graph databases, Neo4j and Cypher. Check our event listing for <a href='/participate/events/webinars'>currently scheduled webinars</a>.",
        featured: [],
        related: [],
        actionText: "Watch them"
    },
    videos_interview: {
        type: "track",
        prev: ["videos_webinar"],
        next: ["videos_graphconnect"],
        path: "/learn/videos_interview",
        title: "Neo4j interviews",
        thumbnail: asset("img/events/webinar.png"),
        introText: "Enjoy yourself watching these interviews that we recorded with people who had interesting stories to share. Stories that could be your own, about graph databases, Neo4j and Cypher. Make sure to meet them at the next <a href='http://graphconnect.com'>GraphConnect</a> conference.",
        featured: [],
        related: [],
        actionText: "Watch them"
    },
    videos_graphconnect: {
        type: "track",
        prev: ["videos_interview"],
        path: "/learn/videos_graphconnect",
        title: "Neo4j GraphConnect recordings",
        thumbnail: asset("img/logo/graphconnect.png"),
        introText: "Enjoy watching these session recordings from our <a href='http://graphconnect.com'>GraphConnect</a> about graphs, graph databases, Neo4j and applications using them conference. Hope you are there next time too.",
        featured: [],
        related: [],
        actionText: "Watch them"
    },
    events: {
        path: "/events",
        title: "Events",
        thumbnail: asset("img/logo/meetup.jpg"),
        introText: "Join the Neo4j community at one of our events! Learn about Neo4j at a conference, meet other Neo4j users at a meet up, or quickly get up to speed at a Neo4j training close to you.",
        content: "If you want to learn more about Neo4j nothing beats a hands on experience. Learn with our community members and driver authors, talk to our engineers or discuss with our customers.",
//        badge: "<a href='/trainings' target='_blank'><img src='" + asset("img/events/n4jtutorial_ad-150x150.png") + "'></a> ",
        featured: [
            {
                type: "include",
                path: "participate/events_map"
            }
        ], // content.links.graphconnect,content.links.trainings
        related: ["trainings","meetups", "webinars",  "conferences"],
        actionText: "Pick your event"
    },
    meetups: {
        path: "/participate/events/meetups",
        thumbnail: asset("img/logo/meetup.jpg"),
        title: "Worldwide Meetups",
        prev: ["events"],
        next: ["webinars"],
        introText: "Neo4j meetups are worldwide. Make a connection or start a new group. <br/>Find the next meetup events in <a href='/participate/events/meetups_US'>the US</a>, or in Europe in <a href='/participate/events/meetups_EU'>English</a> or <a href='/participate/events/meetups_DE'>German</a>.",
        actionText: "Find a meetup",
        featured: [
            {
                type: "include",
                path: "participate/events_map",
                params: {requestedType:"Meetup"}
            }
//            {
//                title: "Neo4j worldwide Meetups",
//                thumbnail: asset("img/still/meetups_world.gif"),
//                introText: "On <a href='http://neo4j.meetup.com'>meetup.com</a> you find all the Neo4j meetups and can search for one that is close to your home.",
//                path: "http://neo4j.meetup.com",
//                actionText: "Find a meetup"
//            }
        ],
        related: []
    },
    webinars: {
        path: "/participate/events/webinars",
        title: "Webinars",
        prev: ["meetups", "events"],
        next: ["trainings"],
        thumbnail: asset("img/events/webinar.png"),
        introText: "Neo4j webinars give you hands on expert information either directly from Neo Technology or from our partners and users. In case you missed one, we've <a href='/learn/videos_webinar'>recorded them all</a>.",
        actionText: "Register for a webinar",
        featured: [
            "videos_webinar"
        ],
        related: []
    },
    trainings: {
        path: "/participate/events/trainings",
        title: "Neo4j Training",
        thumbnail: asset("img/events/n4jtutorial_ad-150x150.png"),
        img: asset("img/events/tutorials.jpg"),
//        img: "http://www.neotechnology.com/wp-content/uploads/2013/07/Tutorials_070912_620x300.png",
        prev: ["webinars", "events"],
        next: ["conferences"],
// TODO move to a related in content and use in participate
//        badge: "<h3>Stay Connected</h3>\
//                <img src='"+asset('img/neo4j/neo4j-news.gif')+"' style='float:left'>\
//            <div style='max-width: 20em'>\
//            Please keep me updated about Neo4j events, releases and articles.\
//            <iframe src='http://info.neotechnology.com/2012Newsletters_NewsletterSubscriptioniframe.html' onload='this.style.visibility = 'visible';' style='border:0;padding: 0;' width='180px' height='50px' frameborder='0' scrolling='no'></iframe>\
//            </div>",
        introText: "Become proficient with Neo4j by attending a full day training close to you. If you enjoy focused, hands-on learning experiences, the training is the best way to go.",
        content:" Find the next training in <a href='/participate/events/trainings_US'>the US</a>, or in Europe in <a href='/participate/events/trainings_EU'>English</a> or <a href='/participate/events/trainings_DE'>German</a>.",
        actionText: "Find training near you",
        featured: [content.links.online_intro_training,
            {
                type: "include",
                path: "participate/events_map",
                params: {requestedType:"Training"}
            }
        ],
        related: []  //"partners","licensing"
    },
    trainings_US: { path: "/participate/events/trainings_US" },
    trainings_EU: { path: "/participate/events/trainings_EU" },
    trainings_DE: { path: "/participate/events/trainings_DE" },
    conferences_US: { path: "/participate/events/conferences_US" },
    conferences_EU: { path: "/participate/events/conferences_EU" },
    conferences_DE: { path: "/participate/events/conferences_DE" },
    meetups_US: { path: "/participate/events/meetups_US" },
    meetups_EU: { path: "/participate/events/meetups_EU" },
    meetups_DE: { path: "/participate/events/meetups_DE" },
    neo4j: {
        path: "/learn/neo4j",
        title: "What is Neo4j?",
        introText: "Neo4j is a graph database, reliable and fast for managing and querying highly connected data.",
        thumbnail: asset('img/neo4j/visually_refcard_small.gif'),
        actionText: "Study this",
        featured: [
            content.articles.learn, video('Ian Robinson  - What is a Graph Database? What is Neo4j?')
        ],
        related: [content.videos.why_graphs, "graphdatabase", 
		    content.videos.bunnies,
			content.videos.graphdb101, content.links.neo4j_ref_card, "nosql", "licensing", content.links.manual, "neo4j_server",
            content.links.seradio_neo4j,
            {
                type: "link",
                author: "peterneubauer",
                path: "http://www.infoq.com/articles/graph-nosql-neo4j",
                title: "Graph Databases, NOSQL and Neo4j",
                introText: "This article aims to give an overview of the position of Graph Databases in the NOSQL-movement. The second part is an introduction to Neo4j, a Java-based Graph Database.",
                thumbnail: "http://cdn4.infoq.com/styles/i/logo.jpg"
            }
        ]
    },
    mobile: {
        path: "/develop/mobile",
        title: "Neo4j on and from mobile devices and smartphones",
        featured: [],
        related: [],
        thumbnail: ""
    },
    reference_card: {
        path: "/learn/neo4j/reference_card",
        title: "Neo4j Reference Card",
        thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w587.png",
        featured: [
            content.links.neo4j_ref_card
        ]
    },
    cypher: {
        type: "track",
        path: "/learn/cypher",
        title: "Learn Cypher - the Neo4j query language",
        thumbnail: asset("img/still/cypher_tutorial.gif"),
        //introText: "Hands on introduction to the Cypher Query Language",
        content: function (params) {
            return render.include("/cypher/cypher_console", params)
        },
        prev: ["cypher_track_start"],
        next: ["cypher_track_use"],
        actionText: "Learn it",
        config: {no_slides:false},
        featured: [
            { type: "include", title: "Intro", path: "/cypher/cypher_tutorial_intro" },
            { type: "include", title: "First Steps", path: "/cypher/cypher_tutorial_firststeps" },
            { type: "include", title: "Explore the graph", path: "/cypher/cypher_tutorial_explore" },
            { type: "include", title: "Update the graph", path: "/cypher/cypher_tutorial_update" },
            { type: "include", title: "Add some friends", path: "/cypher/cypher_tutorial_update_friends" },
            { type: "include", title: "Work with paths", path: "/cypher/cypher_tutorial_advanced_matches" },
            { type: "include", title: "Work with paths", path: "/cypher/cypher_tutorial_paths" },
            { type: "include", title: "Alternative Setups", path: "/cypher/cypher_tutorial_alternatives" }
        ],
        related: [
            "try", content.videos.cypher, content.links.manual_cypher, content.links.cypher_cheat_sheet
        ],
        badge: "<h3>Cypher Tutorial</h3>\
  <p>Cypher is a Graph Query Language</p>\
  <ul>\
    <li>it is human readable and expressive</li>\
    <li>MATCHes patterns in the graph</li>\
    <li>is about the <strong>what</strong> not how</li>\
  </ul>\
  <a id=\"detachConsole\" class=\"btn\">Open Console in new Window</a>"
    },
    ops: {
        path: "/develop/ops",
        title: "Neo4j in Production - Operations",
        introText: "To run Neo4j in production, these resources will help you get going.",
        actionText: null,
        thumbnail: asset("img/still/secrets.png"),
        featured: [content.videos.high_availability],
        related: [content.videos.ha, content.videos.installing_neo4j, content.videos.ha_new_fosdem, content.videos.production_secrets, video('0719 - Hardware Sizing with Neo4j'), "production", content.install.windows, content.install.chef]
    },
    modeling : {
        path: "/develop/modeling",
        title: "Data Modeling with Graphs",
        introText: "Data modeling with Graphs is fun. Just take your real-world data, a whiteboard and draw the connections that are important. There are ",
        featured: [
            {
                type: "video",
                title: "Data Modeling with Neo4j",
                author: "mesirii",
                introText: "In this presentation we'll cover many aspects of modeling domains and data for a graph database like Neo4j. <a href='http://slideshare.net/neo4j/data-modeling-with-neo4j'>Slides</a>",
                src: "http://player.vimeo.com/video/67371996#t=0m50s",
                thumbnail: "http://image.slidesharecdn.com/webinardatamodeling-130713191849-phpapp01/95/slide-1-638.jpg?1373761157"
            },
            video("0424 - Managing and Querying Hierarchies with Neo4j")
        ],
        related: [
            content.books.graphdatabases,
            "try",
            content.videos.power_modeling,
            content.links.graphgist,
            content.docs.domain_modeling,
            video("89075703"),
            video("Designing and Building a Graph Database Application - Ian Robinson @ GraphConnect SF 2013")
        ]
    },
    internals: {
        path: "/develop/internals",
        title: "Neo4j Internals",
        introText: "You might have wondered how Neo4j works internally, here are some answers",
        featured: [
            {
                title: "Neo4j Internals Presentation",
                type: "video",
                author: {name: "Tobias Lindaaker", twitter: "thobe"},
                thumbnail: "",
                introText: "Tobias explains the internals of Neo4j in this insightful talk at the <a href='http://skillsmatter.com/event/nosql/neo4j-internals'>SkillsMatter Neo4j User Group</a> (<a href='http://slideshare.net/thobe/an-overview-of-neo4j-internals'>slides are here</a>)",
                src: "http://player.vimeo.com/video/35666463"
            }
        ],
        related: [
            {
                type: "link",
                introText: "Detailed description of configuration options and implementation details for caches, memory mapped io, property store compression and performance hints.",
                title: "Neo4j Manual on internal Configuration and Performance",
                path: "http://docs.neo4j.org/chunked/milestone/embedded-configuration.html"
            },
            {
                type: "link",
                introText: "Chris dives deeply into each of the aspects of the Neo4j Kernel",
                title: "Chris Giorans Neo4j Internals Blog Series",
                author: {name: "Chris Gioran", twitter: "digitalstain"},
                path: "http://digitalstain.blogspot.de/2010/10/inside-neo4j-hello-world.html"
            },
            {
                type: "link",
                introText: "Neo4j saves space by encoding property values efficiently, this post explains how.",
                author: {name: "Chris Gioran", twitter: "digitalstain"},
                title: "Inside the Property Store",
                path: "http://digitalstain.blogspot.de/2011/11/rooting-out-redundancy-new-neo4j.html"
            },
            content.links.mapdb_index,
            {
                type: "link",
                introText: "Some insights in how Cypher works internally, how the parser combinator works and how the parsed query parts are executed in the pipe based architecture",
                author: {twitter: "adrianoalmeida7", name: "Adriano Almeida"},
                title: "How Neo4j uses Scala’s Parser Combinator: Cypher’s internals",
                path: "http://ahalmeida.com/2011/09/06/how-neo4j-uses-scalas-parser-combinator-cyphers-internals-part-1/"
            }
        ]
    },
    try: {
        path: "/learn/try",
        title: "Try querying different graphs with Cypher online",
        thumbnail: asset("img/still/cypher_tutorial.gif"),
        introText: "Try Cypher live on a dataset of your choice",
        actionText: "Try live",
        featured: [
            {
                title: "Cypher Console",
                type: "include",
                path: "/learn/try"
            }
        ],
        related: [content.links.cypher_cheat_sheet, content.links.manual_cypher, "cypher", content.links.graphgist, content.links.wes_cypher
        ]
    },
    neo4j_server: {
        path: "/tracks/neo4j_server",
        thumbnail : asset("img/still/neo4j_browser_small.png"),
        img : asset("img/still/neo4j_browser.png"),
        type: "page",
        title: "Neo4j Server",
        introText: "Neo4j comes as standalone server. Easy to <a href='/download'>download</a>, install and start. It has an interactive and friendly Web-Interface and a fast, transactional HTTP-Endpoint for Cypher. Most of the drivers support the Neo4j server. The browser contains getting started guides for Cypher and the Web-UI as well as the movie example dataset.",
        featured: [content.videos.neo4j_recommendation_engine, content.videos.browser_styling],
        related: [
            "download",
            {
                type: "link",
                introText: "The Neo4j transactional HTTP endpoint allows you to execute a series of Cypher statements within the scope of a transaction. The transaction may be kept open across multiple HTTP requests, until the client chooses to commit or roll back.",
                title: "The transactional Cypher HTTP endpoint",
                path: "http://docs.neo4j.org/chunked/milestone/rest-api-transactional.html"
            },
            "drivers",
            "cloud",
            {
                type: "link",
                title: "Manual: Neo4j-Server",
                introText: "Components, installation and other aspects of the Neo4j Server documented in the manual.",
                path: "http://docs.neo4j.org/chunked/milestone/server-installation.html"
            },
            {
                type: "link",
                introText: "Detailed description and usage of the Neo4j-Server REST-API which is mostly used for managment purposes.",
                title: "Manual: REST-API",
                path: "http://docs.neo4j.org/chunked/milestone/rest-api.html"
            }
        ]
    },
    visualize: {
        path: "/develop/visualize",
        title: "Graph Visualization",
        thumbnail: asset("img/still/d3_network.png"),
        introText: "Storing a graph is one thing, but visualizing it creates awe and epiphanies.\
                Graph visualisations are a powerful tool to convey the content of a graph. They can highlight patterns, show clusters and connections.\
                There are different tools that you can use to visualize the content of a Neo4j graph database.",
        featured: [
            content.videos.browser_styling,
            {
                type:"link",
                author: {name:"Alistair Jones",twitter:"apcj"},
                title:"Seeing patterns in your data",
                path:"https://skillsmatter.com/skillscasts/5095-seeing-patterns-in-your-data",
                introText: "Alistair will give an overview of the techniques and technologies for visualising graph data, and explain where these work well for different types of problems. <a href='http://www.apcjones.com/talks/2014-03-26_Neo4j_London/'>Interactive Slides</a>",
                thumbnail: asset("img/still/seening_pattern_in_data.jpg")
            },
            content.links.keylines,
            {
                type: "video",
                author: {name:"Tom Sawyer", twitter:"tomsawyer"},
                title: "Tom Sawyer Perspectives",
                introText: "<a href='https://www.tomsawyer.com/pressreleases/pressrelease.php?release_id=164&news=product'>Tom Sawyer Perspectives 6.0</a> offers Cypher support for Neo4j graph databases and connects them to the broad visualization capabilities of the tool. The integration with the latest Neo4j version makes it easier to write complex queries and render their results in a comprehensive way.",
                src: "http://player.vimeo.com/video/90897466",
                img: "https://www.tomsawyer.com/products/perspectives/images/perspectives/overview/2012.08.13.0.DesignPreviewDeploy.png",
                thumbnail: "https://www.tomsawyer.com/products/perspectives/images/perspectives/overview/2012.08.13.0.DesignPreviewDeploy.thumb.png"
            }
        ],
        related: [
            {
                title: "Max De Marzi's Graph Visualization Blog",
                introText: "Max De Marzi presents different ways of visualizing graphs.",
                path: "http://maxdemarzi.com/tag/visualization-2/",
                thumbnail: "http://maxdemarzidotcom.files.wordpress.com/2012/04/threed2.jpg?w=1160&h=336"
            },
            "graphgist",
            content.links.linkurious,
            content.links.alchemy,
            {
                type:"video",
                title: "GraphConnect 2012: Visualizing Graphs-Max De Marzi",
                author: "maxdemarzi",
                src:"http://player.vimeo.com/video/53205761",
                img: "http://maxdemarzidotcom.files.wordpress.com/2012/01/visualization.png?w=500",
                thumbnail: "http://maxdemarzidotcom.files.wordpress.com/2012/01/visualization.png?w=100",
                introText: "Max de Marzi, the graph visualization rock star shows how to present graphs in different ways, with just a few lines of codes."+
                    "<a href='http://slideshare.net/GraphConnect/1434-adopt-marzi-visualizing-graphs'>Slides</a>"
            },
            content.links.d3,
            content.links.gephi,
            "neoclipse",
            {
                title: "VivaGraphJS on GitHub",
                path: "https://github.com/anvaka/VivaGraphJS",
                thumbnail: "http://yifanhu.net/GALLERY/GRAPHS/GIF_THUMBNAIL/Bai@bfwa398.gif",
                introText: "VivaGraphJS is a free graph drawing library for JavaScript."
                // todo yasiv.com some text, pictures etc
            },
            {
                title: "Graph Data Visualization in QlikView",
                path: "http://tiqview.tumblr.com/post/42292909758/graph-data-visualization-in-qlikview",
                author: "tiqview",
                thumbnail: "https://s3-eu-west-1.amazonaws.com/tiq-solutions/tumblr/pics/TIQ_Graph_Dracula_02.png",
                introText: "A QlikView Graph Visualization Extension Object using the Graph Dracula JavaScript Library (based on Raphaël.js)"
            },
            {
                title: "Three.js on GitHub",
                path: "https://github.com/mrdoob/three.js",
                thumbnail: asset("img/still/threejs.jpg"),
                introText: "The aim of the project is to create a lightweight 3D library with a very low level of complexity"
                // todo max article, neo4waza etc.
            },
            {
                title: "A collection of graph visualization options",
                path: "http://memit.com/mesirii",
                introText: "Michael Hunger has a nice collection on interesting projects in the visualisation space.",
                thumbnail: asset("img/still/d3_network.png")
            },
            content.articles.jdbc
        ]
    },
    apps: {
        path: "/learn/apps",
        title: "Apps Gallery",
        introText: "Built with Neo4j, tripping the graph fantastic.",
        featured: null,
        related: [
            content.apps.structr,
            content.apps.polymap,
            content.apps.assim_mon,
            content.apps.sylvadb,
            content.apps.flavorwocky,
            content.apps.frostymug,
            content.apps.neosocial,
            content.projects.neoclipse]
    },

    ruby: {
        path: "/develop/ruby",
        title: "Neo4j and Ruby",
        introText: "Neo4j and Ruby have been close friends for a long time. You can use Neo4j embedded via neo4j.rb (JRuby) or Neo4j server via neography and other drivers",
        thumbnail: asset("img/languages/ruby.png"),
        featured: [
            {
                type: "video",
                title: "Neo4j: Social Skills for Ruby Developers",
                src: "https://vimeo.com/36391029",
                author: "PrasannaPendse",
                content: "Ruby developers tend to be a lonely bunch. Slumped over a Mac in a dimly lit corner of a warehouse turned open-workspace. Unable to approach new people and introduce yourself. Unable to have a conversation that doesn't devolve into an opinionated debate. Social skills are limited to what you learned from Manga. Unfortunately, you can't use those in real life. Yet, one day, someone shows up and asks if you can build 'em a \"social site\" - you know, friends, activity feeds, jealousy. And privacy settings. \"Me?\", you think. \"You want ME to build you a SOCIAL site?\" Go ahead. Reach for that bottle of Neo4J. Its time to celebrate!",
                thumbnail: "http://b.vimeocdn.com/ps/104/778/1047786_75.jpg",
                img: "http://b.vimeocdn.com/ts/249/596/249596808_640.jpg"
            }
        ],
        related: [
            {
                type: "link",
                path: "http://maxdemarzi.com/tag/ruby/",
                title: "Ruby examples by Max de Marzi",
                thumbnail: "http://maxdemarzidotcom.files.wordpress.com/2012/02/network.png?w=290&h=239",
                introText: "Examples on how to query, import, export and visualize data in Neo4j using Ruby from Max de Marzi"
            },
            content.drivers.neo4j_rb,
            content.drivers.neography,
//            content.drivers.pacer,
            {
                type: "link",
                path: "http://janitor.se/blog/2013/07/04/easier-neo4j-dot-rb-deployments-with-chef-plus-capistrano-plus-torquebox/",
                title: "Easier Neo4j.rb Deployments With Chef + Capistrano + Torquebox",
                author: {name:"Chris Fitzpatrick",twitter:"chrisfitzpat"},
                thumbnail: "http://www.gravatar.com/avatar/670f26d0dfedc0026445c92345d627e4?s=160",
                introText: "setting up a server to host your application isn’t as hard as you might think and you’ll get much better performance. The following is how I do it with Chef and Capistrano."
            },
            content.drivers.neoid,
            content.drivers.keymaker,
            "maxdemarzi",
            "ronge",
            content.apps.neosocial
        ]
    },
    dotnet: {
        path: "/develop/dotnet",
        title: "Neo4j and .net",
        introText: "Thanks to our partners at readify, the .net story for Neo4j is much better than everyone who sees the 4j suffix would imagine.",
        thumbnail: asset("img/languages/dotnet.png"),
        featured: [
            {
                type: "video",
                title: "Neo4j in a .NET world",
                src: "http://vimeo.com/43676873",
                thumbnail: asset("img/languages/dotnet.png"),
                author: "tathamoddie",
                introText: "<p>Tatham Oddie will be coming from Australia to present at the Neo4j User Group on Neo4j with .NET, and will cover:\
            <ol><li>the Neo4j client we have built for .NET SyntaxErrorl</li>\
            <li>hosting it all in Azure</li>\
            <li>why our queries were 200ms slower in the cloud, and how we fixed it</li></ol>\
            </p>\
            <p>Tatham will present a case study, explaining:\
            <ol><li>what our project is</li>\
            <li>why we chose a graph db</li>\
            <li>how we modelled it to start with</li>\
            <li>how our first attempts at modelling were wrong</li>\
            <li>what we're doing now</li>\
            </ol></p>"
            }
        ],
        related: [
            content.drivers.neo4jclient,
//            content.install.windows,
//            content.links.install_windows,
//            content.links.start_with_neo4j_neo4jclient,
            content.drivers.cyphernet,
            {
                type: "link",
                title: "Using Neo4j Graph DB With F#",
                introText: "Sergey shows how to use Neo4jClient from F# from simple commands to using the LINQ-like Cypher DSL",
                author: {twitter: "sergey_tihon",name:"Sergey Tihon"},
                path: "http://sergeytihon.wordpress.com/2013/03/27/using-neo4j-graph-db-with-f/"
            },
            {
                type: "link",
                title: "Neo4j Koans in .net using Neo4jClient",
                introText: "Brian converted the <a href='https://github.com/jimwebber/neo4j-tutorial' target='_blank'>Neo4j Dr.Who Koans</a> by Jim Webber and Ian Robinson to c# so that you can have an enjoyable learning experience in .net",
                author: "Brian Woodward",
                path: "https://github.com/doowb/neo4j-dotnet-koans"
            },
            "tathamoddie" , // "romikoderbynew" ,
            {
                type: "link",
                title: "Neo4jD–.NET client for Neo4j Graph DB",
                author: "Sony Arouje",
                introText: "Last couple of days I was working on a small light weight .NET client for Neo4j.",
                path: "http://sonyarouje.com/2012/02/03/neo4jd-net-client-for-neo4j-graph-db/"
            },
            {
                type: "link",
                path: "http://blogs.microsoft.co.il/blogs/erix99/archive/2013/03/05/using-c-to-connect-with-neo4j-graph-database-part-1.aspx",
                title: "Using C# to connect to Neo4j Part 1",
                introText: "Ariel discusses the options connecting to Neo4j from C# using code examples for the different approaches.",
                author: "Ariel Rabinovich"
            },
            content.links.azure_one_click ,
            content.links.azure_vs2012 ,
            content.links.azure

        ]},
    python: {
        path: "/develop/python",
        title: "Neo4j and Python",
        introText: "Python rocks and so does Python and Neo4j. There are many ways of interacting with Neo4j from Python",
        thumbnail: asset("img/languages/python.png"),
        featured: [
            {
                type: "video",
                title: "Introduction tod Py2neo and Geoff",
                src: "http://player.vimeo.com/video/44822406",
                introText: "Nigel presents how to get started with Py2neo and shows the power of the graph exchange format Geoff",
                author: "technige",
                img: "http://image.slidesharecdn.com/introductiontopy2neo-120629031610-phpapp02/95/slide-1-728.jpg"
            },
            {
                type: "video",
                title: "How Sharehoods created NeoModel along the way",
                src: "http://player.vimeo.com/video/62812358",
                introText: "In this <a href='http://skillsmatter.com/podcast/nosql/case-study-how-sharehoods-created-neomodel-along-the-way'>SkillsMatter Neo4j User-Group</a> talk, Sharehoods Head of Technology Robin Edwards will explain why and how Neo4j is used at this exciting tech startup. Robin will also give a whirlwind tour of neomodel, a new Python framework for neo4j and its integration with the Django stack.",
                author: "Robin Edwards",
                img: "https://raw.github.com/robinedwards/neomodel/master/art/neomodel-300.png"
            }
        ],
        related: [
            content.drivers.py2neo, content.drivers.neo4j_rest_client,
            content.drivers.neomodel,
            content.drivers.neo4django,
//            content.drivers.neo4j_python,
            content.drivers.bulbflow,
            content.links.python_safari,
            content.links.python_unique_safari,
            "technige",
            {
                type: "link",
                path: "http://www.coolgarif.com/brain-food/flask-api-over-neo4j-in-python",
                thumbnail: asset("img/still/flask-neo4j-json-api-output.png"),
                title: "Deploying an API using Neo4j and Python with Flask",
                introText: "In this article we'll be taking the <a href='http://www.coolgarif.com/brain-food/getting-started-with-neo4j-part2'>HydraGraph</a> and exposing it as a RESTful API",
                github: "https://gist.github.com/coolgarifTech/5671071",
                author: {name:"Richie Barter",twitter:"coolgarif"}
            } ,
            {
                type: "video",
                title: "PyCon 2010:Persistent Graphs in Python with Neo4j",
                src: "http://blip.tv/play/g4VigczNTgI.x?p=1",
                introText: "",
                author: {name: "Tobias Lindaaker", twitter: "thobe"},
                img: "http://a.images.blip.tv/Pycon-PyCon2010PersistentGraphsInPythonWithNeo4j140164-779.jpg"
            }
        ]
    },
    javascript: {
        path: "/develop/javascript",
        title: "Neo4j and Javascript",
        introText: "Javascript and friends are the new love-child of developers. That's why people love to use Neo4j from Node.js and the browser.",
        thumbnail: asset("img/languages/js.gif"),
        featured: [
            {
                type: "video",
                title: "Node.js to Heroku with Neo4j",
                src: "http://www.youtube.com/embed/S_dJaxOeccU",
                author: "Johnny Luu",
                img: asset("img/still/nodejs_heroku_neo4j.gif"),
                introText: "Johnny Luu walks through the steps of creating a Node.js application that uses the Heroku Neo4j Addon"
            }
        ],
        related: [
            content.drivers.node_neo4j,
            {
                type: "link",
                path: "http://aseemk.com/talks/neo4j-with-nodejs",
                thumbnail: "http://aseemk.com/images/neo4j-lessons-learned/thingdom-graph1.jpg",
                title: "Graph all the things",
                introText: "Aseem shares his insights in using Neo4j with Node.js",
                author: "aseemk"
            },
            content.drivers.neo4j_js,
            content.drivers.node_neo4j_embedded,
            content.drivers.neo4js,
            {
                type: "link",
                path: "http://maxdemarzi.com/tag/javascript/",
                thumbnail: asset("img/apps/neosocial.png"),
                title: "Graph Visualizations with Javascript",
                introText: "Max De Marzi uses Javascript to visualize a plenthora of graph use cases with Neo4j",
                author: "maxdemarzi"
            },
            "visualize"

        ]
    },
    php: {
        path: "/develop/php",
        title: "Neo4j and Php",
        introText: "The easy web language can access Neo4j via the the Neo4j Server or Remote APIs",
        thumbnail: asset("img/languages/php.png"),
        featured: [video('1025 - Neo4j at Seth Godin\'s Squidoo')],
        related: [
            content.drivers.neo4jphp, content.apps.frostymug,
            {
                type: "link",
                authors: ["josh_adell", "Christophe Willems"],
                path: "https://github.com/neoxygen",
                title: "NeoXygen: A collection of Neo4j related PHP project repositories"
            },
            {
                type: "link",
                authors: ["josh_adell"],
                path: "http://blog.everymansoftware.com/2011/11/development-setup-for-neo4j-and-php.html",
                title: "Development Setup for Neo4j and PHP"
            },
            {
                type: "link",
                path: "https://github.com/lphuberdeau/Neo4j-PHP-OGM",
                title: "Neo4j-PHP-OGM - A doctrine2 style library to access neo4j graphs",
                introText: "The Neo4j PHP Object Graph Mapper is an object management layer built on top of everyman/neo4jphp. It allows manipulation of data inside the Neo4j graph database through the REST connectors.\
                The library is also based on Doctrine\\Common and borrows significantly from the excellent Doctrine\\ORM design.",
                author: {name: "Louis-Philippe Huberdeau", twitter: "lphuberdeau"}
            },
            {
                type: "link",
                path: "https://github.com/kwattro/KwattroNeo4jOGMBundle",
                title: "A Object Graph Mapper for Symfony",
                introText: "This bundle lets you make use of the Neo4j Graph Database REST API inside your symfony applications.\
                It is momently a WIP as it relies on the Neo4j-PHP-OGM from lphuberdeau that gives integration with Doctrine Common.\
                My main focus is momently the User Management integrated with FOSUB and Neo4j, I will come on this bundle later.\
                Contributions for adding compiler to configuration and travis love would be really appreciated !",
                author: {name: "Christophe Willemsen", twitter: "ikwattro"}
            }
        ]
    },
    scala: {
        path: "/develop/scala",
        title: "Neo4j and Scala",
        introText: "Parts of Neo4j, esp. the Cypher query engine are written in Scala, the more we're happy about the great Scala support",
        thumbnail: asset("img/languages/scala.png"),
        featured: [
            {
                type: "link",
                title: "Neo4J with Scala Play! 2.0 on Heroku",
                introText: "In this new posts series I’ll try to gather all steps of a spike I did building a prototype using scala and a graph database. \
                        <strong>Play! Framework</strong> as the web framework, in its 2.0 version built from sources. \
                        <strong>Neo4j</strong> as the back end service for storing graph data. \
                        <strong>Scala</strong> for telling the computer what it should do...",
                img: "http://2.bp.blogspot.com/-UHeP3vJf3WA/T0wGNElHqTI/AAAAAAAAAwE/CnPvABqf-Pg/s1600/neo4j-and-play2.0.tiff",
                path: "http://ska-la.blogspot.de/2012/02/neo4j-with-scala-play-20-on-heroku-part.html",
                author: "Andy Petrella"
            }
        ],
        related: [
            content.drivers.anorm_cypher, content.drivers.scala,
            "wefreema",
            {
                type: "link",
                thumbnail: "http://www.cakesolutions.net/teamblogs/wp-content/themes/twentyten/images/cake_solutions_logo_green.png",
                path: "http://www.cakesolutions.net/teamblogs/2012/03/29/neo4j-spring-data-scala/",
                title: "Neo4j Spring Data & Scala",
                author: "Jan Machacek"
            },
            {
                type: "link",
                thumbnail: "http://www.cakesolutions.net/teamblogs/wp-content/themes/twentyten/images/cake_solutions_logo_green.png",
                path: "http://www.cakesolutions.net/teamblogs/2013/02/04/neo4j-and-spray-json/",
                title: "Neo4j and Spray JSON",
                author: "Jan Machacek"
            },
            content.links.gatling,
            {
                type: "link",
                path: "http://ahalmeida.com/2011/09/06/how-neo4j-uses-scalas-parser-combinator-cyphers-internals-part-1/",
                title: "How Neo4j uses Scala’s Parser Combinator: Cypher’s internals",
                author: "adrianoalmeida7"
            },
            {
                type: "link",
                author: "fakod",
                path: "http://blog.fakod.eu/2010/10/04/neo4j-example-written-in-scala/",
                title: "Neo4j Example written in Scala"
            }
        ]
    },
    clojure: {
        path: "/develop/clojure",
        title: "Neo4j with Clojure",
        introText: "Clojure is a great language and fits very well with the graph concepts and lazy evaluation",
        thumbnail: asset("img/languages/clojure.png"),
        featured: [
            {
                type: "link",
                path: "http://clojureneo4j.info/articles/getting_started.html",
                img: "http://clojurewerkz.org/assets/images/clojurewerkz_logo_big.png",
                title: "Getting Started with Neocons and Neo4j",
                introText: "<p>This guide combines an overview of Neocons with a quick tutorial that helps you to get started with it. It should take about 15 minutes to read and study the provided code examples. This guide covers:\
                        <ul><li>Features of Neocons</li>\
                        <li>Clojure and Neo4J Server version requirements</li>\
                        <li>How to add Neocons dependency to your project</li>\
                        <li>A very brief introduction to graph databases and theory</li>\
                        <li>Basic operations (creating nodes and relationships, fetching nodes, using Cypher queries, traversing graph paths)</li>\
                        </ul></p>",
                author: "michaelklishin"
            }
        ],
        related: [
            content.drivers.neocons,
            content.links.dbpedia_clojure,
            "michaelklishin"
        ]
    },
    beer: {
        path: "/misc/beer",
        thumbnail: "http://www.travelandbeer.com/wp-content/uploads/2011/05/belgian-beers.jpg",
        title: "Everyone loves beer.",
        introText: "Beer is at the core of software development, a good part of Neo4j runs on it.",
        content: "<p>There is a high density of beer-loving geeks in the neo4j community. Below are some of the projects and resources that have been developed with or around Neo4j.</p>\
        <blockquote>A traditional relational database may tell you the average age of everyone in this pub, but a graph database will tell you who is most likely to buy you a beer. <i>Andreas Kollegger</i></blockquote>\
        <p>Of course, we are sponsoring beer for the <a href='/participate/meetups'>Neo4j Meetups</a>, so drop by!</p>",
        featured: ["rik_belgian_beers1"],
        related: ["beer_graph_app","oregon_beer_graph_gist","popchartlabs_beer", "trycypher_beer", "beer_rik_screencast", "frostymug"],
        actionText: "Grab a beer"

    },
    music: {
        path: "/misc/music",
        title: "Everyone loves music... And graphs",
        introText: "Music is everywhere, and there is rich set of connections between artists, songs, albums, labels, publishers, users, ratings, stations, etc.",
        thumbnail: asset("img/still/LazyIcon.png"),
        content: "<p>Everyone loves to listen to music and many people enjoy creating music. There is a rich ecosystem and community around music data which is intricately connected and fits perfectly into a graph database.</p>",
        featured: [
            {
                type:"link",
                title: "MusicBrainz Data Import",
                introText: "Paul wanted to import the MusicBrainz database which lives in a postgres instance into Neo4j, so he wrote some python code to export the data \
                to CSV and used the CSV-BatchImporter to import the data. Peter helped with modeling and the import and now the whole MusicBrainz dataset is available as \
                Neo4j Database.",
                author: ["peterneubauer",{name:"Paul Tremberth",twitter:"skywy"}],
                path: "https://github.com/redapple/sql2graph/blob/master/MUSICBRAINZ_README.md",
                img: asset("img/still/musicbrainz.png")
            },
            {
                type:"link",
                title: "Last.fm data import and querying",
                introText: "<a href='http://twitter.com/rvanbruggen'>Rik van Bruggen</a> is an avid last.fm user and wanted to look into recommendations on top of his listening habits. \
                    He imported the last.fm scrobbles and other data in several ways to build different Neo4j databases to work with. Enjoy his entertaining and thorough blog posts.",
                content: "<ul>\
                <li><a href='http://blog.bruggen.com/2013/10/same-csv-files-different-neo4j-database.html'>Revisiting my Last.fm model</a></li>\
                <li><a href='http://blog.bruggen.com/2013/10/importing-my-lastfm-dataset-neo4j-way.html'>Importing my Last.fm dataset - the neo4j way</a></li>\
                <li><a href='http://blog.bruggen.com/2013/07/many-of-you-know-that-i-am-big-fan-of.html'>Fun with Music, Neo4j and Talend</a></li>\
                </ul>",
                author: {name:"Rik van Bruggen",twitter:"rvanbruggen"},
                path: "http://blog.bruggen.com/search?q=last.fm",
                img: "http://2.bp.blogspot.com/-uNPggNP9A3c/Ud7HDhwpkbI/AAAAAAAAAK4/AZd25Q0h-j4/s320/Screen+Shot+2013-07-11+at+16.52.59.png",
                thumbnail: "http://cdn.last.fm/flatness/badges/lastfm_red.gif"
            }
        ],
        related: [
            {
                type:"link",
                title: "Neo4j LazyScales",
                introText: "LazyScales is an experiment with musical scales, (guitar) fretboards and Neo4j, the graph database. LazyScales is all about basing everything on intervals, and representing these as relationships in the database. Testing how this line of thought works out in practice, and also, if it can be leveraged for scale and chord analysis.",
                author: {name:"Anders Nawroth",twitter:"nawroth"},
                path: "https://github.com/nawroth/lazyscales#lazyscales",
                thumbnail: asset("img/still/LazyIcon.png")
//                img: "https://raw.github.com/nawroth/lazyscales/master/docs/images/gui.png"
            },
            content.example_data.musicbrainz_large
        ],
        actionText: "Go play some music"
    },
    import: {
        path: "/develop/import",
        title: "Importing data into Neo4j",
        introText: "The first thing you need to get started is to import data from various sources into Neo4j. Fortunately there are a number of ways to do that.",
        content: "If you have your data in a relational database, spreadsheet or somewhere else, you can get it in into the graph database. " +
            "Importing data into Neo4j is now easier than ever. Loading graph data from a CSV file with <code>LOAD CSV</code> from Cypher is easy enough, but you can also create Cypher statements in a variety of ways, which you can then run using the <a href='/tracks/neo4j_server'>Neo4j Browser</a> or the <a href='/develop/tools/shell'>Neo4j-Shell</a>. Programmatically any of the <a href='/drivers'>drivers</a> can be used (e.g. the <a href='/develop/tools/jdbc'>JDBC-Driver</a>, which you can also use from within existing ETL-Tools). For high performance, high volume imports you'd look for the CSV-batch-importer.",
        featured: [
            {
                type: "video",
                title: "Webinar: Data Import into Neo4j",
                author: ["rvanbruggen","mesirii","maxdemarzi"],
                introText: "This webinar discusses the different ways of importing data into Neo4j from a variety of sources depending on a set of factors that you should think about. It is also available in <a href='http://watch.neo4j.org/video/90299371'>German</a> and <a href='http://watch.neo4j.org/video/90296414'>French</a>",
                src: "http://player.vimeo.com/video/90358900",
                thumbnail: "https://i.vimeocdn.com/video/469437362_590x332.jpg"
            }
        ],
        related: [
            {
                type: "link",
                title: "Importing CSV files with Cypher",
                path: "http://docs.neo4j.org/chunked/milestone/cypherdoc-importing-csv-files-with-cypher.html",
                tags: ["csv","import","cypher"],
                author: "nawroth",
                thumbnail: asset("img/neo4j/neo4j-logo.png"),
                introText: "This tutorial will show you how to import data from CSV files using LOAD CSV loading the content from an URL and inserting it into the graph in the appropriate places in the model"
            },
            {
                type: "link",
                title: "Using LOAD CSV to import Git History into Neo4j",
                path: "http://jexp.de/blog/2014/06/using-load-csv-to-import-git-history-into-neo4j/",
                tags: ["csv","import","cypher","github","blog"],
                author: "mesirii",
                thumbnail: "http://jexp.github.io/blog/img/git2neo/git2neo_datamodel2.jpg",
                introText: "The blog show how to utilize the tabular output of <code>git log</code> to generate input files for Cyphers <code>LOAD CSV</code> command and use it to populate a graph of users that authored commits over time."
            },
            {
                type: "link",
                title: "Importing data to Neo4j the spreadsheet way in Neo4j 2.0!",
                path: "http://neo4j.com/blog/importing-data-to-neo4j-the-spreadsheet-way-in-neo4j-2-0/",
                tags: ["csv","import","spreadsheet","cypher"],
                author: ["rvanbruggen","Pernilla Lindh"],
                thumbnail: "http://dev.assets.neo4j.com.s3.amazonaws.com/wp-content/uploads/2014/01/Ska-CC-88rmavbild-2014-01-17-kl.-13.38.53.png",
                introText: "A spreadsheet and some formulas building cypher queries are one of the simplest ways of getting data into Neo4j. Even for non-developers this is a quick way of getting data into your favorite graph database."
            },
            {
                type: "link",
                title: "Blog Series: Importing Data into Neo4j",
                path: "http://jexp.de/blog/2013/05/on-importing-data-in-neo4j-blog-series/",
                tags: ["java", "shell", "cypher", "batch", "import"],
                author: "mesirii",
                introText: "This series on importing data into Neo4j contains practical suggestions and covers many aspects: Cypher, Neo4j-Shell, Java-API, Batch-Insertion, Neo4j 2.0."
            },
            {
                type: "link",
                tags: ["talend","import","music"],
                title: "Import last.fm data into Neo4j with Talend",
                path: "http://neo4j.com/blog/fun-with-music-neo4j-and-talend",
                author: "rvanbruggen",
                thumbnail: "http://upload.wikimedia.org/wikipedia/en/7/73/Logo-talend-high.jpg",
                introText: "Rik shows how to use Talend Open Studio for Big Data to import public Scrobbles from his last.fm account into Neo4j."
            },
            {
                type: "link",
                tags: ["talend","import","music"],
                title: "Import Data into Neo4j Directly using Talend",
                path: "http://lucidwebdreams.wordpress.com/2014/07/24/import-data-into-neo4j-from-ms-sql-server-directly-using-talend/",
                author: "Yasser Moukhtar",
                thumbnail: "https://lucidwebdreams.files.wordpress.com/2014/07/07_importpackage.png?w=1196&h=634",
                introText: "Yasser is importing directly from SQL Server into Neo4j using Talend."
            },
            {
                type: "link",
                title: "Neo4j Shell Import Data Tools",
                github: "https://github.com/jexp/neo4j-shell-tools",
                path: "https://github.com/jexp/neo4j-shell-tools#import-data-into-your-neo4j-database-from-the-neo4j-shell-command",
                tags: ["shell", "cypher", "csv","geoff","graphml","import","export"],
                author: ["mesirii","markhneedham"],
                introText: "If you want to import data into Neo4j in different formats, like csv, graphml and geoff using the Neo4j-Shell, have a look at this toolbelt."
            },
            {
                type: "link",
                title: "CSV-Batch-Importer",
                path: "http://maxdemarzi.com/2012/02/28/batch-importer-part-1/",
                author: ["maxdemarzi", "mesirii"],
                tags: ["csv","import","batch"],
                thumbnail: "http://maxdemarzidotcom.files.wordpress.com/2012/02/matrix.jpg?w=200",
                introText: "Michael wrote a <a href='https://github.com/jexp/batch-import'>batch importer</a> to load csv data quickly. I’m going to walk you through getting your data out of tables and into nodes and edges."
            },
//            {
//                type: "link",
//                title: "Graph-Alchemist Data Import Platform ",
//                path: "http://www.graphalchemist.com/",
//                author: ["GraphAlchemist"],
//                tags: ["csv","sql","json","import","partner"],
//                thumbnail: "http://www.graphalchemist.com/static/assets/graphAlchemist-logo.png",
//                introText: "Graph Alchemist is a platform for creating Neo4j databases and applications on top of these, from a variety of import formats (CSV, SQL, JSON, XML, ...)."
//            },
            {
                type: "link",
                title: "Transactional HTTP Cypher Endpoint",
                path: "http://docs.neo4j.org/chunked/milestone/rest-api-transactional.html",
                author: ["jakewins"],
                tags: ["http","import","cypher","transaction","batch"],
                thumbnail: "",
                introText: "Use the transactional HTTP endpoint to execute many cypher statements per request (with parameters) transactionally in Neo4j. This can be used to batch write operations."
            },
            {
                type: "link",
                title: "Importing Forests into Neo4j",
                path: "http://jexp.de/blog/2014/04/importing-forests-into-neo4j/",
                author: ["mesirii"],
                tags: ["import","cypher","tree"],
                thumbnail: "https://dl.dropboxusercontent.com/u/14493611/timetree.png",
                introText: "Creating a tree from a year down to second resolution creates 32M nodes and relationships in total. This blog post shows how you can achieve that with cypher."
            },
            {
                type: "link",
                title: "LOAD CSV with Rik Van Bruggen’s Tube Graph",
                path: "http://www.markhneedham.com/blog/2014/03/03/neo4j-2-1-0-m01-load-csv-with-rik-van-bruggens-tube-graph/",
                author: ["markhneedham"],
                tags: ["import","cypher","csv"],
                thumbnail: "http://www.markhneedham.com/blog/wp-content/uploads/2014/03/2014-03-03_16-15-58.png",
                introText: "Importing the London Tube (subway) data of stations, lines, travel and waiting times into Neo4j using Cypher's LOAD CSV."
            },
            "jdbc",
            "geoff"
        ]
    },
    geoff: {
        title: "Geoff",
        path: "/develop/python/geoff",
        author: ["technige"],
        thumbnail: asset("img/languages/py2neo.png"),
        introText: "Geoff is a declarative notation for representing graph data within concise human-readable text, designed specifically with Neo4j in mind. ",
        content: "The format has been built to allow independent subgraphs to be represented outside of a graph database environment in such a way that they may be stored, transmitted and imported easily and efficiently. The basic elements which make up the Geoff format - subgraphs, rules and descriptors - are well defined but there exist several container representations which serve different purposes; commonly, either delimited text or a form of JSON is used.",
        featured: [
            {
                title: "Hello, Subgraph - Alice & Bob",
                type: "article",
                path: "http://nigelsmall.com/geoff",
                introText: "Subgraphs are the primary structures used within Geoff to hold collections of data. These are simply standalone pieces of graph data consisting of nodes and relationships. The following diagram shows a subgraph which illustrates a relationship between the ubiquitous Alice and Bob",
                content: "<pre>\
(A) {\"name\": \"Alice\"}\n\
(B) {\"name\": \"Bob\"}\n\
(A)-[:KNOWS]->(B)\n\
                    </pre>"
            }
        ],
        related: [
            {
                type: "link",
                introText: "Geoff is a declarative notation for representing graph data within concise human-readable text, designed specifically with Neo4j in mind. The format has been built to allow independent subgraphs to be represented outside of a graph database environment in such a way that they may be stored, transmitted and imported easily and efficiently.",
                path: "http://nigelsmall.com/geoff",
                title: "Geoff Documentation"
            },
            {
                type: "link",
                introText: "XML data can easily be converted into a graph. Simply load paste the XML data into the left-hand side, convert into both Geoff and a Cypher CREATE statement, then view the results in the Neo4j console.",
                path: "http://api.nigelsmall.com/xml-cypher",
                title: "XML to Graph converter"
            }
        ]
    },
    jdbc: {
        path: "/develop/tools/jdbc",
        title: "Cypher-Neo4j-JDBC driver",
        author: ["rickardoberg", "mesirii"],
        introText: "The Neo4j Driver offers quick integration into existing Java applications and a variety of tools. It supports the Neo4j Server, embedded and in-memory databases.",
        // content: "",
        featured: [content.projects.jdbc],
        related: [
            {
                type: "article",
                thumbnail: "",
                title: "Neo4j-JDBC Driver Blog Posts",
                author: ["rickardoberg", "mesirii", "tiqview"],
                introText: "<ul><li><a href='http://rickardoberg.wordpress.com/2011/12/19/creating-a-jdbc-driver-for-neo4j/'>Introduction by Rickard Öberg</a></li>\
                <li><a href='http://neo4j.com/blog/cypher-jdbc-tools-testing-results'>Using the JDBC Driver with SQL-Tools</a></li>\
                <li><a href='http://tiqview.tumblr.com/post/25503986247/using-sqlexplorer-with-neo4j-graph-database'>SQL Explorer</a></li>\
                <li><a href='http://tiqview.tumblr.com/post/25427068878/querying-neo4j-graph-data-with-cypher-in-squirrel-via'>SQuirrel SQL</a></li>\
                </ul>"
            },
            {
                type: "article",
                thumbnail: "https://si0.twimg.com/profile_images/130504078/TIQView_bigger.jpg",
                tags: ["cypher", "jdbc", "BI"],
                title: "Neo4j-JDBC and Business Integration (BI)",
                author: {name: "Ralf Becher", twitter: "tiqview"},
                introText: "<ul><li><a href='http://community.jaspersoft.com/questions/803043/anything-neo4j'>JasperSoft</a></li>\
                <li><a href='http://tiqview.tumblr.com/post/24953750981/working-with-graph-data-from-neo4j-in-qlikview'>QlikView</a></li>\
                <li><a href='http://community.qlikview.com/docs/DOC-3115'>QlikView Neo4j Application</a></li>\
                <li><a href='http://tiqview.tumblr.com/post/25430299054/neo4j-data-integration-with-pentaho-kettle'>Pentaho Kettle</a></li>\
                <li><a href='http://tiqview.tumblr.com/post/25448716755/neo4j-data-profiling-with-ataccama-dq-analyzer'>Ataccama DQ Analyzer</a></li>\
                </ul>"
            } , "jee"
        ]
    },
    getting_started: {
        path: "/develop/getting_started",
        thumbnail: "http://i.imgur.com/uf5EHWk.png",
        title: "Get Started with Neo4j",
        introText : "Developing on Neo4j is a breeze. We've put together a collection of resources to help you start building your applications using the power of the graph.",
        featured: [
            content.videos.what_is_neo4j,
            video("0522 - Building Killer Apps with Neo4j"),
            { type:"link",
              title: "Neo4Art - Van Gogh's Journey in a Graph",
              path: "http://inserpio.wordpress.com/information-technology/neo4art-van-goghs-journey/",
              author: "Lorenzo Speranzoni",
              introText : "Lorenzo Speranzoni colors the graph of Van Gogh, his paintings, stations, influences, colors and finds many interesting insights.",
              img: "http://www.neotechnology.com/wp-content/uploads/2014/02/vangogh.jpg"
            },
            video("1024 - DIY Graph Search")
        ],
        related: [
            "download",
            content.links.manual,
            video("0313 - Recommend Restaurants Near Me: Introduction to Neo4j Spatial"),
            "drivers",
            "maxdemarzi",
            "markhneedham",
            "rvanbruggen",
            "kennybastani",
            "mesirii",
            "develop"
        ]
    },
    use_cases: {
        path: "/learn/use_cases",
        thumbnail: asset("img/still/use_cases.jpg"),
        title: "Neo4j Use-Cases",
        introText : "The versatility of graph databases allows you to power applications in many different domains with their flexible data-model and high-performance query capabilities. You'll only see a tiny selection of possibilities here, the sky is your limit",
        featured: [
            content.videos.neo4j_recommendation_engine,
            video("0213 - The Five Graphs of Love"),
            video("0227 - Using Graphs for Telecom Churn Reduction"),
            video("0417 - The Five Graphs of Telcommunications"),
            video("0410 - Fraud Detection in Real-Time with Graphs"),
            {
                title:"Here Be Monsters - Balance Game Economies with Neo4j",
                author: "Yan Cui",
                path:"http://theburningmonk.com/2013/09/here-be-monsters-updates-and-hello-neo4j/",
                thumbnail:"http://theburningmonk.com/WordPress/wp-content/uploads/2013/09/image12.png",
                introText:"One of the main challenges that came up in our effort to automate the economic balancing was that we really needed to understand the complex relationships between the items, quests, achievements as well as locations and activities that can be performed against/with specific items at specific locations. Also see Yan's <a href='http://de.slideshare.net/theburningmonk/modelling-a'>Presentation</a>."
            }
        ],
        related: [
            content.links.customers,
            content.links.whitepapers,
            content.links.use_cases,
            content.articles.partner_graph,
            video("0424 - Managing and Querying Hierarchies with Neo4j")
            ,video("0313 - Recommend Restaurants Near Me: Introduction to Neo4j Spatial")
            ,video("0312 - AuditBucket: Data Auditing with Neo4j and ElasticSearch")
//          ,video("1017 - Graph Databases in Life Sciences: Bringing Biology Back to Its Nature"),
            ,{
                type: "link", title:"How Graph Databases Uncover Patterns To Break Up Organized Crime",
                author: "Philip Rathle",
                path: "http://thenewstack.io/how-graph-databases-uncover-patterns-to-break-up-organized-crime/",
                thumbnail: "http://thenewstack.io/wp-content/uploads/2014/05/Diagram1.jpg"
            }
          ,video("Analyzing Career Paths with College Miner - Matthew Harris @ GraphConnect SF 2013")
          ,video("Using Graph Databases in Real-Time to Solve Resource Authorization at Telenor - Sebastian Verheughe @ GraphConnect SF 2013")
        ],
        actionText: "Learn More"
    },
    education: {
        path: "/learn/education",
        thumbnail: asset("img/still/graphistas_map.png"),
        title: "The Neo4j Online Course",
        introText: 'The Neo4j Online course offers the wildly successful Neo4j Tutorial for you to take whenever and wherever you want.',
        content: "",
        featured: [],
        related: [],
        actionText: "Attend the course"
    },
    intro_course_finish: {
        path: "/learn/intro_course_finish",
//        thumbnail: asset("img/still/graphistas_map.png"),
        title: "Neo4j Online Course",
        introText: 'You successfully finished the Neo4j online course',
        featured: [{
            type:"article",
            src: asset("img/events/tutorials.jpg"),
            title:"Congratulations on completing this online course!",
            content: "<p>\
Here are a few resources for you to continue down your learning path on Neo4j!\
<ul>\
<li>Join the Neo4j <a href='/participate'>community</a></li>\
<li>Sign up for a public training class near you – check out <a href='/participate/events/trainings'>the available classes</a>.</li>\
<li><a href='/download'>Download Neo4j</a> and evaluate its features and benefits for yourself!</li>\
<li>Read the <a href='http://docs.neo4j.org'>Neo4j Manual</a> for more detailed information on how to use it.</li>\
<li>Study <a href='http://www.neotechnology.com/industries-and-use-cases/'>case studies</a> of successful customer projects that have deployed Neo4j</li>\
<li>Learn more about the <a href='/tracks/cypher'>Cypher query language</a> and download the handy <a href='http://docs.neo4j.org/refcard/2.0'>reference card</a></li>\
</ul>\
\
Questions?  Feedback?   Contact us at <a href='mailto:training@neotechnology.com'>training@neotechnology.com</a>\
</p>"
        }],
        related: []
    },
    graphgist_challenge: {
        path: "/learn/graphgist_challenge",
        title: "Neo4j GraphGist Winter Challenge",
        introText: "Model a domain or industry use-case as a great GraphGist and WIN!<br/>It's easy. Everyone can do it. Challenge runs from Dec 1 to Jan 31 2014.",
//        thumbnail: asset("img/logo/neo4j-github.png"),
        featured: [
            {
                type: "article",
                title: "GraphGist Winter Challenge",
                src: asset("img/still/graphgist.jpg"),
                url: "http://gist.neo4j.org",
                content: "<p>Join our GraphGist Challenge this winter.\
            We want to encourage you to model <em>one of the domains we list below</em> in a graph model and describe it\
            interactively in a GraphGist.<br/>\
            A <a href='http://gist.neo4j.org' >GraphGist</a> is just a basic <a href='http://asciidoctor.org/docs/asciidoc-syntax-quick-reference/'>AsciiDoc</a> text file, and can be hosted simply in a\
            <a href='http://gist.github.com/'>GitHub Gist</a> but rendered as an interactive page in the browser.<br/>\
            <strong style='font-size: 1.2em'>To make this more interesting we want to offer some prizes in these categories.</strong></p>\
            "
            }
            ,{
                type: "article",
                title: "Categories",
                content: "This time we want you to look into these 10 categories and provide us with really easy to understand and still insightful Graph Use-Cases: \
                Do not take the example keywords literally, you know your domain much better than we do!\
                <ul>\
                <li><strong>Education</strong> - Schools, Universities, Courses, Planning, Management etc</li>\
                <li><strong>Finance</strong> - Loans, Risks Fraud</li>\
                <li><strong>Life Science</strong> - Biology, Genetics, Drug research, Medicine, Doctors, Referrals</li>\
                <li><strong>Manufacturing</strong> - production line management, supply chain, parts list, product lines</li>\
                <li><strong>Sports</strong> - Football, Baseball, Olympics, Public Sports</li>\
                <li><strong>Resources</strong> - Energy Market, Consumption, Resource exploration, Green Energy, Climate Modeling</li>\
                <li><strong>Retail</strong> - Recommendations, Product categories, Price Management, Seasons, Collections</li>\
                <li><strong>Telecommunication</strong> - Infrastructure, Authorization, Planning, Impact</li>\
                <li><strong>Transport</strong> - Shipping, Logistics, Flights, Cruises, Road/Train optimizations, Schedules</li>\
                <li><em>Advanced Graph Gists</em> - for those of you that run outside of the competition anyway, give your best :)</li>\
                </ul>"
            },
            ,{
                type: "article",
                title: "Prizes",
                content: "We want to offer in each of our 10 categories Amazon gift-cards valued:\
                <ol><li>Winner: <strong>300 USD</strong></li>\
                <li>Second: <strong>150 USD</strong></li>\
                <li>Third: <strong>50 USD</strong></li>\
                <li>Every participant gets a special <strong>GraphGist t-shirt</strong> too.</li>\
                </ol>"
            },
            ,{
                type: "video",
                title: "How do I create a GraphGist?",
                content: "<ul><li>Take one of our categories</li>\
                <li>Whiteboard a good example graph model.</li>\
                <li>Determine interesting use-cases.</li>\
                <li>Create Cypher statements for setup and query-use-cases.</li>\
                <li>Write a good description and create a pretty model picture.</li>\
                <li>Compose it all nicely in your asciidoc-graphgist-file.</li>\
                <li>Store it as a <strong>public</strong> <a href='http://gist.github.com'>GitHub Gist</a></li>\
                <li>For details, check out the example <a href='http://gist.neo4j.org/?5956246'>GraphGist</a> and the <a href='https://github.com/neo4j-contrib/graphgist/wiki'>Collection</a> on the Wiki</li>\
                </ul>",
                src: "http://player.vimeo.com/video/74279113?badge=0&byline=0&portrait=0&title=0",
                img: asset("img/still/graphgist_video.jpg")

            }
            ,{
                type: "article",
                title: "How do I participate?",
                content: "<ul>\
                <li>Enter the URL of your Gist in the top-right box of the <a href='http://gist.neo4j.org'>GraphGist-Page</a> and note the URL of your GraphGist</li>\
                <li>Tweet the title and public URL of your GraphGist and add the tag #graphgist to the tweet.</li>\
                <li>Submit your entry to the challenge with <a href='http://bit.ly/graphgist'>this form</a></li>\
                <li>Add your gist on the <a href='https://github.com/neo4j-contrib/graphgist/wiki#graphgist-challenge-submissions'>GraphGist Challenge</a> Wiki page</li>\
                <li>The GraphGist needs to be registered before Jan 31, 2014 (EOD last timezone)</li>\
                <li>If you have questions reach out to our <a href='/forums'>Google Group</a>, <a href='http://twitter.com/neo4j'>@neo4j</a> on twitter or <a href='http://twitter.com/peterneubauer'>Peter Neubauer</a></li>\
                </ul>\
                <strong>Make sure that the content you create is shared under <a href='http://creativecommons.org/licenses/by-sa/3.0/'>CC-SA</a>.</strong>\
                "
            }
            ,{
                type: "article",
                title: "Where can I learn more about GraphGists?",
                url: "http://www.meetup.com/graphdb-world/events/138513152/",
                src: asset("img/events/neo4j_icon_meetup.png"),
                content: "<ul>\
                    <li>Check out the <a href='https://github.com/neo4j-contrib/graphgist/wiki'>GraphGist Wiki</a> for many examples and hints.</li>\
                    <li>Read the <a href='http://gist.neo4j.org/?5956246'>self describing GraphGist</a>.</li>\
                    <!--li>We want to run a <a href='http://www.meetup.com/graphdb-world/events/152790132/'>webinar/hangout on December 5th</a> to explain GraphGists in detail (<a href='https://docs.google.com/a/neopersistence.com/presentation/d/1QrYDKrJ8WRmvAdVcgA79HUlfiOrGrByRTgNCDPOSq-c/pub?start=false&loop=false#slide=id.p'>slides</a>).</li-->\
                    <li>We ran and recorded a <a href='https://vimeo.com/81146271'>webinar on December 5th</a> to explain GraphGists in detail (<a href='https://docs.google.com/a/neopersistence.com/presentation/d/1QrYDKrJ8WRmvAdVcgA79HUlfiOrGrByRTgNCDPOSq-c/pub?start=false&loop=false#slide=id.p'>slides</a>).</li>\
                    <li>We encourage local <a href='/participate/meetups'>Neo4j Meetup</a> organizers to attend that discussion and work with us to run a meetup event about GraphGists and the challenge.</li>\
                    </ul> "
            }
            ],
        related: ["modeling"],
        actionText: "Submit and Win"
    },
    graphistas_map: {
        path: "/participate/graphistas_map",
        thumbnail: asset("img/still/graphistas_map.png"),
        title: "The Graphistas map - add yourself!",
        author: ["mesirii"],
        introText: '<p>Go to the <a target="_blank" href="https://maps.google.com/maps/ms?ie=UTF8&amp;oe=UTF8&amp;msa=0&amp;msid=215787240736307886514.00049e70e573cbd8a91e5&amp;t=m&amp;ll=24.527135,-20.039062&amp;spn=123.963155,225&amp;z=2&amp;source=embed" style="text-align:left">map edit page</a>. Then zoom to your place, hit the red "Edit" button and then place a landmark, add your info and a icon from the google selection. Click the "Done", when you\'re satisfied.</p>',
        content: '<iframe width="100%" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps/ms?ie=UTF8&amp;oe=UTF8&amp;msa=0&amp;msid=215787240736307886514.00049e70e573cbd8a91e5&amp;t=m&amp;ll=24.527135,-20.039062&amp;spn=123.963155,225&amp;z=2&amp;output=embed"></iframe>',
        featured: [],
        related: [],
        actionText: "Add yourself"
    },
    spatial: {
        path: "/develop/spatial",
        thumbnail: asset("img/apps/spatial.png"),
        title: "Neo4j Spatial - Spatial Search and GIS Integration",
        author: ["peterneubauer", "craigtaverner"],
        introText: "Neo4j Spatial is a library of utilities for Neo4j that faciliates the enabling of spatial operations on data.",
        content: "In particular you can add spatial indexes to already located data, and perform spatial operations on the data like searching for data within specified regions or within a specified distance of a point of interest. In addition classes are provided to expose the data to geotools and thereby to geotools enabled applications like geoserver and uDig.",
        featured: [
            {
                type: "video",
                src: "http://www.youtube.com/watch?v=I0bTa5Kp7Wg",
                introText: "With the newly released Neo4j Spatial, any data can be adapted to complex queries with geographic components like \"Select all streets in the Municipality of NYC where at least 2 of my friends are walking right now.\"<br/>\
                The talk will demonstrate the important benefits of modeling geodata in a graph, the main components needed to expose data to geo stacks like map servers, and explain how the Open Street Map dataset is modeled in Neo4j. I will show how using Neo4j unlocks the full potential of the OSM data far beyond just rendering maps.<br/>\
                There will also be some cool examples of Neo4j Spatial, from Telecomms network planning, Web-based AJAX GIS systems, topology editing and routing to REST and Web Feature Service endpoints, all in a single stack.",
                thumbnail: "http://image.slidesharecdn.com/2011-07-oscon-110730111234-phpapp02/95/slide-1-728.jpg?1312350195",
                author: ["peterneubauer"],
                title: "Neo4j Spatial - Geo Data for the Rest of Us"

            },
            {
                type: "link",
                thumbnail: "https://lh6.googleusercontent.com/-MNE5dXgAZlw/TXP4SoXwlbI/AAAAAAAAA_o/J0Zos7BFnPM/s570/neo4j-spatial-text2.png",
                title: "Neo4j Spatial Part 1 - Finding things close to other things",
                author: "craigtaverner",
                introText: "Geography is a natural domain for graphs and graph databases, the Neo4j Spatial project has been providing early access releases enabling a wide range of convenient and powerful geographic capabilities in the Neo4j database.",
                path: "http://neo4j.com/blog/neo4j-spatial-part1-finding-things"
            }
        ],
        related: [
            {
                type: "link",
                title: "Neo4j Spatial on GitHub",
                introText: "Neo4j Spatial is an open-source library of utilities for Neo4j that faciliates the enabling of spatial operations on data. Besides basic spatial search it also integrates with geoserver and uDig.",
                author: ["peterneubauer", "craigtaverner", "amorgner"],
                thumbnail: asset("img/logo/github.png"),
                github: "http://github.com/neo4j/spatial",
                path: "http://neo4j-contrib.github.io/spatial/"
            },
            {
                type: "link",
                title: "Running along the graph using Neo4J Spatial and Gephi",
                introText: "Could there be a correlation between my average pace and my distance from home? In order to come up with answers to these questions, I will import my running data into a Neo4J Spatial datastore.",
                content: "Neo4J Spatial extends the Neo4J Graph Database with the necessary tools and utilities to store and query spatial data in your graph models. For visualizing my running data, I will make use of Gephi, an open-source visualization and manipulation tool that allows users to interactively browse and explore graphs.",
                author: "dsuvee",
                thumbnail: "http://datablend.be/wp-content/uploads/geo5.jpg",
                path: "http://datablend.be/?p=262",
                github: "https://github.com/datablend/neo4j-spatial-running"
            },
            {
                type: "video",
                author: "craigtaverner",
                title: "Geoprocessing with Neo4j-Spatial and OSM",
                introText: "Geographic data is naturally structured like a graph, and topological analyses view GIS data as graphs, but until now no-one has tried to make use of a real graph database as the backing store for a GIS. The developers of Neo4j have added features to the popular open source graph database to provide for support for spatial indexing, storage and topology. In addition to these core components, there are a number of useful utilities for importing and exporting data from other popular data sources, and enabling the use of this database in well known libraries and applications in the open source GIS environment. <br/>There are <a href='http://de.slideshare.net/search/slideshow?searchfrom=header&q=%22neo4j+spatial%22'>several presentations around Neo4j Spatial</a>",
                thumbnail: "http://image.slidesharecdn.com/neo4j-spatial-foss4g-2011-120225120453-phpapp01/95/slide-1-728.jpg?1330193431",
                path: "http://slideshare.net/craigtaverner/geoprocessing-with-neo4jspatial-and-osm-11747942"
            },
            {
                type: "link",
                title: "Neo4j Spatial Ruby Gem",
                tags: ["ruby", "spatial"],
                author: "craigtaverner",
                introText: "The Neo4j-Spatial.rb wrapper allows you to access Neo4j-Spatial features from the convenience of the Ruby scripting language.",
                thumbnail: asset("img/languages/ruby.png"),
                path: "https://rubygems.org/gems/neo4j-spatial"
            },
            {
                type: "link",
                title: "Clojure/Java Interop – Importing neo4j spatial data",
                tags: ["clojure", "spatial"],
                introText: "I wrote a post about a week ago where I described how I’d <a href='http://www.markhneedham.com/blog/2013/03/10/neo4jcypher-finding-football-stadiums-near-a-city-using-spatial/' target='_blank'>added football stadiums to my football graph</a> using neo4j spatial and after I’d done that I wanted to put it into my import script along with the rest of the data. That worked reasonably well but I thought it’d be interesting to see what the above code would look like if it was written in clojure instead.",
                author: "markhneedham",
                thumbnail: asset("img/languages/clojure.png"),
                path: "http://www.markhneedham.com/blog/2013/03/17/clojurejava-interop-importing-neo4j-spatial-data/"
            },
            content.apps.route_planner,
            content.example_data.snapplr,
            {
                type: "link",
                title: "Neo4j Spatial Scala wrapper library",
                tags: ["scala", "spatial"],
                author: "fakod",
                thumbnail: asset("img/languages/scala.png"),
                path: "https://github.com/FaKod/neo4j-spatial-scala",
                github: "https://github.com/FaKod/neo4j-spatial-scala"
            },
            {
                type: "link",
                title: "Neo4j for transport routing",
                tags: ["routing", "spatial"],
                author: "EKozhanov",
                introText: "This presentation is describing the routing for http://a360.ru done through neo4j.",
                thumbnail: "http://image.slidesharecdn.com/useneo4jfortransport-130914142354-phpapp02/95/slide-5-638.jpg?1379186704",
                path: "http://www.slideshare.net/EugenyKozhanov/how-we-use-neo4j-fortransport"
            },
            {
                type: "link",
                title: "Neo4j Spatial Starter Project",
                tags: ["intro", "java", "spatial"],
                author: "rhetonik",
                introText: "Start off with Neo4j spatial by importing an OSM file. This project aims at a single command for setting up neo4j-spatial followed by an OSM import.",
                thumbnail: asset("img/languages/java.jpg"),
                path: "https://github.com/neo4j-india/neo4j-spatial-starters"
            },
            {
                type: "link",
                title: "Neo4j Spatial Support in Spring Data Neo4j",
                tags: ["sdn", "java", "spatial"],
                introText: "Spring Data Neo4j supports Spatial extensions via the Neo4j Spatial index provider. It offers automatic spatial indexing and method for finding entities in spatial geometries.",
                author: "mesirii",
                thumbnail: asset("img/languages/sdn.png"),
                path: "http://docs.spring.io/spring-data/data-neo4j/docs/3.1.2.RELEASE/reference/html/programming-model.html#d0e2318"
            },
            {
                type: "link",
                title: "Finding Football stadiums near a city",
                tags: ["cypher", "spatial", "java"],
                introText: "An example of using Neo4j Spatial and Cypher for finding points of interest like football stadiums.",
                author: "markhneedham",
                thumbnail: asset("img/links/stadiums_near_a_city.png"),
                path: "http://architects.dzone.com/articles/neo4jcypher-finding-football"
            }

        ]
    },
    asciidoc: {
        path: "/test/asciidoc",
        title: "Asciidoc examples",
//        introText: 'Intro',
//        content: 'Content',
        featured: [content.asciidoc.simple_asciidoc],
        related: []
    }
};
