const Button = ({ disabled, onClick }) => {
  return (
    <button
      data-testid="submit-button"
      className={`
        ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}
        text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
      `}
      type="submit"
      disabled={disabled}
      onClick={onClick}>
      Sign In
    </button>
  );
};

export default Button;
