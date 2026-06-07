import { useNavigate } from "react-router";
import Header from "../ui/Header";
import BeansList from "../ui/BeansList";

const Beans = () => {
  const navigate = useNavigate();
  return (
    <main className="grow rounded-t-2xl bg-neutral-950 p-2">
      <Header className="sm:hidden">
        <Header.BackButton onClick={() => navigate(-1)} />
      </Header>

      {/* List of added beans, first option being create new? */}
      <BeansList>

      </BeansList>
    </main>
  );
};

export default Beans;

{
  id: 1,
  name: "Bean name",
  roastery: "dsdsd"
}
