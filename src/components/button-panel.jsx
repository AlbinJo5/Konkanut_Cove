import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
const Option = ({ option, isActive }) => {
  return (
    <CSSTransition
      in={isActive}
      timeout={500}
      classNames="option"
      unmountOnExit
    >
      <div className="rounded-full bg-green-800 text-white font-bold px-4 py-2">
        {option}
      </div>
    </CSSTransition>
  );
};

export default function ButtonPanel (){
    const [activeIndex, setActiveIndex] = useState(0);
    const options=['Accommodation', 'Activities', 'Transport'];
    const handleClick = (index) => {
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    };
  
    const activeOption = options[activeIndex];
    const remainingOptions = options.filter((option) => option !== activeOption);
  
    return (
      <div className="flex">
        <TransitionGroup className="flex">
          <Option key={activeOption} option={activeOption} isActive={true} />
          {remainingOptions.map((option) => (
            <Option key={option} option={option} isActive={false} />
          ))}
        </TransitionGroup>
        <div
          className="rounded-full bg-green-800 text-white font-bold px-4 py-2 ml-2 cursor-pointer"
          onClick={() => handleClick((activeIndex + 1) % options.length)}
        >
          Next
        </div>
      </div>
    );
  };