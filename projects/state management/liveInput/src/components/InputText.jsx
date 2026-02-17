import styles from "./InputText.module.css";

const InputText = ({value,onChange}) =>{
  return <input value={value} onChange={onChange} className={styles.input} type="text" />
}

export default InputText;