CREATE TABLE `todos` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`content` varchar(255),
	`done` boolean DEFAULT false,
	CONSTRAINT `todos_id` PRIMARY KEY(`id`)
);
