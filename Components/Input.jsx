import React from "react";

const Input = ({
  id,
  label,
  type = "text",
  name,
  formik,
  error = false,
  helperText,
}) => {
  return (
    <div className="flex flex-col mb-2">
      <label className="font-semibold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className={`border border-slate-300 px-4 py-2 outline-none rounded-md ${
          error && "border-red-400"
        }`}
        type={type}
        name={name}
        id={id}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {error && <small className="text-red-400">{helperText}</small>}
    </div>
  );
};

export default Input;
