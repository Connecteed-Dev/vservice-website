interface ChecklistItemProps {
  text: string;
  isWhite?: boolean;
}

export function ChecklistItem({ text, isWhite = false }: ChecklistItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-v-light flex items-center justify-center mt-0.5">
        <svg
          className="w-3 h-3 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className={`text-sm md:text-base leading-relaxed ${isWhite ? 'text-white' : 'text-gray-600'}`}>
        {text}
      </p>
    </div>
  );
}
