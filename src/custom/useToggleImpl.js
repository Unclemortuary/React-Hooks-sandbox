// This hook allows to create a toggle variable.
// Returns variable itself and toggle function which can set value either to 'true' or 'false' if parameter is provided
// or simply revert current value to opposite

import { useState } from "react";

const useToggle = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const toggleValue = (newValue) => setValue(currentValue => 
        typeof newValue === 'boolean' ? newValue : !currentValue);

    return [value, toggleValue];
};

export default useToggle;