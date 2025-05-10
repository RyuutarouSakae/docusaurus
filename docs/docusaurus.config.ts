import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // GitHub pagesの場合、"https://<GitHubのorg/ユーザー名>.github.io"
  url: "https://ryuutarousakae.github.io",
  // GitHub pagesの場合、"/<リポジトリ名>/"
  baseUrl: "/docusaurus/",
  organizationName: "RyuutarouSakae", // GitHubのorg/ユーザー名
  projectName: "docusaurus", // リポジトリ名
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: { defaultLocale: "ja", locales: ["ja"] },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // GitHub リポジトリのURL
          editUrl:
            "https://github.com/RyuutarouSakae/docusaurus/tree/main/docs",
          docItemComponent: "@theme/ApiItem",
        },
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // プロジェクトのソーシャルカード画像に置き換える
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "My Site",
      logo: { alt: "My Site Logo", src: "img/logo.svg" },
      items: [
        {
          type: "docSidebar",
          sidebarId: "serviceSidebar",
          position: "left",
          label: "Service",
        },
        {
          type: "docSidebar",
          sidebarId: "developmentSidebar",
          position: "left",
          label: "Development",
        },
        {
          label: "Petstore API",
          position: "left",
          to: "/docs/api/petstore-api",
        },
        {
          href: "https://github.com/RyuutarouSakae/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Tutorial", to: "/docusaurus/docs/service/intro" }],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            { label: "GitHub", href: "https://github.com/facebook/docusaurus" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: [
        "ruby",
        "csharp",
        "php",
        "java",
        "powershell",
        "json",
        "bash",
        "dart",
      ],
    },
    languageTabs: [
      { highlight: "bash", language: "curl", logoClass: "curl" },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
      {
        highlight: "javascript",
        language: "javascript",
        logoClass: "javascript",
      },
      { highlight: "javascript", language: "nodejs", logoClass: "nodejs" },
      { highlight: "dart", language: "dart", logoClass: "dart" },
      { highlight: "python", language: "python", logoClass: "python" },
      { highlight: "go", language: "go", logoClass: "go" },
      { highlight: "ruby", language: "ruby", logoClass: "ruby" },
      { highlight: "csharp", language: "csharp", logoClass: "csharp" },
      { highlight: "php", language: "php", logoClass: "php" },
      { highlight: "c", language: "c", logoClass: "c" },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      { highlight: "rust", language: "rust", logoClass: "rust" },
      { highlight: "swift", language: "swift", logoClass: "swift" },
      { highlight: "kotlin", language: "kotlin", logoClass: "kotlin" },
    ],
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore: {
            specPath: "examples/petstore.yaml",
            outputDir: "docs/petstore",
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],

  themes: [
    "docusaurus-theme-openapi-docs",
    ["@easyops-cn/docusaurus-search-local", { hashed: true, language: "ja" }],
  ],
};

export default config;
