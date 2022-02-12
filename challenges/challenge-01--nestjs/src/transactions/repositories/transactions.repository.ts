import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';

export class TransactionsRepository extends Repository<Transaction> {}
