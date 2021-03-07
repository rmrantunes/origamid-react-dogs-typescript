import styles from "./Input.module.css";

interface InputProps {
  label: string;
  type?: string;
  name: string;
}

export const Input = ({ label, type = "text", name }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input id={name} className={styles.input} {...{ type, name }} />
      <p className={styles.error}>Error</p>
    </div>
  );
};
