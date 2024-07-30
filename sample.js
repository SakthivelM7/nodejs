const http =require("http");
const url = require('url')
const server = http.createServer((req,res) => {
    const parsUrl = url.parse(req.url, true);
    if (parsUrl.path === '/'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h2 style="text-align:center; margin-top:20%; font-size: 50px; ">Hello GWC! (^_^) </h2><br> <p style="text-align:center;">( You want Home Page in Address bar Type "/home" after 3001 )</p>');
        res.end();
    }
    else if (parsUrl.path === '/home'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h2 style="margin-top:20%; font-size:30px; color: blue; text-align:center;">This is Sample Home page for testing Purpose</h2> <p style="text-align:center;">( You want About Page in Address bar Type "/about" after 3001 )</p>');
        res.end(); 
    }
    else if(parsUrl.path === '/about'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h2 style="margin-top:20%; font-size:30px; color: #F78F72; text-align:center;">We ensure better services and better quality at every product you might be interested in and we shall help grow better</h2> <br> <p style="text-align:center;">( You want Home Page in Address bar Type "/contact" after 3001 )</p>');
        res.end();
    }
    else if(parsUrl.path === '/contact'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h2 style="margin-top:20%; font-size:30px; color:#803B3F; text-align:center;"> Address <br>#46/4 <br> Novel Tech Park, Kudlu Gate,Hosur Rd, HSR Extension, <br>Bangalore, Karnataka, India 560068</h2> <p style="text-align:center;">( In address bar type wrong URL after 3001 )</p>');
        res.end();
    }
    else {
        res.writeHead(404, {'content-type':'text/html'});
        res.write('<h2 style="margin-top:20%; font-size:30px; text-align:center;"> 404 Error <br> Page Not Found</h2>');
        res.end();
    }
    
})


server.listen(3001, () => {
    console.log('server running on http://localhost:3001')
})