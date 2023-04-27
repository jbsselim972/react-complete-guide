interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
  amount?: number;
}

interface UserData {
  name: string;
  street: string;
  postalCode: string;
  city: string;
}
