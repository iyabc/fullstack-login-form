import Button from "./Button";
import TextInput from "./TextInput";

const Form = ({ username, password, onValuesChange, onFormSubmit }) => {
  const isButtonDisabled = username.length === 0 || password.length === 0;

  return (
    <form
      onSubmit={onFormSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-fit"
      data-testid="login-form">
      <div className="mb-4">
        <TextInput
          id="username"
          type="text"
          placeholderText="Username"
          handleValueChanges={onValuesChange}
        />
      </div>
      <div className="mb-6">
        <TextInput
          id="password"
          type="password"
          placeholderText="Password"
          handleValueChanges={onValuesChange}
        />
      </div>
      <div className="flex items-center justify-end">
        <Button disabled={isButtonDisabled} />
      </div>
    </form>
  );
};

export default Form;
