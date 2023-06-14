import React from "react";

interface checkBoxProps {
  label: string;
  value: string;
}

const CheckBox: React.FC<checkBoxProps> = ({ label, value }) => {
  const condition = false;

  const [isChecked, setIsChecked] = React.useState(condition);

  React.useEffect(() => {
    if (isChecked && !condition) {
    }

    if (!isChecked && condition) {
    }
  }, [isChecked]);

  function onCheckedChange() {
    setIsChecked((prev) => {
      return !prev;
    });
  }

  return (
    <label>
      <input
        type="checkbox"
        value={value}
        onChange={onCheckedChange}
        checked={isChecked}
      />
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
