import axios from "axios";

export default async function handler(req: any, res: any) {
  const { fName, lName, emailAddress } = req.body;

  const data = {
    email_address: emailAddress,
    status: "subscribed",
    merge_fields: {
      FNAME: fName,
      LNAME: lName,
    },
  };


  const url = `https://us10.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`;

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${process.env.MAILCHIMP_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, options);
    if (response.status >= 400) {
      
      return res.status(400).json({
        error: res.data.detail,
      });
    }
    return res.status(201).json({ message: "We have added you to our newsletter!" });
  } catch (error:any) {
    return res.status(500).json({ error: error.response.data.title });
  }

}
