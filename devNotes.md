
* Windows:
  * For devTasks:
    * For creating a windows MSI installer, you will need to download http://wixtoolset.org/releases/ and put it in your path.
    * For creating a portable 7-zip version, make sure you have the following set up for 7-zip: https://github.com/quentinrossetti/node-7z#installation
* By default, Android devices are only discoverable by Bluetooth when you open the Android Bluetooth settings on the device.
* Building BlueZ on linux:
    * In the BlueZ readme it says: "In order to compile Bluetooth utilities you need following software packages:
    GCC compiler
    GLib library
    D-Bus library
    udev library (optional)
    readline (command line clients)"
    
    * You may already have the GCC compilor and GLib and D-Bus libs already, for the rest, you need to install `libudev-dev` & `libical-dev` & `libreadline-dev`

