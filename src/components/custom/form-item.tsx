import { ReactElement } from 'react';

import { Control, ControllerRenderProps, FieldValues, Path, useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { FormControl, FormField, FormItem as FormItemUI, FormLabel, FormMessage } from '../ui/form';

type FormItemProps<T extends FieldValues, P extends Path<T>> = {
  control?: Control<T>;
  name: P;
  label?: string;
  required?: boolean;
  children: (field: ControllerRenderProps<T, P>) => ReactElement;
  direction?: 'row' | 'col';
  className?: string;
  labelStyles?: string;
  showErrorPopup?: boolean;
};

const FormItem = <T extends FieldValues, P extends Path<T>>({
  name,
  label,
  required,
  children,
  direction = 'col',
  className,
  labelStyles,
}: FormItemProps<T, P>) => {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItemUI
          className={cn(`relative flex flex-${direction} ${direction === 'row' && 'items-start'}`, className)}
        >
          {label && (
            <FormLabel className={cn(`gap-1 ${direction === 'row' && 'mt-1 items-start'}`, labelStyles)}>
              {label}
              {required && <span className="text-error">*</span>}
            </FormLabel>
          )}
          <div className="w-full">
            <FormControl>{children(field)}</FormControl>
            <FormMessage className="mt-1" />
          </div>
        </FormItemUI>
      )}
    />
  );
};
export default FormItem;
