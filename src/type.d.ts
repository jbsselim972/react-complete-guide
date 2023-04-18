interface Expense {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

interface ExpenseFormProps {
  onSaveExpenseData: ({}: Expense) => void;
}

interface ExpenseFilterProps {
  selectedYear: string;
  onSelectedYear: (year: string) => void;
}

interface NewExpenseProps {
  onAddExpense: ({}: Expense) => void;
}

interface CardProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}
