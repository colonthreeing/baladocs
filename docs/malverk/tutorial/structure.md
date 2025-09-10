# Project Structure

File structure for Malverk projects looks like this:

```
my_mod/
    - main.lua
    - mod.json
    - assets/
        - 1x/
            - jokers.png
        - 2x/
            - jokers.png
    - localization/ (optional)
        - en-us.lua
```

The most important thing to look at is the assets folder. This is where all of your textures go. The 1x and 2x folders are for different resolutions of the same texture. 1x is for standard resolution, and 2x is for high resolution- but it should contain the exact same textures, just at 200% scale. The reasoning for this is complicated, but the game will switch between them based on the "Pixelart Smoothing" setting in Balatro.

::: warning
As far as I am aware, you need to use a png file, not a JPEG or anything else.
:::


Because it can be tedious to manually export at 2x resolution, you can use this terminal command to scale up a file with [ImageMagick](https://imagemagick.org/):

```sh
FILENAME=jokers.png
magick ./assets/1x/$FILENAME -filter point -resize 200% ./assets/2x/$FILENAME
```

Or for Fish shell users:

```fish
set FILENAME jokers.png
magick ./assets/1x/$FILENAME -filter point -resize 200% ./assets/2x/$FILENAME
```

And finally powershell:

```powershell
$FILENAME = "jokers.png"
magick ./assets/1x/$FILENAME -filter point -resize 200% ./assets/2x/$FILENAME
```

To be honest I haven't tested any but the fish shell version. Pretty sure they should all work though :3
