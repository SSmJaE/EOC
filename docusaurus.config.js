/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "EOCS",
    tagline: "English Online Course Scripts",
    url: "https://github.com/SSmJaE",
    baseUrl: "/EOC/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "SSmJaE", // Usually your GitHub org/user name.
    projectName: "EOC", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "ECOS",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    to: "docs/概览/",
                    label: "概览",
                    position: "left",
                },
                {
                    to: "docs/WELearn/",
                    label: "WE Learn",
                    position: "left",
                },
                {
                    to: "docs/Unipus/",
                    label: "Unipus",
                    position: "left",
                },
                {
                    to: "docs/TsingHuaElt/",
                    label: "TsingHua Elt",
                    position: "left",
                },
                // {
                //   to: 'docs/',
                //   activeBasePath: 'docs',
                //   label: 'Docs',
                //   position: 'left',
                // },
                // {to: 'blog', label: 'Blog', position: 'left'},
                {
                    href: "https://github.com/SSmJaE/EOC",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            // links: [
            //     {
            //         title: "Docs",
            //         items: [
            //             {
            //                 label: "Getting Started",
            //                 to: "docs/",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Community",
            //         items: [
            //             {
            //                 label: "Stack Overflow",
            //                 href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //             },
            //             {
            //                 label: "Discord",
            //                 href: "https://discordapp.com/invite/docusaurus",
            //             },
            //             {
            //                 label: "Twitter",
            //                 href: "https://twitter.com/docusaurus",
            //             },
            //         ],
            //     },
            //     {
            //         title: "More",
            //         items: [
            //             {
            //                 label: "Blog",
            //                 to: "blog",
            //             },
            //             {
            //                 label: "GitHub",
            //                 href: "https://github.com/facebook/docusaurus",
            //             },
            //         ],
            //     },
            // ],
            copyright: `Built with Docusaurus.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/SSmJaE/EOC/edit/master/",
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
                // },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
