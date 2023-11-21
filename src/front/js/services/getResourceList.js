export const getResourceList = (resource) => {
  return fetch(`https://fuzzy-space-train-gvvw99x5wv5hv4x4-3000.app.github.dev/api/${resource}`)
    .then((res) => {
      if (!res.ok) {
        throw Error("There was an error with the request");
      }
      return res.json();
    })
    .then((res) => res.results)
    .catch((err) => console.log(err));
};