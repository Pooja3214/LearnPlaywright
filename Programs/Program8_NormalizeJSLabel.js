function normalizeJsBasicsLabel(label) {
  //  label = "  js-basic-login-button  ";
// Trim leading and trailing spaces
  let normalizer = label.trim();

  //convert text to lowercase
  normalizer = normalizer.toLowerCase();

  // Replace non-alphanurmeic groups with single hyphen
 normalizer = normalizer.replace(/[^a-zA-Z0-9]+/g,  '-');
  normalizer = normalizer.replace(/^-+|-+$/g, '');

  //Prefix the result with "js-basic-".
  return normalizer ? "js-basic-" + normalizer : "js-basic";

}