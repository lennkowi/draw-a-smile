input.onButtonPressed(Button.A, function () {
    led.plot(1, 1)
    basic.pause(500)
    led.plot(3, 1)
    basic.pause(500)
    led.plot(0, 3)
    basic.pause(500)
    led.plot(1, 4)
    basic.pause(500)
    led.plot(2, 4)
    basic.pause(500)
    led.plot(3, 4)
    basic.pause(500)
    led.plot(4, 3)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
