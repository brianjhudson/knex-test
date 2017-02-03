import express from "express";
import {json} from "body-parser";
import cors from "cors";
import session from "express-session";

const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static(`${__dirname}/public`))
app.use(cors());
app.use(session({secret: "keyboardcat", resave: true, saveUninitialized: true}));

app.listen(port, () => {console.log(`Listening on port ${port}`)});
