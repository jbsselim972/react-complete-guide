import { CSSProperties, FC, PropsWithChildren } from "react";

import "./Card.css";

const Card: FC<PropsWithChildren<{ style: CSSProperties }>> = ({
  style,
  children,
}) => {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
};

export default Card;
