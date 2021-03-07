import styles from "./Input.module.css";

interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  error: string | null;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => boolean;
}

export const Input = ({
  label,
  type = "text",
  name,
  value,
  error,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        className={styles.input}
        {...{ type, name, onChange, value, onBlur }}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
