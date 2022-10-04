export default Handlebars.registerHelper('toCapitalize', function (str) {
  return str.charAt(0).toUpperCase() + string.slice(1);
});

// function toCapitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
