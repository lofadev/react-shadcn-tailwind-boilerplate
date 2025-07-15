import { Monitor, Moon, Sun } from 'lucide-react';

import { Theme, useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Item = {
  value: Theme;
  label: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    value: 'light',
    label: 'Light',
    icon: <Sun />,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: <Moon />,
  },
  {
    value: 'system',
    label: 'System',
    icon: <Monitor />,
  },
];

export function ThemeControl() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {theme === 'light' && <Sun className="h-[1.2rem] w-[1.2rem]" />}
          {theme === 'dark' && <Moon className="h-[1.2rem] w-[1.2rem]" />}
          {theme === 'system' && <Monitor className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item) => (
          <DropdownMenuItem key={item.value} onClick={() => setTheme(item.value)} className="cursor-pointer">
            {item.icon}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
