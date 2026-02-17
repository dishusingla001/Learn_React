import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({getButtonValue}) => {
  const buttons = ['AC','%','/','+','7','8','9','*','4','5','6','-','1','2','3','#','0',',','<-','='];
  return (
    <div className={styles.buttonContainer}>
      {buttons.map((item)=>{
        return <button key={item} onClick={getButtonValue} className={styles.button}>{item}</button>
      })}
    </div>
  );
};

export default ButtonContainer;

