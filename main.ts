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
    pause(500)
    Decision = game.askForString("apple or pizza?")
    if (Decision == "apple") {
        game.splash("Apple $10")
        info.changeScoreBy(-10)
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
        game.splash("Pizza $20")
        info.changeScoreBy(-20)
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
    }
}
// This code makes the character walk in the store and the countdown starts and he has a budget of 200$
function Walk_in_store () {
    scene.setBackgroundImage(img`
        eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
        222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
        222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
        222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
        e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
        eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
        2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
        2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
        2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
        eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
        eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
        eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
        eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
        eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
        eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
        eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
        eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
        eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
        eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
        eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
        eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
        eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
        eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
        eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
        eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
        eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
        eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
        eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
        eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
        ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
        ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
        eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
        eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
        eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
        eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
        eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
        eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
        eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
        ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
        ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
        e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
        e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
        eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
        eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
        ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
        ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
        e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
        e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
        22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
        22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
        222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
        2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
        2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
        222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
        222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
        222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
        22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
        22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
        22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
        2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
        2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
        2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
        ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
        eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
        eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
        2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
        222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
        22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
        222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
        eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
        222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
        222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
        222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
        222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
        222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
        222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
        222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
        222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
        222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
        222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
        222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
        222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
        2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
        2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
        2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
        2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
        2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
        222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
        222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe222e22e222222222
        2222222222e22e22eebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbee22e22e2222222222
        222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbe222e22e222e222222
        222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e222222e222222
        222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe222e2222222e222222
        222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e222222ee222222
        2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe2222e222222e2222222
        22222e2e2222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e2222222e2e22222
        22222e2e2222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e2222222e2e22222
        22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
        22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
        22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
        22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
        22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
        22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
        222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
        222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
        222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
        222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
        222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
        222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
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
let Decision = ""
let Pizza: Sprite = null
let Apple: Sprite = null
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
