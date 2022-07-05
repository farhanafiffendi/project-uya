const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  
  // Letak endpoint
  export const methodPOSTSignIn = async ({ endpoint, body }) => {
    return await fetch(`https://awaxii.pocari.id/dev/web_user?key=all`, {
      method: "GET",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error("err", err);
      });
  };