import { Children, cloneElement } from "react";

const If = ({ children, predicate }) => {
  return Children.map(children, (child) => {
    return cloneElement(child, { predicate });
  });
};

const Then = ({ children, predicate }) => {
  return predicate ? <>{children}</> : <></>;
};

const Else = ({ children, predicate }) => {
  return !predicate ? <>{children}</> : <></>;
};

If.then = Then;
If.else = Else;

export default If;
