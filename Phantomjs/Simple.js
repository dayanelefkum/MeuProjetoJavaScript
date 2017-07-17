var page = require('webpage').create();
var url = 'file:///C:/Users/dayane/MeuProjetoJavaScript/introducao-javascript/index.html';
page.open(url, function(status){
  console.log(status);
  phantom.exit();
});
