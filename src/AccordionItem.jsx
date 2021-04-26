const AccordionItem = ({ isOpen, children, title, onToggle }) => {
  return (<div>
    <button type="button" onClick={onToggle}>{title}</button>
    {isOpen && <div>{children}</div>}
  </div>);
};

export default AccordionItem;
