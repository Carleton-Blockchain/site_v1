import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";

interface FAQProps {
  faq: any;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQ({ faq, isOpen, onToggle }: FAQProps) {
  return (
    <div className="bg-gradient-to-br from-[#7B89B8]/10 to-[#B8C6E5]/10 backdrop-blur-sm rounded-lg overflow-hidden w-full max-w-4xl">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={onToggle}
      >
        <span className="font-medium text-gray-800">{faq.question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <motion.div
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        initial={false}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="p-6 text-gray-600 prose min-w-full">
          {documentToReactComponents(faq.answer.json)}
        </div>
      </motion.div>
    </div>
  );
}
