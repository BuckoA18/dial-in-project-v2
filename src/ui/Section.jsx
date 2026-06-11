const Section = ({ children }) => {
  return <section className="p-2">{children}</section>;
};

Section.Title = ({ children }) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};
export default Section;
