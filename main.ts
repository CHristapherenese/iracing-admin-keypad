matrixKeypad.keypad.onEvent(3, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(27, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("remove")
})
matrixKeypad.keypad.onEvent(5, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(21, 0x0000ff)
    keyboard.type("4")
})
matrixKeypad.keypad.onEvent(4, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(28, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("waveby")
})
matrixKeypad.keypad.onEvent(6, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(22, 0x0000ff)
    keyboard.type("7")
})
matrixKeypad.keypad.onEvent(0, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(24, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("yellow")
    pause(100)
    enter()
})
matrixKeypad.keypad.onEvent(4, 1, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(12, 0x0000ff)
    keyboard.type("2")
})
matrixKeypad.keypad.onEvent(2, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(26, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("restart double")
    pause(100)
})
matrixKeypad.keypad.onEvent(1, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(25, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("restart single")
    pause(100)
    enter()
})
matrixKeypad.keypad.onEvent(4, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(20, 0x0000ff)
    keyboard.type("1")
})
matrixKeypad.keypad.onEvent(7, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(7, 0xffffff)
    enter()
})
matrixKeypad.keypad.onEvent(0, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setAll(0x000000)
})
function enter () {
    keyboard.functionKey(KeyboardFunctionKey.Enter, KeyboardKeyEvent.Press)
    pause(100)
    keyboard.functionKey(KeyboardFunctionKey.Esc, KeyboardKeyEvent.Press)
    pause(100)
    light.setAll(0x000000)
}
matrixKeypad.keypad.onEvent(5, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(29, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("eol")
})
matrixKeypad.keypad.onEvent(3, 2, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(19, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("clear")
})
matrixKeypad.keypad.onEvent(6, 1, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(14, 0x0000ff)
    keyboard.type("8")
})
matrixKeypad.keypad.onEvent(7, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(23, 0xffffff)
    keyboard.functionKey(KeyboardFunctionKey.Esc, KeyboardKeyEvent.Press)
    pause(100)
    light.setAll(0x000000)
})
matrixKeypad.keypad.onEvent(4, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(4, 0x0000ff)
    keyboard.type("3")
})
matrixKeypad.keypad.onEvent(6, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(6, 0x0000ff)
    keyboard.type("9")
})
matrixKeypad.keypad.onEvent(5, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(5, 0x0000ff)
    keyboard.type("6")
})
matrixKeypad.keypad.onEvent(5, 1, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(13, 0x0000ff)
    keyboard.type("5")
})
matrixKeypad.keypad.onEvent(7, 1, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(15, 0x0000ff)
    keyboard.type("0")
})
matrixKeypad.keypad.onEvent(7, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(31, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("dq")
})
matrixKeypad.keypad.onEvent(6, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(30, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("black")
})
forever(function () {
	
})
