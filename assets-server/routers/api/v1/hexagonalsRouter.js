const router = require('express').Router();
const hexagonal = require('framework/tiles/hexagonal');

const createEdgesList = ({ rows, cols, sideLength }) => {
    const edgesList = []
    const props = hexagonal.calcProps.bySideLength(sideLength);
    for (let row = 0; row < rows; ++row){
        for (let col = 0; col < cols; ++col){
            const origin = hexagonal.convert.posToCoords({ row, col, ...props });
            const edges = hexagonal.calcEdges({
                offset: origin,
                ...props
            });

            edgesList.push(edges);
        }
    }

    return edgesList;
}

router.get('/create-edges-list', (req, res) => {
    res.status(200).send({
        edgesList: createEdgesList({
            rows: req.query.rows || 5,
            cols: req.query.cols || 5,
            sideLength: req.query.sideLength || 1
        })
    });
})

module.exports = router;