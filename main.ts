namespace SpriteKind {
    export const object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    jared.vy += -200
    trampo.setKind(SpriteKind.object)
    trampo.x += Math.randomRange(-40, 60)
    trampo.y += Math.randomRange(-40, 70)
})
let trampo: Sprite = null
let jared: Sprite = null
scene.setBackgroundColor(3)
jared = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 . . . . . . . 
. . . 5 5 5 5 5 5 5 . . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 f 5 5 f 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. . . 7 7 7 f 7 7 7 7 . . . . . 
. . . 7 7 7 7 f 7 7 7 . . . . . 
. 7 7 7 7 7 f 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 f 7 7 7 . . . . . 
. . . 7 7 7 f 7 7 7 7 . . . . . 
. . . . 7 7 . . 7 7 . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(jared)
jared.ay = 100
trampo = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
8 f f f f f f f f f f f f f f f f f f 8 
8 f f f f f f f f f f f f f f f f f f 8 
8 f f f f f f f f f f f f f f f f f f 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.object)
trampo = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
8 f f f f f f f f f f f f f f f f f f 8 
8 f f f f f f f f f f f f f f f f f f 8 
8 f f f f f f f f f f f f f f f f f f 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.object)
trampo.setPosition(300, 400)
jared.setPosition(350, 300)
game.onUpdate(function () {
    jared.x += controller.dx()
})
