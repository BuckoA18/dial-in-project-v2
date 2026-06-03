import PullShotButton from "../ui/PullShotButton";
import { Coffee } from "lucide-react";

const Dashboard = () => {
  return (
    <main className="relative flex h-dvh grow rounded-t-2xl bg-neutral-800 p-2 text-neutral-200 sm:rounded-2xl">
      <section>
        <h2 className="text-lg font-semibold">Hi, John</h2>
        <PullShotButton className="fixed right-2 bottom-2 sm:hidden">
          <Coffee strokeWidth={2.2} size={28} className="" />
          <p className="hidden sm:block sm:text-base">Pull shot</p>
        </PullShotButton>
      </section>
    </main>
  );
};

export default Dashboard;
