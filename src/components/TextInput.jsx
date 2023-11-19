const TextInput = ({ id, type, placeholderText, handleValueChanges }) => {
  return (
    <div data-testid="text-input">
      <label
        data-testid={`${id}-label`}
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username">
        {placeholderText}
      </label>
      <input
        data-testid={`${id}-input`}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholderText}
        onChange={handleValueChanges}
      />
    </div>
  );
};

export default TextInput;
