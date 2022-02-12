import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/database/database.sqlite',
      migrations: ['src/database/migrations/*.ts'],
      entities: ['src/**/entities/*.ts'],
      cli: {
        migrationsDir: 'src/db/migrations',
        entitiesDir: 'src/**/entities',
      },
    }),

    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
