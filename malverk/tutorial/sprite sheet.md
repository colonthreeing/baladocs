# Making Your Sprite Sheet

## Prerequisite Information

So you've got your mod now, but you don't have any sprites!! Here's how you can make them.

The balatro textures are all `71x95` pixels, with a 3 pixel rounding on the corners and 1 pixel of padding on all sides. Rather than trying to make a joker based on that description, you should probably just modify the original Jimbo texture from base balatro (you can get this by decompiling the game with [Balamod](https://github.com/balamod/balamod) or from the website [The Spriters Resource](https://www.spriters-resource.com/pc_computer/balatro/)).

When making an AltTexture, you can actually set the size to any pixel dimensions with the `px` and `py` fields (representing width and height respectively).

When making a sprite sheet, Malverk reads left to right, top to bottom. This will be important to remember when setting the sprite keys, unless you use a full sheet of cards where they line up perfectly with vanilla (for more on that, check out [the page on spritesheets](../spritesheets) (Not implemented yet as of writing)).

## An Example

Let's take a look at the sprite sheet for my mod Glumbus.

::: info Note
This spritesheet has been modified slightly for simplicity, as normally it uses [soul keys](<../soul keys>), but that is out of scope for this tutorial.
:::

![Glumbus sprite sheet](/assets/glumbus_sheet.png)

Now take a look at the code for the AltTexture that is making it:

```lua{9-25}
AltTexture({
    key = "plus",
    set = "Joker",
    path = "glumbus_plus.png",
    loc_txt = {
        name = "friends of glumbus"
    },
    -- This is the part we will be looking at
    keys = {
        'j_hologram',
        'j_stencil',
        'j_idol',
        'j_space',
        'j_drivers_license',
        'j_blackboard',
        'j_mime',
        'j_flower_pot',
        'j_smiley',
        'j_scholar',
        'j_burglar',
        'j_egg',
        'j_photograph',
        'j_gros_michel',
        'j_stuntman'
    },
    soul_keys = { -- we will get to this later
        'j_hologram'
    }
})

-- this example only uses the glumbus_plus textures instead of both it and normal one for simplicity
-- the full version is found at https://github.com/colonthreeing/Glumbus/blob/main/lib/pack.lua
TexturePack({
  key = 'glumbus',
  textures = {'glumbus_plus'},
  loc_txt = {
    name = 'Glumbus',
    text = {'glumbus'}
  }
})
```

The order of keys needs to be the same as the order of sprites on the sheet. Take a look at the `keys` field and how it compares to the sprite sheet. `j_hologram` is the first card on the top left, then `j_stencil`, and `j_idol` is the third, and so on.

::: info How do I know what the keys are?
I plan on eventually making a table for all the keys and what they correspond to, but for now, the best way to find out is by looking at the [VanillaRemade](https://github.com/nh6574/VanillaRemade/blob/main/src/jokers.lua) source code or by ctrl+f'ing in the Balatro localization files. Then, prepend `j_` (short for joker) to the front.
:::
