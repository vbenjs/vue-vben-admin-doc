# Lint

## 介绍

::: tip 使用 lint 的好处

具备基本工程素养的同学都会注重编码规范，而代码风格检查（Code Linting，简称 Lint）是保障代码规范一致性的重要手段。

遵循相应的代码规范有以下好处

- 较少 bug 错误率
- 高效的开发效率
- 更高的可读性

:::

项目内集成了以下几种代码校验方式

1. eslint 用于校验代码格式规范
2. ls-lint 用于校验文件及文件夹命名规范
3. commitlint 用于校验 git 提交信息规范
4. stylelint 用于校验 css/less 规范
5. prettier 代码格式化

::: warning

lint 不是必须的，但是很有必要，一个项目做大了以后或者参与人员过多后，就会出现各种个样的代码封装，对后续的管理造成了一定的麻烦

:::

## ESLint

ESLint 是一个代码规范和错误检查工具，有以下几个特性

- 所有东西都是可以插拔的。你可以调用任意的 rule api 或者 formatter api 去打包或者定义 rule or formatter。
- 任意的 rule 都是独立的
- 没有特定的 coding style，你可以自己配置

### 手动校验代码

```bash
# 执行下面代码.能修复的会自动修复，不能修复的需要手动修改
yarn run lint:eslint
```

### 配置项

项目的 eslint 配置位于根目录下 **.eslintrc.js**内，可以根据团队自行修改代码规范

### 编辑器配合

推荐使用 vscode 进行开发，vscode 自带 eslint 插件，可以自动修改一些错误

同时项目内也自带了 vscode eslint 配置，具体在`.vscode/setting.json`文件夹内部

只要使用 vscode 开发就可以不用任何设置即可使用

## CommitLint

在一个团队中，每个人的 git 的 commit 信息都不一样，五花八门，没有一个机制很难保证规范化，如何才能规范化呢？可能你想到的是 git 的 hook 机制，去写 shell 脚本去实现。这当然可以，其实 JavaScript 有一个很好的工具可以实现这个模板，它就是 commitlint。

commitlint 主要用于校验 git 提交信息规范

### 配置

commit-lint 的配置位于项目根目录下**commitlint.config.js**

### Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `mod` 不确定分类的修改
  - `wip` 开发中
  - `types` 类型修改

### 如何关闭

在`.husky/commit-msg`内注释以下代码即可

```bash
# npx --no-install commitlint --edit "$1"
```

### 示例

```bash

git commit -m 'feat(home): add home page'

```

## Ls-Lint

ls-lint 用于校验项目内文件及文件夹的命名风格，可以统一项目文件命名风格

### 配置

ls-lint 配置文件位于 根目录下 **.ls-lint.yml**

```bash

ls:
# 需要校验的文件夹
  src/*:
    .js: kebab-case | PascalCase
    # 大写开头,或者 index.vue
    .vue: PascalCase | regex:^index
    .ts: camelCase | PascalCase
    .d.ts: kebab-case
    .mock.ts: kebab-case
    .data.ts: camelCase | kebab-case
    .test-d.ts: kebab-case
    .spec.ts: camelCase | PascalCase
# 需要忽略的文件夹
ignore:
  - node_modules
  - .git
  - .circleci
  - .github
  - .vscode
  - dist
  - .local

```

### 校验

当使用 git 提交的时候会触发 git hook 进行校验

**手动校验**

```bash
yarn run ls-lint

# or
npm run ls-lint

```

::: warning 注意

在最新版的 macbook pro M1 中不能使用,在关闭的同时还需要删除依赖

在 package.json 内删除下面依赖

```bash

@ls-lint/ls-lint

```

删除后才可以正确安装

:::

### 如何关闭

在`.husky/pre-commit`内注释以下代码即可

```bash
# npm run lint:ls-lint
```

## Stylelint

stylelint 用于校验项目内部 css 的风格,加上编辑器的自动修复，可以很好的统一项目内部 css 风格

### 配置

stylelint 配置位于根目录下**stylelint.config.js**

### 编辑器配合

如果您使用的是 vscode 编辑器的话，只需要安装下面插件，即可在保存的时候自动格式化文件内部 css 样式

**插件**

[StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Prettier

prettier 可以用于统一项目代码风格,统一的缩进，单双引号，尾逗号等等风格

### 配置

prettier 配置文件位于项目根目录下**prettier.config.js**

### 编辑器配合

如果您使用的是 vscode 编辑器的话，只需要安装下面插件，即可在保存的时候自动格式化文件内部 js 格式

**插件**

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Git Hook

git hook 一般结合各种 lint，在 git 提交代码的时候进行代码风格校验，如果校验没通过，则不会进行提交。需要开发者自行修改后再次进行提交

### husky

有一个问题就是校验会校验全部代码，但是我们只想校验我们自己提交的代码，这个时候就可以使用 husky。

最有效的解决方案就是将 Lint 校验放到本地，常见做法是使用 husky 或者 pre-commit 在本地提交之前先做一次 Lint 校验。

项目在 `.husky` 内部定义了相应的 hooks

### 如何关闭

```bash
# 删除husky依赖即可
yarn remove huksy

```

### lint-staged

用于自动修复提交文件风格问题

**lint-staged** 配置位于项目`.husky`目录下 **lintstagedrc.js**

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
