const graph = require('./library_graph.json');
const fs = require('fs');

["python", "ruby"].map((lang)=>{
    let hash = {}

    hash["elements"] = { "nodes": [], "edges": [] };
    hash["elements"]["nodes"] = graph[`${lang}_libraries`].map((lib)=>{
        return {
            data: {
                id: lib["name"],
                name: lib["name"],
                group: 1,
            },
        };
    });
    hash["elements"]["edges"] = graph[`${lang}_edges`].map((edge)=>{
        return {
            data: {
                id: `${edge["source"]}_${edge["target"]}`,
                source: edge["source"],
                target: edge["target"],
                group: 1,
            }
        };
    });

    fs.writeFileSync(`./src/${lang}.json`, JSON.stringify(hash), 'utf-8');
});
