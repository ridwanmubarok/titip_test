
interface TextInputProps {
  label?: string,
  placeholder?: string,
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string,
  error?: string,
  name: string,
}

export default function TextInput({label,placeholder,onChange,value,className,error,name }:TextInputProps){
    return (
        <div className={`${className}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
          </label>
          <input name={name} value={value} className={`block w-full shadow-md p-3 text-sm text-gray-900 border border-gray-100 
                    rounded-md bg-gray-50 hover:outline-none focus:outline-none`} 
                    type="text" 
                    onChange={onChange}
                    placeholder={`${placeholder}`}/>
          {
            error && (
              <span className="label-text text-xs text-red-500">{error}</span>
            )
          }
        </div>
    )

}