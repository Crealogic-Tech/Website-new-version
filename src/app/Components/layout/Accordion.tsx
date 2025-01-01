'use client';
import { useState, useRef } from 'react';
import { gsap } from 'gsap';

interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionItemProps> = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);

    if (contentRef.current) {
      if (!isOpen) {
        // Expand content
        gsap.to(contentRef.current, {
          height: 'auto',
          duration: 0.5,
          ease: 'power1.out',
        });
      } else {
        // Collapse content
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power1.in',
        });
      }
    }
  };

  return (
    <div className="accordion-item border-b border-gray-700">
      <button
        className="flex items-center justify-between w-full text-left px-4 py-4 text-lg font-semibold text-orange-400 bg-transparent hover:bg-gray-800 transition duration-200"
        onClick={toggleAccordion}
      >
        <span>
          <span className="mr-2 text-orange-500">#{id}</span> {title}
        </span>
        <span className="transform transition-transform duration-200">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden text-white bg-gray-900 px-4"
        style={{ height: 0 }}
      >
        <div className="py-4">{content}</div>
      </div>
    </div>
  );
};


export default Accordion;