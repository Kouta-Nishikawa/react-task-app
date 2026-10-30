import { TaskFormData } from "../../../types/task";
import styles from "../styles/taskForm.module.css";

type Props = {
  formData: TaskFormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  id?: string;
};

export default function TaskForm({ formData, onChange, onSubmit, id }: Props) { {/* 親コンポーネントからidを受け取る */}

  return (
    <form onSubmit={onSubmit} className={styles.form}>

      {/* 省略 */}

      <button type="submit" className={styles.submitButton}>
        {id ? "更新する" : "作成する"} {/* idの有無で編集か新規作成かを判定 */}
      </button>
    </form>
  );
}