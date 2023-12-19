//types
import type { IZeroCrossIconProps } from '../../types/component-types';
//styles
import './zero-cross-icon.scss';

const CrossIcon = ({ size }: IZeroCrossIconProps): JSX.Element => {
  return (
    <>
      <svg
        className={`zero-cross-icon zero-cross-icon--${size}`}
        aria-label="X"
        role="img"
        viewBox="0 0 128 128"
      >
        <path d="M16,16L112,112"></path>
        <path d="M112,16L16,112"></path>
      </svg>
    </>
  );
};

export default CrossIcon;
