import { useNavigate } from "react-router";
import BeanForm from "../features/beans/components/BeanForm";
import Header from "../ui/Header";

const NewBean = () => {
  const navigate = useNavigate();
  return (
    <main className="flex h-full w-full flex-col gap-2 text-neutral-200">
      <Header>
        <Header.PageTitle>New Bean</Header.PageTitle>
        <Header.BackButton onNavigate={() => navigate(-1)} />
      </Header>
      {/* Form  for adding new beans */}
      <BeanForm />
    </main>
  );
};

export default NewBean;
