# Basics of modding

## Recommended
First off, go ahead and follow N's [guide](https://github.com/nh6574/VanillaRemade/wiki) on getting a mod set up. I could write my own instructions, but N already has a perfectly good tutorial.

Now that you have a mod set up, let's take a look at actual modding:

Oh wait, I haven't gotten to this part yet. Hold on a bit!! It'll come soon(tm), promise.

## Quick start
If you really just want to skip straight to writing Lua and don't care about QOL, this is the place for you. This is setting you up for failure, but if you really need to go fast, then all you need for steamodded is a file structure like this:

```
my_mod/
    - main.lua
    - mod.json
```

That's it. Here's the minimum of what you can put in your mod.json file:

```json
{
  "id": "my_balatro_mod", // important note: this should be unique to your mod
  "name": "My Balatro Mod",
  "author": ["you!"], // accepts multiple fields if you have multiple people working on it.
  "description": "A really cool mod I made.",
  "prefix": "my_balatro_mod", // just use your mod's id for simplicity.
  "main_file": "main.lua", // you can technically change this, I always keep it as main.lua for my own sanity.
  "version": "1.0.0" // your mod's version, not Steamodded's.
}
```

Your text editor might not play nice with the comments (anything after a `//`). Just remove it if it complains, it doesn't do anything.
