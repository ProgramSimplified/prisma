# Prisma

![img](https://raw.githubusercontent.com/ProgramSimplified/prisma/master/assets/design.png)

Prisma 三个主要概念:

1. **Datamodel 数据模型**: 数据模型是 Prisma client 各类 API 操作的基础。
2. **Prisma server**: Prisma server 是一个连接到你的数据库的独立的基础组件。Prisma server 的主要职责是将 Prisma client 发出的请求转换为实际的数据库查询操作。
3. **Prisma client**: Prisma client 是一个自动生成的库，用于替代 API server 中的传统的 ORM 库。它连接到位于数据库上层的 Prisma server

- 查看帮助

```shell
$ prisma --help
```

- 初始化配置

生成 `prisma/schema.prisma` 默认的 schema, 和一个默认的 `.env` [dotenv](https://github.com/motdotla/dotenv) 文件

```shell
$ prisma init
```

- 生成工件, 比如 Prisma Client

```shell
$ prisma generate
```

- schema 同步迁移至数据库, 同时执行 `prisma generate`

```shell
$ prisma migrate dev
```