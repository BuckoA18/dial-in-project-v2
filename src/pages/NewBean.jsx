import { useNavigate } from "react-router";
import BeanForm from "../features/beans/components/BeanForm";
import Header from "../ui/Header";

const NewBean = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full max-w-4xl flex-col gap-2 text-neutral-200 lg:mx-auto">
      <Header>
        <Header.PageTitle>New Bean</Header.PageTitle>
        <Header.BackButton onNavigate={() => navigate(-1)} />
      </Header>

      <main className="flex h-full p-2 sm:p-4">
        <BeanForm />
      </main>
    </div>
  );
};

export default NewBean;
