const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 5000;
app.use(express.static(path.resolve(__dirname, "../build"))); // path.resolve was missing here
app.get("/*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../build", "index.html"))
);
app.listen(port, () => {
   console.log('Server is up!');
});
