input.onButtonPressed(Button.A, function () {
    basic.showNumber(record)
})
input.onButtonPressed(Button.AB, function () {
    record = 0
})
input.onButtonPressed(Button.B, function () {
    step = 0
})
input.onGesture(Gesture.Shake, function () {
    step += 1
})
let step = 0
let record = 0
record = 0
step = 0
basic.showNumber(step)
basic.forever(function () {
    basic.showNumber(step)
    if (record < step) {
        record = step
        if (step == 10) {
            music.playMelody("C D E F G A B C5 ", 120)
        }
        if (step == 10) {
            basic.showLeds(`
                . # . # .
                . # . # .
                # . . . #
                . # # # .
                . . . . .
                `)
        }
    }
})
