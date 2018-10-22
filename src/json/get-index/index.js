let arc = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    json: { error: "Record not found" },
    status: 404,
  });
}

exports.handler = arc.json.get(route)
