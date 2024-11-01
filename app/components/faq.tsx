import { faqs } from '@/app/common/Data';

interface FAQProps {
    faq: typeof faqs[number];
    isOpen: boolean;
    onToggle: () => void;
}

export default function FAQ({ faq, isOpen, onToggle }: FAQProps) {
    return(

        <div 
            className="bg-gradient-to-br from-[#7B89B8]/10 to-[#B8C6E5]/10 backdrop-blur-sm rounded-lg overflow-hidden w-full max-w-4xl"
        >
            <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={onToggle}
            >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform ${
                        isOpen ? 'rotate-180' : ''
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
            <div
                className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
            >
                <p className="p-4 pt-0 text-gray-600">
                    {faq.answer}
                </p>
            </div>
        </div>
    )
}