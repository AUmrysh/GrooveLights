GrooveLights
============
GrooveLights is an RGB 5050 LED strip controller using arduino and node.js. This project was started to turn my back porch lighting into a music-controlled lightshow for a Halloween party.

Dependencies
============
The following are required to use this:

### Hardware

+ Arduino (Leonardo used, but Uno should also work, and any other with proper pin changes)
+ 12V Power Supply
+ RGB LED 5050 strip
+ 3x IRF510 mosfets (or equivalent 18V or higher w/ greater than 2 Amps rating MOSFET)
+ 3x ~220ohm Resistors
+ Computer(s) (2 computers can be used to stream light values over wifi if you want)

### Software

+ Linux (Only necessary for Arduino controller, should work with any OS with minor tweaks to serial port value in code)
+ Node.js (v0.10.15)
  + serialport (1.2.2)
+ Web browser
+ Arduino (1.0.3 or higher)
  + ecto/duino du.ino sketch (https://github.com/ecto/duino/blob/master/src/du.ino)
 
### Other

+ Grooveshark Plus or Anywhere account (sorry, I don't know how to access the frequency analyzer without the Visualizer)

