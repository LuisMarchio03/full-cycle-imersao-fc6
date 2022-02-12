import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { TransactionsRepository } from './repositories/transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionsRepository: TransactionsRepository,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const transaction = this.transactionsRepository.create({
      account_id: createTransactionDto.account_id,
      amount: createTransactionDto.amount,
    });
    return this.transactionsRepository.save(transaction);
  }

  async findAll() {
    return this.transactionsRepository.find();
  }
}
