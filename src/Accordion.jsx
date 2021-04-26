import { Children, cloneElement, useState } from 'react';

const Accordion = ({ children }) => {
  const [childOpenIdx, setChildOpenIdx] = useState(null);

  const handleChildToggle = (idx) => {
    if (childOpenIdx !== null && idx === childOpenIdx) {
      // if there was a child already open and it's the one just toggled,
      // we clear child open idx since user is closing it
      setChildOpenIdx(null);
    } else {
      // otherwise, we set new idx as child open
      setChildOpenIdx(idx);
    }
  };

  const enhancedChildren = Children.map(children, (child, idx) => {
    return cloneElement(child, {
      isOpen: idx === childOpenIdx,
      onToggle: () => handleChildToggle(idx),
    });
  });
  return <div className="Accordion">{enhancedChildren}</div>;
};

export default Accordion;
