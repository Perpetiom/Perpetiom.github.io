// Dropdown.tsx
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";

type DropdownItem = {
    label: string;
    value: string;
    icon?: React.ReactNode;
    disabled?: boolean;
};

type DropdownProps = {
    items: DropdownItem[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
};

export default function Dropdown({ items, value, onChange, placeholder = "Select..." }: DropdownProps) {
    const selected = items.find((i) => i.value === value);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="min-w-[160px] justify-between">
          <span className="flex items-center gap-2">
            {selected?.icon}
              {selected?.label ?? placeholder}
          </span>
                    <span className="opacity-60">⌄</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {items.map((item) => (
                    <DropdownMenuItem
                        key={item.value}
                        disabled={item.disabled}
                        className="flex items-center gap-2"
                        onSelect={() => onChange?.(item.value)}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                        {value === item.value && <span className="ml-auto text-xs opacity-60">✓</span>}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
