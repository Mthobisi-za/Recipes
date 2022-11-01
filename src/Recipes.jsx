export default function Recipes({ keySearch }) {
  if (keySearch) {
    return <h1>Results for {keySearch}</h1>;
  } else {
    return <h1>No Results</h1>;
  }
}
