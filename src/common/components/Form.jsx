import React from "react";

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export const Input = (props) => {
  return <input {...props} />;
};

export const Select = ({ options, ...props }) => {
  return (
    <select {...props}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export const Field = ({
  innerClassName,
  requiredClassName = "text-rose-700",
  required,
  tag,
  title,
  children,
  ...props
}) => {
  const Wrapper = tag ?? "label";

  return (
    <Wrapper {...props}>
      <div className={`${innerClassName}`}>
        {title}
        {required && <span className="text-rose-700">&nbsp;*</span>}
      </div>
      {children}
    </Wrapper>
  );
};

export const FieldError = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
