'use client';


import * as SelectPrimitive from '@radix-ui/react-select';
import {ChevronDown } from 'lucide-react';

const Select = SelectPrimitive.Root;
const SelectTrigger = SelectPrimitive.Trigger;
const SelectContent = SelectPrimitive.Content;
const SelectItem = SelectPrimitive.Item;
// const SelectLabel = SelectPrimitive.Label;
// const SelectValue = SelectPrimitive.Value;

const SelectComponent = () => {
  return (
    <Select>
      {/* Trigger Button */}
      <SelectTrigger className="flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2">
        Select an option
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectTrigger>

      {/* Dropdown content */}
      <SelectContent className="z-50 max-h-96 overflow-hidden rounded-md border bg-white shadow-md">
        {/* Options */}
        <SelectItem value="option1" className="cursor-pointer p-2 hover:bg-gray-100">
          Option 1
        </SelectItem>
        <SelectItem value="option2" className="cursor-pointer p-2 hover:bg-gray-100">
          Option 2
        </SelectItem>
        <SelectItem value="option3" className="cursor-pointer p-2 hover:bg-gray-100">
          Option 3
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
