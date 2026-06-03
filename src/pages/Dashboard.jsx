import React from "react";
import Button from "../ui/Button";

const Dashboard = () => {
  return (
    <main className="relative flex h-dvh grow rounded-t-2xl bg-neutral-800 p-2 text-neutral-200 sm:rounded-2xl">
      <section>
        <h2 className="text-lg font-semibold">Hi, John</h2>
        <Button className="fixed right-2 bottom-2 sm:right-4 md:hidden">
          +
        </Button>
      </section>
    </main>
  );
};

export default Dashboard;
