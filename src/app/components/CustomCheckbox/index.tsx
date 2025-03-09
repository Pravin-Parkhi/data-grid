import { Check, Minus } from 'lucide-react';

interface CustomCheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

/**
 * CustomCheckbox Component
 * 
 * This component renders a custom checkbox with support for checked, unchecked, and indeterminate states.
 * It also allows an optional label to be displayed next to the checkbox.
 * 
 * Props:
 * - checked: Boolean value indicating whether the checkbox is checked.
 * - indeterminate: Optional boolean value indicating whether the checkbox is in an indeterminate state.
 * - onChange: Callback function to handle the change event when the checkbox is toggled.
 * - label: Optional string to display as a label next to the checkbox.
 * 
 * @param {CustomCheckboxProps} props - The props for the CustomCheckbox component.
 * @returns {JSX.Element} The rendered CustomCheckbox component.
 */
export function CustomCheckbox({ checked, indeterminate, onChange, label }: CustomCheckboxProps) {
  /**
   * Handles the click event on the checkbox button.
   * Toggles the checked state and calls the onChange callback with the new checked state.
   */
  return (
    <div className="checkbox-wrapper">
      <button
        onClick={() => onChange(!checked)}
        className={`checkbox-button ${checked || indeterminate ? 'checked' : ''}`}
      >
        {indeterminate ? (
          <Minus style={{ width: 12, height: 12, color: 'white' }} />
        ) : checked ? (
            <Check style={{ width: 12, height: 12, color: 'white' }} />
        ) : null}
      </button>
      {label && <span className="checkbox-label">{label}</span>}
    </div>
  );
}