import './InputField.css'

function InputField({ type, placeholder, value, onChange }) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  )
}

export default InputField