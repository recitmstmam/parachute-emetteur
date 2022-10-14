input.onButtonPressed(Button.A, function () {
    control.reset()
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Yes)
    debute = 2
})
let debute = 0
radio.setGroup(1)
debute = 0
basic.showIcon(IconNames.No)
basic.forever(function () {
    while (debute == 2) {
        radio.sendValue("x", input.acceleration(Dimension.X))
        radio.sendValue("y", input.acceleration(Dimension.Y))
        radio.sendValue("z", input.acceleration(Dimension.Z))
    }
    basic.pause(10)
})
