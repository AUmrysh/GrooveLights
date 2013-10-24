GrooveLights
============
GrooveLights is an RGB 5050 LED strip controller using arduino and node.js. This project was started to turn my back porch lighting into a music-controlled lightshow for a Halloween party.
This project is based largely on two other projects, the Adafruit RGB LED Strip controller guide, and Noduino (see Sources).

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

Schematic
========
SEE: http://learn.adafruit.com/assets/2692
pins 3, 5, and 6 are used to control FETs, which switch negative on/off.
Vin pin from arduino is at 12v, used on white/black (they differ on each LED strip model) +12v pin.
![Schematic](http://learn.adafruit.com/system/assets/assets/000/002/692/medium640/ledstripfet.gif "Schematic from adafruit guide")

Sources
=======

+ Adafruit RGB LED Strips guide:  http://learn.adafruit.com/rgb-led-strips/
+ Noduino Arduino interface: http://semu.github.io/noduino/
+ Duino (via Noduino): https://github.com/ecto/duino/
+ TinyColor.js: http://bgrins.github.io/TinyColor/ (for HSV -> RGB)

TL;DR
=====
clone repo
open grooveshark
run bookmarklet or run JS code in console

