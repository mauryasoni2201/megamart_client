import React from 'react';
import SelectProps from '../../models/SelectProps';

const Select:React.FC<SelectProps>= ({children,...props}) => {
    return <select {...props}>{children}</select>;
}

export default Select;
