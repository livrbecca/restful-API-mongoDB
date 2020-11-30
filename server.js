const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const app = express();

//routes
const postsRoutes = require("./routes/api/posts");

//body parser middleware
app.use(express.json());

//connect to mongodb

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })

  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

//use routes

app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`run server at ${PORT}`));
