import { Check, Minus } from 'lucide-react';

interface CustomCheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export function CustomCheckbox({ checked, indeterminate, onChange, label }: CustomCheckboxProps) {
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