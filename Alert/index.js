const request = require('request');
module.exports = function (context, data) {
    context.log('Webhook was triggered!');

    console.log("context", context)
    console.log("data", data)
    const slackUrl = "https://hooks.slack.com/services/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";
    const text = {
        "text": "Error Detected"
    };

    const requestData = {
        url: slackUrl,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: text
    };

    request(requestData);
    context.res = {
        status: 200
    };

    context.done();
}