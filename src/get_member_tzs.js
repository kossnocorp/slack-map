var superagent = require('superagent');
var tzDb = require('tz-db');

var MEMBERS_API_ENDPOINT = 'https://slack.com/api/users.list';

var getMemberTzs = function(token, cb) {
  var url = MEMBERS_API_ENDPOINT + '?token=' + token;

  superagent.get(url).end(function(res) {
    if (res.ok) {
      var members = res.body.members;
      var noTzCount = 0;
      var biggestNumber = 0;

      var tzsData = members.reduce(function(result, member) {
        var tz = member.tz;

        if (tz && tz.replace(/\s/g, '').length > 0) {
          var tzData = tzDb.tz[member.tz];
          var dirtyId = tzData['std_seconds'] / 60 / 60;
          var id = dirtyId < 0 ? Math.round(dirtyId) : Math.floor(dirtyId);

          result.tzs[id] = result.tzs[id] || { count: 0 };
          result.tzs[id].count++
          if (result.tzs[id].count > biggestNumber) {
            biggestNumber = result.tzs[id].count;
          }

        } else {
          result.noTzCount++;
        }

        return result;
      }, { count: members.length, noTzCount: 0, tzs: {} });

      tzsData.biggestNumber = biggestNumber;
      cb(tzsData);

    } else {
      throw 'Failed to fetch users list: ';
    }
  })
};

module.exports = getMemberTzs;

