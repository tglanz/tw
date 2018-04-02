// 30 degrees in radians is Pi/6
const angle = Math.PI / 6;

function bySideLength(side){
    const height = Math.sin(angle) * side;
    const distance = Math.cos(angle) * side;

    const boundingRect = {
        height: side + 2 * height,
        width: 2 * distance
    }

    return {
        side,
        height, distance,
        boundingRect
    }
}

/*
    Might be useful when we can divide the screen into rectangular tiles,
    and based on that generating hexagonal tiles
*/
function byBoundingRect({ height, width }){
    /*
        in fromSideLength -
            width = 2 * distance
            distance = cos(angle) * side
        =>  width = 2 * cos(angle) * side
        => side = width / (2 * cos(angle))
    */
    return bySideLength(width / Nath.cos(angle));
}

module.exports = {
    bySideLength,
    byBoundingRect
}