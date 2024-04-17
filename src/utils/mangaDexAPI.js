const fetchMangaList = async () => {
  const url = "https://api.jikan.moe/v4/top/manga";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  return data.data.map((manga) => ({
    title: manga.title,
    image_url: manga.images.jpg.large_image_url, // Adjust based on the desired image size
  }));
};
export default fetchMangaList;
