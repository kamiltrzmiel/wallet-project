import { passwordStrength } from 'check-password-strength';
import { StrengthBar } from './PasswordStrength.styled';

const PasswordStrength = ({ value }) => {
  const strength = passwordStrength(value, [
    {
      id: 0,
      value: 'Tooweak',
      minDiversity: 0,
      minLength: 0,
    },
    {
      id: 1,
      value: 'Weak',
      minDiversity: 2,
      minLength: 6,
    },
    {
      id: 2,
      value: 'Medium',
      minDiversity: 3,
      minLength: 8,
    },
    {
      id: 3,
      value: 'Strong',
      minDiversity: 4,
      minLength: 12,
    },
  ]).value;

  let progress;

  if (strength === 'Tooweak') {
    progress = 25;
  } else if (strength === 'Weak') {
    progress = 50;
  } else if (strength === 'Medium') {
    progress = 75;
  } else if (strength === 'Strong') {
    progress = 100;
  }

  // const howLong = value.length;

  // if (howLong <= 6) {
  //   progress = 25;
  // } else if (howLong <= 8) {
  //   progress = 50;
  // } else if (howLong <= 10) {
  //   progress = 75;
  // } else if (howLong <= 12) {
  //   progress = 100;
  // }

  return <StrengthBar value={progress} max="100" />;
};

export default PasswordStrength;
