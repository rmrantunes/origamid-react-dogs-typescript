import styles from "./Button.module.css";

interface ButtonProps {
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
