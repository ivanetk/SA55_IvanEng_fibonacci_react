const DisplaySequences = (props) => {


  const fiboOutput = props.fibonacci.reduce((output, element) => {
    return output + element.toString() + " | ";
  }, "");

  const sortOutput = props.sorted.reduce((output, element) => {
    return output + element.toString() + " | ";
  }, "");

  return (
    <div>
      <div>Fibonacci Sequence: {fiboOutput}</div>
      <div>Sorted Sequence: {sortOutput}</div>
    </div>
  );
};

export default DisplaySequences;
