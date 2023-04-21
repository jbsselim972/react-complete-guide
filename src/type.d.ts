interface Expense {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

interface ExpenseFormProps {
  onSaveExpenseData: ({}: Expense) => void;
  toggleForm: () => void;
}

interface ExpenseFilterProps {
  selectedYear: string;
  onSelectedYear: (year: string) => void;
}

interface ExpensesListProps {
  expenses: Expense[];
}

interface NewExpenseProps {
  onAddExpense: ({}: Expense) => void;
}

interface CardProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

interface ChartProps {
  dataPoints: ChartBar[];
}

interface ChartBar {
  value: number;
  label: string;
  maxValue?: number | null;
}

interface Auth {
  isAuthenticated: boolean;
  onLogout: () => void;
}

type RefType = {
  start: () => { focus: () => void };
};
