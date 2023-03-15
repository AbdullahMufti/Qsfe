export default async function SendRequest(
  url,
  method = "GET",
  body = null,
  headers = {}
) {
  try {
    const response = await fetch(url, {
      method,
      body,
      headers,
    });
    // console.log(url);

    if (!response.ok) {
      alert("Your Request can not be processed,");
      throw new Error("Something went wrong, try again later");
    }
    const responseData = await response.json();

    return responseData;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}
