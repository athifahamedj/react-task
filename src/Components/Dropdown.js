import React, { useState } from 'react';

function Dropdown() {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: '',
    option2: '',
    option3: '',
  });

  const options = [
    'Option1',
    'Option2',
    'Option3',
    'Option4',
    'Option5',
    'Option6',
  ];

  const handleChange = (e, key) => {
    const newSelectedOptions = { ...selectedOptions };
    newSelectedOptions[key] = e.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const availableOptions = (key) => {
    // loop through selectedOptions object and remove used options
    const usedOptions = Object.values(selectedOptions).filter(
      (value) => {
        return value !== '';
      }
    );
    return options.filter((option) => {
      return !usedOptions.find((usedOption) => {
        return usedOption === option && option !== selectedOptions[key];
      });
    });
  };

  return (
    <div>
      <select
        onChange={(e) => handleChange(e, 'option1')}
        value={selectedOptions.option1}
      >
        <option value="">Select Option</option>
        {availableOptions('option1').map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
      <select
        onChange={(e) => handleChange(e, 'option2')}
        value={selectedOptions.option2}
      >
        <option value="">Select Option</option>
        {availableOptions('option2').map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
      <select
        onChange={(e) => handleChange(e, 'option3')}
        value={selectedOptions.option3}
      >
        <option value="">Select Option</option>
        {availableOptions('option3').map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;