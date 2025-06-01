import { useState } from 'react';

import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { Input } from '../ui/input';

const InputPassword = (props: React.ComponentProps<'input'>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        id="password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        autoComplete="off"
        required
        {...props}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400 hover:text-gray-300"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeIcon className="h-5 w-5" aria-hidden="true" />
        ) : (
          <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default InputPassword;
