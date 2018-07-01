const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (_, res) => {
  res.render('index', {
    title: 'Express',
  });
});

/* POST home page */
router.post('/', (req, res) => {
  // Get the elements sent to the POST command from the post body
  const elements = req.body['elements[]'];
  let returnedString = '';

  // Each element should be converted to proper HTML code
  elements.forEach((element) => {
    const fixedElement = element.toLowerCase();

    switch (fixedElement) {
      case 'text':
        returnedString += '<input type="text" placeholder="Text Element" />';
        break;
      case 'select':
        returnedString += '<select><option>Option 1</option><option>Option 2</option><option>Option 3</option>';
        break;
      case 'label':
        returnedString += '<label for="yourElementName">Label: </label>';
        break;
      default:
        break;
    }
  });

  // Add header to prevent browsers from throwing "malformed" error.
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end(returnedString);
});

module.exports = router;
