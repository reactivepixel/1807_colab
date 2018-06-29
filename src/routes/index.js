var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page */
router.post('/', function(req, res, next) {

  //Get the elements sent to the POST command from the post body
  let elements = req.body['elements[]'];

  let returnedString = "";

  //Each element should be converted to proper HTML code
  elements.forEach(element => {

    let fixedElement = element.toLowerCase();

    switch(fixedElement) {
      case "text":
        returnedString = returnedString + '<input type="text" placeholder="Text Element" />'
      case "select":
        returnedString = returnedString + '<select><option>Option 1</option><option>Option 2</option><option>Option 3</option>'
      case "label":
        returnedString = returnedString + '<label for="yourElementName">Label: </label>'
    }
  });
  
  //Add header to prevent browsers from throwing "malformed" error.
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(returnedString);
  
})

module.exports = router;
