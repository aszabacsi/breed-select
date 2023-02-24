import { Select } from './components/Select/Select';
import { labelMock, placeholderMock } from './components/Select/fixtures';
import { FormControl } from './components/FormControl/FormControl';
import { useBreeds } from './hooks/useBreeds';
import { Colors } from './components/Select/types/Colors';

export const App = () => {
  const { data: breeds, isLoading, error } = useBreeds();

  if (error) {
    return <span>{error}</span>; // TODO proper error handling
  }

  return (
    <div className='App'>
      <FormControl label={labelMock}>
        <Select
          options={breeds}
          extractId={(dog) => `${dog.id}`}
          mapToOption={(option, index) => ({
            label: option.name,
            secondaryLabel: option.temperament || '',
            value: `${option.id}`,
            color: index % 2 ? Colors.DARK_GREEN : Colors.YELLOW, // TODO get a real life color mapping
          })}
          placeholder={placeholderMock}
          isLoading={isLoading}
        />
      </FormControl>
    </div>
  );
};
