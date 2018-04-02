module.exports = ({
    offset,
    side, height, distance
}) => [
    [distance, 0],
    [2 * distance, height],
    [2 * distance, height + side],
    [distance, 2 * height + side],
    [0, height + side],
    [0, height]
].map(([x, y]) => ({
    x: x + offset.x, y: y + offset.y
}))