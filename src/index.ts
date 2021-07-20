import { downloadTo } from "basic-ftp/dist/transfer";
import express from "express";
import { getWarnings } from "./floods/amoc";
import { Downloader } from "./floods/Downloader";
import { getAmocToStateId } from "./getAmocToStateId";
import { FloodWarningParser } from "./parser/floodWarning";
import { parseXml } from "./parser/parser";

require("./logger.ts");

const app = express();
const port = 3000;

const ERRORMESSAGE = "Something went wrong";

app.get("/", async (req, res) => {
  try {
    const data = await getWarnings();

    const state = getAmocToStateId(req.query.state?.toString() || "");

    let results = [];
    for (let key in data) {
      if (key.startsWith(state)) {
        results.push(key.replace(/\.amoc\.xml/, ""));
      }
    }

    res.send(results);
  } catch (error) {
    console.log(error);
    res.send(ERRORMESSAGE);
  }
});

app.get("/warning/:id", async (req, res) => {
  try {
    const downloader = new Downloader();
    const xmlid = req.params.id;

    const warning = await downloader.download(xmlid);
    const warningParser = new FloodWarningParser(warning);
    const text = await downloader.downloadText(xmlid);

    res.send({ ...(await warningParser.getWarning()), text: text || "" });
  } catch (error) {
    console.log(error);
    res.send(ERRORMESSAGE);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
