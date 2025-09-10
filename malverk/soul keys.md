# Card Souls

::: info
The source code for the mod used in this example is available at https://github.com/colonthreeing/Tribuwulet
:::

This is kind of a complicated topic, but I'll try to explain it as simply as possible. Do let me know if it's hard to follow :3

Think about the legendary jokers. They have a second texture on top of the existing one that floats and moves on it's own. This is called a "soul texture," named after the spectral card The Soul.

Ok, so how do you make one? For starters, you need to set up your sprite sheet correctly. It **must** have the soul texture directly after the card it will apply to. I'm going to show an example here for if we wanted to remake Triboulet to make a silly face.

![Triboulet sprite sheet](/assets/tribuwulet.png)

Next, you need to add a `soul_keys` field to your `AltTexture` definition. This is a list of the keys that will have soul textures applied to them.

```lua
AltTexture({
    key = 'trib',
    set = 'Joker',
    path = 'tribuwulet.png',
    loc_txt = {
        name = 'UwU Trib'
    },
    keys = { 'j_triboulet' },
    soul_keys = { 'j_triboulet' }
})
```

The `soul_keys` field should have the exact same value as `keys`, but only with jokers that have a soul. It will automatically register the next card in the sheet as the soul texture.

::: info
When a soul is defined for a card, Malverk skips the next card in the sheet for the `keys` list, so you should just go to the next joker in the sheet. If you don't know what this means because I explained it badly, it is the behaviour you probably will instinctively expect, so just try it out :3
:::

And, to finish it all off, here's the texture pack definition:

```lua
TexturePack({
	key = "tribuwulet",
	textures = { "tribuwulet_trib" },
	loc_txt = {
		name = "TribUwUlet",
		text = { "uwu" }
	}
})
```
