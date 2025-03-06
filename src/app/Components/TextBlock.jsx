const TextBlock = ({ heading, description, className }) => {
  return (
    <div className={`flex-1 ${className} border p-4 hover:bg-blue-100 transition duration-300 rounded-lg`}>
      <h3 className="text-lg font-semibold capitalize mb-2">
        {heading}
      </h3>
      <p className="text-sm">
        {description}
      </p>
    </div>
  );
};

export default TextBlock;
