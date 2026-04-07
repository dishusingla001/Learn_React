const Container = ({children}) => {
  return (
    <div className="card" style={{width: "70%",padding:"1rem"}}>
      {children}
    </div>
  );
};

export default Container;

