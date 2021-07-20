# Squiz code exam

In this scenario pretend you have just inherited this codebase from the business. The project is an api which ingests and parses some warnings and notices from the Bureau Of Meteorology. Its been running in production for the last 18 months largely without issue. It was developed by a 3rd party contractor and once the project was completed they moved on and are no longer contactable. Its been decided that you are the new owner of this project. At the moment you have no new requirements but you have been told in the near future this project is going to be critical for an important client. This client will want new features and to dramatically increase (around 1000x) the current traffic load. Your job is to get the project ready for that.

As a side note, this isn't a test about figuring out the BOM standards. You don't need to look up and become an expert on the Bureau Of Meteorology AMOC standard. You can assume that the filed mappings are correct. Even though the way its being parsed may leave a little to be desired.

## Tasks

1. Refactor and fix any issue in this project in anyway you think is important. Limit yourself to 2 or so hours. This exam is not about you exhaustively refactoring everything. Pick what you think is the most important thing(s) to do.
2. Create a `REPORT.md` file. In this report outline the issues you see with the codebase and give a brief description of why this is an issue. Also outline the changes you haven't made but would given more time.
3. Lastly consider the applications architecture and production run time. Outline in the report what changes would you make if any to accommodate the new requirements.

## What I care about most:

1. Your ability to identify issues with the codebase
2. Your ability to communicate those issues, why they're an issue and what work needs to be done to resolve the issue

## The API

To get the API to run execute a `npm run dev` for a development environment and `npm run start` for a production environment.

## Endpoints:

- Warnings list:
  This end point lists all the BOM warnings by state. The state is passed in via a query param `state`.
  Example url: `http://localhost:3000/?state=Qld`

- Warning detail:
  You can the take one of the warning ids returned in the warnings list and pass it into the warning detail endpoint.
  Example url: `http://localhost:3000/warning/IDQ10090`
