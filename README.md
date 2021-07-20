# Squiz code exam

In this scenario pretend you have just inherited this codebase from the business. Its been running in production for the last 18 months. It was developed by a 3rd party contractor and once the project was completed they moved on and are no longer contactable. Its been decided that you are the new owner of this project. At the moment you have no new requirements but you have been told in the near future this project is going to be critical for an important client. This client will want new features and to dramatically increase (around 1000x) the current traffic load. Your job is to get the project ready for that.

## Tasks

1. Refactor this project in anyway you deem important. Limit yourself to 2 or so hours. This exam is not about you exhaustively refactoring everything. Pick what you think is the most important thing(s) to do.
2. Create a `REPORT.md` file. In this report outline the issues you see with the codebase and give a brief description of why this is an issue. Also outline the changes you haven't made but would given more time.
3. Lastly consider the applications architecture and production run time. Outline in the report what changes would you make if any to accommodate the new requirements.

## What I care about most:

1. Your ability to identify issues with the codebase
2. Your ability to communicate those issues, why they're an issue and what work needs to be done to resolve the issue

## The API

To get the API to run execute a `npm run dev` for a development environment and `npm run start` for a production environment.
