const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

//file imports
const connectDB = require("./config/dbConfig");
const authRoutes = require("./routes/authRoute");
const errorHandler = require("./middlewares/errorMiddleware");

//config
dotenv.config();

//middleware
app.use(errorHandler);
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//API routes
app.use("/api/v1/auth", authRoutes);

//DB Connection
const PORT = process.env.PORT || 8080;
connectDB(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server on port:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
