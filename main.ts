matrixKeypad.keypad.onEvent(3, 3, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(27, 0xffffff)
    enter()
})
matrixKeypad.keypad.onEvent(1, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(17, 0x0000ff)
    keyboard.type("7")
})
matrixKeypad.keypad.onEvent(1, 1, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(9, 0x0000ff)
    keyboard.type("4")
})
matrixKeypad.keypad.onEvent(1, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(1, 0x0000ff)
    keyboard.type("1")
})
function enableChat () {
    keyboard.type("t")
    pause(100)
}
matrixKeypad.keypad.onEvent(2, 1, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(10, 0x0000ff)
    keyboard.type("5")
})
matrixKeypad.keypad.onEvent(2, 3, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(26, 0x0000ff)
    keyboard.type("0")
})
matrixKeypad.keypad.onEvent(3, 1, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(11, 0x0000ff)
    keyboard.type("6")
})
matrixKeypad.keypad.onEvent(7, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(7, 0xffff00)
    enableChat()
    keyboard.type("!yellow")
    enter()
})
matrixKeypad.keypad.onEvent(3, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(3, 0x0000ff)
    keyboard.type("3")
})
matrixKeypad.keypad.onEvent(0, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(0, 0xff8000)
    enableChat()
    keyboard.type("!waveby ")
})
function enter () {
    keyboard.key("ENTER", KeyboardKeyEvent.Press)
}
matrixKeypad.keypad.onEvent(2, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(18, 0x0000ff)
    keyboard.type("8")
})
matrixKeypad.keypad.onEvent(3, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(19, 0x0000ff)
    keyboard.type("9")
})
matrixKeypad.keypad.onEvent(2, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(2, 0x0000ff)
    keyboard.type("2")
})
matrixKeypad.keypad.onEvent(7, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(23, 0xffff00)
    enableChat()
    keyboard.type("!restart double")
})
matrixKeypad.keypad.onEvent(7, 1, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(15, 0xffff00)
    enableChat()
    keyboard.type("!restart single")
})
matrixKeypad.keypad.onEvent(7, 3, MatrixKeypadButtonEvent.Click, function () {
    light.setAll(0x000000)
})
forever(function () {
	
})
