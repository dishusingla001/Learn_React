function Hello(){

  let myName = 'Dishu';
  let number = 46;
  let fullName = () => {
    return `Dishu Singla`;
  }

  return <p>
    MessageNumber: {number}, I am your master {fullName()} 
  </p>
}

export default Hello;