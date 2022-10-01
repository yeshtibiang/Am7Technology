const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// to test the server
app.get("/api", (req, res) => {
    res.json({
        message: "Bonjour du serveur"
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});