const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    
    //Create function to convert json file to an html string
    function toHTML() {
        let fs = require('fs');
        
        //Read the file
        fs.readFile(__dirname + '/array.json', function (err, data){
            
            //If an error occurs log it
            if (err) {
                return console.log(err);
            }
            
            //Parse the data and create variables to be used
            data = JSON.parse(data);
            let items = [];
            let html = '';
            let i = 0;
            
            //Loop through the data object and add the values for "type" to the items array
            data.forEach(function() {
                items.push(data[i]["type"].toLowerCase());
                i++;
            });
            
            //Create loop to convert to html
            items.forEach(function(item) {
                let element = "";
                //Create switch statement for values
                switch (item) {
                    case "button":
                        element = "<button></button>";
                        break;
                    case "select":
                        element = "<select></select>";
                        break;
                    case "option":
                        element = "<label></label>";
                        break;
                    case "form":
                        element = "<form></form>";
                        break;
                    case "label":
                        element = "<label></label>";
                        break;
                    case "textarea":
                        element = "<textarea></textarea>";
                        break;
                    case "text":
                        element = "<input type='text'/>";
                        break;
                    case "file":
                        element = "<input type='file'/>";
                        break;
                    case "image":
                        element = "<input type='image'/>";
                        break;
                    case "number":
                        element = "<input type='number'/>";
                        break;
                    case "radio":
                        element = "<input type='radio'/>";
                        break;
                    case "tel":
                        element = "<input type='tel'/>";
                        break;
                    case "url":
                        element = "<input type='url'/>";
                        break;
                    default:
                        break;
                }
                
                //Add to the html string
                html += element;
            })
            
            //Output the final results
            res.write(html);
            res.end();
        });
        
    };
    
    //Call the function
    toHTML();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});