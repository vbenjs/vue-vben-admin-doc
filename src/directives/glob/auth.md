# v-auth 指令

权限指令

## 使用

```vue
<template>
  <a-button v-auth="RoleEnum.SUPER" type="primary" class="mx-4"> 拥有super角色权限可见 </a-button>
  <a-button v-auth="'1000'" type="primary" class="mx-4"> 拥有code ['1000']权限可见 </a-button>
</template>
```

## value

### 权限模式为前端角色模式下

value 值可以在，传入相应的角色名即可判断该角色是否有相应的权限

### 权限模式为后台模式下

value 值可以在，传入相应的后台逻辑 code 即可判断该用户是否有相应的权限
