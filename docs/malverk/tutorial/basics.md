# Basics of Malverk mods

I'm going to assume you already know the very basics of how to set up a mod, and already have a mod set up. Check out [this page](</basics of modding>) for the gist of it.

Ok, so here's the basic archetype of a Malverk mod:

1) AltTextures: Defines a list of textures that can be toggled on or off in your Malverk pack.
2) TexturePack: Defines a texture pack, which is a collection of AltTextures.

You define these in your `main.lua` file. Here's a very simple example:

```lua
AltTexture({
    key = 'normal',
    set = 'Joker',
    path = 'glumbus.png',
    loc_txt = {
        name = 'glumbus'
    },
    keys = { 'j_lucky_cat' }
})

TexturePack({
  key = 'glumbus',
  textures = {'glumbus_normal'}, -- should be mod_prefix + "_" + key from AltTexture
  loc_txt = {
    name = 'Glumbus', -- the name of the pack
    text = { -- the mod description
        'glumbus' -- each entry is a separate line (rather than "\n" in traditional strings)
    }
  }
})
```

### *'But wait!!'* You say. *'Why does my editor say that `AltTexture` and `TexturePack` are undefined?'*

You need to add a new dependency to your mods. Assuming you have a directory called "dependencies" and a ".luarc.json" file:

::: tip
Don't have a dependencies directory? just `mkdir dependencies` in your terminal, then follow the rest of the steps.
:::

1. In your terminal, run `cd dependencies`, then `git clone https://github.com/Eremel/Malverk.git`.
2. In your `.luarc.json` file, add `"./dependencies/Malverk"` to the `workspace.library` array.

Here's what my `.luarc.json` file looks like for Glumbus:

```json{5}
{
    "workspace.library": [
        "./dependencies/smods/lsp_def",
        "./dependencies/love2d",
        "./dependencies/Malverk", // <-- this is the important part
        "~/Documents/balatro-1.0.1n"
    ]
}
```

On the next page we will go over how to make a sprite sheet.
