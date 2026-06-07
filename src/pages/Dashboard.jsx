import Header from "../ui/Header";
import OnTheGrinderCard from "../ui/OnTheGrinderCard";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
const Dashboard = () => {
  return (
    <main className="flex h-dvh w-full flex-col bg-neutral-950 text-neutral-200 sm:h-full sm:rounded-2xl">
      {/* Custom header for mobile only */}
      <Header className="sm:hidden">
        <Header.Logo />
        <Header.Actions />
      </Header>

      {/* On the grinder section */}
      <Section>
        <SectionTitle>On the grinder</SectionTitle>
        <OnTheGrinderCard />
      </Section>

      {/* Recent shots section */}
      <Section>
        <SectionTitle>Recent shots</SectionTitle>
        <ul>list of recent shot, filter methods?</ul>
      </Section>
    </main>
  );
};

export default Dashboard;
