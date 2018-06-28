var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page */
router.post('/', function(req, res, next) {

  let elements = req.body['elements[]'];

  let returnedString = "";

  //Each element should be converted to proper HTML code
  elements.forEach(element => {
    if(element === "text") {
      returnedString = returnedString + '<input type="text" placeholder="Text Element" />'
    }

    if(element === "select") {
      returnedString = returnedString + '<select><option>Option 1</option><option>Option 2</option><option>Option 3</option>'
    }

    if(element === "label") {
      returnedString = returnedString + '<label for="yourElementName">Label: </label>'
    }
  });
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(returnedString);
  
})

module.exports = router;
