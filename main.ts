/**
 * Don't forget to comment your code as you work!
 */
// This code makes our character walk from one side of the screen to the other (left to right)
function Walk () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    mySprite.setPosition(25, 101)
    pause(2000)
    mySprite.setPosition(50, 101)
    pause(2000)
    mySprite.setPosition(75, 101)
    pause(2000)
    mySprite.setPosition(100, 101)
    pause(2000)
    mySprite.setPosition(125, 101)
    pause(2000)
    mySprite.setPosition(150, 101)
    mySprite.destroy()
}
// This function makes you choose between  your first two items in the stre.
function First_choice2 () {
    scene.setBackgroundImage(img`
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333fffffffffffffffffffff33333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333fffffffffffffffffffff33333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333ffffff1111fffffffffff33333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333fffff1ffff1ffffffffff33333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333fffff1fff1fffffffffff33333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333ffffffff1ffffffffffff33333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333fffffff1fffffffffffff33333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333fffffff111111ffffffff33333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333fffffffffffffffffffff33333333333333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333333fffffffffffffffffffff33333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333fff3333333333333333333333333333333333333333333333333333333333333
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        33333333333333333333333333333333333333333333333333333333333333333333333333333333333ddd3333333333fff33333333333333ddd33333333333333333333333333333333333333333333
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333fff33333333333333ddddddddddddddddddddddddddddddddddddddddddddddd
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        fffff11111fffff111111111111111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111ffffffffff
        11111fffff11111fffffffffffffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff1111111111
        1111111111111111111111111111111111111111111111111111111111111.11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(50, 101)
    info.setScore(200)
    info.startCountdown(300)
    icecream = sprites.create(img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `, SpriteKind.Player)
    icecream.setPosition(81, 92)
    cake = sprites.create(img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `, SpriteKind.Player)
    cake.setPosition(102, 101)
    pause(2000)
    Decision = game.askForString("icecream or cake?")
    if (Decision == "icecream") {
        game.splash("icecream $50")
        info.changeScoreBy(-50)
        cake.destroy()
        pause(500)
        mySprite.destroy()
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.setPosition(81, 101)
        pause(500)
        icecream.destroy()
        mySprite.setPosition(114, 101)
        pause(500)
        mySprite.setPosition(144, 101)
        mySprite.destroy()
    } else if (Decision == "cake") {
        game.splash("cake $70")
        info.changeScoreBy(-70)
        icecream.destroy()
        pause(500)
        mySprite.destroy()
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.setPosition(102, 101)
        pause(500)
        cake.destroy()
        mySprite.setPosition(114, 101)
        pause(500)
        mySprite.setPosition(144, 101)
        mySprite.destroy()
    } else {
        game.over(false)
    }
}
// This function makes you choose between  your first two items in the stre.
function First_choice () {
    Apple = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Player)
    Apple.setPosition(81, 101)
    Pizza = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pizza.setPosition(102, 101)
    pause(2000)
    Decision = game.askForString("apple or pizza?")
    if (Decision == "apple") {
        game.splash("Apple $50")
        info.changeScoreBy(-50)
        Pizza.destroy()
        pause(500)
        mySprite.destroy()
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.setPosition(81, 101)
        pause(500)
        Apple.destroy()
        mySprite.setPosition(114, 101)
        pause(500)
        mySprite.setPosition(144, 101)
        mySprite.destroy()
    } else if (Decision == "pizza") {
        game.splash("Pizza $50")
        info.changeScoreBy(-50)
        Apple.destroy()
        pause(500)
        mySprite.destroy()
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.setPosition(102, 101)
        pause(500)
        Pizza.destroy()
        mySprite.setPosition(114, 101)
        pause(500)
        mySprite.setPosition(144, 101)
        mySprite.destroy()
    } else {
        game.over(false)
    }
}
// This function makes you choose between  your first two items in the stre.
function First_choice3 () {
    scene.setBackgroundImage(img`
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffddddffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffdffffdfffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffdfffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffdddfdffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffdffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffdfffdfffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffddffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaafffaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaafffaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddd
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        fffff11111fffff111111111111111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111ffffffffff
        11111fffff11111fffffffffffffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff1111111111
        1111111111111111111111111111111111111111111111111111111111111.11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(50, 101)
    info.setScore(200)
    info.startCountdown(300)
    cherry = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Player)
    cherry.setPosition(81, 101)
    strawberry = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.Player)
    strawberry.setPosition(102, 101)
    pause(2000)
    Decision = game.askForString("cherry or strawberry?")
    if (Decision == "cherry ") {
        game.splash("cherry $50")
        info.changeScoreBy(-50)
        strawberry.destroy()
        pause(500)
        mySprite.destroy()
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.setPosition(81, 101)
        pause(500)
        cherry.destroy()
        mySprite.setPosition(114, 101)
        pause(500)
        mySprite.setPosition(144, 101)
        mySprite.destroy()
    } else if (Decision == "cake") {
        game.splash("starwberry $70")
        info.changeScoreBy(-70)
        cherry.destroy()
        pause(500)
        mySprite.destroy()
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.setPosition(102, 101)
        pause(500)
        strawberry.destroy()
        mySprite.setPosition(114, 101)
        pause(500)
        mySprite.setPosition(144, 101)
        mySprite.destroy()
    } else {
        game.over(false)
    }
}
// This code makes the character walk in the store and the countdown starts and he has a budget of 200$
function Walk_in_store () {
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffff11ffffffffff66666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffff111ffffffffff66666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffff1f1ffffffffff66666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffff1ffffffffff66666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffff1ffffffffff66666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffff1ffffffffff66666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff111111ffffffff66666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffff66666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffff66666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffff66666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666662226666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666662626666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666622626666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666626626666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666626626666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666626666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666ddd6666666666fff66666666666666ddd66666666666666666666666666666666666666666666
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666fff66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        fffff11111fffff111111111111111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111
        fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111ffffffffff
        11111fffff11111fffffffffffffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff
        11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff1111111111
        1111111111111111111111111111111111111111111111111111111111111.11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(50, 101)
    info.setScore(200)
    info.startCountdown(300)
}
let strawberry: Sprite = null
let cherry: Sprite = null
let Pizza: Sprite = null
let Apple: Sprite = null
let Decision = ""
let cake: Sprite = null
let icecream: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
    9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
    9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
    9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
    9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
    9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
    9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
    9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
    9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
    9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
    9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
    9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
    9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
    9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
    9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
    9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
    9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
    9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
    1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
    1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
    1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
    11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
    1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
    111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
    11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
    11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
    11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
    11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
    d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
    dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
    dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
    ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
    ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
    ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
    ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
    dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
    dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
    bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
    bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
    bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
Walk()
Walk_in_store()
First_choice()
First_choice2()
First_choice3()
