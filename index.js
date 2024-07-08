const express = require("express");
const generatePdf = require("./pdf/generate-pdf");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", async (req, res) => {
  const htmlResponse = `
    <html>
      <head>
        <title>Generate PDF</title>
      </head>
      <body>
        <h1>Generate PDF</h1>
        <p>Esto es una prueba para vercel</p>
      </body>
    </html>
  `;
  res.send(htmlResponse);
})

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


app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
