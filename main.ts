let Loneliness = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("I’m hungry ")
    basic.showLeds(`
        # # . # #
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Yum")
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Hello!")
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    basic.pause(1000)
    Loneliness += 1
    if (Loneliness < 10) {
        basic.showLeds(`
            . # . # .
            . # . # .
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (Loneliness == 10) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (Loneliness > 20) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            `)
    }
})
