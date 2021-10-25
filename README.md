# Squiz refactoring code review

This project is part of the Squiz product engineering interview process. The codebase has been written to contain multiple issues that could be identified and fixed by an engineer.

## Scenario

Pretend you have just inherited this codebase from the business.

The project is an API that ingests and parses some warnings and notices from the Bureau Of Meteorology. Its been running in production for the last 18 months largely without issue. It was developed by a 3rd party contractor, and once the project was completed they moved on and are no longer contactable. Its been decided that you are the new owner of this project. At the moment you have no new requirements but you have been told in the near future this project is going to be critical for an important client. This client will want new features and to dramatically increase (around 1000x) the current traffic load. Your job is to get the project ready for that.

> **Note:** This isn't a test about figuring out the BOM standards. You don't need to look up and become an expert on the Bureau Of Meteorology AMOC standard. You can assume that the field mappings are correct, but how the data is being parsed is fair game.

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

1. Get the project running, inspect the codebase, and note down any issues you see.
2. Determine the 5 most critical parts of the project that need changing based on the scenario above. For each one, consider the changes that you would make to improve the codebase.
3. Consider the application's architecture and production run time and think about what changes would you make (if any) to accommodate the new requirements.

> **Note:** We will be discussing the issues you have found during the interview, so please make sure you note them down and that you are familiar with the codebase. You don't need to actually write code as part of this process, but you can absolutely do so if that makes things easier or if you prefer to show your own code during the technical review.

## What we're looking for

1. Your ability to read and understand an unfamiliar codebase
1. Your ability to identify issues with an unfamiliar codebase
2. Your ability to communicate those issues, why they're an issue, and what work needs to be done to resolve the issue
