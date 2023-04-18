interface Expense {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

interface ExpenseFormProps {
  onSaveExpenseData: ({}: Expense) => void;
}

interface NewExpenseProps {
  onAddExpense: ({}: Expense) => void;
}

interface CardProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}
