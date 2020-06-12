import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <dvi className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
          label ? 
          (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`}>
                {label}
          </label>)
          : null
        }
    </dvi>
)

export default FormInput