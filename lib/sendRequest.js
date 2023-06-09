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
      console.log("Your Request can not be processed,");
    }
    const responseData = await response.json();

    return responseData;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}
