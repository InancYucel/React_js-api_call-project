import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/photos/", {
    headers: {
      Authorization: "Client-ID rJhWpiNEpb6j06TSorB86KgB9DbXcn7GrZAEnGRf6OY",
    },
    params: {
      query: String(term),
    },
  });
  debugger;
  return response.data;
};

export default searchImages;
