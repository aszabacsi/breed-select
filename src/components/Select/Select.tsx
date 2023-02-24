import ReactSelect from 'react-select';
import { IOption } from './types/Option';
import { SelectOption } from './SelectOption/SelectOption';
import styles from './Select.styles';

export interface ISelectProps<T> {
  options: T[];
  mapToOption: (option: T, index: number) => IOption; // TODO this is deprecated remove it
  extractId: (option: T) => string;
  placeholder: string;
  isLoading: boolean;
}

export const Select = <T extends Record<string, any>>({
  options,
  mapToOption,
  placeholder,
  isLoading,
}: ISelectProps<T>): JSX.Element => {
  const mappedOptions = options.map(mapToOption);
  return (
    <ReactSelect
      styles={styles}
      placeholder={placeholder}
      options={mappedOptions}
      defaultValue={mappedOptions[0]}
      formatOptionLabel={(option, { selectValue }) => {
        const isSelected =
          selectValue.length > 0 && selectValue[0].value === option.value;
        return <SelectOption {...option} selected={isSelected} />;
      }}
      isSearchable={false}
      isLoading={isLoading}
    />
  );
};
