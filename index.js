const express = require("express");
var cors = require('cors')
const generatePdf = require("./pdf/generate-pdf");

const app = express();

const allowedOrigins = [
  "https://mblukin.ivolucion.com",
  "https://lukin.ivolucion.com",
  "https://lukin.com.co"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json());

app.use("/generate-pdf", async (req, res) => {
  const pdfBuffer = await generatePdf({ url: req.body.url });
  res
    .status(200)
    .set({
      "Content-Type": "application/pdf",
    })
    .end(pdfBuffer);
});


const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
