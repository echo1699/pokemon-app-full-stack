export async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      console.error(`Fetch failed: ${response.status} - ${response.statusText} at ${url}`);
      throw new Error('Fetch failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, err);
    throw err;
  }
}