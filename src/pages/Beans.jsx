import { useNavigate } from "react-router";
import { useGetBeans } from "../features/beans/hooks/useGetBeans";
import Header from "../ui/Header";
import BeansList from "../features/beans/components/BeansList";
import BeansItem from "../features/beans/components/BeansItem";
import LinkButton from "../ui/LinkButton";

const Beans = () => {
  const navigate = useNavigate();
  const { data: beans, error, isPending } = useGetBeans();

  return (
    <main className="grow rounded-t-2xl bg-neutral-950 p-2">
      <Header className="sm:hidden">
        <Header.BackButton onClick={() => navigate(-1)} />
      </Header>

      {/* List of added beans, first option being create new? */}
      <BeansList isPending={isPending}>
        <LinkButton
          to="new"
          className="rounded-2xl border-2 border-neutral-200 p-2 text-neutral-200"
        >
          Add Bean
        </LinkButton>
        {beans?.map((bean) => (
          <BeansItem key={bean.id} bean={bean} />
        ))}
      </BeansList>
    </main>
  );
};

export default Beans;
