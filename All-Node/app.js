const express = require("express");
const routes = require("./config/routes");
const cors = require("cors");
const upload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(upload());
app.use(cors());

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log("Server Running");
})