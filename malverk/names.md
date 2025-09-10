# Changing Card's Names

So you've got your card's texture done, but you want to give it a new name too. You've probably seen things like [BUMod](https://github.com/OceanRamen/BUMod) do it, so it must be possible!

## Malverk does not let you change the names of cards.
---
Wait, so why is this page here?

I have seen many cases of people being unsure how to change card names for their texture packs. This is a guide for how to do it, even if it is not actually part of Malverk.

## Localization files

Balatro uses localization files to store all of the text in the game. This includes card names, card descriptions, UI text, and more. You can find all the localization in the `localization` folder of the game.

::: details Don't have a balatro decompilation?
You can look at [VanillaRemade's](https://github.com/nh6574/VanillaRemade/blob/main/localization/en-us.lua) loc file, removing "vremade" from every key. (it should be otherwise the same as vanilla). I may at some point upload them all here as well, but I don't actually know if that's copyright infringement, so better safe than sorry!
:::

As a general rule of thumb, cards follow the format of `t_name`, where `t` is the type of card (`j` for joker, `b` for back, `c` for consumable, et cetera), and `name` is the card's name without any leading articles. For example, the key for the card "Lucky Cat" is `j_lucky_cat`, `c_fool` for The Fool, `j_idol` for The Idol, and so on.

## Making your own localization file

Create a folder called `localization` in your mod folder. Inside that, create a file called `en-us.lua`.

::: details Other languages
You can use various different languages for base balatro, or even define your own.

The default balatro language files are:

- de.lua (German),
- en-us.lua (English),
- es_419.lua (Latin American Spanish),
- es_ES.lua (Spain Spanish),
- fr.lua (French),
- id.lua (Indonesian),
- it.lua (Italian),
- ja.lua (Japanese),
- ko.lua (Korean),
- nl.lua (Dutch),
- pl.lua (Polish),
- pt_BR.lua (Brazilian Portuguese),
- ru.lua (Russian),
- zh_CN.lua (Simplified Chinese),
- zh_TW.lua (Traditional Chinese).

If you want to make your own language, name the file with any name besides the existing ones, and then add this to your lua file:

```lua
SMODS.Language({
    key = 'your_mod_file',    -- not including the .lua extension
    label = 'English but better', -- the name of the language
})
```
:::

Inside of it, write this in:

```lua
return {
    descriptions = {
        -- can leave this part empty for now.
    },
}
```

## Card types

Now, inside the descriptions part, add the proper key for the type of card you are changing (or multiple, if you want).

A lot of these are obvious but they are all here for completeness.
| Thing you are modifying | Key      |
| ----------------------- | -------- |
| Decks                   | Back     |
| Blinds                  | Blind    |
| Editions (like foil)    | Edition  |
| Card enhancements       | Enhanced |
| Jokers                  | Joker    |
| Planets                 | Planet   |
| Spectrals               | Spectral |
| Stakes                  | Stake    |
| Skip tags               | Tag      |
| Tarot cards             | Tarot    |
| Vouchers                | Voucher  |
| Anything else           | Other    |

## Inside the type

Inside the type, add the localization key of your card, and give it a name and/or description. Descriptions are what shows when you hover a card, and can be multiple lines by making it a table.

So, for example, if you wanted to change the name of the base Joker and make the description different, you would add this:

```lua
return {
    descriptions = {
        Joker = { -- [!code ++:10]
            j_joker = {
                name = "Jimbo", -- finally by his true name
                description = {
                    "The all-powerful Jimbo.",
                    "Fear him."
                    "{C:red}+#1#{} Mult",
                }
            },
        },
    },
}
```

That's it! You should now have a functioning renaming of the card.

::: details Hey wait, what was that weird `{C:red}+#1#{} Mult` thing?
Balatro cards oftentimes have special formatting for colours, and #n# refers to a dynamic piece of text that is filled in by the game. For a more detailed look at code formatting, check out the [Steamodded wiki](https://github.com/Steamodded/smods/wiki/Text-Styling).
:::
