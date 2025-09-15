"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "md",
                                   className,
                                   ...props
                               }: ButtonProps) {
    return (
        <button
            className={clsx(
                "rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
                {
                    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":
                        variant === "primary",
                    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400":
                        variant === "secondary",
                    "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400":
                        variant === "outline",
                },
                {
                    "px-3 py-1 text-sm": size === "sm",
                    "px-4 py-2 text-base": size === "md",
                    "px-6 py-3 text-lg": size === "lg",
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
