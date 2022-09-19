import { Children, cloneElement, useState, useEffect } from "react";

//This is not dynamic, will just work at first shot
const Switch = ({ predicate, children }) => {
  const [match, setMatch] = useState(false);
  const handleMatch = () => setMatch(true);

  return Children.map(children, (child) => {
    return cloneElement(child, { predicate, handleMatch, match });
  });
};

const Case = ({ predicate, value, handleMatch, children }) => {
  useEffect(() => {
    if (predicate === value) {
      return handleMatch();
    }
  }, []);
  return predicate === value ? <>{children}</> : <></>;
};

const Default = ({ children, match }) => {
  return !match ? <>{children}</> : <></>;
};

Switch.case = Case;
Switch.default = Default;

export default Switch;
