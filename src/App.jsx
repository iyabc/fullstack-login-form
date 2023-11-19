import { useState } from "react";
import Form from "./components/Form";

const formDefaultValues = {
  username: "",
  password: "",
};

function App() {
  const [form, setForm] = useState(formDefaultValues);

  const handleFormValuesChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (form.username === "root" && form.password === "root") {
      alert("Login success!");
    } else {
      alert("Login failed!");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      data-testid="app-component">
      <Form
        username={form.username}
        password={form.password}
        onValuesChange={handleFormValuesChange}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;
