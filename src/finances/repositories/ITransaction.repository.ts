import { FilterTransactionDTO } from '../dtos/filter-transaction.dto';
import { SearchTransactionDTO } from '../dtos/search-transaction.dto';
import { Transaction } from '../models/transaction.model';

export interface ITransactionRepository {
  createTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction>;
  getAllTransactions(): Promise<Transaction[]>;
  getFilteredTransactions(
    filterTransactionDTO: FilterTransactionDTO,
  ): Promise<Transaction[]>;
  searchTransactions(
    searchTransactionDTO: SearchTransactionDTO,
  ): Promise<Transaction[]>;
}
