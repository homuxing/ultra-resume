This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
pnpm dev
```

## 构建 Docker 镜像

```bash
docker build -t my-resume .
```

打包镜像

```bash
docker save -o my-resume.image.tar my-resume
```

服务器使用

```bash
docker load -i /path/to/my-resume.image.tar

docker run -d -p port:3000 my-resume
```
