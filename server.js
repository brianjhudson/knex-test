import express from "express";
import {json} from "body-parser";
import cors from "cors";
import session from "express-session";
import db from "./knex.js"

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(session({secret: "keyboardcat", resave: true, saveUninitialized: true}));

db('users').join('friends', 'users.user_id', '=', 'friends.user_id')
.orderBy('first_name').limit(2).then(rows => console.log(rows))


app.listen(port, () => {console.log(`Listening on port ${port}`)});
