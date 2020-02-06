//////////////////////////////////////////////
// VALEURS MODIFIABLES
//////////////////////////////////////////////
// Délai avant que le programme se relance ( toutes les LED sont éteintes )
let ProgramRestartDelay = 1000
// Délai à la fin du programme ou rien ne bouge (
// toutes les LED sont allumées )
let ProgramFinishedDelay = 1000
// Brightness des LED
let LEDBrightness = 15
// Délai entre l'allumage d'une LED à l'autre
let LEDDelay = 100
// Valeurs de couleur pour les 24 LED : 1 ligne = 1
// LED, 1ère ligne = LED #1
let LEDColors = [neopixel.rgb(7, 47, 95), neopixel.rgb(7, 47, 95), neopixel.rgb(7, 47, 95), neopixel.rgb(7, 47, 95), neopixel.rgb(52, 91, 162), neopixel.rgb(52, 91, 162), neopixel.rgb(52, 91, 162), neopixel.rgb(52, 91, 162), neopixel.rgb(72, 116, 196), neopixel.rgb(72, 116, 196), neopixel.rgb(72, 116, 196), neopixel.rgb(72, 116, 196), neopixel.rgb(148, 174, 220), neopixel.rgb(148, 174, 220), neopixel.rgb(148, 174, 220), neopixel.rgb(148, 174, 220), neopixel.rgb(214, 224, 242), neopixel.rgb(214, 224, 242), neopixel.rgb(214, 224, 242), neopixel.rgb(214, 224, 242), neopixel.rgb(237, 241, 249), neopixel.rgb(237, 241, 249), neopixel.rgb(237, 241, 249), neopixel.rgb(237, 241, 249)]
///////////////////////////////////////////////
// FIN VALEURS MODIFIABLES
///////////////////////////////////////////////

// Initialisation du programme
let Pixel = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
Pixel.setBrigthness(LEDBrightness)

let item = 0
// Boucle d'execution du programme
basic.forever(function () {
    if (item == 0) {
        basic.pause(ProgramRestartDelay)
    }
    Pixel.setPixelColor(item, LEDColors[item])
    if (item < 24) {
        item += 1
        Pixel.show()
        basic.pause(LEDDelay)
    } else if (item >= 24) {
        item = 0
        basic.pause(ProgramFinishedDelay)
        Pixel.clear()
        Pixel.show()
    }
})
