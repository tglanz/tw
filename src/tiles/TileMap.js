const R = require('ramda');

const Tile = require('./Tile');

class TileMap {
    constructor({
        rowCount, colCount
    }) {
        this._rowCount = rowCount;
        this._colCount = colCount;

        this._tiles = R
            .range(0, this.totalTiles)
            .map(idx => new Tile())
    }

    get rowCount() {
        return this._rowCount;
    }

    get colCount(){
        return this._colCount;
    }

    get tiles(){
        return this._tiles;
    }

    get totalTiles(){
        return this.rowCount * this.colCount;
    }

    getTile({ row, col }){
        return this.tiles[this.colCount * row + col];
    }
}

module.exports = TileMap;