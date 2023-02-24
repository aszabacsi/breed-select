import ReactSelect, { ActionMeta, SingleValue } from 'react-select';
import { IOption } from './types/Option';
import { SelectOption } from './SelectOption/SelectOption';
import styles from './Select.styles';
import { useMemo } from 'react';

export interface ISelectProps<T> {
  options: T[];
  mapToOption: (option: T, index?: number) => IOption; // TODO this is deprecated remove it
  extractId: (option: T) => string;
  placeholder: string;
  isLoading: boolean;
  onChange: (
    newValue: SingleValue<IOption>,
    actionMeta: ActionMeta<IOption>
  ) => void;
  value: T | undefined;
}

export const Select = <T extends Record<string, any>>({
  options,
  mapToOption,
  placeholder,
  isLoading,
  onChange,
  value,
}: ISelectProps<T>): JSX.Element => {
  const mappedOptions = useMemo(
    () => options.map(mapToOption),
    [options, mapToOption]
  );
  return (
    <ReactSelect
      onChange={onChange}
      value={!value ? undefined : mapToOption(value)}
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
