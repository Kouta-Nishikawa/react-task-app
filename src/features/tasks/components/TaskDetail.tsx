import { Link } from "react-router-dom";
import styles from "../styles/taskDetail.module.css";
import { getPriorityClass } from "../utils/priority";
import { getStatusLabel } from "../utils/status-label";
import type { Task } from "../../../types/task";

type Props = {
  task: Task;
};

export default function TaskDetail({ task }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{task.title}</h1>

      <p className={styles.description}>
        {task.description}
      </p>

      <p className={styles.info}>
        ステータス:{" "}
        <span
          className={`${styles.badge} ${
            task.status ? styles.completed : styles.incomplete
          }`}
        >
          {getStatusLabel(task.status)}
        </span>
      </p>

      <p className={styles.info}>
        優先度:{" "}
        <span
          className={`${styles.badge} ${getPriorityClass(
            task.priority,
            styles
          )}`}
        >
          {task.priority}
        </span>
      </p>

      <Link to="/tasks" className={styles.link}>
        タスク一覧へ戻る
      </Link>
    </div>
  );
}