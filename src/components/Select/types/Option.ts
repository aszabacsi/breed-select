import { Colors } from './Colors';

export interface IOption {
  readonly label: string;
  readonly secondaryLabel: string;
  readonly value: string;
  readonly color?: Colors;
}
