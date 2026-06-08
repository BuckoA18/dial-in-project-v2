const BeansItem = ({ bean }) => {
  const { name, flavour, rousted_by, rosted_at, roast_level } = bean;
  console.log(bean);
  return (
    <li className="rounded-2xl border-2 border-neutral-200 p-2">
      <h3 className="text-neutral-200">{bean.name}</h3>
    </li>
  );
};

export default BeansItem;
