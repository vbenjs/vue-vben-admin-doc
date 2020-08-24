## 说明

ls-lint 用于校验项目内文件及文件夹的命名风格，可以统一项目文件命名风格

## 配置

ls-lint 配置文件位于 根目录下 **.ls-lint.yml**

```bash

ls:
# 需要校验的文件夹
  src/*:
    .js: kebab-case | PascalCase
    .vue: PascalCase | regex:^index
    .ts: camelCase | PascalCase
    .d.ts: kebab-case
    .mock.ts: kebab-case
    .data.ts: camelCase | kebab-case
    .test-d.ts: kebab-case
    .spec.ts: camelCase | PascalCase
    .mock.ts: camelCase
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

## 校验

当使用 git 提交的时候会触发 git hook 进行校验

**手动校验**

```bash
yarn run ls-lint

# or
npm run ls-lint

```
