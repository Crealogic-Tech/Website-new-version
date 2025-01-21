"use client";
import { useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionItemProps> = ({
  id,
  title,
  content,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.height = "0";
      }
    }
  }, [isOpen]);

  return (
    <div className="accordion-item faq-box">
      <button
        className="flex items-center justify-between w-full text-left px-4 py-4 text-lg font-semibold text-e bg-transparent transition duration-200"
        onClick={onToggle}
      >
        <div className="block md:hidden">
        <span className=" mr-2 text-black">#{id}</span>

        </div>
        <div className="flex gap-3">
          <span className="hidden md:block mr-2 text-black">#{id}</span>
          <span className="gradient-texts !text-left !text-lg md:!text-xl">{title}</span>
        </div>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "-rotate-180" : "rotate-0"
          } text-black`}
        >
          <FaChevronDown />
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden text-[#9ea1a5] "
        style={{ height: 0, transition: "height 0.5s ease" }}
      >
        <div className="py-4 px-5">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
