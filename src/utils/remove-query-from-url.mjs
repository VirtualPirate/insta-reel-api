export default function removeQueryFromUrl(url) {
  const urlObj = new URL(url);
  urlObj.search = "";
  urlObj.hash = "";
  return urlObj.toString();
}
