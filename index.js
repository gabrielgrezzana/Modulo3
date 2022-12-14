const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

let animes = require("./mocks/animes");

app.get("/", function (req, res) {
  console.log(animes);
  //   console.log(req.headers);
  res.send("Hello World");
});

app.get("/raiz/:number", function (req, res) {
  let number = req.params.number;
  const result = number ** 0.5;

  if (result % 1 === 0) {
    res.send({
      message: "Raiz quadrada do número " + number,
      result: `${result}`,
    });
  } else {
    res.send({
      message: "O numero" + number + " não possui raiz exata",
    });
  }
});

app.get("/anime/:id", function (req, res) {
  const animeId = req.params.id;
  let animeFinded;
  animes.map((anime) => {
    if (animes.id === animeId) {
      animeFinded = anime;
    }
  });
  if (animeFinded) {
    res.send(animeFinded);
  } else {
    res.send("Nenhum anime com este id encontrado");
  }
});

app.listen(3000, () => {
  console.log("A aplicacao esta rodandop na porta 3000");
  console.log("Acesse em: http://localhost:3000");
});
