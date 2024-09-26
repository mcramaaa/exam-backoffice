import React, { ChangeEvent } from "react";
import { Form, Input } from "antd";
import { Rule } from "antd/lib/form";

interface IEmailInputProps {
  name?: string;
  labelName?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  disabled?: boolean;
  require?: boolean;
  hideTittle?: boolean;
}

export function AntEmail(props: IEmailInputProps) {
  const {
    name,
    disabled,
    labelName,
    value,
    onChange,
    hideTittle,
    require,
    placeholder,
    className,
  } = props;
  const emailValidator: Rule[] = [
    {
      required: require,
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Email tidak valid",
    },
  ];

  return (
    <div>
      <label className={`${hideTittle && "hidden"} text-sm`}>{labelName}</label>
      <Form.Item name={name} rules={emailValidator}>
        <div className="border-b border-brand-dark">
          <Input
            // required={require}
            value={value}
            name={name}
            disabled={disabled}
            variant="borderless"
            onChange={onChange}
            placeholder={labelName ? `masukkan ${labelName}` : placeholder}
            // className={`${className} text-sm hover:border-brand-muted focus:border-brand`}
            // className={`${className} active:bg-gray-100 focus:bg-gray-100 hover:bg-gray-100 bg-gray-100 rounded-full `}
            className={`${className} ${
              disabled ? "text-black " : ""
              // : "active:bg-gray-100 focus:bg-gray-100 hover:bg-gray-100 bg-gray-100 rounded-full"
            } `}
          />
        </div>
      </Form.Item>
    </div>
  );
}

export default AntEmail;
