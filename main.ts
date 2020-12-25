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
