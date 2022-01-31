const { default: axios } = require('axios');

exports.handler = async function (event, context) {
  console.log({ event, context });
  if (event.httpMethod === 'POST' && event.body) {
    const baseUrl = process.env.GATSBY_EMAIL_URL;

    try {
      const res = await axios.post(baseUrl, {
        ...JSON.parse(event.body),
      });
      return {
        statusCode: res.status,
        body: JSON.stringify(res.data),
      };
    } catch (err) {
      return {
        statusCode: err.response.status,
        body: JSON.stringify(err.message),
      };
    }
  } else {
    return {
      statusCode: 404,
      body: 'can not find you',
    };
  }
};
