module.exports = app => {
    app.use('/api/v1/is-alive', require('./api/v1/isAliveRouter'));
    app.use('/api/v1/hexagonals', require('./api/v1/hexagonalsRouter'));
}