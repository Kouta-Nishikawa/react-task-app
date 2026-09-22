import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks } from "../hooks/getTasks";
import { Task } from "../../../types/task";
import TaskCard from "../components/TaskCard";

export default function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>タスク一覧</h1>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
        <Link to={`/tasks/${task.id}`}>
          <h3>ログイン機能を実装する</h3>
        </Link>
        <p>ステータス : 未完了</p>
        <p>優先度 : 高</p>
        <p>期限日 : 2025-02-10</p>
      </div>
    </div>
  );
}