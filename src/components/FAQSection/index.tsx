import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
}

interface FAQData {
  question: string;
  answer: string;
}

type OpenItemsState = Record<number, boolean>;

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  isFirst,
}) => {
  return (
    <div
      className="mb-6 bg-white shadow-[0_24.556px_32.742px_-14.734px_rgba(149,149,149,0.25)]"
      style={{ borderRadius: "4.911px" }}
    >
      <div
        className={`border border-gray-200 ${isFirst && isOpen ? "bg-gray-50" : "bg-white"
          } ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
      >
        <button
          onClick={onToggle}
          className="w-full px-6 py-5 text-left flex items-center hover:bg-gray-50 transition-colors"
        >
          <div className="pr-5">
            {isOpen ? (
              <Minus className="w-5 h-5 text-gray-600" />
            ) : (
              <Plus className="w-5 h-5 text-gray-600" />
            )}
          </div>
          <span className="text-base font-medium text-gray-900 pr-4">
            {question}
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="border-l border-r border-b border-gray-200 bg-gray-50 px-6 py-4 rounded-b-lg">
          <p className="text-gray-700 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<OpenItemsState>({ 0: true });

  const leftColumnData: FAQData[] = [
    {
      question: "What is Crosscheck?",
      answer:
        "Crosscheck is a browser extension that helps you report bugs with screen recording, console logs, network data, and more — all in one click.",
    },
    {
      question: "How does Crosscheck capture bugs?",
      answer:
        "Crosscheck automatically captures comprehensive debugging data including screen recordings, console logs, network requests, and browser information to help developers identify and fix issues quickly.",
    },
  ];

  const rightColumnData: FAQData[] = [
    {
      question: "Do I need technical knowledge to use it?",
      answer:
        "No technical knowledge required. Crosscheck is designed for everyone - from developers to QA testers to end users. Simply install and start reporting bugs with one click.",
    },
    {
      question: "Can I leave comments with the report?",
      answer:
        "Yes, you can add detailed comments, descriptions, and additional context to every bug report to help developers understand the issue better.",
    },
    {
      question: "Is the extension secure?",
      answer:
        "Absolutely. Crosscheck follows industry-standard security practices, encrypts all data transmission, and never accesses sensitive personal information.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-white w-full px-10 pt-20">
      <div className="mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Frequently Ask <span className="text-teal-400">Questions</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {leftColumnData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openItems[index] || false}
                onToggle={() => toggleItem(index)}
                isFirst={index === 0}
              />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumnData.map((item, index) => (
              <FAQItem
                key={index + leftColumnData.length}
                question={item.question}
                answer={item.answer}
                isOpen={
                  openItems[index + leftColumnData.length] || false
                }
                onToggle={() =>
                  toggleItem(index + leftColumnData.length)
                }
                isFirst={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;