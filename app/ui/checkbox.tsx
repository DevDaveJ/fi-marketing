import React, { useState } from "react";

interface CheckboxProps {
   label: string;
	name: string;
   checked?: boolean;
   onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
   label,
   checked = false,
   onChange,
}) => {
   const [isChecked, setIsChecked] = useState(checked);

   const handleChange = () => {
      setIsChecked(!isChecked);
      if (onChange) {
         onChange(!isChecked);
      }
   };

   return (
      <label className="flex ">
         <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            className="peer h-6 w-6 mr-3 border border-black outline-2 placeholder:text-gray-500"
         />
         <div>{label}</div>
      </label>
   );
};

export default Checkbox;
