import API from "./API.js";

async function loadImages() {
  return await API.fetchData();
}

export default loadImages;