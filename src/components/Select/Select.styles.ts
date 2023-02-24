import { GroupBase, StylesConfig } from 'react-select';
import { Colors } from './types/Colors';
import { IOption } from './types/Option';

const noOnFocusBorder = {
  border: 0,
  boxShadow: 'none',
};

// TODO convert pixels to rem
const selectStyles: StylesConfig<IOption, false, GroupBase<IOption>> = {
  container: (base, state) => ({
    ...base,
    width: '535px',
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? Colors.GREEN : Colors.GREY,
    borderRadius: '16px',
    height: '48px',
    padding: '0 16px 0 16px',
    ...noOnFocusBorder,
  }),
  menu: (base) => ({
    ...base,
    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)', // TODO not sure if it does have effect
    borderRadius: '16px'
  }),
  option: (base) => ({
    ...base,
    margin: 0,
    backgroundColor: Colors.WHITE,
    '&:hover': {
      backgroundColor: Colors.GREEN,
    }
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  placeholder: (base) => ({
    ...base,
    fontWeight: 300,
  })
};

export default selectStyles;