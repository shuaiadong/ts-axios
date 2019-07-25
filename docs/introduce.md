# 目标 
- 学习typescript
- 了解axios
## 计划 2 周
## 本周 
 # 计划
- ✅bindURL 
    -  * @param url 特殊字符 | 已有参数（&拼接） | hash
        - hash ？ 什么场景 [#之后的参数会被忽略 - 导致没参数](https://www.jianshu.com/p/1e9552cff233)
    -  * @param params {} | [] | Date
- ✅headers
- ✅data (支持类型 Blob，BufferSource，FormData，URLSearchParams，ReadableStream，或USVString)
- ✅xhr 
- ✅demo的实现 
    - hot plugin 与 optput的chunkhash conenthash 不能同时使用
    - 热更细 moduel.hot typesript 报错 安装 @types/webpack-env
    - 报错 `TS7006: Parameter 'b' implicitly has an 'any' type.`
        - webpack transpileOnly 改为 false
        - 原来缺少插件 
        ```
            "tslint": "^5.18.0",
            "tslint-config-prettier": "^1.18.0",
            "tslint-config-standard": "^8.0.1",

        ```
- demo01
 - get
 - post
 - put
 - delete
 - options
 - head
 - patch