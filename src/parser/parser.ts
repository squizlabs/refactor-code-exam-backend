// http://www.bom.gov.au/schema/v1.7/amoc.xsd
var parseString = require("xml2js").parseString;

export function parseXml(xml: string, callback: (result: any) => void) {
  parseString(xml, function (err: any, result: any) {
    callback(result);
  });
}
