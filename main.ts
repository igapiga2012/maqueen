basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
})
