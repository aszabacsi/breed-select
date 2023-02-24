import { IOption } from '../types/Option';
import './SelectOption.scss';

export interface ISelectOptionProps extends IOption {
  selected?: boolean;
}

export const SelectOption: React.FC<ISelectOptionProps> = ({
  label,
  secondaryLabel,
  color,
  selected,
}) => {
  const style = {
    '--dot-color': color,
  } as any; // TODO find a way to make this compatible with React.CSSProperties type
  return (
    <div className='select-option' style={style}>
      {selected ? (
        <span className='select-option__label'>{label}</span>
      ) : (
        <div className='select-option__label-container'>
          <p className='select-option__label'>{label}</p>
          <p className='select-option__secondary-label'>{secondaryLabel}</p>
        </div>
      )}
    </div>
  );
};
