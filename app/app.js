const http = require('http');

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  //  Create function to convert json file to an html string
  function toHTML() {
    const fs = require('fs');
    const joinPath = require('path.join');
    const arrayPath = joinPath(__dirname, '/array.json');

    //  Read the file
    fs.readFile(arrayPath, (err, data) => {
      //  Parse the data
      const parsedData = JSON.parse(data);

      //  If an error occurs log it
      if (err) {
        return res.write('There was an error reading the JSON file');
      }

      let html = '';

      // Create function for conditional check for element attributes
      function attrChecks(item) {
        if (item.type !== undefined) {
          html += ` type="${item.type}"`;
        }
        if (item.class !== undefined) {
          html += ` class="${item.class}"`;
        }
        if (item.id !== undefined) {
          html += ` id="${item.id}"`;
        }
        if (item.name !== undefined) {
          html += ` name="${item.name}"`;
        }
        if (item.for !== undefined) {
          html += ` for="${item.for}"`;
        }
        if (item.method !== undefined) {
          html += ` method="${item.method}"`;
        }
        if (item.action !== undefined) {
          html += ` action="${item.action}"`;
        }
        if (item.value !== undefined) {
          html += ` value="${item.value}"`;
        }
        if (item.placeholder !== undefined) {
          html += ` placeholder="${item.placeholder}"`;
        }
        if (item.src !== undefined) {
          html += ` src="${item.src}"`;
        }
        if (item.alt !== undefined) {
          html += ` alt="${item.alt}"`;
        }
        if (item.accept !== undefined) {
          html += ` accept="${item.accept}"`;
        }
        if (item.required !== undefined) {
          html += ' required';
        }
        if (item.readonly !== undefined) {
          html += ' readonly';
        }
        if (item.multiple !== undefined) {
          html += ' multiple';
        }
      }

      // Create function for value check for elements
      function textCheck(item) {
        if (item.text !== undefined) {
          html += item.text;
        }
      }

      //  Create loop to convert to html
      parsedData.forEach((item) => {
        //  Create switch statement for elements
        switch (item.element) {
          case 'label':
            html += '<label'; // Opening html tag
            attrChecks(item); // Call attribute checker method
            html += '>'; // Closing caret
            textCheck(item); // Call text checker method
            html += '</label>'; // Closing html tag
            break;

          case 'input':
            html += '<input';
            attrChecks(item);
            html += '>';
            break;

          case 'button':
            html += '<button';
            attrChecks(item);
            html += '>';
            textCheck(item);
            html += '</button>';
            break;

          case 'select':
            html += '<select';
            attrChecks(item);
            html += '>';
            textCheck(item);
            html += '</select>';
            break;

          case 'option':
            html += '<option';
            attrChecks(item);
            html += '>';
            textCheck(item);
            html += '</option>';
            break;

          case 'form':
            html += '<form';
            attrChecks(item);
            html += '>';
            textCheck(item);
            html += '</form>';
            break;

          default:
            break;
        }
      });

      //  Output the final results
      res.write(html);
      return res.end();
    });
  }

  //  Call the function
  toHTML();
});

server.listen(port);
