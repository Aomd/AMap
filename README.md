# AMap TS高德开发api代码提示
---
使用
```
npm i aomd-amap


// 将node_modules/aomd-amap 移动至 node_modules/@types 文件夹内
move "./node_modules/aomd-amap" "./node_modules/@types/aomd-amap"

```

# or

``` json
// jsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonJS",
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "src/**/*",
    "node_modules/@types/**/*",
    "node_modules/aomd-amap/**/*",
  ],
  "path": {
    "@/*": ["./src/*"]
  }
}
```
