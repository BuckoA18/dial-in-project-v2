import { useNavigate } from "react-router";
import Header from "../ui/Header";
import Section from "../ui/Section";
import BeanForm from "../features/beans/components/BeanForm";

const NewBean = () => {
  const navigate = useNavigate();
  return (
    <main className="flex w-full flex-col gap-2 p-2 text-neutral-200">
      <Header className="sm:hidden">
        <Header.BackButton onClick={() => navigate(-1)} />
      </Header>
      <Section>
        {/* Form  for adding new beans */}
        <BeanForm />
      </Section>
    </main>
  );
};

export default NewBean;
