import { parseXml } from "./parser";
import fs from "fs";
import path from "path";

describe("parsing xml", () => {
  it("should parse xml", (done) => {
    const xml = fs.readFileSync(path.resolve(__dirname, "./IDD10307.amoc.xml"));

    parseXml(xml.toString(), (json) => {
      console.log(JSON.stringify(json, null, 2));
      expect(json).toEqual({
        amoc: {
          $: {
            version: "1.7",
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "xsi:noNamespaceSchemaLocation":
              "http://www.bom.gov.au/schema/v1.7/amoc.xsd",
          },
          source: [
            {
              sender: ["Australian Government Bureau of Meteorology"],
              region: ["Northern Territory"],
              office: ["NTRO"],
              copyright: ["http://www.bom.gov.au/other/copyright.shtml"],
              disclaimer: ["http://www.bom.gov.au/other/disclaimer.shtml"],
            },
          ],
          identifier: ["IDD10207"],
          "issue-time-utc": ["2021-07-19T06:40:00Z"],
          "issue-time-local": [
            {
              _: "2021-07-19T16:10:00+09:30",
              $: {
                tz: "CST",
              },
            },
          ],
          "sent-time": ["2021-07-19T06:40:05Z"],
          "expiry-time": ["2021-07-20T06:40:00Z"],
          "validity-bgn-time-local": [
            {
              _: "2021-07-19T17:00:00+09:30",
              $: {
                tz: "CST",
              },
            },
          ],
          "validity-end-time-local": [
            {
              _: "2021-07-26T23:59:59+09:30",
              $: {
                tz: "CST",
              },
            },
          ],
          "next-routine-issue-time-utc": ["2021-07-19T19:40:00Z"],
          "next-routine-issue-time-local": [
            {
              _: "2021-07-20T05:10:00+09:30",
              $: {
                tz: "CST",
              },
            },
          ],
          status: ["O"],
          service: ["WSP"],
          "sub-service": ["FPR"],
          "product-type": ["F"],
          phase: ["NEW"],
        },
      });

      done();
    });
  });
});
