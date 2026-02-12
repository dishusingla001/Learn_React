const ErrorMessage = ({ items }) => {
  return <>{items.length == 0 ? <h3>I am Still Hungry</h3> : null}</>;
};

export default ErrorMessage;
