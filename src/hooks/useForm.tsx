import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";

export default function useForm(initial: { [key: string]: any }) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // This function runs when the things we are watching change
    setInputs(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let value = e.target.value as string | number | boolean;
    const { name, type } = e.target;
    // TODO: check for email and password and make refactor to its own function
    // debugger;
    if (type === "number") {
      value = +value;
    }
    if (type === "select") {
      value = +value;
    }
    // if ('file' === type) {
    //   [value] = e.target.files;
    // }
    if (type === "checkbox") {
      value = e.target.checked;
    }

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  function forceUpdate(newInputs: { [key: string]: any }) {
    setInputs({
      ...inputs,
      ...newInputs,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ""])
    );
    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
    forceUpdate,
  };
}
