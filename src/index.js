//arquivo app
const express = require("express");
const talkerRouters = require('./routers/talkers.router');

const app = express();
app.use(talkerRouters);

const HTTP_OK_STATUS = 200;
const PORT = "3000";

// não remova esse endpoint, e para o avaliador funcionar
app.get("/", (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log("Online");
});