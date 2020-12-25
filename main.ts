input.onButtonPressed(Button.A, function () {
    if (mbit_小車類.Avoid_Sensor(mbit_小車類.enAvoidState.OBSTACLE)) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Stop, 0)
    } else {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 41)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
images.createImage(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 30)
images.createImage(`
    # # . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 30)
images.createImage(`
    # # # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 30)
images.createImage(`
    # # # # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . #
    . . . . #
    . . . . .
    . . . . .
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . #
    . . . . #
    . . . . #
    . . . . .
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . #
    . . . . #
    . . . . #
    . . . # #
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . #
    . . . . #
    . . . . #
    . . # # #
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . #
    . . . . #
    . . . . #
    . # # # #
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . #
    . . . . #
    . . . . #
    # # # # #
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . #
    . . . . #
    # . . . #
    # # # # #
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    . . . . #
    # . . . #
    # . . . #
    # # # # #
    `).showImage(0, 30)
images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `).showImage(0, 30)
images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0, 500)
images.createImage(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `).showImage(0, 30)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
})
basic.forever(function () {
    mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Blue)
    basic.pause(100)
    mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.OFF)
    basic.pause(1000)
})
