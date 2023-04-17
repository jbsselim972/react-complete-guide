interface Expense {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

interface CardProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}
