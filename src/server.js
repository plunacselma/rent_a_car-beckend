const app = require("./app");

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server je pokrenut na http://localhost:${port}`);
});
