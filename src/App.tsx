import { Select } from './components/Select/Select';
import { labelMock, placeholderMock } from './components/Select/fixtures';
import { FormControl } from './components/FormControl/FormControl';
import { useBreeds } from './hooks/useBreeds';
import { Colors } from './components/Select/types/Colors';
import { SingleValue } from 'react-select';
import { IDog } from './types/IDog';
import { useState } from 'react';
import { IOption } from './components/Select/types/Option';

export const App = () => {
  const [selectedValue, setSelectedValue] = useState<IDog>();
  const { data: breeds, isLoading, error } = useBreeds();

  if (error) {
    return <span>{error}</span>; // TODO proper error handling
  }

  const handleSelect = (value: SingleValue<IOption>) => {
    setSelectedValue(breeds.find((breed) => `${breed.id}` === value?.value));
  };

  return (
    <div className='App'>
      <FormControl label={labelMock}>
        <Select
          value={selectedValue}
          onChange={handleSelect}
          options={breeds}
          extractId={(dog) => `${dog.id}`}
          mapToOption={(option, index) => ({
            label: option.name,
            secondaryLabel: option.temperament || '',
            value: `${option.id}`,
            color: index && index % 2 ? Colors.DARK_GREEN : Colors.YELLOW, // TODO get a real life color mapping
          })}
          placeholder={placeholderMock}
          isLoading={isLoading}
        />
      </FormControl>
    </div>
  );
};
