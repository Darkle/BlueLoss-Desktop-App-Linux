
* By default, Android devices are only discoverable by Bluetooth when you open the Android Bluetooth settings on the device.
* Building BlueZ on linux:
    * In the BlueZ readme it says:
>      In order to compile Bluetooth utilities you need following software packages:
>    	- GCC compiler
>    	- GLib library
>    	- D-Bus library
>    	- udev library (optional)
>    	- readline (command line clients)

   * You may already have the GCC compilor and GLib and D-Bus libs already, for the rest, you need to install `libudev-dev` & `libical-dev` & `libreadline-dev`

* For building the AppImage, you will need to install the `appimagetool`: https://github.com/AppImage/AppImageKit/wiki/Creating-AppImages#6-manually-create-an-appdir

* Built on node 8.11.3
