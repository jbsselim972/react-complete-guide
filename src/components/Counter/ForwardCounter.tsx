import Card from "./Card";
import useCounter from "./hooks/use-counter";

const ForwardCounter: React.FC = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
