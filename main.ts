matrixKeypad.keypad.onEvent(3, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(27, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("clear")
    DriverCommand = 1
    NUMFLASH = 1
})
matrixKeypad.keypad.onEvent(1, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(17, 0xffff00)
    pause(100)
    keyboard.type("t")
    pause(500)
    keyboard.type("#")
    keyboard.type("lf rf lr rr")
    pause(100)
    enter()
})
matrixKeypad.keypad.onEvent(4, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(28, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("waveby")
    DriverCommand = 1
    NUMFLASH = 1
})
matrixKeypad.keypad.onEvent(0, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(16, 0xffff00)
    pause(100)
    keyboard.type("t")
    pause(500)
    keyboard.type("#")
    keyboard.type("fr")
    pause(100)
    enter()
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
matrixKeypad.keypad.onEvent(7, 1, MatrixKeypadButtonEvent.Up, function () {
    if (DriverCommand == 1) {
        NUMFLASH = 0
        pause(100)
        light.setPixelColor(15, 0x0000ff)
        keyboard.type("0")
        light.setPixelColor(7, 0xff0000)
    }
})
matrixKeypad.keypad.onEvent(2, 1, MatrixKeypadButtonEvent.Click, function () {
    if (Windshield == 0) {
        Windshield = 1
        ws()
    } else {
        Windshield = 0
        ws()
    }
})
matrixKeypad.keypad.onEvent(4, 1, MatrixKeypadButtonEvent.Up, function () {
    if (DriverCommand == 1) {
        NUMFLASH = 0
        pause(100)
        light.setPixelColor(12, 0x0000ff)
        keyboard.type("2")
        light.setPixelColor(7, 0xff0000)
    }
})
matrixKeypad.keypad.onEvent(2, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(26, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("restart double")
    pause(100)
    enter()
})
matrixKeypad.keypad.onEvent(6, 1, MatrixKeypadButtonEvent.Up, function () {
    if (DriverCommand == 1) {
        NUMFLASH = 0
        pause(100)
        light.setPixelColor(14, 0x0000ff)
        keyboard.type("8")
        light.setPixelColor(7, 0xff0000)
    }
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
matrixKeypad.keypad.onEvent(3, 1, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(11, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("advance")
    pause(100)
    enter()
})
matrixKeypad.keypad.onEvent(7, 0, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(7, 0xffffff)
    DriverCommand = 0
    NUMFLASH = 0
    enter()
})
matrixKeypad.keypad.onEvent(3, 0, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(3, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("help")
    pause(100)
    enter()
})
function ws () {
    if (Windshield == 1) {
        light.setPixelColor(10, 0xffff00)
        pause(100)
        keyboard.type("t")
        pause(500)
        keyboard.type("#")
        keyboard.type("ws")
        keyboard.functionKey(KeyboardFunctionKey.Enter, KeyboardKeyEvent.Press)
        keyboard.functionKey(KeyboardFunctionKey.Esc, KeyboardKeyEvent.Press)
    } else {
        light.setPixelColor(10, 0x000000)
        pause(100)
        keyboard.type("t")
        pause(500)
        keyboard.type("#")
        keyboard.type("!ws")
        keyboard.functionKey(KeyboardFunctionKey.Enter, KeyboardKeyEvent.Press)
        keyboard.functionKey(KeyboardFunctionKey.Esc, KeyboardKeyEvent.Press)
    }
}
matrixKeypad.keypad.onEvent(5, 2, MatrixKeypadButtonEvent.Up, function () {
    if (DriverCommand == 1) {
        NUMFLASH = 0
        pause(100)
        light.setPixelColor(21, 0x0000ff)
        keyboard.type("4")
        light.setPixelColor(7, 0xff0000)
    }
})
function enter () {
    keyboard.functionKey(KeyboardFunctionKey.Enter, KeyboardKeyEvent.Press)
    pause(250)
    keyboard.functionKey(KeyboardFunctionKey.Esc, KeyboardKeyEvent.Press)
    pause(250)
    light.setAll(0x000000)
}
matrixKeypad.keypad.onEvent(2, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(18, 0xffff00)
    pause(100)
    keyboard.type("t")
    pause(500)
    keyboard.type("#")
    keyboard.type("fuel 2g")
    pause(100)
    enter()
})
matrixKeypad.keypad.onEvent(5, 1, MatrixKeypadButtonEvent.Up, function () {
    if (DriverCommand == 1) {
        NUMFLASH = 0
        pause(100)
        light.setPixelColor(13, 0x0000ff)
        keyboard.type("5")
        light.setPixelColor(7, 0xff0000)
    }
})
matrixKeypad.keypad.onEvent(5, 0, MatrixKeypadButtonEvent.Up, function () {
    if (DriverCommand == 1) {
        NUMFLASH = 0
        pause(100)
        light.setPixelColor(5, 0x0000ff)
        keyboard.type("6")
        light.setPixelColor(7, 0xff0000)
    }
})
matrixKeypad.keypad.onEvent(4, 0, MatrixKeypadButtonEvent.Up, function () {
    if (DriverCommand == 1) {
        NUMFLASH = 0
        pause(100)
        light.setPixelColor(4, 0x0000ff)
        keyboard.type("3")
        light.setPixelColor(7, 0xff0000)
    }
})
matrixKeypad.keypad.onEvent(5, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(29, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("eol")
    DriverCommand = 1
    NUMFLASH = 1
})
matrixKeypad.keypad.onEvent(3, 2, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(19, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("remove")
    DriverCommand = 1
    NUMFLASH = 1
})
matrixKeypad.keypad.onEvent(7, 2, MatrixKeypadButtonEvent.Click, function () {
    light.setPixelColor(23, 0xffffff)
    keyboard.functionKey(KeyboardFunctionKey.Esc, KeyboardKeyEvent.Press)
    DriverCommand = 0
    NUMFLASH = 0
    pause(250)
    light.setAll(0x000000)
})
matrixKeypad.keypad.onEvent(6, 2, MatrixKeypadButtonEvent.Up, function () {
    if (DriverCommand == 1) {
        NUMFLASH = 0
        pause(100)
        light.setPixelColor(22, 0x0000ff)
        keyboard.type("7")
        light.setPixelColor(7, 0xff0000)
    }
})
matrixKeypad.keypad.onEvent(6, 0, MatrixKeypadButtonEvent.Up, function () {
    if (DriverCommand == 1) {
        NUMFLASH = 0
        pause(100)
        light.setPixelColor(6, 0x0000ff)
        keyboard.type("9")
        light.setPixelColor(7, 0xff0000)
    }
})
matrixKeypad.keypad.onEvent(7, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(31, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("dq")
    DriverCommand = 1
    NUMFLASH = 1
})
matrixKeypad.keypad.onEvent(4, 2, MatrixKeypadButtonEvent.Up, function () {
    if (DriverCommand == 1) {
        NUMFLASH = 0
        pause(250)
        light.setPixelColor(20, 0x0000ff)
        keyboard.type("1")
        light.setPixelColor(7, 0xff0000)
    }
})
matrixKeypad.keypad.onEvent(6, 3, MatrixKeypadButtonEvent.Click, function () {
    keyboard.type("t")
    light.setPixelColor(30, 0xffff00)
    pause(100)
    keyboard.type("!")
    keyboard.type("black")
    DriverCommand = 1
    NUMFLASH = 1
})
function numLED () {
	
}
let Windshield = 0
let NUMFLASH = 0
let DriverCommand = 0
DriverCommand = 1
NUMFLASH = 1
pause(2000)
DriverCommand = 0
NUMFLASH = 0
pause(2000)
forever(function () {
    if (NUMFLASH == 1) {
        light.setPixelColor(20, 0xffff00)
        light.setPixelColor(12, 0xffff00)
        light.setPixelColor(4, 0xffff00)
        light.setPixelColor(21, 0xffff00)
        light.setPixelColor(13, 0xffff00)
        light.setPixelColor(5, 0xffff00)
        light.setPixelColor(22, 0xffff00)
        light.setPixelColor(14, 0xffff00)
        light.setPixelColor(6, 0xffff00)
        light.setPixelColor(15, 0xffff00)
    }
})
