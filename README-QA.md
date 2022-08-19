# Squiz refactoring code review

This project is part of the Squiz product engineering interview process. The codebase has been written to contain multiple issues that could be identified and fixed by a QA engineer.

## Scenario

Pretend you have just inherited this codebase from the business.

The project is an API that ingests and parses some warnings and notices from the Bureau Of Meteorology. Its been running in production for the last 18 months largely without issue. It was developed by a 3rd party contractor, and once the project was completed they moved on and are no longer contactable. Its been decided that you are the new owner of this project. At the moment you have no new requirements but you have been told in the near future this project is going to be critical for an important client. This client will want new features and to dramatically increase (around 1000x) the current traffic load. Your job is to get the project ready for that.

> **Note:** This isn't a test about figuring out the BOM standards. You don't need to look up and become an expert on the Bureau Of Meteorology AMOC standard. You can assume that the field mappings are correct.

### The API

To get the API to run, execute `npm run dev` for a development environment and `npm run start` for a production environment.

The following endpoints are available:

- **Warnings list:**
  This end point lists all the BOM warnings by state. The state is passed in via a query param `state`.
  Example url: `http://localhost:3000/?state=Qld`

- **Warning detail:**
  You can the take one of the warning ids returned in the warnings list and pass it into the warning detail endpoint.
  Example url: `http://localhost:3000/warning/IDQ10090`

## Your tasks

1. Determine the most critical area(s) of the application that needs to be addressed to move this project closer to being high quality
2. Put together a plan on how to address these issues
3. Demonstrate that you can address some of these issues within the codebase. During the interview we’ll be discussing these changes. Definitely don't feel the need to address every issue. Use your best judgement as to what to address. Feel free to limit your time on this to an hour or two. If an issue is too large to address note it down and we can discuss the issue during the interview. Do keep in mind though we do want to see some demonstration of technical skill.

## What we're looking for

1. Your ability to read and understand an unfamiliar codebase
1. Your ability to identify issues with an unfamiliar codebase with respect to quality
1. Your ability to communicate those issues, why they're an issue, and what work needs to be done to resolve the issue(s)
