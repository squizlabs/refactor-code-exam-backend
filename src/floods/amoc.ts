import { Client } from "basic-ftp";

export async function getWarnings() {
  const client = new Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: "ftp.bom.gov.au",
      secure: false,
    });

    await client.cd("/anon/gen/fwo/");

    const files = await client.list();

    let warns: any = {};
    for (var file in files) {
      if (files[file].name.endsWith(".amoc.xml")) {
        warns[files[file].name] = true;
      }
    }

    return warns;
  } catch (err) {
    console.log(err);
  }

  client.close();
}

export function getWarning(id: string) {
  //
}
