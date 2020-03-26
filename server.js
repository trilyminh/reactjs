const express = require('express');

const app = new express();

app.get('/', (req,res) => res.send("API RUNNING"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));