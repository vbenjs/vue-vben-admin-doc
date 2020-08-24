## 说明

git hook 一般结合各种 lint，在 git 提交代码的时候进行代码风格校验，如果校验没通过，则不会进行提交。需要开发者自行修改后再次进行提交

## husky

有一个问题就是校验会校验全部代码，但是我们只想校验我们自己提交的代码，这个时候就可以使用 husky。

最有效的解决方案就是将 Lint 校验放到本地，常见做法是使用 husky 或者 pre-commit 在本地提交之前先做一次 Lint 校验。

项目在 package.json 内部定义了相应的 hooks

```bash

"husky": {
    "hooks": {
      # 在提交执行执行ls-lint和lint-staged
      "pre-commit": "ls-lint && lint-staged",
      # 校验过后使用commitlint进行git 提交信息校验
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
},

```

## lint-staged

用于自动修复提交文件风格问题

**lint-staged** 配置位于项目根目录下 **lint-staged.config**

```js
module.exports = {
  // 对指定格式文件 在提交的时候执行相应的修复命令
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write', 'git add .'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write', 'git add .'],
  '*.md': ['prettier --write'],
};
```
