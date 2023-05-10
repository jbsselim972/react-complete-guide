interface Expense {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

interface ExpenseFormProps {
  onSaveExpenseData: (_: Expense) => void;
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
  onAddExpense: (_: Expense) => void;
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

interface Task {
  id: string;
  text: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
}
