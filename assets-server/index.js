const express = require('express');
const app = express();
const port = process.env.PORT || 7010;

require('./routers/useRouters')(app);

const server = app.listen(port, () => {
    console.log(`assets-server: Listening on port ${port}`);
});