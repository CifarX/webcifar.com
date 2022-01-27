import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateInitial(initials) {
    setValues({ ...values, ...initials });
  }

  function updateValue(e) {
    let { value } = e.target;
    if (e.target.type === 'number' || e.target.type === 'range') {
      value = parseInt(e.target.value);
    }
    setValues({
      ...values,
      [e.target.name]: value,
    });
  }

  function reset() {
    setValues(defaults);
  }

  return { values, updateValue, updateInitial, reset };
}
