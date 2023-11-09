const Form = ({ username, password, onValuesChange, onFormSubmit }) => {
  const isButtonDisabled = username.length === 0 || password.length === 0;

  return (
    <form
      onSubmit={onFormSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-fit">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          onChange={onValuesChange}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          onChange={onValuesChange}
        />
      </div>
      <div className="flex items-center justify-end">
        <button
          className={`
            ${isButtonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}
            text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
          `}
          type="submit"
          disabled={isButtonDisabled}>
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Form;
