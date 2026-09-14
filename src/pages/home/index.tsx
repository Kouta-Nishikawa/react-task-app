import { Link } from "react-router-dom";
import styles from "../../styles/home.module.css"

export default function homePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>タスク管理アプリ</h1>
      <p className={styles.description}>
        React×Vite×React Routerで作るタスク管理アプリです。
      </p>
      <Link to="/task" className={styles.link}>
      タスク一覧へ
      </Link>
    </div>
  );
}