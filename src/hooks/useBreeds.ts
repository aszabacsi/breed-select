import axios from 'axios';
import { useEffect, useState } from 'react';
import { IDog } from '../types/IDog';

export const useBreeds = () => {
  const [breeds, setBreeds] = useState<IDog[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://api.thedogapi.com/v1/breeds')
      .then(response => {
        setBreeds(response.data);
      })
      .catch((err) => {
        setError(`${err}`)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  return { data: breeds, error, isLoading };
}