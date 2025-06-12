


1. docker
```
docker run -d \
  --name dev-mysql \
  -e MYSQL_ROOT_PASSWORD=pass1234 \
  -e MYSQL_DATABASE=drizzle_db \
  -p 3306:3306 \
  mysql:8
```

```
npx drizzle-kit generate
```

```
npx drizzle-kit studio
```

2. workbench
- https://dev.mysql.com/downloads/workbench/

```
USE drizzle_db;

CREATE TABLE `todos` (
  `id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `content` varchar(255),
  `done` boolean DEFAULT false
);
```
