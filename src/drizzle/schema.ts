import { mysqlTable, serial, varchar, boolean } from 'drizzle-orm/mysql-core';

export const todos = mysqlTable('todos', {
  id: serial('id').primaryKey(),
  content: varchar('content', { length: 255 }),
  done: boolean('done').default(false),
});
