## nginx 处理跨域

nginx 作为主流的服务容器，作为前端，nginx 的配置也是需要懂一些，配置和使用相当简单。示例配置如下：

```bash

http {
    # 开启gzip
    gzip on;
    # 开启gzip_static
    # gzip_static开启后可能会报错，需要安装相应的模块
    # 只有这个开启，vue文件打包的.gz文件才会有效果，否则不需要开启gzip进行打包
    gzip_static on;
    gzip_proxied any;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    #如果nginx中使用了多层代理 必须设置这个才可以开启gzip。
    gzip_http_version 1.0;
    gzip_comp_level 2;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary off;
    gzip_disable "MSIE [1-6]\.";


    server {
        listen       8080;
        server_name  localhost;


        # 接口代理，用于解决跨域问题
    		location /api {
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                # 后台接口地址
                proxy_pass http://110.110.1.1:8080/api;
                proxy_redirect default;
                add_header Access-Control-Allow-Origin *;
                add_header Access-Control-Allow-Headers X-Requested-With;
                add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
          }
          # 静态资源部署
        location /web {
            # 不缓存html，防止程序更新后缓存继续生效
            if ($request_filename ~* .*\.(?:htm|html)$)
              {
                add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
                access_log on;
              }
              # 这里是vue打包文件dist内的文件的存放路径
              root   /usr/local/nginx/html/web;
              index  index.html index.htm;
        }
        location / {
           # 当路由为history模式时，需要的配置
           try_files $uri $uri/ /index.html;
        }
    }
}

```
