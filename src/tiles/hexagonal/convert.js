const calcProps = require('./calcProps');

/*
    Returns the position {row, col} of the tile containing the given coordinate {x, y}
*/
function coordsToPos({ x, y, side, height, distance }){

    // if this doesn't make any sense, see the file ./note
    const section = {
        col: Math.floor(x / (2 * distance)),             // twice the distance is the side to side distance
        row: Math.floor(y / (side + height)),
        x: x % (2 * distance),                          // the x coordinate relative to the section origin
        y: y % (side + height)                          // the y coordinate relative to the section origin
    }

    const gradient = height / distance;

    let ret = {
        row: section.row,
        col: section.col
    }


    if (section.row % 2 == 0){
        // section of type B
        
        if (section.x >= distance){
            // if right
            if (section.y < (2 * height - section.x * gradient)){
                // and top
                --ret.row;
            } else {
                // and bottom
            }
        }else {
            // if left
            if (section.y < section.x * gradient){
                // and top
                --ret.row;
            } else {
                // and bottom
            }
        }
        
    } else {
        // section of type A

        if (section.y < (height - section.x * gradient)){
            // left edge
            --ret.row;
            --ret.col;
        } else if (section.y < (-height + section.x * gradient)){
            // right edge
            --ret.row;
        } else {
            // middle
        }
    }

    return ret;
}

/*
    Returns the top left of the bounding rectangle of the tile in the given position {row, col}
    side, height and distance can be acquired by ./calcProps.js
*/
const posToCoords = ({ row, col, side, height, distance }) => ({
    x: col * 2 * distance + (row % 2) * distance,   // odds have a +distance while even have a +0 offsets
    y: row * (side + height)
});

module.exports = {    
    coordsToPos,
    posToCoords
}