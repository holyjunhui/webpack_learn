初始化npm
局部安装webpack
>mkdir webpack-demo && cd webpack-demo
>npm init -y
>npm install webpack webpack-cli --save-dev
验证webpack 安装成功
>$ ./node_modules/.bin/webpack -v
> 4.41.1 表示安装成功

npm run build 的原理 模块局部安装会在node_modules/.bin 目录下创建软连接
删除包 rm -rf dist

loader 链式调用的顺序说错了唉，应该是从右到左，先是 css-loader， 再是 style-loader