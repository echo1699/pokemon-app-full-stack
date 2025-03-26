export async function fetchData(url) {
  try {
    let response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log('Not available');
    throw Error('Failed');
  }
}