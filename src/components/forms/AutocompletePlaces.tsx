"use client";

import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";


interface AutoCompleteProps {
    label?: string,
    placeholder?: string,
    value?: string,
    className?: string,
    error?: string,
    name: string,
    onPlaceSelected?: () => void; 
  }
  

export default function AutoCompletePlaces({ label,placeholder,value,className,onPlaceSelected,error,name }:AutoCompleteProps){
    return (
        <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <Autocomplete
            className="block w-full shadow-md p-3 text-sm text-gray-900 border border-gray-100 
            rounded-md bg-gray-50 hover:outline-none focus:outline-none"
            placeholder={placeholder}
              apiKey={'AIzaSyBf6xKlSKnCS9F59L5EqvUgRXN0MuzdfpU'}
            />
        </div>
    )
}