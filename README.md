# slack-map

Generates most popular time zones in Slack account.

## Installation

Node.js is required (use `brew install node` or download from [Node.js website](http://nodejs.org/)):

```
npm install -g
```

## Usage

Get the Slack token, specify it via enviorment variable and then run the executable:

```
SLACK_TOKEN=YOUR_TOKEN slack_map
```

It will create dir `slack_map_build` with two files, map image and `index.html`.

