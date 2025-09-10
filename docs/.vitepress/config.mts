// https://vitepress.dev/reference/site-config
export default {
    head: [['link', { rel: 'icon', href: '/docs/favicon.ico' }]],
    title: "Balatro Modding Guide",
    description: ":3ing's balatro modding tutorials",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about" },
        ],

        sidebar: [
            {
                text: "Basics of Modding",
                items: [
                    { text: "Getting Started", link: "/basics of modding" },
                    { text: "About this site", link: "/about" },
                ],
            },
            {
                text: "Malverk",
                collapsed: false,
                items: [
                    { text: "Home", link: "/malverk/" },
                    {
                        text: "Tutorial",
                        collapsed: false,
                        items: [
                            {
                                text: "The Basics",
                                link: "/malverk/tutorial/basics",
                            },
                            {
                                text: "Making Your Sprite Sheet",
                                link: "/malverk/tutorial/sprite sheet",
                            },
                        ],
                    },
                    {
                        text: "Card Souls",
                        link: "/malverk/soul keys",
                    },
                    {
                        text: "Card Names",
                        link: "/malverk/names",
                    },
                ],
            },
            {
                text: "Mod Managers",
                items: [
                    {
                        text: "Balatro Mod Managers",
                        link: "/mod managers/usage",
                    },
                    {
                        text: "Publishing your mod",
                        link: "/mod managers/publishing",
                    },
                ],
            },
            {
                text: "Steamodded Stuff",
                items: [
                    {
                        text: "Resources",
                        link: "/steamodded/",
                    },
                ],
            },
        ], // i wish there were a better way to autogenerate this but whatever

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/colonthreeing/baladocs",
            },
        ],

        editLink: {
            // zed autoformatted it like this not me, i am not crazy
            pattern:
                "https://github.com/colonthreeing/baladocs/edit/main/:path",
        },

        search: {
            provider: "local",
        },

        footer: {
            message:
                "I believe in the free internet. Go ahead and fork this or download it or anything else- as long as it isn't paywalled.",
            copyright: "Copyright © colonthreeing",
        },
    },
    cleanUrls: true,
};

// const vitePressSidebarOptions = {
//     // VitePress Sidebar's options here...
//     documentRootPath: "/",
//     collapsed: false,
//     capitalizeFirst: true,
//     includeFolderIndexFile: true,
//     manualSortFileNameByPriority: ["index.md"],
// };
