import { LoaderIcon, Tasks2Icon, TasksIcon } from "../assets/icons";
import { useGetTasks } from "../hooks/data/use-get-tasks";
import DashboardCard from "./DashboardCard";

const DashboardCards = () => {
  const { data: tasks } = useGetTasks();

  const notStartedTasks = tasks?.filter(
    (task) => task.status === "not_started"
  ).length;
  const doneTasks = tasks?.filter((task) => task.status === "done").length;
  const inProgressTasks = tasks?.filter(
    (task) => task.status === "in_progress"
  ).length;

  return (
    <div className="grid grid-cols-4 gap-9">
      <DashboardCard
        icon={<Tasks2Icon />}
        mainText={tasks?.length}
        secondaryText="Tarefas Totais"
      />

      <DashboardCard
        icon={<LoaderIcon />}
        mainText={notStartedTasks}
        secondaryText="Não Iniciadas"
      />

      <DashboardCard
        icon={<LoaderIcon />}
        mainText={inProgressTasks}
        secondaryText="Tarefas em Andamento"
      />

      <DashboardCard
        icon={<TasksIcon />}
        mainText={doneTasks}
        secondaryText="Tarefas Concluídas"
      />
    </div>
  );
};

export default DashboardCards;
