const fs = require("fs");

const dirs = fs.readdirSync("./Animes");

dirs.map((dir) => {
  const dirsDirs = fs.readdirSync(`./Animes/${dir}`);

  if (!dirsDirs.includes("Saisons") && !dirsDirs.includes("Films"))
    console.log(dir);
});
