import { QuoteIcon } from "lucide-react";

export const Quote = ({ text }: { text: string }) => {
  return (
    <div className="max-w-md mx-auto px-8 py-6 relative">
      <QuoteIcon className="w-6 h-6 text-gray-600 fill-gray-600 absolute top-0 left-0" />
      <p className="text-gray-300 text-base md:text-lg italic pl-8 pt-2">
        {text}
      </p>
    </div>
  );
};
