radio.onReceivedString(function (receivedString) {
    if (receivedString == "go") {
        basic.pause(2000)
        basic.showIcon(IconNames.Yes)
        debute = 2
    } else {
        basic.showIcon(IconNames.No)
        debute = 0
    }
})
let debute = 0
radio.setGroup(1)
debute = 0
basic.showIcon(IconNames.No)
basic.forever(function () {
    while (debute == 2) {
        radio.sendNumber(input.acceleration(Dimension.Y))
    }
    basic.pause(10)
})
