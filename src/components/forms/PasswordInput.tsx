"use client"

import { useState } from "react";

interface PasswordInputProps {
    label?: string,
    placeholder?: string,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string,
    error?: string,
    name: string,
  }
  
  export default function PasswordInput({label,placeholder,onChange,value,className,error,name }:PasswordInputProps){

      const [isShow,setIsShow] = useState(false);

      return (
          <div className={`${className}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {label}
            </label>
            <div className="flex">
              <div className="relative w-full">
                <input name={name} value={value} className={`block w-full shadow-md p-3 text-sm text-gray-900 border border-gray-100 
                      rounded-md bg-gray-50 hover:outline-none focus:outline-none`} 
                      type={isShow ? 'text' : 'password'} 
                      onChange={onChange}
                      placeholder={`${placeholder}`}/>
                <button 
                  onClick={()=>{
                    setIsShow(!isShow)
                  }}
                  type="button" 
                  className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-white rounded-e-lg border 
                   focus:outline-none ">
                      {
                        !isShow ? (
                          <i className="w-4 h-4 text-black fi fi-rr-eye"></i>
                        ) : (
                          <i className="w-4 h-4 text-black fi fi-rr-eye-crossed"></i>
                        )
                      }
                      <span className="sr-only">Change Type</span>
                  </button>
              </div>
            </div>
            {
            error && (
              <span className="label-text text-xs text-red-500">{error}</span>
            )
          }
          </div>
      )
  
  }