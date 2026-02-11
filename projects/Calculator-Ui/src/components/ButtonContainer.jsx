import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  const buttons = ['AC','%','/','+','7','8','9','X','4','5','6','-','1','2','3','#','0',',','<-','='];
  return (
    <div className={styles.buttonContainer}>
      {buttons.map((item)=>{
        return <button className={styles.button}>{item}</button>
      })}
    </div>
  );
};

export default ButtonContainer;

