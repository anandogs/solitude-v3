import axios from "axios";

export default async function handler(req: any, res: any) {
  const { fName, lName, email } = req.body;

  const data = {
    email_address: email,
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
        error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail and I'll add you to the list.`,
      });
    }
    return res.status(201).json({ message: "success" });
  } catch (error) {
    
    return res.status(500).json({ error: error });
  }

}
