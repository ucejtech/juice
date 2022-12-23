const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/_global.scss'),
        path.resolve(__dirname, './src/assets/styles/_mixins.scss')
      ]
    });
}

function addSvgResource(rule) {
  rule.uses.clear();
  rule
    .use('vue-loader')
    .loader('vue-loader') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
    .end()
    .use('vue-svg-loader')
    .loader('vue-svg-loader');
}

const siteName = 'SpendJuice';

module.exports = {
  siteName,
  titleTemplate: `%s - ${siteName}`,
  plugins: [
    {
      use: 'gridsome-plugin-windicss',
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Terms',
        path: './content/app/*.md'
      }
    }
  ],
  templates: {
    Terms: [
      {
        path: (node) => {
          return `/terms/${node.id}`;
        },
        component: './src/templates/Term.vue'
      }
    ]
  },
  chainWebpack(config) {
    const svgRule = config.module.rule('svg');
    addSvgResource(svgRule);

    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach((type) => {
      addStyleResource(config.module.rule('sass').oneOf(type));
    });

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  }
};
