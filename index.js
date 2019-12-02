import fs from "fs";

fs.writeFile("./hello.txt", "Olá leitor\n", () => console.log("done"));
