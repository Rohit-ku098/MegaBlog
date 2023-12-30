import React, {useId} from 'react'

function Select({
    label,
    className='',
    options,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className="w-full">
      {label && <label htmlfor={id} className=""></label>}
      <select
        ref={ref}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select)
