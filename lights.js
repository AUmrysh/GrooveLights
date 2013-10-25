var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyACM0", {
  baudrate: 115200
});
var http = require("http");
var url = require('url');

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


http.createServer(function(request, response) {
  request.on('end', function() {
    var url_parts = url.parse(request.url, true);
    var params = url_parts.query;
    if (!isEmpty(params)) {
      var r = ("00" + params['r']).slice(-3);
      var g = ("00" + params['g']).slice(-3);
      var b = ("00" + params['b']).slice(-3);
      if (r >= 256) {
        r = 255;
      }
      if (g >= 256) {
        g = 255;
      }
      if (b >= 256) {
        b = 255;
      }
      serialPort.write("!0303"+b+".");
      serialPort.write("!0305"+r+".");
      serialPort.write("!0306"+g+".");
//      console.log(r+"--"+g+"--"+b);
    }
  });
  response.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": "*"});
  response.end();
}).listen(1337);
