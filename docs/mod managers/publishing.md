# Publishing your mod

The best way to publish a mod is on the Balatro Mod Index, or BMI. It's found [here](https://github.com/skyline69/balatro-mod-index). They already have a guide on how to publish a mod, but here's a very beginner-friendly way of messing with it.

## Prequisitories
- You must have a [Github](https://github.com) Account
- A balatro mod of your own making (the BMI allows you to publish others' mods, but it's best practice to only do your own.)

## Fork the repository
If you don't know what a fork is, it's basically a copy of a repository that you can edit without affecting the original. The easiest way for you to do this is by pressing on the "Fork" button on the top right of the page.

Once you have pressed on "Fork," then select "Create fork" on the green button at the bottom of the page.

This should bring you to your own copy of the repository. Press the period key on your keyboard to enter the web editor.

You should now be in VSCode inside your browser. Find the `mods` folder on the sidebar, right click it, and create a folder. Name it `your_username@your_mod`. So, for example, my mod Glumbus is `colonthreeing@glumbus`.

Inside of there, create two files: `meta.json` and `description.md`.

### meta.json

This following part is from the official BMI guide, just relocated to here for convenience. You can double check the official guide if you have issues.

This file stores essential metadata in JSON format. **Make sure you adhere to the valid categories and mod-loader options.** Below is an example:
```json
{
  "title": "Extended Cards",
  "requires-steamodded": true,
  "requires-talisman": false,
  "categories": ["Content"],
  "author": "Joe Mama",
  "repo": "https://github.com/joemama/extended-cards",
  "downloadURL": "https://github.com/joemama/extended-cards/releases/latest/download/extended-cards.zip",
  "folderName": "ExtendedCards",
  "version": "1.0.0",
  "automatic-version-check": true
}

```
- **title**: The name of your mod.
- **requires-steamodded**: If your mod requires the [Steamodded](https://github.com/Steamodded/smods) mod loader, set this to `true`.
- **requires-talisman**: If your mod requires the [Talisman](https://github.com/MathIsFun0/Talisman) mod, set this to `true`.
- **categories**: Must contain at least one of `Content`, `Joker`, `Quality of Life`, `Technical`, `Miscellaneous`, `Resource Packs` or `API`.
- **author**: Your chosen username or handle.
- **repo**: A link to your mod's repository.
- **downloadURL**: A direct link to the latest version of your released mod. Using an automatic link to the [latest release](https://docs.github.com/en/repositories/releasing-projects-on-github/linking-to-releases) is preferred.
- **version**: The version number of the mod files available at `downloadURL`.
- *folderName*: (*Optional*) The name for the mod's install folder. This must be **unique**, and cannot contain characters `<` `>` `:` `"` `/` `\` `|` `?` `*`
- *automatic-version-check*: (*Optional* but **recommended**) Set to `true` to let the Index automatically update the `version` field.
    - Updates happen once every hour, by checking either your mod's latest Release, latest commit, or specific release tag, depending on the `downloadURL`.
    - Enable this option **only** if your `downloadURL` points to an automatically updating source:
        - **Latest release** (recommended): Using a link to [releases/latest](https://docs.github.com/en/repositories/releasing-projects-on-github/linking-to-releases)
        - **Latest commit**: Using a link to the [latest commit (HEAD)](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives#source-code-archive-urls)
- *fixed-release-tag-updates*: (*Optional*) Set to `true` if your mod uses a fixed release tag and still wants to auto-update when modifying the underlying files. This can be useful for repositories with multiple mods, allowing you to have a release tag dedicated for each mod where you upload new versions. Note that:
  - Requires `automatic-version-check` to also be set to `true`.
  - The `downloadURL` must point to a specific release asset using a link such as `https://github.com/author/repo/releases/download/my-release-tag/mod.zip`.

### description.md

This file should describe what your mod does. It might look like this:

```md
# Epic Amazing Mod of Glory

Adds a few new vanilla+ jokers, along with an overhaul of Jimbo,
now giving X3000000 mult instead of +4 mult (much better and balanced).
```

You can use [markdown](https://www.markdownguide.org/basic-syntax/) formatting in the file if you want to get fancy.

## Commit your changes

Press on the icon in the sidebar that has a little blue number on it. This is the source control tab. Give it a message like "Add colonthreeing@glumbus" and press the button "Commit & Push"

## Create a pull request

Go back to skyline69's balatro-mod-index repository. Press on "Pull requests" to the top of the page, then press on the green button "New pull request." You have to press on "compare across forks" so you can use your own. On the one labelled "head repository," select your own fork. After that, press on "Create pull request" and add your mod info. Now you should be done! Your mod should be approved within a few days (I usually notice <1 day, it's nice and quick).
