input.onButtonPressed(Button.A, function () {
    control.reset()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "go") {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
        debute = 2
    }
})
let debute = 0
radio.setGroup(1)
basic.showIcon(IconNames.No)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("y", input.acceleration(Dimension.Y))
    radio.sendValue("z", input.acceleration(Dimension.Z))
    led.unplot(0, 0)
    basic.pause(2000)
})
