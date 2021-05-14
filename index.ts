import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 添加 user
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: {
  //         title: 'Hello World'
  //       }
  //     },
  //     profile: {
  //       create: {
  //         bio: 'I like turtles'
  //       }
  //     }
  //   }
  // })

  // 查询 user
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   }
  // })
  // console.dir(allUsers, { depth: null })

  // 更新 post
  // const post = await prisma.post.update({
  //   where: { id: 1 },
  //   data: { published: true }
  // })
  // console.log(post)

  // 通过条件查询
  // const filteredPosts = await prisma.post.findMany({
  //   where: {
  //     OR: [{ title: { contains: 'hello' } }, { content: { contains: 'hello' } }],
  //   },
  // })
  // console.log(filteredPosts)

  // 创建 post, 并关联 User
  // const post = await prisma.post.create({
  //   data: {
  //     title: 'Join us for Prisma Day 2020',
  //     author: {
  //       connect: { email: 'alice@prisma.io' },
  //     },
  //   },
  // })
  // console.log(post)

  // 查询 profile 对应的 posts, 通过关联关系
  // const posts = await prisma.profile
  // .findUnique({
  //   where: { id: 1 },
  // })
  // .user()
  // .posts()
  // console.log(posts)

  // 删除 User
  // const deletedUser = await prisma.user.delete({
  //   where: { email: 'yangyong@nb.com' },
  // })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
