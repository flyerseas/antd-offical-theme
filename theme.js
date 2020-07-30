const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const LessPluginNpmImport = require('less-plugin-npm-import');

const fs = require('fs');
const darkThemeVars = require('ng-zorro-antd/dark-theme');
const compactThemeVars = require('ng-zorro-antd/compact-theme');

const appStyles = 'src/styles.less'; // 应用的样式入口文件
let themeContent = `@import '${appStyles}';`;

function generateThemeCss(type) {
    themeContent = type === 'dark' ? `@import 'src/dark-theme.less';` : `@import 'src/compact-theme.less';`;

    return less.render(
        themeContent, {
        javascriptEnabled: true,
        plugins: [
            new LessPluginNpmImport({ prefix: '~' }),
            new LessPluginCleanCSS({ advanced: true })
        ],
        modifyVars: {
            'hack': `true;@import "${require.resolve('ng-zorro-antd/style/color/colorPalette.less')}";`,
            ...(type === 'dark' ? darkThemeVars : compactThemeVars)
        }
    }).then(data => {
        fs.writeFileSync(
            // 主题样式的输出文件
            `src/assets/themes/style.${type}.css`,
            data.css
        )
    }).catch(e => {
        // 记录渲染错误
        console.error(type, e);
    });
}


Promise.all([generateThemeCss('dark'),generateThemeCss('compact')]).then(() => {
    console.log('theme generate success ...');
},(err)=>{
    console.log(err);
});