require('dotenv').config();
const app = require('./app');

const PORT_NUMBER = +process.env.PORT_NUMBER || 8000;

app.listen(PORT_NUMBER, () => {
    console.log(`Example app listening on port ${PORT_NUMBER}!`);
});
