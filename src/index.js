console.log("Start");

const TileMap = require('./Tiles/TileMap');
const hexagonal = require('./Tiles/hexagonal');

const tileMap = new TileMap({
    rows: 3, cols: 3
});

const props = hexagonal.calcProps.bySideLength(10);


let content = "";
const append = edges => edges.forEach(({ x, y }) => {
    content += `${x} ${y}\n`
})

for (let row = 0; row < 3; ++row){
    for(let col = 0; col < 3; ++col){
        const origin = hexagonal.convert.posToCoords({ row, col, ...props });

        const edges = hexagonal.calcEdges({
            offset: origin,
            ...props
        });

        append(edges);
    }
}


console.log("EXPERIMENT\n\n")
console.log('\n --> ', hexagonal.convert.coordsToPos({ x: 23, y: 37, ...props }))

//require('fs').writeFileSync('./temp.txt', content);