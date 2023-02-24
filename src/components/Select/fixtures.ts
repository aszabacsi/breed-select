import { IDog } from '../../types/IDog';
import breeds from '../../assets/breeds.json';

export const labelMock = 'Breeds';
export const placeholderMock = 'Choose breed';
export const dogsMock: IDog[] = [
  ...breeds.map(({ id, name, temperament }) => ({ id, name, temperament })),
  {
    id: breeds.length,
    name: 'Breed with a suuuuuuuuuuuuuuuuuuuuuuuuper looooooooooooooong nammeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    temperament: 'playful',
  },
];
