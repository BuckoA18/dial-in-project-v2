import AsideNav from "./AsideNav";

const Aside = () => {
  return (
    <aside className="hidden sm:flex sm:w-20 sm:rounded-2xl sm:bg-neutral-900 sm:p-2 lg:w-60">
      <AsideNav />
    </aside>
  );
};

export default Aside;
