const graph = require('./library_graph.json');
const fs = require('fs');

const central_group = "computing";

const base_size = 80;
const group_circle_radius_rate = 1;
const big_circle_radius_rate = 3;
const group_circle_radius = group_circle_radius_rate * base_size;
const big_circle_radius = big_circle_radius_rate * base_size;

function rotate(x, y, rad){
	const x1 = Math.cos(rad) * x - Math.sin(rad) * y;
	const y1 = Math.cos(rad) * y + Math.sin(rad) * x;
    return { x: x1, y: y1 };
}

let all_groups = ["python", "ruby"].map((lang)=>{ return graph[`${lang}_libraries`]; })
                                   .reduce((first_libs, second_libs)=>{ return first_libs.concat(second_libs); })
                                   .map((lib)=>{ return lib.group ; })
                                   .filter((group_name)=>{ return (group_name !== undefined) ; });
all_groups = Array.from(new Set(all_groups));
const groups = all_groups.filter((group_name)=>{ return (group_name !== central_group) ; });

console.log(all_groups);
console.log(groups);

["python", "ruby"].map((lang)=>{
    let hash = {}

    hash["elements"] = { "nodes": [], "edges": [] };

    const central_nodes = graph[`${lang}_libraries`]
        .filter((lib)=>{ return ( lib.group === central_group ) ;})
        .map((lib, index, arr)=>{
        let x = 0;
        let y = group_circle_radius;
        const rad = (index / arr.length) * Math.PI * 2;
        const position = rotate(x, y, rad);
        return { lib, position };
    }).map(({ lib, position })=>{
        return {
            data: {
                id: lib["name"],
                name: lib["name"],
                group: all_groups.indexOf(lib.group),
            },
            position,
        };
    });
    
    hash["elements"]["nodes"] = hash["elements"]["nodes"].concat(central_nodes);
    
    // merginal groups
    groups.map((group, group_index, group_arr)=>{
        let group_libs = graph[`${lang}_libraries`].filter((lib)=>{ return lib.group === group });

        group_libs = group_libs.map((lib, index, arr)=>{
            // circle layout at center
            let x = 0;
            let y = group_circle_radius;
            const rad = (index / arr.length) * Math.PI * 2;
            const position = rotate(x, y, rad);
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
        

        hash["elements"]["nodes"] = hash["elements"]["nodes"].concat(group_libs.map(({lib, position})=>{
            return {
                data: {
                    id: lib["name"],
                    name: lib["name"],
                    group: all_groups.indexOf(lib.group),
                },
                position,
            };
        }));
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
