import renderer from 'react-test-renderer';
import { dogsMock, placeholderMock } from './fixtures';
import { Select } from './Select';

describe('Select unit tests', () => {
  it('should match snapshot', () => {
    const onChange = jest.fn();
    const tree = renderer
      .create(
        <Select
          value={dogsMock[0]}
          onChange={onChange}
          options={dogsMock.slice(0, 3)}
          extractId={(dog) => `${dog.id}`}
          mapToOption={(option) => ({
            value: `${option.id}`,
            label: option.name,
            secondaryLabel: option.temperament || '',
          })}
          isLoading={false}
          placeholder={placeholderMock}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
