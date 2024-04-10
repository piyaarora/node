// API DOcumenATion
import swaggerDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
//securty packges
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import xss from "xss-clean";

import errorMiddleware from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import jobsRoutes from "./routes/jobRoutes.js";
import testRoutes from "./routes/testRoute.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

// Swagger api config
// swagger api options
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Job Portal Application",
        description: "Node Expressjs Job Portal Application",
      },
      servers: [
        {
          url: "http://localhost:8080",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const spec = swaggerDoc(options);  

const app = express();

//middelwares
app.use(helmet()); // secure header
app.use(xss()); //  prevent from cross site scripting attacks
app.use(mongoSanitize()); //mongodb and server protection
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);

//homeroute root
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));

//validation middelware
app.use(errorMiddleware);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
  );
});