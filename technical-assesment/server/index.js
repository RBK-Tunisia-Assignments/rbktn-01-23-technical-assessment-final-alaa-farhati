const express = require("express");
const app = express();
const PORT = 4000;
const db=require("../server/controller/recipiesController")


app.use(express.json());
const cors = require("cors");
app.use(cors())


app.get("/api/AllRecepies",db.getRecepie)
app.post("/api/AllRecepies",db.insertRecepie)

// app.get("/api/Recepie/:id",db.getRecepieById)


app.put("/api/Recepie/:id",db.updateRecepie)

app.delete("/api/Recepie/:id",db.deleteRecepie)



// TODO - add additional route handlers as necessary
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
