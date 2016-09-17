const graph = require('./library_graph.json');
const fs = require('fs');
const readline = require('readline');

function rotate(x, y, rad){
	const x1 = Math.cos(rad) * x - Math.sin(rad) * y;
	const y1 = Math.cos(rad) * y + Math.sin(rad) * x;
    return { x: x1, y: y1 };
}

function crawl_stargazers_count(github_url){
    const request = require('sync-request');

	const username = process.argv[2];
	const password = process.argv[3];

    const repository_name = github_url.match(/https:\/\/github.com\/(.+)/)[1];
    const api_url = `https:\/\/${username}:${password}@api.github.com/repos/${repository_name}`;

    const response = request('GET', api_url, { headers: { 'User-Agent': 'sciruby-jp.github.io' } });
    console.log(response.getBody().toString());
    return JSON.parse(response.getBody().toString()).stargazers_count;
}

// library group rendered at center of the circle
const central_group = "computing";

// groups of libraries
let all_groups = ["python", "ruby"].map((lang)=>{ return graph[`${lang}_libraries`]; })
                                   .reduce((first_libs, second_libs)=>{ return first_libs.concat(second_libs); })
                                   .map((lib)=>{ return lib.group ; })
                                   .filter((group_name)=>{ return (group_name !== undefined) ; });
all_groups = Array.from(new Set(all_groups));

// library groups except central_group
const groups = all_groups.filter((group_name)=>{ return (group_name !== central_group) ; });

// radius of each nodes, and radius of the whole circle
const base_size = 80;
const group_circle_radius_rate = 1;
const big_circle_radius_rate = 3;
const group_circle_radius = group_circle_radius_rate * base_size;
const big_circle_radius = big_circle_radius_rate * base_size;

["python", "ruby"].map((lang)=>{
    const libraries = graph[`${lang}_libraries`];
    const edges = graph[`${lang}_edges`];
    let hash = { "elements": { "nodes": [], "edges": [] } };

    const central_nodes = libraries
        .filter((lib)=>{ return ( lib.group === central_group ) ;})
        .map((lib, index, arr)=>{
            const rad = (index / arr.length) * Math.PI * 2;
            const position = rotate(0, group_circle_radius, rad);
            return { lib, position };
        }).map(({ lib, position })=>{
            return {
                data: {
                    id: lib.name,
                    name: lib.name,
                    group: all_groups.indexOf(lib.group),
                },
                position,
            };
        });
    
    hash.elements.nodes = hash.elements.nodes.concat(central_nodes);
    
    // merginal groups
    groups.map((group, group_index, group_arr)=>{
        let group_libs = libraries.filter((lib)=>{ return lib.group === group });

        group_libs = group_libs.map((lib, index, arr)=>{
            // circle layout at center
            const rad = (index / arr.length) * Math.PI * 2;
            const position = rotate(0, group_circle_radius, rad);
            return { lib, position };
        }).map(({lib, position: {x, y}})=>{
            // parallel shift
            const position = { x, y: y + big_circle_radius };
            return { lib, position };
        }).map(({lib, position: {x, y}})=>{
            // rotate
            const rad = (group_index / group_arr.length) * Math.PI * 2;
            const position = rotate(x, y, rad);
            return { lib, position };
        });

        hash.elements.nodes = hash.elements.nodes.concat(group_libs.map(({lib, position})=>{
            return {
                data: {
                    id: lib.name,
                    name: lib.name,
                    group: all_groups.indexOf(lib.group),
                },
                position,
            };
        }));
    });
    
    // add stargazer_count and github url
    hash.elements.nodes = hash.elements.nodes.map((node)=>{
       const library = libraries.find((lib)=>{ return (lib.name === node.data.name) });
       node.data["stargazers_count"] = crawl_stargazers_count(library.github);
       node.data["github_url"] = library.github;
       console.log(node);
       return node;
    });

    hash.elements.edges = edges.map((edge)=>{
        const source = hash.elements.nodes.find((node)=>{ return (node.data.name === edge.source) })
        const target = hash.elements.nodes.find((node)=>{ return (node.data.name === edge.target) })

        let group = null;
        if (source.data.group === target.data.group) {
            group = source.data.group;
        }

        const ret_hash = {
            data: {
                id: `${edge.source}_${edge.target}`,
                source: edge.source,
                target: edge.target,
            }
        };

        if (group !== null){
            ret_hash.data["group"] = group;
        }

        return ret_hash;
    });

    fs.writeFileSync(`./src/${lang}.json`, JSON.stringify(hash), 'utf-8');
});
