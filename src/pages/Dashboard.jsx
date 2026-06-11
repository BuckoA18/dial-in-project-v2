import Header from "../ui/Header";
import OnTheGrinderCard from "../ui/OnTheGrinderCard";
import Section from "../ui/Section";

const Dashboard = () => {
  return (
    <div className="flex h-dvh w-full max-w-4xl flex-col bg-neutral-950 text-neutral-200 sm:h-full sm:rounded-2xl lg:mx-auto">
      <Header>
        <Header.PageTitle>Dashboard</Header.PageTitle>
      </Header>

      <main className="p-2">
        {/* On the grinder section */}
        <Section>
          <Section.Title>On the grinder</Section.Title>
          <OnTheGrinderCard />
        </Section>

        {/* Recent shots section */}
        <Section>
          <Section.Title>Recent shots</Section.Title>
          <ul>list of recent shot, filter methods?</ul>
        </Section>
      </main>
    </div>
  );
};

export default Dashboard;
