import type { AutomationOption } from '../models/requestAction.types';

type AutomationOptionsProps = {
  options: AutomationOption[];
};

export function AutomationOptions({ options }: AutomationOptionsProps) {
  return (
    <div className="request-action-options">
      {options.map((option) => (
        <div
          className="request-action-options__item"
          key={option.id}
          style={{ opacity: 1 / (option.id * 1.5) }}
        >
          {option.text}
        </div>
      ))}
    </div>
  );
}
