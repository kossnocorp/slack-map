# slack-map

Generates most popular time zones in Slack account.

For example, see [#nomads time zones map](http://nomad-tzs.nocorp.me) ([#nomads - digital nomad chat community](http://hashtagnomads.com/))

![](http://i.ncrp.co/image/363J1Y1U1M1e/Image%202015-01-30%20at%206.55.24%20am.png)

## Installation

Node.js is required (use `brew install node` or download from [Node.js website](http://nodejs.org/)):

```
npm install -g slack-map
```

## Usage

[Get the Slack token](https://api.slack.com/web), specify it via enviorment variable (`SLACK_TOKEN`) and then run the executable:

```
SLACK_TOKEN=YOUR_TOKEN slack_map
```

It will create dir `slack_map_build` with two files, map image and `index.html`.

