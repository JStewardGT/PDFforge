const express = require("express");
const generatePdf = require("./pdf/generate-pdf");

const app = express();

app.use(express.json());

app.use("/generate-pdf", async (req, res) => {
  const pdfBuffer = await generatePdf({ url: req.body.url });
  res
    .status(200)
    .set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/pdf",
    })
    .end(pdfBuffer);
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
