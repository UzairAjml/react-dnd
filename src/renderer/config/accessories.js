import Plug from '../icons/12Vplug.png';
import Fuse from '../icons/Fuseautomatic.png';
import LED from '../icons/LEDlightRed.png';
import Nitro from '../icons/Nitroswitch.png';
import blueSteel from '../icons/StainlesssteelBlue.png';
import redSteel from '../icons/StainlesssteelRed.png';
import greenSteel from '../icons/StainlesssteelGreen.png';
import Tumi from '../icons/Tuimelschakelaar.png';
import blueSteel from '../icons/StainlesssteelBlue.png';
import Usb from '../icons/USBplug.png';







const Equipments = {

    Switches : [
        {  id : "switchblue",
           title : "Stainless steel pushbutton (16mm) with blue led",
           imgsrc : blueSteel
        },
        {
            id : "switchred",
           title : "Stainless steel pushbutton (16mm) with red led",
           imgsrc : redSteel
        },
        {
            id : "switchgreen",
            title : "Stainless steel pushbutton (16mm) with green led",
            imgsrc : greenSteel
        },
        {
            id : "Nitro",
            title : "Nitro Switch",
            imgsrc : Nitro
        },
    ],
    accessory : [
        {
            id : "usbport",
            title : "USB port",
            imgsrc : Usb
        },
        {
            id : "plug",
            title : "12V plug",
            imgsrc : Plug
        },
        {
            id : "Tuimelscha",
            title : "Tuimelscha kelaar",
            imgsrc : Tumi
        },
        {
            id : "Fuse",
            title : "Fuse automatic",
            imgsrc : Fuse
        },
        {
            id : "LED",
            title : "LED Light",
            imgsrc : LED
        },
        

    ]
}
export {Equipments}