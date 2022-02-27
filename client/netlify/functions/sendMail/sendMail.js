const { default: axios } = require('axios');
const validator = require('validator');

const getData = (data) => {
  const reqData = {
    name: data.name,
    email: data.email,
    subject: data.subject,
    details: data.details,
  };
  if (data.subject === 'hire') {
    reqData.project_type = data.project_type;
    reqData.estimated_budget = data.estimated_budget;
  }
  return reqData;
};

const validateData = (reqData) => {
  const reqDataArr = Object.entries(reqData);
  const emptyFields = reqDataArr.filter(([, value]) => {
    if (value === undefined) {
      return true;
    }
    const trimmedValue = value.toString().trim();
    return trimmedValue === '' || trimmedValue === null || trimmedValue === ' ';
  });
  if (emptyFields.length > 0) {
    return {
      statusCode: 400,
      body: `${emptyFields
        .map((item) => `${item[0]}`)
        .join(', ')} can't be empty`,
    };
  }
  // check if email is valid
  if (reqData.email) {
    if (validator.isEmail(reqData.email) === false) {
      return {
        statusCode: 400,
        body: 'email is not valid',
      };
    }
  }
};

exports.handler = async function (event, context) {
  console.log(context);
  if (event.httpMethod === 'POST' && event.body) {
    const baseUrl = process.env.GATSBY_EMAIL_URL;
    const reqData = getData(JSON.parse(event.body));
    const validationErrors = validateData(reqData);
    if (validationErrors) {
      return validationErrors;
    }
    // send email
    try {
      const res = await axios.post(baseUrl, reqData);
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
