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
matrixKeypad.keypad.onEvent(0, 2, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(16, 0xffff00)
    pause(3000)
    keyboard.type("!")
    keyboard.type("black")
})
matrixKeypad.keypad.onEvent(0, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(24, 0xffff00)
    pause(3000)
    keyboard.type("!")
    keyboard.type("dq")
})
matrixKeypad.keypad.onEvent(1, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(1, 0x0000ff)
    keyboard.type("1")
})
matrixKeypad.keypad.onEvent(2, 1, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(10, 0x0000ff)
    keyboard.type("5")
})
matrixKeypad.keypad.onEvent(2, 3, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(26, 0x0000ff)
    keyboard.type("0")
})
matrixKeypad.keypad.onEvent(1, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(25, 0xffff00)
    pause(3000)
    keyboard.type("!")
    keyboard.type("clear")
})
matrixKeypad.keypad.onEvent(3, 1, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(11, 0x0000ff)
    keyboard.type("6")
})
matrixKeypad.keypad.onEvent(7, 0, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(7, 0xffff00)
    pause(3000)
    keyboard.type("!")
    keyboard.type("yellow")
    pause(3000)
    enter()
})
matrixKeypad.keypad.onEvent(3, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(3, 0x0000ff)
    keyboard.type("3")
})
matrixKeypad.keypad.onEvent(0, 0, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(0, 0xffff00)
    pause(3000)
    keyboard.type("!")
    keyboard.type("waveby")
})
function enter () {
    keyboard.functionKey(KeyboardFunctionKey.Enter, KeyboardKeyEvent.Press)
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
    keyboard.type("t")
    light.setPixelColor(23, 0xffff00)
    pause(3000)
    keyboard.type("!")
    keyboard.type("restart double")
    pause(3000)
    enter()
})
matrixKeypad.keypad.onEvent(7, 1, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(15, 0xffff00)
    pause(3000)
    keyboard.type("!")
    keyboard.type("restart single")
    pause(3000)
    enter()
})
matrixKeypad.keypad.onEvent(0, 1, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(8, 0xffff00)
    pause(3000)
    keyboard.type("!")
    keyboard.type("eol")
})
matrixKeypad.keypad.onEvent(7, 3, MatrixKeypadButtonEvent.Click, function () {
    light.setAll(0x000000)
})
forever(function () {
	
})
