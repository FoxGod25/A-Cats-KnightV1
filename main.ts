namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const Lv2Enemy = SpriteKind.create()
    export const Lv2Proj = SpriteKind.create()
    export const P2 = SpriteKind.create()
    export const Darkness = SpriteKind.create()
    export const P2Down = SpriteKind.create()
    export const Lv4Enemy = SpriteKind.create()
    export const Lv3Enemy = SpriteKind.create()
    export const Null_Txt = SpriteKind.create()
}
namespace StatusBarKind {
    export const Lv2EnemyHealth = StatusBarKind.create()
    export const P2Health = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile76`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 8))
    P2Teleport()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile130`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 29))
    Spawning = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile126`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level42`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 1))
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Lv2Enemy)
    Spawning = false
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Action) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ...........f....
            ....44....fe....
            ...e444..eee....
            ...e444ddeee....
            ....44d11dee....
            ....44d11d4e....
            ....4d1111d4....
            ....d1111d44....
            ....6dddd448....
            ...ed688888e....
            ...d1d688882e...
            ..dd1deeed8ee...
            ..dd1d222d11e...
            ...d44ddeedd....
            ....d411d22e....
            ....eddde22e....
            ...beeeeeeeeb...
            ..bce22eeeeccb..
            .bcce22eecccccb.
            ..bbceecccccbb..
            `,img`
            ...........f....
            ....44....fe....
            ...e444..eee....
            ...e444ddeee....
            ....44d11dee....
            ....44d11d4e....
            ....4d1111d4....
            ....d1111d44....
            ....6dddd448....
            ...ed6888888e...
            ..ed1d6888888e..
            .d4d1deee882e1d.
            .d1d1d22228e11d.
            ..dd44ddeeeedd..
            ....d411d22e....
            ....eddde22e....
            ...beeeeeeeeb...
            ..be222ee222eb..
            .bceeeeeeeeeecb.
            ..bbccccccccbb..
            `,img`
            ...........f....
            ....44....fe....
            ...e444..eee....
            ...e444ddeee....
            ....44d11dee....
            ....44d11d4e....
            ....4d1111d4....
            ....d1111d44....
            ....6dddd448....
            ....d6888888....
            ...d1d6888888...
            ...ed1dee8824d..
            ...e11d2282e1d..
            ....ddddeeeed...
            ....d411d22e....
            ....eddde22e....
            ...beeeeeeeeb...
            ..bcceeee22ecb..
            .bcccccee22eccb.
            ..bbccccceecbb..
            `,img`
            ...........f....
            ....44....fe....
            ...e444..eee....
            ...e444ddeee....
            ....44d11dee....
            ....44d11d4e....
            ....4d1111d4....
            ....d1111d44....
            ....6dddd448....
            ...ed6888888e...
            ..ed1d6888888e..
            .d4d1deee882e1d.
            .d1d1d22228e11d.
            ..dd44ddeeeedd..
            ....d411d22e....
            ....eddde22e....
            ...beeeeeeeeb...
            ..be222ee222eb..
            .bceeeeeeeeeecb.
            ..bbccccccccbb..
            `],
        200,
        true
        )
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile28`)) {
        mySprite.sayText("Press Up and A to read!", 500, false)
        if (Column == 11 && Row == 6 || Column == 11 && Row == 7) {
            if (controller.A.isPressed()) {
                game.showLongText("Blacksmith", DialogLayout.Bottom)
            }
        } else if (Column == 31 && Row == 8 || Column == 31 && Row == 9) {
            if (controller.A.isPressed()) {
                game.showLongText("Your House", DialogLayout.Bottom)
            }
        }
    } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile26`)) {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 3))
    } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile25`)) {
        if (Day >= 1) {
            tiles.setCurrentTilemap(tilemap`level3`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 4))
        } else {
            game.showLongText("Its locked...", DialogLayout.Bottom)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 7))
        }
    } else {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile41`)) {
            if (controller.A.isPressed()) {
                game.showLongText("Heya kid. ", DialogLayout.Bottom)
                if (UpgradeSwordto2 == "Lucky's Fang") {
                    game.showLongText("You want me to upgrade your sword with this fang?", DialogLayout.Bottom)
                    game.showLongText("Wow. This here fang's a beauty. Did ya get it from a lover or something?", DialogLayout.Bottom)
                    game.showLongText("Heh. Just kiddin. Ya see, giving someone their fang means that they show great affection for you.", DialogLayout.Bottom)
                    game.showLongText("Anyways, here.", DialogLayout.Bottom)
                    SwordLV = 2
                    UpgradeSwordto2 = ""
                    timer.after(500, function () {
                        animation.runImageAnimation(
                        mySprite,
                        [img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ....6dddd44888..
                            ...e66888888e8..
                            ..e2e668888e2e..
                            .d442eeeeee22ed.
                            .d14e222222e11dd
                            ..ddeeeeeeee11dd
                            ....e222222edd4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ....6dddd44888..
                            .dd.668888888dd.
                            d14ee668888ee11d
                            d4422eeeeee2211d
                            .ddee222222eeddd
                            ....eeeeeeee.d1d
                            ....e222222e.d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ..dd6dddd448dd..
                            .d14d688888d11d.
                            .d44d668888d11d.
                            ..e22eeeeee22e..
                            ...ee222222ee.dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1e4e4.1eee....
                            ...ee3ceee3e....
                            ....4cdcdeee....
                            ....4cdc1f41....
                            ....1dcdcfcc....
                            ...1d11cdcbc8...
                            ..dd6dddcbc11dd.
                            .d14d68cbcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1e4e4.1eee....
                            ...ee3ceee3e....
                            ....4cdcdeee....
                            ....4cdc1f41....
                            ....1dcdcfcc....
                            ...1d11cdcbc8...
                            ..dd6dddcbc11dd.
                            .d14d68cbcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1e4e4.1eee....
                            ...ee3ceee3e....
                            ....4cdcdeee....
                            ....4cdc1f41....
                            ....1dcdcfcc....
                            ...1d11cdcbc8...
                            ..dd6dddcbc11dd.
                            .d14d68cbcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1e4e4.1eee....
                            ...ee3ceee3e....
                            ....4cdcdeee....
                            ....4cdc1f41....
                            ....1dcdcfcc....
                            ...1d11cdcbc8...
                            ..dd6dddcbc11dd.
                            .d14d68cbcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ..dd6dddd4488dd.
                            .d14d6888888d11d
                            .d44d6688888d11d
                            ..e22eeeeeee22e.
                            ...ee2222222eedd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ....6dddd44888..
                            ...e66888888e8..
                            ..e2e668888e2e..
                            .d442eeeeee22ed.
                            .d14e222222e11dd
                            ..ddeeeeeeee11dd
                            ....e222222edd4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `],
                        200,
                        true
                        )
                        controller.moveSprite(mySprite, 0, 0)
                        pause(1600)
                        controller.moveSprite(mySprite, 100, 100)
                        game.showLongText("You got SwordLV2!", DialogLayout.Bottom)
                    })
                } else if (UpgradeSwordTo3 == "Razor Edge") {
                    game.showLongText("Back again?", DialogLayout.Bottom)
                    game.showLongText("These 'ere blade seems super sharp! Only Momo could create a blade like that!", DialogLayout.Bottom)
                    game.showLongText("She was a great apprentice that one.", DialogLayout.Bottom)
                    game.showLongText("Sword's all done. Here.", DialogLayout.Bottom)
                    UpgradeSwordto2 = ""
                    UpgradeSwordTo3 = ""
                    SwordLV = 3
                    timer.after(500, function () {
                        animation.runImageAnimation(
                        mySprite,
                        [img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ....6dddd44888..
                            ...e66888888e8..
                            ..e2e668888e2e..
                            .d442eeeeee22ed.
                            .d14e222222e11dd
                            ..ddeeeeeeee11dd
                            ....e222222edd4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ....6dddd44888..
                            .dd.668888888dd.
                            d14ee668888ee11d
                            d4422eeeeee2211d
                            .ddee222222eeddd
                            ....eeeeeeee.d1d
                            ....e222222e.d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ..dd6dddd4488dd.
                            .d14d6888888d11d
                            .d44d6688888d11d
                            ..e22eeeeeee22e.
                            ...ee2222222eedd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1cce4.1eee....
                            ...c1c41ee3e....
                            ...c1dcddeee....
                            ....c1dc1fc1....
                            ....1c1dcc1c....
                            ...1d1c1dcbc8...
                            ..dd6ddc1bc11dd.
                            .d14d6c1bcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1cce4.1eee....
                            ...c1c41ee3e....
                            ...c1dcddeee....
                            ....c1dc1fc1....
                            ....1c1dcc1c....
                            ...1d1c1dcbc8...
                            ..dd6ddc1bc11dd.
                            .d14d6c1bcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1cce4.1eee....
                            ...c1c41ee3e....
                            ...c1dcddeee....
                            ....c1dc1fc1....
                            ....1c1dcc1c....
                            ...1d1c1dcbc8...
                            ..dd6ddc1bc11dd.
                            .d14d6c1bcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1cce4.1eee....
                            ...c1c41ee3e....
                            ...c1dcddeee....
                            ....c1dc1fc1....
                            ....1c1dcc1c....
                            ...1d1c1dcbc8...
                            ..dd6ddc1bc11dd.
                            .d14d6c1bcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ..dd6dddd4488dd.
                            .d14d6888888d11d
                            .d44d6688888d11d
                            ..e22eeeeeee22e.
                            ...ee2222222eedd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ....6dddd44888..
                            ...e66888888e8..
                            ..e2e668888e2e..
                            .d442eeeeee22ed.
                            .d14e222222e11dd
                            ..ddeeeeeeee11dd
                            ....e222222edd4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `],
                        200,
                        true
                        )
                        controller.moveSprite(mySprite, 0, 0)
                        pause(1600)
                        controller.moveSprite(mySprite, 100, 100)
                        game.showLongText("You got SwordLV3!", DialogLayout.Bottom)
                    })
                } else {
                	
                }
                if (!(Sword)) {
                    game.showLongText("Need ya sword eh? I'm not to argue with that. Here.", DialogLayout.Bottom)
                    Sword = true
                    SwordLV = 1
                    timer.after(500, function () {
                        animation.runImageAnimation(
                        mySprite,
                        [img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ....6dddd44888..
                            ...e66888888e8..
                            ..e2e668888e2e..
                            .d442eeeeee22ed.
                            .d14e222222e11dd
                            ..ddeeeeeeee11dd
                            ....e222222edd4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ....6dddd44888..
                            .dd.668888888dd.
                            d14ee668888ee11d
                            d4422eeeeee2211d
                            .ddee222222eeddd
                            ....eeeeeeee.d1d
                            ....e222222e.d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ..dd6dddd4488dd.
                            .d14d6888888d11d
                            .d44d6688888d11d
                            ..e22eeeeeee22e.
                            ...ee2222222eedd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1e4e4.1eee....
                            ...1cc41ee3e....
                            ....cdcddeee....
                            ....4cdc1f41....
                            ....1dcdcf1c....
                            ...1d11cdcbc8...
                            ..dd6dddcbc11dd.
                            .d14d681bcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1e4e4.1eee....
                            ...1cc41ee3e....
                            ....cdcddeee....
                            ....4cdc1f41....
                            ....1dcdcf1c....
                            ...1d11cdcbc8...
                            ..dd6dddcbc11dd.
                            .d14d681bcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1e4e4.1eee....
                            ...1cc41ee3e....
                            ....cdcddeee....
                            ....4cdc1f41....
                            ....1dcdcf1c....
                            ...1d11cdcbc8...
                            ..dd6dddcbc11dd.
                            .d14d681bcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ..1e4e4.1eee....
                            ...1cc41ee3e....
                            ....cdcddeee....
                            ....4cdc1f41....
                            ....1dcdcf1c....
                            ...1d11cdcbc8...
                            ..dd6dddcbc11dd.
                            .d14d681bcbcd11d
                            .d44d61cc8ccd11d
                            ..e22eeeee1e12e.
                            ...ee2222212e1dd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ..dd6dddd4488dd.
                            .d14d6888888d11d
                            .d44d6688888d11d
                            ..e22eeeeeee22e.
                            ...ee2222222eedd
                            ....eeeeeeee.d1d
                            ....e222222..d4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `,img`
                            ...........f....
                            ....44....fe....
                            ...e4e4..eee....
                            ...ee344ee3e....
                            ....444ddeee....
                            ....44f11f4e....
                            ....4df11f44....
                            ....d1111d448...
                            ....6dddd44888..
                            ...e66888888e8..
                            ..e2e668888e2e..
                            .d442eeeeee22ed.
                            .d14e222222e11dd
                            ..ddeeeeeeee11dd
                            ....e222222edd4d
                            ....e22ee22ed14d
                            ...beeeeeeeebdd.
                            ..be222ee222eb..
                            .bceeeeeeeeeecb.
                            ..bbccccccccbb..
                            `],
                        200,
                        true
                        )
                        controller.moveSprite(mySprite, 0, 0)
                        pause(1600)
                        controller.moveSprite(mySprite, 100, 100)
                        game.showLongText("You got SwordLV1!", DialogLayout.Bottom)
                    })
                } else {
                    game.showLongText("Sorry, kinda busy right now.", DialogLayout.Bottom)
                }
            }
        } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile55`)) {
            if (controller.A.isPressed()) {
                if (Bandanna == 1) {
                    if (FirstTimeReadLuckyQuest == 0) {
                        game.showLongText("Hi " + Rank + "! Did you find my bandanna yet?", DialogLayout.Bottom)
                    }
                    game.showLongText("Thank you so much for finding my bandanna!", DialogLayout.Bottom)
                    if (FirstTimeReadLuckyQuest == 0) {
                        UpgradeSwordto2 = "Lucky's Fang"
                        game.showLongText("Here, as a token of my appreciation, take " + UpgradeSwordto2 + "! Take that to the blacksmith to upgrade your sword!", DialogLayout.Bottom)
                        FirstTimeReadLuckyQuest = 1
                    }
                } else {
                    game.showLongText("Hi " + Rank + "! How are you doing?", DialogLayout.Bottom)
                    game.showLongText("My name's Lucky and I love sports!", DialogLayout.Bottom)
                    game.showLongText("Could you please find my bandanna for me?", DialogLayout.Bottom)
                    game.showLongText("A monster stole it from me.", DialogLayout.Bottom)
                    LuckyQuest = true
                }
            }
        } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile75`)) {
            if (controller.A.isPressed()) {
                game.showLongText("Momo's Shop", DialogLayout.Bottom)
                if (!(MomoSaved)) {
                    game.showLongText("There's a note here. \"Sorry, I'm going out in the wild for a while around the east edge of the forest. Be back soon!\" This note was from two days ago.", DialogLayout.Bottom)
                }
            }
        } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile72`)) {
            if (MomoSaved) {
                tiles.setCurrentTilemap(tilemap`level9`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 5))
            } else if (!(MomoSaved)) {
                game.showLongText("Its locked...", DialogLayout.Bottom)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 9))
            }
        } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile124`)) {
            if (controller.A.isPressed()) {
                game.showLongText("It's a scroll of parchment.", DialogLayout.Bottom)
                game.showLongText("After reading the paper, you learn the power of Furnado!", DialogLayout.Bottom)
                Spell2 = "Furnado"
            }
        } else {
        	
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lv2Enemy, function (sprite, otherSprite) {
    game.showLongText("G.Slime Approaches!", DialogLayout.Bottom)
    EnemyLevel = 2
    CurrentTilemap = tileUtil.currentTilemap()
    PlayerTurn = false
    Spawning = false
    Guard = false
    EnemyImg = otherSprite.image
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        value.follow(mySprite, 0)
    }
    for (let value of sprites.allOfKind(SpriteKind.Lv2Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        value.follow(mySprite, 0)
    }
    Fight = true
    otherSprite.setImage(EnemyImg)
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(3, 2))
    P2Teleport()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(3, 1))
    statusbar2 = statusbars.create(30, 4, StatusBarKind.Lv2EnemyHealth)
    statusbar2.attachToSprite(otherSprite)
    statusbar2.max = 70
    statusbar2.value = statusbar2.max
    statusbar2.setColor(2, 1, 5)
    timer.after(500, function () {
        for (let index = 0; index < 5; index++) {
            pause(750)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 4 . . . . . . . . 
                . . . . . 4 5 5 4 . . . . . . . 
                . . . . . 4 5 5 4 . . . . . . . 
                . . . . . . 4 4 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, otherSprite, randint(-50, 50), 100)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            projectile.setKind(SpriteKind.Lv2Proj)
        }
        timer.after(3750, function () {
            playerTurn()
            shootingSprite = otherSprite
            mySprite4 = sprites.create(img`
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                1 . . . . . . . . . . . . . . 1 
                1 1 . . . . . . . . . . . . 1 1 
                1 1 1 . . . . . . . . . . 1 1 1 
                1 1 1 . . . . . . . . . . 1 1 1 
                1 1 . . . . . . . . . . . . 1 1 
                1 . . . . . . . . . . . . . . 1 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                `, SpriteKind.cursor)
            tiles.placeOnRandomTile(mySprite4, assets.tile`myTile57`)
        })
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile121`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level14`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(16, 10))
    mySprite8 = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................f.........................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Darkness)
    mySprite8.setPosition(mySprite.x, mySprite.y)
    mySprite8.follow(mySprite, 1000)
    P2Teleport()
})
function P2Teleport () {
    if (sprites.allOfKind(SpriteKind.P2).length == 1) {
        if (scene.spriteIsFollowingPath(mySprite6)) {
            scene.followPath(mySprite6, scene.aStar(mySprite6.tilemapLocation(), mySprite6.tilemapLocation()), 500)
        }
        P1OldLocation = mySprite.tilemapLocation()
        tiles.placeOnTile(mySprite6, P1OldLocation)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    if (Sword) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 1))
        P2Teleport()
        Spawning = true
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(24, 13))
        game.showLongText("There are monsters out there. You shouldn't go out there without a weapon.", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile119`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level17`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 6))
    P2Teleport()
})
statusbars.onZero(StatusBarKind.P2Health, function (status) {
    NumberOfPlayers += -1
    while (statusbar4.value == 0) {
        animation.runImageAnimation(
        statusbar4.spriteAttachedTo(),
        [img`
            ...ff......ff...
            ...ff6....6ff...
            ...66ff..ff66...
            ...ffffffffff...
            ....ffffffff....
            ....ffffffff....
            ....ffffffff....
            ....ffffffff4...
            ....5ffffff444..
            .ccf55444444f4c.
            cff6f554444f6ffc
            cff66ffffff66fc6
            .cffcffffffcfcff
            ..cccfffffccccff
            ....cffffcffffff
            ....cffccfcffffc
            ...fcffccffcccc.
            ..fcfffccfffcf..
            .ffccccffccccff.
            ..ffffffffffff..
            `],
        100,
        true
        )
        statusbar4.spriteAttachedTo().setKind(SpriteKind.P2Down)
        if (statusbar4.value >= 1) {
            animation.runImageAnimation(
            statusbar4.spriteAttachedTo(),
            [img`
                ...ff......ff...
                ...ff6....6ff...
                ...66ff..ff66...
                ...ffff66ffff...
                ....fff66fff....
                ....f2ffff2f....
                ....ff2ff2ff....
                ....ffffffff4...
                ....5ffffff444..
                ...f55444444f4..
                ..c6f554444f6c.c
                .cf66ffffff66fc6
                .cffcffffffcffcf
                ..cccffffffcccff
                ....cffffffcffff
                ....cffccffccffc
                ...fcffccffcfcc.
                ..fcfffccfffcf..
                .ffccccffccccff.
                ..ffffffffffff..
                `],
            100,
            true
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.cursor, assets.tile`myTile57`, function (sprite, location) {
    if (PlayerTurn) {
        if (controller.A.isPressed()) {
            if (mySprite6) {
                if (ShadeEquip == "BaseballBat") {
                    statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                    statusbar2.value += randint(-6, -11) * SwordLV + randint(-6, -9) * 2
                    PlayerTurn = false
                } else {
                    statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                    statusbar2.value += randint(-5, -7) * SwordLV + randint(-5, -7)
                    PlayerTurn = false
                }
            } else {
                statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                statusbar2.value += randint(-5, -7) * SwordLV
                PlayerTurn = false
            }
            enTurn()
        }
        if (controller.right.isPressed()) {
            tiles.placeOnTile(sprite, location.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right))
            pause(1)
        } else {
        	
        }
    }
})
sprites.onOverlap(SpriteKind.P2, SpriteKind.Lv2Proj, function (sprite, otherSprite) {
    if (Guard) {
        statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar3.value += randint(-5, -10) + 2
        pause(1000)
    } else {
        statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar3.value += randint(-5, -10)
        pause(1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile108`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (mySprite6) {
            game.showLongText("*Gasp* Why are you with the manifestation of chaos and despair?", DialogLayout.Bottom)
            game.showLongText("I didn't expect the hero of legend to be accompanied by such a malevolent force.", DialogLayout.Bottom)
            game.showLongText("I am the only resident of this crumbling ruin. I can't leave because of the corruption. Only the hero, you, and any manifestation of chaos can traverse that area.", DialogLayout.Bottom)
            game.showLongText("Shade: Really, I'm not evil! I'm just weird is all! Trust me.", DialogLayout.Bottom)
            game.showLongText("Shade: I don't even have any reason to live honestly if all get is this reaction to me! I'm glad though that you didn't fight me.", DialogLayout.Bottom)
        } else {
            game.showLongText("Hello.", DialogLayout.Bottom)
        }
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite6) {
        scene.followPath(mySprite6, scene.aStar(mySprite6.tilemapLocation(), P1OldLocation), 100)
    }
    if (mySprite7) {
        scene.followPath(mySprite7, scene.aStar(mySprite7.tilemapLocation(), P1OldLocation), 100)
    }
})
scene.onOverlapTile(SpriteKind.cursor, assets.tile`myTile62`, function (sprite, location) {
    if (PlayerTurn) {
        if (controller.A.isPressed()) {
            tiles.placeOnRandomTile(sprite, assets.tile`myTile57`)
            PlayerTurn = false
            if (SpellsLearnt >= 1) {
                timer.after(50, function () {
                    story.showPlayerChoices(Spell1, Spell2, "", "Exit")
                    if (story.checkLastAnswer("FurBall")) {
                        if (statusbar4.value >= 3) {
                            statusbar4.value += -3
                            statusbar2.value += randint(-13, -19)
                            scene.cameraShake(4, 500)
                            enTurn()
                        } else {
                            mySprite.sayText("Not enough FP!", 500, false)
                            enTurn()
                        }
                    } else if (story.checkLastAnswer("Furnado")) {
                        if (statusbar4.value >= 5) {
                            statusbar4.value += -5
                            statusbar2.value += randint(-22, -29)
                            scene.cameraShake(5, 750)
                            enTurn()
                        } else {
                            mySprite.sayText("Not enough FP!", 500, false)
                            enTurn()
                        }
                    } else if (story.checkLastAnswer("FurStrm")) {
                        if (statusbar4.value >= 7) {
                            statusbar4.value += -7
                            statusbar2.value += randint(-53, -67)
                            scene.cameraShake(7, 1000)
                            enTurn()
                        } else {
                            mySprite.sayText("Not enough FP!", 500, false)
                            enTurn()
                        }
                    }
                })
            } else {
                mySprite.sayText("No Magic!", 500, false)
                enTurn()
            }
        }
        if (controller.left.isPressed()) {
            tiles.placeOnTile(sprite, location.getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Left))
            pause(1)
        } else {
        	
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lv2Proj, function (sprite, otherSprite) {
    if (Guard) {
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.value += randint(-5, -10) + 2
        pause(1000)
    } else {
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.value += randint(-5, -10)
        pause(1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 6))
    P2Teleport()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(24, 13))
    Spawning = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Lv2Enemy)
    P2Teleport()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (mySprite6) {
        scene.followPath(mySprite6, scene.aStar(mySprite6.tilemapLocation(), P1OldLocation), 200)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    animation.runImageAnimation(
    mySprite,
    [img`
        ...........f....
        ....44....fe....
        ...e4e4..eee....
        ...ee344ee3e....
        ....444ddeee....
        ....44f11f4e....
        ....4df11f44....
        ....d1111d448...
        ....6dddd44888..
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        `,img`
        ...........f....
        ....44....fe....
        ...e4e4..eee....
        ...ee344ee3e....
        ....444ddeee....
        ....4ff11ffe....
        ....4d111d44....
        ....d1111d448...
        ....6dddd44888..
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        `,img`
        ................
        ...........f....
        ....44....fe....
        ...e4e4..eee....
        ...ee344ee3e....
        ....444ddeee....
        ....4ff11ffe....
        ....4d111d44....
        ....d1111d4488..
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        `,img`
        ...........f....
        ....44....fe....
        ...e4e4..eee....
        ...ee344ee3e....
        ....444ddeee....
        ....4ff11ffe....
        ....4d111d44....
        ....d1111d448...
        ....6dddd44888..
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        `,img`
        ...........f....
        ....44....fe....
        ...e4e4..eee....
        ...ee344ee3e....
        ....444ddeee....
        ....44f11f4e....
        ....4df11f44....
        ....d1111d448...
        ....6dddd44888..
        ...e66888888e8..
        ..e2e668888e2e..
        ..d12eeeeeee2ed.
        ...de22222d11d1d
        ....eeeeeed11d1d
        ....e222222ddd4d
        ....eeeee22ed14d
        ...be22eeeeebdd.
        ..bce22ee222eb..
        .bcceeeeeeeeecb.
        ..bbccccccccbb..
        `],
    200,
    false
    )
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
    pause(800)
    Day += 1
    game.showLongText("Day " + Day, DialogLayout.Bottom)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 2))
    statusbar.value = statusbar.max
    statusbar4.value = statusbar4.max
    P2Teleport()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    sprites.destroy(mySprite2)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(24, 6))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Action) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ...........f....
            ....44....fe....
            ...e4e4..eee....
            ...ee344ee3e....
            ....444ddeee....
            ....4f11fd4e....
            ....4f11fd44....
            ....d1111d448...
            ....6dddd44888..
            ...e66888888e8..
            ..e2e668888e2ed.
            .d1d2eeeeeee22ed
            ..d.e22222ed11dd
            ....eeeeeeed11dd
            ....e222222edd4d
            ...e222eee22e14d
            ...eeeeeceeeedd.
            ..e222ece222eb..
            .beeeeeceeeeecb.
            ..bbccccccccbb..
            `,img`
            ...........f....
            ....44....fe....
            ...e4e4..eee....
            ...ee344ee3e....
            ....444ddeee....
            ....4f11fd4e....
            ....4f11fd44....
            ....d1111d448...
            ....6dddd44888..
            ...e66888888e8..
            ..e2e668888e2e..
            ..d12eeeeeee2ed.
            ...de22222d11dd.
            ....eeeeeed11dd.
            ....e222222dd4d.
            ....e22ee22e14d.
            ...beeeeeeeedd..
            ..be222e222ecb..
            .bceeeeeeeeeccb.
            ..bbccccccccbb..
            `,img`
            ...........f....
            ....44....fe....
            ...e4e4..eee....
            ...ee344ee3e....
            ....444ddeee....
            ....4f11fd4e....
            ....4f11fd44....
            ....d1111d448...
            ....6dddd44888..
            ...e66888888e8..
            ...ee668888e2e..
            ...d2eeeeeee2ed.
            ....e2222d11de1d
            ....eeeeed11dd1d
            ....e22222dddd1d
            ...e222eee22e14d
            ...eeeeeceeeedd.
            ..e222ece222eb..
            .beeeeeceeeeecb.
            ..bbccccccccbb..
            `,img`
            ...........f....
            ....44....fe....
            ...e4e4..eee....
            ...ee344ee3e....
            ....444ddeee....
            ....4f11fd4e....
            ....4f11fd44....
            ....d1111d448...
            ....6dddd44888..
            ...e66888888e8..
            ..e2e668888e2e..
            ..d12eeeeeee2ed.
            ...de22222d11dd.
            ....eeeeeed11dd.
            ....e222222dd4d.
            ....e22ee22e14d.
            ...beeeeeeeedd..
            ..be222e222ecb..
            .bceeeeeeeeeccb.
            ..bbccccccccbb..
            `],
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.cursor, assets.tile`myTile59`, function (sprite, location) {
    if (PlayerTurn) {
        if (controller.A.isPressed()) {
            Guard = true
            PlayerTurn = false
            enTurn()
        }
        if (controller.right.isPressed()) {
            tiles.placeOnTile(sprite, location.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right))
            pause(1)
        } else if (controller.left.isPressed()) {
            tiles.placeOnTile(sprite, location.getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Left))
            pause(1)
        } else {
        	
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (mySprite6) {
        scene.followPath(mySprite6, scene.aStar(mySprite6.tilemapLocation(), P1OldLocation), 200)
    }
})
function playerTurn () {
    PlayerTurn = true
}
sprites.onOverlap(SpriteKind.P2, SpriteKind.Null_Txt, function (sprite, otherSprite) {
    if (Guard) {
        statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar3.value += randint(-10, -12) + 2
        pause(1000)
    } else {
        statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar3.value += randint(-12, -14) + 2
        pause(1000)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (mySprite6) {
        scene.followPath(mySprite6, scene.aStar(mySprite6.tilemapLocation(), P1OldLocation), 200)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile117`, function (sprite, location) {
    Spawning = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level13`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 4))
    sprites.destroy(mySprite8)
    P2Teleport()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile74`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 12))
    Spawning = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Lv2Enemy, effects.spray, 500)
    P2Teleport()
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    MoneyChanged = randint(3, 5)
    Money += MoneyChanged
    EnemyLevel = 0
    sprites.destroy(statusbar2.spriteAttachedTo())
    sprites.destroy(statusbar2)
    sprites.destroy(mySprite4)
    Spawning = true
    Fight = false
    tiles.setCurrentTilemap(CurrentTilemap)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(Column, Row))
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . 6 6 9 9 9 9 6 6 . . . . 
            . . 6 6 1 9 9 9 9 9 9 9 6 6 . . 
            . 6 9 1 9 9 9 9 9 9 9 9 9 9 6 . 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 6 9 9 9 9 9 9 9 9 9 9 9 9 6 6 
            6 6 6 9 9 9 9 9 9 9 9 9 9 6 6 6 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            `)
        value.follow(mySprite, 70)
    }
    for (let value of sprites.allOfKind(SpriteKind.Lv2Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 5 5 5 5 4 4 . . . . 
            . . 4 4 1 5 5 5 5 5 5 5 4 4 . . 
            . 4 5 1 5 5 5 5 5 5 5 5 5 5 4 . 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 
            4 4 4 5 5 5 5 5 5 5 5 5 5 4 4 4 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            `)
        value.follow(mySprite, 70)
    }
    timer.after(50, function () {
        if (LuckyQuest) {
            if (Bandanna < 1) {
                Bandanna = 1
                game.showLongText("You found Lucky's Bandanna!", DialogLayout.Bottom)
            }
        }
    })
    timer.after(5, function () {
        P2Teleport()
        game.showLongText("You won and earned " + MoneyChanged + " Cat Coin!", DialogLayout.Bottom)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.P2Down, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.P2Health, otherSprite).value += 5
        otherSprite.setKind(SpriteKind.P2)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile90`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 9))
    P2Teleport()
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 2))
    statusbar.value = 1
    Spawning = false
    sprites.destroy(statusbar2.spriteAttachedTo())
    sprites.destroy(statusbar2)
    sprites.destroy(mySprite4)
    NumberOfPlayers = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    if (!(MomoSaved)) {
        MomoSavingQuest = true
        tiles.setCurrentTilemap(tilemap`level7`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 8))
        P2Teleport()
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        mySprite5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 5 5 5 5 4 4 . . . . 
            . . 4 4 1 5 5 5 5 5 5 5 4 4 . . 
            . 4 5 1 5 5 5 5 5 5 5 5 5 5 4 . 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 
            4 4 4 5 5 5 5 5 5 5 5 5 5 4 4 4 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            `, SpriteKind.Lv2Enemy)
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(8, 8))
        tiles.setTileAt(tiles.getTileLocation(8, 8), assets.tile`myTile20`)
        timer.after(500, function () {
            game.showLongText("Help!!! A Gold Slime is attacking me!!!", DialogLayout.Bottom)
            Spawning = false
        })
    } else {
        tiles.setCurrentTilemap(tilemap`level10`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 8))
        P2Teleport()
        Spawning = true
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Action) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ....f...........
            ....ef....44....
            ....eee..4e4e...
            ....e3ee443ee...
            ....eeedd444....
            ....e4df11f4....
            ....44df11f4....
            ...844d1111d....
            ..88844dddd6....
            ..8e88888866e...
            .de2e888866e2e..
            de22eeeeeee2d1d.
            dd11de22222e.d..
            dd11deeeeeee....
            d4dde222222e....
            d41e22eee222e...
            .ddeeeeceeeee...
            ..be222ece222e..
            .bceeeeeceeeeeb.
            ..bbccccccccbb..
            `,img`
            ....f...........
            ....ef....44....
            ....eee..4e4e...
            ....e3ee443ee...
            ....eeedd444....
            ....e4df11f4....
            ....44df11f4....
            ...844d1111d....
            ..88844dddd6....
            ..8e88888866e...
            ..e2e888866e2e..
            .de2eeeeeee21d..
            .dd11d22222ed...
            .dd11deeeeee....
            .d4dd222222e....
            .d41e22ee22e....
            ..ddeeeeeeeeb...
            ..bce222e222eb..
            .bcceeeeeeeeecb.
            ..bbccccccccbb..
            `,img`
            ....f...........
            ....ef....44....
            ....eee..4e4e...
            ....e3ee443ee...
            ....eeedd444....
            ....e4df11f4....
            ....44df11f4....
            ...844d1111d....
            ..88844dddd6....
            ..8e88888866e...
            ..e2e888866ee...
            .de2eeeeeee2d...
            d1ed11d2222e....
            d1dd11deeeee....
            d1dddd22222e....
            d41e22eee222e...
            .ddeeeeceeeee...
            ..be222ece222e..
            .bceeeeeceeeeeb.
            ..bbccccccccbb..
            `,img`
            ....f...........
            ....ef....44....
            ....eee..4e4e...
            ....e3ee443ee...
            ....eeedd444....
            ....e4df11f4....
            ....44df11f4....
            ...844d1111d....
            ..88844dddd6....
            ..8e88888866e...
            ..e2e888866e2e..
            .de2eeeeeee21d..
            .dd11d22222ed...
            .dd11deeeeee....
            .d4dd222222e....
            .d41e22ee22e....
            ..ddeeeeeeeeb...
            ..bce222e222eb..
            .bcceeeeeeeeecb.
            ..bbccccccccbb..
            `],
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (Guard) {
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.value += randint(-3, -5) + 2
        pause(1000)
    } else {
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.value += randint(-1, -3)
        pause(1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile158`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level15`)
        game.showLongText("Hello! Who are you?", DialogLayout.Bottom)
        game.showLongText("What? You're saying I look like that guy over there? Never seen him!", DialogLayout.Bottom)
        game.showLongText("Ya' know what? I feel like joining you guys. I have the feeling that we're going to go on a great adventure!", DialogLayout.Bottom)
        game.showLongText("My name? Call me Bright.", DialogLayout.Bottom)
        game.showLongText("Bright joins you.", DialogLayout.Bottom)
        mySprite7 = sprites.create(img`
            ..cc......cc....
            ..cfc....cfc....
            ..cf69..96fc....
            ..c69999996c....
            ...99999999.....
            ...99199199.....
            ...99299299.....
            ...111ff1112....
            ...4111111222...
            .114422222222..1
            .199442222991.1d
            1c1911991191c1dd
            1cc19111191cc11d
            .111911119111991
            ...1999999199991
            ...199119911991.
            ..d19911991d....
            .d1999119991d...
            dd1111dd1111dd..
            .dddddddddddd...
            ...dddddddd.....
            `, SpriteKind.P2)
        P2Teleport()
        statusbar3 = statusbars.create(10, 2, StatusBarKind.P2Health)
        statusbar3.max = 45
        statusbar3.setColor(6, 2, 9)
        statusbar3.value = 45
        statusbar3.attachToSprite(mySprite7)
        mySprite7.z = mySprite.z - 1
        NumberOfPlayers = 3
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(23, 13))
    Spawning = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Lv2Enemy)
    P2Teleport()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile133`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("Shade:\"Hey look, a baseball bat! I could use this!\"", DialogLayout.Bottom)
        game.showLongText("Shade equipped the baseball bat.", DialogLayout.Bottom)
        ShadeEquip = "BaseballBat"
        tiles.setTileAt(location, assets.tile`myTile20`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile100`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level11`)
        game.showLongText("Hey... I've been exploring this world a bit, but I'm worried my blue markings will scare the villagers. Could you please help me by being a kind of ambassador for me?... Great! The village is to the east of here.", DialogLayout.Bottom)
        game.showLongText("Also, I'll try and help out in battle. I'll probably be useless though.", DialogLayout.Bottom)
        game.showLongText("To make up for my uselessness, I'll teach you a spell to use in battle.", DialogLayout.Bottom)
        game.showLongText("You learned FurBall!", DialogLayout.Bottom)
        Spell1 = "FurBall"
        SpellsLearnt += 1
        mySprite6 = sprites.create(img`
            ..ff......ff....
            ..ff6....6ff....
            ..66ff..ff66....
            ..ffff66ffff....
            ...fff66fff.....
            ...ff1ff1ff.....
            ...ff5ff5ff.....
            ...ffffffff4....
            ...5ffffff444...
            ..f55444444f4..c
            .c6f554444f6c.cc
            cf66ffffff66fc6c
            cffcffffffcffcfc
            .cccffffffcccffc
            ...cffffffcffffc
            ...cffccffccffc.
            ..fcffccffcfcc..
            .fcfffccfffcf...
            ffccccffccccff..
            .ffffffffffff...
            ..ffffffffff....
            `, SpriteKind.P2)
        P2Teleport()
        statusbar3 = statusbars.create(10, 2, StatusBarKind.P2Health)
        statusbar3.max = 40
        statusbar3.setColor(6, 2, 9)
        statusbar3.value = 40
        statusbar3.attachToSprite(mySprite6)
        mySprite6.z = mySprite.z - 1
        NumberOfPlayers = 2
        game.showLongText("Shade joins you.", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile111`, function (sprite, location) {
    if (mySprite6) {
        Spawning = false
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        game.showLongText("It's too dark to even consider going there an option.", DialogLayout.Bottom)
        game.showLongText("Shade: Don't worry, I've got this. I can make a small amount of light to guide our way.", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level14`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(16, 29))
        mySprite8 = sprites.create(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................f.........................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `, SpriteKind.Darkness)
        mySprite8.setPosition(mySprite.x, mySprite.y)
        mySprite8.follow(mySprite, 1000)
        P2Teleport()
    } else {
        game.showLongText("It's too dark to even consider going there an option.", DialogLayout.Bottom)
        game.showLongText("Maybe something in the southern maze can help.", DialogLayout.Bottom)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 1))
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (mySprite6) {
        scene.followPath(mySprite6, scene.aStar(mySprite6.tilemapLocation(), P1OldLocation), 200)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    if (Sword) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 1))
        Spawning = true
        P2Teleport()
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(23, 13))
        game.showLongText("There are monsters out there. You shouldn't go out there without a weapon.", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.P2, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (Guard) {
        statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar3.value += randint(-3, -5) + 2
        pause(1000)
    } else {
        statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar3.value += randint(-3, -5) + 2
        pause(1000)
    }
})
statusbars.onZero(StatusBarKind.Lv2EnemyHealth, function (status) {
    MoneyChanged = randint(7, 10)
    Money += MoneyChanged
    EnemyLevel = 0
    sprites.destroy(statusbar2.spriteAttachedTo())
    sprites.destroy(statusbar2)
    sprites.destroy(mySprite4)
    Spawning = true
    Fight = false
    tiles.setCurrentTilemap(CurrentTilemap)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(Column, Row))
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . 6 6 9 9 9 9 6 6 . . . . 
            . . 6 6 1 9 9 9 9 9 9 9 6 6 . . 
            . 6 9 1 9 9 9 9 9 9 9 9 9 9 6 . 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 6 9 9 9 9 9 9 9 9 9 9 9 9 6 6 
            6 6 6 9 9 9 9 9 9 9 9 9 9 6 6 6 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            `)
        value.follow(mySprite, 70)
    }
    for (let value of sprites.allOfKind(SpriteKind.Lv2Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 5 5 5 5 4 4 . . . . 
            . . 4 4 1 5 5 5 5 5 5 5 4 4 . . 
            . 4 5 1 5 5 5 5 5 5 5 5 5 5 4 . 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 
            4 4 4 5 5 5 5 5 5 5 5 5 5 4 4 4 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            `)
        value.follow(mySprite, 70)
    }
    timer.after(50, function () {
        if (MomoSavingQuest) {
            game.showLongText("You saved me. Thank you!", DialogLayout.Bottom)
            game.showLongText("I own the store in town, so be sure to stop by!", DialogLayout.Bottom)
            tiles.setTileAt(tiles.getTileLocation(7, 8), assets.tile`myTile20`)
            tiles.setWallAt(tiles.getTileLocation(7, 8), false)
            MomoSaved = true
            tiles.setWallAt(tiles.getTileLocation(15, 8), false)
            tiles.setWallAt(tiles.getTileLocation(14, 9), false)
            tiles.setWallAt(tiles.getTileLocation(14, 10), false)
            tiles.setWallAt(tiles.getTileLocation(15, 11), false)
        }
        timer.after(5, function () {
            P2Teleport()
            game.showLongText("You won and earned " + MoneyChanged + " Cat Coin!", DialogLayout.Bottom)
        })
    })
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Action) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ...........f....
            ....44....fe....
            ...e4e4..eee....
            ...ee344ee3e....
            ....444ddeee....
            ....44f11f4e....
            ....4df11f44....
            ....d1111d448...
            ....6dddd44888..
            ...e66888888e8..
            ..e2e668888e2e..
            ..d12eeeeeee2ed.
            ...de22222d11d1d
            ....eeeeeed11d1d
            ....e222222ddd4d
            ....eeeee22ed14d
            ...be22eeeeebdd.
            ..bce22ee222eb..
            .bcceeeeeeeeecb.
            ..bbccccccccbb..
            `,img`
            ...........f....
            ....44....fe....
            ...e4e4..eee....
            ...ee344ee3e....
            ....444ddeee....
            ....44f11f4e....
            ....4df11f44....
            ....d1111d448...
            ....6dddd44888..
            ...e66888888e8..
            ..e2e668888e2e..
            .d442eeeeee22ed.
            .d14e222222e11dd
            ..ddeeeeeeee11dd
            ....e222222edd4d
            ....e22ee22ed14d
            ...beeeeeeeebdd.
            ..be222ee222eb..
            .bceeeeeeeeeecb.
            ..bbccccccccbb..
            `,img`
            ...........f....
            ....44....fe....
            ...e4e4..eee....
            ...ee344ee3e....
            ....444ddeee....
            ....44f11f4e....
            ....4df11f44....
            ....d1111d448...
            ....6dddd44888..
            ...e66888888e8..
            ..e2e668888e2e..
            ..e2eeeeeee21dd.
            ..d44d22222edd1d
            ..d14deeeeee.d1d
            ...dd222222edd4d
            ....e22eeeee144d
            ...beeeee22eddd.
            ..be222ee22ecb..
            .bceeeeeeeeeccb.
            ..bbccccccccbb..
            `,img`
            ...........f....
            ....44....fe....
            ...e4e4..eee....
            ...ee344ee3e....
            ....444ddeee....
            ....44f11f4e....
            ....4df11f44....
            ....d1111d448...
            ....6dddd44888..
            ...e66888888e8..
            ..e2e668888e2e..
            .d442eeeeee22ed.
            .d14e222222e11dd
            ..ddeeeeeeee11dd
            ....e222222edd4d
            ....e22ee22ed14d
            ...beeeeeeeebdd.
            ..be222ee222eb..
            .bceeeeeeeeeecb.
            ..bbccccccccbb..
            `],
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile148`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level46`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile125`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (Wood) {
            game.showLongText("You have the wood? Great! I've just lit the fire at the top. Good luck!", DialogLayout.Bottom)
            scene.cameraShake(10, 1000)
            timer.after(1000, function () {
                tiles.setCurrentTilemap(tilemap`level41`)
                Spawning = true
            })
        } else {
            game.showLongText("Hello. This is the gateway between worlds.", DialogLayout.Bottom)
            game.showLongText("To use it, light a fire at the top of the tower. There is a lumberjack in the south-west of here.", DialogLayout.Bottom)
            WoodFetchQuest = true
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile122`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level13`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 2))
    P2Teleport()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Null_Txt, function (sprite, otherSprite) {
    if (Guard) {
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.value += randint(-10, -12) + 2
        pause(1000)
    } else {
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.value += randint(-10, -12)
        pause(1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile105`, function (sprite, location) {
    Spawning = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    if (mySprite6) {
        tiles.setCurrentTilemap(tilemap`level11`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 7))
        P2Teleport()
    } else {
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 7))
        P2Teleport()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lv3Enemy, function (sprite, otherSprite) {
    game.showLongText("F1R3B@11 Approaches!", DialogLayout.Bottom)
    otherSprite.follow(sprite, 0)
    EnemyLevel = 3
    CurrentTilemap = tileUtil.currentTilemap()
    PlayerTurn = false
    Spawning = false
    Guard = false
    EnemyImg = otherSprite.image
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        value.follow(mySprite, 0)
    }
    for (let value of sprites.allOfKind(SpriteKind.Lv2Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        value.follow(mySprite, 0)
    }
    Fight = true
    otherSprite.setImage(EnemyImg)
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(3, 2))
    P2Teleport()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(3, 1))
    statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar2.attachToSprite(otherSprite)
    statusbar2.max = 120
    statusbar2.value = statusbar2.max
    statusbar2.setColor(10, 15, 6)
    timer.after(500, function () {
        for (let index = 0; index < 5; index++) {
            pause(750)
            projectile = sprites.createProjectileFromSprite(img`
                a a a a a a a a f f f f f f f f 
                a a a a a a a a f f f f f f f f 
                a a a a a a a a f f f f f f f f 
                a a a a a a a a f f f f f f f f 
                a a a a a a a a f f f f f f f f 
                a a a a a a a a f f f f f f f f 
                a a a a a a a a f f f f f f f f 
                a a a a a a a a f f f f f f f f 
                f f f f f f f f a a a a a a a a 
                f f f f f f f f a a a a a a a a 
                f f f f f f f f a a a a a a a a 
                f f f f f f f f a a a a a a a a 
                f f f f f f f f a a a a a a a a 
                f f f f f f f f a a a a a a a a 
                f f f f f f f f a a a a a a a a 
                f f f f f f f f a a a a a a a a 
                `, otherSprite, randint(-50, 50), 100)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            projectile.setKind(SpriteKind.Null_Txt)
        }
        timer.after(3750, function () {
            playerTurn()
            shootingSprite = otherSprite
            mySprite4 = sprites.create(img`
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                1 . . . . . . . . . . . . . . 1 
                1 1 . . . . . . . . . . . . 1 1 
                1 1 1 . . . . . . . . . . 1 1 1 
                1 1 1 . . . . . . . . . . 1 1 1 
                1 1 . . . . . . . . . . . . 1 1 
                1 . . . . . . . . . . . . . . 1 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                `, SpriteKind.cursor)
            tiles.placeOnRandomTile(mySprite4, assets.tile`myTile57`)
        })
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile103`, function (sprite, location) {
    Spawning = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level12`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 8))
    P2Teleport()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lv4Enemy, function (sprite, otherSprite) {
    game.showLongText("ShadowOfDarkness Approaches!", DialogLayout.Bottom)
    otherSprite.follow(sprite, 0)
    EnemyLevel = 4
    CurrentTilemap = tileUtil.currentTilemap()
    PlayerTurn = false
    Spawning = false
    Guard = false
    EnemyImg = otherSprite.image
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        value.follow(mySprite, 0)
    }
    for (let value of sprites.allOfKind(SpriteKind.Lv2Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        value.follow(mySprite, 0)
    }
    Fight = true
    otherSprite.setImage(EnemyImg)
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(3, 2))
    P2Teleport()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(3, 1))
    otherSprite.y += -4
    statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar2.attachToSprite(otherSprite)
    statusbar2.max = 170
    statusbar2.value = statusbar2.max
    statusbar2.setColor(6, 2, 9)
    timer.after(500, function () {
        for (let index = 0; index < 5; index++) {
            pause(750)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . e 2 2 e . . . . . . 
                . . . . . e 2 2 2 2 e . . . . . 
                . . . . e 2 2 2 2 2 2 e . . . . 
                . . . . e 2 2 2 2 2 2 e . . . . 
                . . . . . e 2 2 2 2 e . . . . . 
                . . . . . . e 2 2 e . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, otherSprite, randint(-50, 50), 100)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            projectile.setKind(SpriteKind.Null_Txt)
        }
        timer.after(3750, function () {
            playerTurn()
            shootingSprite = otherSprite
            mySprite4 = sprites.create(img`
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                1 . . . . . . . . . . . . . . 1 
                1 1 . . . . . . . . . . . . 1 1 
                1 1 1 . . . . . . . . . . 1 1 1 
                1 1 1 . . . . . . . . . . 1 1 1 
                1 1 . . . . . . . . . . . . 1 1 
                1 . . . . . . . . . . . . . . 1 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                `, SpriteKind.cursor)
            tiles.placeOnRandomTile(mySprite4, assets.tile`myTile57`)
        })
    })
})
scene.onPathCompletion(SpriteKind.P2, function (sprite, location) {
    scene.followPath(sprite, scene.aStar(sprite.tilemapLocation(), P1OldLocation), 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    sprites.destroy(mySprite2)
    tiles.setCurrentTilemap(tilemap`level8`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(23, 6))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    sprites.destroy(mySprite2)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 8))
    P2Teleport()
})
function enTurn () {
    if (EnemyLevel == 1) {
        timer.after(500, function () {
            for (let index = 0; index < 5; index++) {
                pause(750)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 6 6 . . . . . . . . 
                    . . . . . 6 9 9 6 . . . . . . . 
                    . . . . . 6 9 9 6 . . . . . . . 
                    . . . . . . 6 6 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, shootingSprite, randint(-50, 50), 100)
                projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            }
            timer.after(3750, function () {
                playerTurn()
            })
        })
    } else if (EnemyLevel == 2) {
        timer.after(500, function () {
            for (let index = 0; index < 10; index++) {
                pause(750)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 . . . . . . . . 
                    . . . . . 4 5 5 4 . . . . . . . 
                    . . . . . 4 5 5 4 . . . . . . . 
                    . . . . . . 4 4 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, shootingSprite, randint(-75, 75), 100)
                projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
                projectile.setKind(SpriteKind.Lv2Proj)
            }
            timer.after(3750, function () {
                playerTurn()
            })
        })
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile118`, function (sprite, location) {
    Spawning = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    if (mySprite6) {
        tiles.setCurrentTilemap(tilemap`level11`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 1))
        P2Teleport()
    } else {
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 1))
        P2Teleport()
    }
})
scene.onOverlapTile(SpriteKind.cursor, assets.tile`myTile61`, function (sprite, location) {
    if (PlayerTurn) {
        if (controller.A.isPressed()) {
            if (Salmon >= 1) {
                statusbar.value += 15
                story.printCharacterText("You ate the Salmon. You recovered 15 Hp!")
                PlayerTurn = false
                enTurn()
            }
        }
        if (controller.right.isPressed()) {
            tiles.placeOnTile(sprite, location.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right))
            pause(1)
        } else if (controller.left.isPressed()) {
            tiles.placeOnTile(sprite, location.getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Left))
            pause(1)
        } else {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile131`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (WoodFetchQuest) {
            WoodFetchQuest = false
            if (game.ask("\"Are you enjoying this game?\"")) {
                game.showLongText("\"Good. Anyways, you need wood right? Here.\"", DialogLayout.Bottom)
                Wood = true
            } else {
                game.showLongText("\"That's a bummer. Here, take this wood.\"", DialogLayout.Bottom)
                Wood = true
                if (controller.B.isPressed()) {
                    game.showLongText("\"I don't want to code an inventory, so you'll have to handle my sub-standard programming.(PS:Impact is taking up 2 GB's on my laptop while coding. HELP!)\"", DialogLayout.Bottom)
                }
            }
        } else {
            if (Math.percentChance(33)) {
                game.showLongText("\"Did you know that I'm partially related to Shade in this universe?", DialogLayout.Bottom)
                game.showLongText(" Yeah, I'm part whatever Shade is, and part fox.\"", DialogLayout.Bottom)
            } else if (Math.percentChance(33)) {
                game.showLongText("\"I genuinely experienced burnout while coding this game.", DialogLayout.Bottom)
                game.showLongText(" Don't overwork yourself while coding.\"", DialogLayout.Bottom)
            } else if (Math.percentChance(34)) {
                game.showLongText("\"I am No. 25 and the creator of this game at the same time.\"", DialogLayout.Bottom)
                game.showLongText(" Don't play No. 25, unless you want to experience my horrible coding of the past.", DialogLayout.Bottom)
            } else {
            	
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile88`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Lv2Enemy)
    tiles.setCurrentTilemap(tilemap`level8`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 7))
    P2Teleport()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.showLongText("Slime Approaches!", DialogLayout.Bottom)
    EnemyLevel = 1
    CurrentTilemap = tileUtil.currentTilemap()
    PlayerTurn = false
    Spawning = false
    Guard = false
    EnemyImg = otherSprite.image
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        value.follow(mySprite, 0)
    }
    for (let value of sprites.allOfKind(SpriteKind.Lv2Enemy)) {
        value.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        value.follow(mySprite, 0)
    }
    Fight = true
    otherSprite.setImage(EnemyImg)
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(3, 2))
    P2Teleport()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(3, 1))
    statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar2.attachToSprite(otherSprite)
    statusbar2.max = 30
    statusbar2.value = statusbar2.max
    statusbar2.setColor(2, 1, 5)
    timer.after(500, function () {
        for (let index = 0; index < 5; index++) {
            pause(750)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 . . . . . . . . 
                . . . . . 6 9 9 6 . . . . . . . 
                . . . . . 6 9 9 6 . . . . . . . 
                . . . . . . 6 6 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, otherSprite, randint(-50, 50), 100)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
        timer.after(3750, function () {
            playerTurn()
            shootingSprite = otherSprite
            mySprite4 = sprites.create(img`
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                1 . . . . . . . . . . . . . . 1 
                1 1 . . . . . . . . . . . . 1 1 
                1 1 1 . . . . . . . . . . 1 1 1 
                1 1 1 . . . . . . . . . . 1 1 1 
                1 1 . . . . . . . . . . . . 1 1 
                1 . . . . . . . . . . . . . . 1 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                `, SpriteKind.cursor)
            tiles.placeOnRandomTile(mySprite4, assets.tile`myTile57`)
        })
    })
})
let mySprite3: Sprite = null
let Enemies = 0
let WoodFetchQuest = false
let Wood = false
let mySprite5: Sprite = null
let MomoSavingQuest = false
let Money = 0
let MoneyChanged = 0
let mySprite7: Sprite = null
let statusbar3: StatusBarSprite = null
let ShadeEquip = ""
let P1OldLocation: tiles.Location = null
let mySprite6: Sprite = null
let mySprite8: Sprite = null
let mySprite4: Sprite = null
let shootingSprite: Sprite = null
let projectile: Sprite = null
let statusbar2: StatusBarSprite = null
let Fight = false
let EnemyImg: Image = null
let Guard = false
let PlayerTurn = false
let CurrentTilemap: tiles.TileMapData = null
let EnemyLevel = 0
let MomoSaved = false
let LuckyQuest = false
let FirstTimeReadLuckyQuest = 0
let Row = 0
let Column = 0
let SpellsLearnt = 0
let Spell2 = ""
let Spell1 = ""
let NumberOfPlayers = 0
let Salmon = 0
let UpgradeSwordTo3 = ""
let UpgradeSwordto2 = ""
let statusbar4: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let Bandanna = 0
let SwordLV = 0
let Sword = false
let Day = 0
let Rank = ""
let mySprite: Sprite = null
let mySprite2: Sprite = null
let Action = false
let Spawning = false
tiles.setCurrentTilemap(tilemap`level1`)
Spawning = false
Action = false
mySprite2 = sprites.create(img`
    .............5.....5............
    .............515.515............
    .............5555555............
    ............ddddddddd...........
    ............d11f1f11d...........
    ............d11f1f11d...........
    ............d111f111d...........
    .............d11111d............
    ............d1111111d...........
    ...........d11d111d11d..d.......
    ...........d11d111d11d.d1d......
    ...........dd1d111d1dd.d1d......
    .............d11111d11dd1d......
    ............d111d111dd11d.......
    ............d31d.d13d.dd........
    .............dd...dd............
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(7, 2))
mySprite2.y += -5
mySprite = sprites.create(img`
    ...........f....
    ....44....fe....
    ...e4e4..eee....
    ...ee344ee3e....
    ....444ddeee....
    ....44f11f4e....
    ....4df11f44....
    ....d1111d448...
    ....6dddd44888..
    ...e66888888e8d.
    ..e2e668888e2e1d
    .d442eeeeee211dd
    .d14e222222e11dd
    ..ddeeeeeeeedd1d
    ....e222222e1d4d
    ....e22ee22ed44d
    ...beeeeeeeebdd.
    ..be222ee222eb..
    .bceeeeeeeeeecb.
    ..bbccccccccbb..
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 4))
animation.runImageAnimation(
mySprite,
[img`
    ...........f....
    ....44....fe....
    ...e444..eee....
    ...e444ddeee....
    ....44d11dee....
    ....44d11d4e....
    ....4d1111d4....
    ....d1111d44....
    ....6dddd448....
    ...ed6888888e...
    ..ed1d6888888e..
    .d4d1deee882e1d.
    .d1d1d22228e11d.
    ..dd44ddeeeedd..
    ....d411d22e....
    ....eddde22e....
    ...beeeeeeeeb...
    ..be222ee222eb..
    .bceeeeeeeeeecb.
    ..bbccccccccbb..
    `,img`
    ...........f....
    ....44....fe....
    ...e444..eee....
    ...e444ddeee....
    ....44d11dee....
    ....44d11d4e....
    ....4d1111d4....
    ....d1111d44....
    ....6dddd448....
    ...ed688888e....
    ..ed1d6888e2e...
    .d4d1deeed1ee...
    .d1d1d222d11e...
    ..dd44ddeedd....
    ....d411d22e....
    ....eddde22e....
    ...beeeeeeeeb...
    ..be222ee222eb..
    .bceeeeeeeeeecb.
    ..bbccccccccbb..
    `,img`
    ................
    ...........f....
    ....44....fe....
    ...e444..eee....
    ...e444ddeee....
    ....44d11dee....
    ....44d11d4e....
    ....dd1111d4....
    ....64ddd448....
    ...ed688888e....
    ..ed1deeeee2e...
    .d4d1d222d1ee...
    .d1d1d222d11e...
    ..dd44ddeedd....
    ....d411d22e....
    ....eddde22e....
    ...beeeeeeeeb...
    ..be222ee222eb..
    .bceeeeeeeeeecb.
    ..bbccccccccbb..
    `,img`
    ...........f....
    ....44....fe....
    ...e444..eee....
    ...e444ddeee....
    ....44d11dee....
    ....44d11d4e....
    ....4d1111d4....
    ....d1111d44....
    ....6dddd448....
    ...ed688888e....
    ..ed1d6888e2e...
    .d4d1deeed1ee...
    .d1d1d222d11e...
    ..dd44ddeedd....
    ....d411d22e....
    ....eddde22e....
    ...beeeeeeeeb...
    ..be222ee222eb..
    .bceeeeeeeeeecb.
    ..bbccccccccbb..
    `,img`
    ...........f....
    ....44....fe....
    ...e444..eee....
    ...e444ddeee....
    ....44d11dee....
    ....44d11d4e....
    ....4d1111d4....
    ....d1111d44....
    ....6dddd448....
    ...ed6888888e...
    ..ed1d6888888e..
    .d4d1deee882e1d.
    .d1d1d22228e11d.
    ..dd44ddeeeedd..
    ....d411d22e....
    ....eddde22e....
    ...beeeeeeeeb...
    ..be222ee222eb..
    .bceeeeeeeeeecb.
    ..bbccccccccbb..
    `],
350,
false
)
pause(1400)
Rank = "Knight"
game.showLongText("King: I now appoint you as rank of " + Rank + "." + " Your goal is to rest for now, and go to the blacksmith to receive your sword in the morning.", DialogLayout.Bottom)
controller.moveSprite(mySprite, 100, 100)
Action = true
Day = 0
Sword = false
SwordLV = 0
Bandanna = 0
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.setColor(7, 2, 5)
statusbar.max = 35
statusbar4 = statusbars.create(15, 3, StatusBarKind.Magic)
statusbar4.attachToSprite(mySprite, 7, 0)
statusbar4.setColor(8, 4, 8)
statusbar4.max = 10
UpgradeSwordto2 = ""
UpgradeSwordTo3 = ""
Salmon = 0
NumberOfPlayers = 1
Spell1 = ""
Spell2 = ""
SpellsLearnt = 0
game.onUpdateInterval(5000, function () {
    if (Spawning) {
        if (Enemies < 9) {
            if (tiles.getTilesByType(assets.tile`myTile19`).length > 1) {
                if (Math.percentChance(7)) {
                    mySprite3 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 4 4 4 4 4 4 . . . . . 
                        . . . . 4 4 5 5 5 5 4 4 . . . . 
                        . . 4 4 1 5 5 5 5 5 5 5 4 4 . . 
                        . 4 5 1 5 5 5 5 5 5 5 5 5 5 4 . 
                        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 
                        4 4 4 5 5 5 5 5 5 5 5 5 5 4 4 4 
                        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                        `, SpriteKind.Lv2Enemy)
                    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile19`)
                    mySprite3.follow(mySprite, 70)
                    Enemies += 1
                } else {
                    mySprite3 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 6 6 6 6 6 6 . . . . . 
                        . . . . 6 6 9 9 9 9 6 6 . . . . 
                        . . 6 6 1 9 9 9 9 9 9 9 6 6 . . 
                        . 6 9 1 9 9 9 9 9 9 9 9 9 9 6 . 
                        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
                        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
                        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
                        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
                        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
                        6 6 9 9 9 9 9 9 9 9 9 9 9 9 6 6 
                        6 6 6 9 9 9 9 9 9 9 9 9 9 6 6 6 
                        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
                        `, SpriteKind.Enemy)
                    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile19`)
                    mySprite3.follow(mySprite, 70)
                    Enemies += 1
                }
            } else if (tiles.getTilesByType(assets.tile`myTile93`).length > 1) {
                if (Math.percentChance(15)) {
                    mySprite3 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 4 4 4 4 4 4 . . . . . 
                        . . . . 4 4 5 5 5 5 4 4 . . . . 
                        . . 4 4 1 5 5 5 5 5 5 5 4 4 . . 
                        . 4 5 1 5 5 5 5 5 5 5 5 5 5 4 . 
                        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 
                        4 4 4 5 5 5 5 5 5 5 5 5 5 4 4 4 
                        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                        `, SpriteKind.Lv2Enemy)
                    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile93`)
                    mySprite3.follow(mySprite, 70)
                    Enemies += 1
                } else {
                    mySprite3 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 6 6 6 6 6 6 . . . . . 
                        . . . . 6 6 9 9 9 9 6 6 . . . . 
                        . . 6 6 1 9 9 9 9 9 9 9 6 6 . . 
                        . 6 9 1 9 9 9 9 9 9 9 9 9 9 6 . 
                        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
                        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
                        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
                        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
                        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
                        6 6 9 9 9 9 9 9 9 9 9 9 9 9 6 6 
                        6 6 6 9 9 9 9 9 9 9 9 9 9 6 6 6 
                        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
                        `, SpriteKind.Enemy)
                    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile93`)
                    mySprite3.follow(mySprite, 70)
                    Enemies += 1
                }
            } else if (tiles.getTilesByType(assets.tile`myTile138`).length > 1) {
                if (Math.percentChance(15)) {
                    mySprite3 = sprites.create(img`
                        ................
                        ....cffffffc....
                        ...c6fc66cf6c...
                        ..cffcc66ccffc..
                        ..ccf2cecc2fcc..
                        ....fcecc2cf....
                        ....fe2ec2cf....
                        ....ffccccff....
                        ...ccffffffcc...
                        ..cfccccccccfc..
                        ..c6fccccccf6c..
                        .cf66ffffff66fc.
                        .cffcffffffcffc.
                        ..cccffffffcccf.
                        ....cffffffcffc.
                        ....cffccffccf6c
                        ...fccccccccfcfc
                        ..fcfffccfffcfcc
                        .ffccccffccccff.
                        ..ffffffffffff..
                        `, SpriteKind.Lv4Enemy)
                    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile138`)
                    mySprite3.follow(mySprite, 70)
                    Enemies += 1
                } else {
                    mySprite3 = sprites.create(img`
                        . . . . . . . 8 . . . . . . . . 
                        . . . . 8 . 8 f 8 . . 8 . . . . 
                        . . . 8 8 . 8 f 8 . 8 f 8 . . . 
                        . . 8 8 f 8 f f 8 . 8 f 8 . . . 
                        . 8 f 8 f 8 f f 8 8 8 f 8 8 . . 
                        . 8 f 8 f 9 f f f 9 f f f 8 . . 
                        . 8 f f f 6 6 6 6 6 f f f 8 . . 
                        . 8 f f 6 f f f f f 6 f f 8 . . 
                        . 8 f 6 f f f f f f f 6 f 8 . . 
                        . 8 f 6 f f f f f f f 6 f 8 . . 
                        . 8 f 6 f 6 f f f 6 f 6 f 8 . . 
                        . 8 f f 6 f 6 6 6 6 6 6 f 8 . . 
                        . . 8 f f f f f f f f 6 f 8 . . 
                        . . 8 8 f f f f f f f f f 8 . . 
                        . . . . 8 8 f f f f f 8 8 . . . 
                        . . . . . . 8 8 8 8 8 . . . . . 
                        `, SpriteKind.Lv3Enemy)
                    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile138`)
                    mySprite3.follow(mySprite, 70)
                    Enemies += 1
                }
            } else {
            	
            }
        }
    }
})
game.onUpdateInterval(15000, function () {
	
})
forever(function () {
    if (!(Fight)) {
        Column = mySprite.tilemapLocation().column
        Row = mySprite.tilemapLocation().row
    }
})
forever(function () {
    statusbar.setLabel("HP:" + statusbar.value + "/" + statusbar.max)
    statusbar4.setLabel("FP:" + statusbar4.value + "/" + statusbar4.max)
})
forever(function () {
    if (true) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile79`)) {
            if (Action) {
                if (controller.A.isPressed()) {
                    Action = false
                    story.printCharacterText("Hello! What would you like to buy?")
                    if (!(UpgradeSwordTo3 == "Razor Edge" || SwordLV == 3)) {
                        controller.moveSprite(mySprite, 0, 0)
                        story.showPlayerChoices("Level 3 Sword Upgrade-75 Gold", "+10 Max Health-25 Gold", "Nothing")
                    } else {
                        story.showPlayerChoices("Fresh Salmon-5 Gold", "+10 Max Health-25 Gold", "Nothing")
                        controller.moveSprite(mySprite, 0, 0)
                    }
                    if (story.checkLastAnswer("Level 3 Sword Upgrade-75 Gold")) {
                        if (Money >= 75) {
                            Money += -75
                            UpgradeSwordTo3 = "Razor Edge"
                            game.showLongText("You got a Lv3 Sword Upgrade!", DialogLayout.Bottom)
                            timer.after(1, function () {
                                animation.runImageAnimation(
                                mySprite,
                                [img`
                                    ...........f....
                                    ....44....fe....
                                    ...e4e4..eee....
                                    ...ee344ee3e....
                                    ....444ddeee....
                                    ....44f11f4e....
                                    ....4df11f44....
                                    ....d1111d448...
                                    ....6dddd44888..
                                    ...e66888888e8..
                                    ..e2e668888e2e..
                                    .d442eeeeee22ed.
                                    .d14e222222e11dd
                                    ..ddeeeeeeee11dd
                                    ....e222222edd4d
                                    ....e22ee22ed14d
                                    ...beeeeeeeebdd.
                                    ..be222ee222eb..
                                    .bceeeeeeeeeecb.
                                    ..bbccccccccbb..
                                    `,img`
                                    ...........f....
                                    ....44....fe....
                                    ...e4e4..eee....
                                    ...ee344ee3e....
                                    ....444ddeee....
                                    ....44f11f4e....
                                    ....4df11f44....
                                    ....d1111d448...
                                    ....6dddd44888..
                                    .dd.668888888dd.
                                    d14ee668888ee11d
                                    d4422eeeeee2211d
                                    .ddee222222eeddd
                                    ....eeeeeeee.d1d
                                    ....e222222e.d4d
                                    ....e22ee22ed14d
                                    ...beeeeeeeebdd.
                                    ..be222ee222eb..
                                    .bceeeeeeeeeecb.
                                    ..bbccccccccbb..
                                    `,img`
                                    ...........f....
                                    ....44....fe....
                                    ...e4e4..eee....
                                    ...ee344ee3e....
                                    ....444ddeee....
                                    ....44f11f4e....
                                    ....4df11f44....
                                    ....d1111d448...
                                    ..dd6dddd4488dd.
                                    .d14d6888888d11d
                                    .d44d6688888d11d
                                    ..e22eeeeeee22e.
                                    ...ee2222222eedd
                                    ....eeeeeeee.d1d
                                    ....e222222..d4d
                                    ....e22ee22ed14d
                                    ...beeeeeeeebdd.
                                    ..be222ee222eb..
                                    .bceeeeeeeeeecb.
                                    ..bbccccccccbb..
                                    `,img`
                                    ...........f....
                                    ....44....fe....
                                    ..1cce4.1eee....
                                    ...c1c41ee3e....
                                    ...c1dcddeee....
                                    ....c1dc1fc1....
                                    ....1c1dcc1c....
                                    ...1d1c1dcbc8...
                                    ..dd6ddc1bc11dd.
                                    .d14d6c1bcbcd11d
                                    .d44d61cc8ccd11d
                                    ..e22eeeee1e12e.
                                    ...ee2222212e1dd
                                    ....eeeeeeee.d1d
                                    ....e222222..d4d
                                    ....e22ee22ed14d
                                    ...beeeeeeeebdd.
                                    ..be222ee222eb..
                                    .bceeeeeeeeeecb.
                                    ..bbccccccccbb..
                                    `,img`
                                    ...........f....
                                    ....44....fe....
                                    ..1cce4.1eee....
                                    ...c1c41ee3e....
                                    ...c1dcddeee....
                                    ....c1dc1fc1....
                                    ....1c1dcc1c....
                                    ...1d1c1dcbc8...
                                    ..dd6ddc1bc11dd.
                                    .d14d6c1bcbcd11d
                                    .d44d61cc8ccd11d
                                    ..e22eeeee1e12e.
                                    ...ee2222212e1dd
                                    ....eeeeeeee.d1d
                                    ....e222222..d4d
                                    ....e22ee22ed14d
                                    ...beeeeeeeebdd.
                                    ..be222ee222eb..
                                    .bceeeeeeeeeecb.
                                    ..bbccccccccbb..
                                    `,img`
                                    ...........f....
                                    ....44....fe....
                                    ..1cce4.1eee....
                                    ...c1c41ee3e....
                                    ...c1dcddeee....
                                    ....c1dc1fc1....
                                    ....1c1dcc1c....
                                    ...1d1c1dcbc8...
                                    ..dd6ddc1bc11dd.
                                    .d14d6c1bcbcd11d
                                    .d44d61cc8ccd11d
                                    ..e22eeeee1e12e.
                                    ...ee2222212e1dd
                                    ....eeeeeeee.d1d
                                    ....e222222..d4d
                                    ....e22ee22ed14d
                                    ...beeeeeeeebdd.
                                    ..be222ee222eb..
                                    .bceeeeeeeeeecb.
                                    ..bbccccccccbb..
                                    `,img`
                                    ...........f....
                                    ....44....fe....
                                    ..1cce4.1eee....
                                    ...c1c41ee3e....
                                    ...c1dcddeee....
                                    ....c1dc1fc1....
                                    ....1c1dcc1c....
                                    ...1d1c1dcbc8...
                                    ..dd6ddc1bc11dd.
                                    .d14d6c1bcbcd11d
                                    .d44d61cc8ccd11d
                                    ..e22eeeee1e12e.
                                    ...ee2222212e1dd
                                    ....eeeeeeee.d1d
                                    ....e222222..d4d
                                    ....e22ee22ed14d
                                    ...beeeeeeeebdd.
                                    ..be222ee222eb..
                                    .bceeeeeeeeeecb.
                                    ..bbccccccccbb..
                                    `,img`
                                    ...........f....
                                    ....44....fe....
                                    ...e4e4..eee....
                                    ...ee344ee3e....
                                    ....444ddeee....
                                    ....44f11f4e....
                                    ....4df11f44....
                                    ....d1111d448...
                                    ..dd6dddd4488dd.
                                    .d14d6888888d11d
                                    .d44d6688888d11d
                                    ..e22eeeeeee22e.
                                    ...ee2222222eedd
                                    ....eeeeeeee.d1d
                                    ....e222222..d4d
                                    ....e22ee22ed14d
                                    ...beeeeeeeebdd.
                                    ..be222ee222eb..
                                    .bceeeeeeeeeecb.
                                    ..bbccccccccbb..
                                    `,img`
                                    ...........f....
                                    ....44....fe....
                                    ...e4e4..eee....
                                    ...ee344ee3e....
                                    ....444ddeee....
                                    ....44f11f4e....
                                    ....4df11f44....
                                    ....d1111d448...
                                    ....6dddd44888..
                                    ...e66888888e8..
                                    ..e2e668888e2e..
                                    .d442eeeeee22ed.
                                    .d14e222222e11dd
                                    ..ddeeeeeeee11dd
                                    ....e222222edd4d
                                    ....e22ee22ed14d
                                    ...beeeeeeeebdd.
                                    ..be222ee222eb..
                                    .bceeeeeeeeeecb.
                                    ..bbccccccccbb..
                                    `],
                                200,
                                false
                                )
                            })
                            controller.moveSprite(mySprite, 100, 100)
                            timer.after(5, function () {
                                Action = true
                            })
                        } else {
                            game.showLongText("Too expensive!", DialogLayout.Bottom)
                            controller.moveSprite(mySprite, 100, 100)
                            timer.after(5, function () {
                                Action = true
                            })
                        }
                    } else if (story.checkLastAnswer("+10 Health-25 Gold")) {
                        if (Money >= 0) {
                            Money += -25
                            game.showLongText("Max health + 10!", DialogLayout.Bottom)
                            timer.after(10, function () {
                                controller.moveSprite(mySprite, 100, 100)
                                timer.after(5, function () {
                                    Action = true
                                    statusbar.max = statusbar.max + 10
                                })
                            })
                        } else {
                            game.showLongText("Too expensive!", DialogLayout.Bottom)
                            controller.moveSprite(mySprite, 100, 100)
                            timer.after(5, function () {
                                Action = true
                            })
                        }
                    } else if (story.checkLastAnswer("Fresh Salmon-5 Gold")) {
                        if (Money >= 5) {
                            Money += -5
                            game.showLongText("You bought Fresh Salmon! Use it in battle to recover 15 HP!", DialogLayout.Bottom)
                            Salmon += 1
                            controller.moveSprite(mySprite, 100, 100)
                            timer.after(5, function () {
                                Action = true
                            })
                        } else {
                            game.showLongText("Too expensive!", DialogLayout.Bottom)
                            controller.moveSprite(mySprite, 100, 100)
                            Action = true
                        }
                    } else if (story.checkLastAnswer("Nothing")) {
                        timer.after(5, function () {
                            Action = true
                        })
                    } else {
                    	
                    }
                }
            }
        }
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        P1OldLocation = mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)
    } else if (controller.down.isPressed()) {
        P1OldLocation = mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top)
    } else if (controller.left.isPressed()) {
        P1OldLocation = mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right)
    } else if (controller.right.isPressed()) {
        P1OldLocation = mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile102`)) {
        mySprite.sayText("Press A to read!", 500, false)
        if (controller.A.isPressed()) {
            game.showLongText("There is someone else in the maze, but really, they aren't lost.", DialogLayout.Bottom)
        }
    }
})
forever(function () {
    if (mySprite6) {
        if (mySprite6.tilemapLocation().column < Column) {
            mySprite6.z = mySprite.z - 1
            animation.runImageAnimation(
            mySprite6,
            [img`
                ....ffcf........
                ....ff6c6.......
                .....6fcf.......
                .....ffcf.......
                .....fffc.......
                ....ffff6c......
                ...ffffff1c.....
                ...ffffff5c.....
                ...4ffffff5.....
                ..444ffff55.....
                ....444445......
                .....ffff.......
                cc...c66c.......
                cfc..cffc.......
                cf6cccffc.......
                c6fffcccc.......
                .cffcc66c.......
                ..cc.cffc.......
                .....cfffc......
                .....ccccc......
                `],
            100,
            false
            )
        } else if (mySprite6.tilemapLocation().column > Column) {
            mySprite6.z = mySprite.z - 1
            animation.runImageAnimation(
            mySprite6,
            [img`
                ........fcff....
                .......6c6ff....
                .......fcf6.....
                .......fcff.....
                .......cfff.....
                ......c6ffff....
                .....c1ffffff...
                .....c5ffffff...
                .....5ffffff4...
                .....55ffff444..
                ......544444....
                .......ffff.....
                .......c66c...cc
                .......cffc..cfc
                .......cffccc6fc
                .......ccccfff6c
                .......c66ccffc.
                .......cffc.cc..
                ......cfffc.....
                ......ccccc.....
                `],
            100,
            false
            )
        } else if (mySprite6.tilemapLocation().row > Row) {
            mySprite6.z = mySprite.z + 1
            animation.runImageAnimation(
            mySprite6,
            [img`
                ...ff......ff...
                ...ff6....6ff...
                ...66ff..ff66...
                ...ffffffffff...
                ....ffffffff....
                ....ffffffff....
                ....ffffffff....
                ....ffffffff4...
                ....5ffffff444..
                ...f55444444f4..
                ..c6f554444f6c.c
                .cf66ffffff66fc6
                .cffcffffffcffcf
                ..cccfffffccccff
                ....cffffcffffff
                ....cffccfcffffc
                ...fcffccffcccc.
                ..fcfffccfffcf..
                .ffccccffccccff.
                ..ffffffffffff..
                `],
            100,
            false
            )
        } else if (mySprite6.tilemapLocation().row < Row) {
            mySprite6.z = mySprite.z - 1
            animation.runImageAnimation(
            mySprite6,
            [img`
                ...ff......ff...
                ...ff6....6ff...
                ...66ff..ff66...
                ...ffff66ffff...
                ....fff66fff....
                ....ff1ff1ff....
                ....ff5ff5ff....
                ....ffffffff4...
                ....5ffffff444..
                ...f55444444f4..
                ..c6f554444f6c.c
                .cf66ffffff66fc6
                .cffcffffffcffcf
                ..cccffffffcccff
                ....cffffffcffff
                ....cffccffccffc
                ...fcffccffcfcc.
                ..fcfffccfffcf..
                .ffccccffccccff.
                ..ffffffffffff..
                `],
            100,
            false
            )
        }
    }
    if (mySprite7) {
        if (mySprite6.tilemapLocation().column < Column) {
            mySprite6.z = mySprite.z - 1
            animation.runImageAnimation(
            mySprite6,
            [img`
                ....ffcf........
                ....ff6c6.......
                .....6fcf.......
                .....ffcf.......
                .....fffc.......
                ....ffff6c......
                ...ffffff1c.....
                ...ffffff5c.....
                ...4ffffff5.....
                ..444ffff55.....
                ....444445......
                .....ffff.......
                cc...c66c.......
                cfc..cffc.......
                cf6cccffc.......
                c6fffcccc.......
                .cffcc66c.......
                ..cc.cffc.......
                .....cfffc......
                .....ccccc......
                `],
            100,
            false
            )
        } else if (mySprite6.tilemapLocation().column > Column) {
            mySprite6.z = mySprite.z - 1
            animation.runImageAnimation(
            mySprite6,
            [img`
                ........fcff....
                .......6c6ff....
                .......fcf6.....
                .......fcff.....
                .......cfff.....
                ......c6ffff....
                .....c1ffffff...
                .....c5ffffff...
                .....5ffffff4...
                .....55ffff444..
                ......544444....
                .......ffff.....
                .......c66c...cc
                .......cffc..cfc
                .......cffccc6fc
                .......ccccfff6c
                .......c66ccffc.
                .......cffc.cc..
                ......cfffc.....
                ......ccccc.....
                `],
            100,
            false
            )
        } else if (mySprite6.tilemapLocation().row > Row) {
            mySprite6.z = mySprite.z + 1
            animation.runImageAnimation(
            mySprite6,
            [img`
                ...ff......ff...
                ...ff6....6ff...
                ...66ff..ff66...
                ...ffffffffff...
                ....ffffffff....
                ....ffffffff....
                ....ffffffff....
                ....ffffffff4...
                ....5ffffff444..
                ...f55444444f4..
                ..c6f554444f6c.c
                .cf66ffffff66fc6
                .cffcffffffcffcf
                ..cccfffffccccff
                ....cffffcffffff
                ....cffccfcffffc
                ...fcffccffcccc.
                ..fcfffccfffcf..
                .ffccccffccccff.
                ..ffffffffffff..
                `],
            100,
            false
            )
        } else if (mySprite6.tilemapLocation().row < Row) {
            mySprite6.z = mySprite.z - 1
            animation.runImageAnimation(
            mySprite6,
            [img`
                ...ff......ff...
                ...ff6....6ff...
                ...66ff..ff66...
                ...ffff66ffff...
                ....fff66fff....
                ....ff1ff1ff....
                ....ff5ff5ff....
                ....ffffffff4...
                ....5ffffff444..
                ...f55444444f4..
                ..c6f554444f6c.c
                .cf66ffffff66fc6
                .cffcffffffcffcf
                ..cccffffffcccff
                ....cffffffcffff
                ....cffccffccffc
                ...fcffccffcfcc.
                ..fcfffccfffcf..
                .ffccccffccccff.
                ..ffffffffffff..
                `,img`
                ..cc......cc....
                ..cfc....cfc....
                ..cf69..96fc....
                ..c69999996c....
                ...99999999.....
                ...99199199.....
                ...99299299.....
                ...111ff1112....
                ...4111111222...
                .114422222222..1
                .199442222991.1d
                1c1911991191c1dd
                1cc19111191cc11d
                .111911119111991
                ...1999999199991
                ...199119911991.
                ..d19911991d....
                .d1999119991d...
                dd1111dd1111dd..
                .dddddddddddd...
                `],
            100,
            false
            )
        }
    }
})
