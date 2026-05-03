import styles from "./button.module.css";

interface IButtonProps {
  children: React.ReactNode;
}

function Button(props: IButtonProps) {
  return <button className={styles.button}>{props.children}</button>;
}

export default Button;
