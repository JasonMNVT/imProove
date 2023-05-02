const {connectDb} = require('./src/services/mongoose')
const userRoutes = require('./src/routes/user')
const categoryRoutes = require('./src/routes/category');
const activityRoutes = require('./src/routes/activity');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

connectDb().catch(err => console.log(err));

app.use(express.json());
app.use(userRoutes);
app.use(categoryRoutes);
app.use(activityRoutes);

app.listen(port, () => {
    console.log(`Le serveur est lancé à: http://localhost:${port}`);
});
