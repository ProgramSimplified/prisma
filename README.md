# Prisma

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