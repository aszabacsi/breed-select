import './FormControl.scss';

export interface IFormControlProps {
  label: string;
  children: React.ReactElement;
}

export const FormControl: React.FC<IFormControlProps> = ({
  children,
  label,
}) => (
  <label>
    <span className='form-control__label-text'>{label}</span>
    {children}
  </label>
);
