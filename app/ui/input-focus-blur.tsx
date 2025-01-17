"use client";

import type React from "react";
import { forwardRef, useState, useCallback, useEffect } from "react";

import { motion, type AnimationProps } from "motion/react";

import { tv } from "tailwind-variants";

interface InputFocusBlurProps extends React.ComponentProps<"input"> {}

const EIXO_X_PLACEHOLDER = 24;
const STANDARD_DURATION = 0.3;

const inputFocusBlurStyles = tv({
	slots: {
		baseStyle: `w-full h-8 px-2 flex items-center rounded-lg
    bg-transparent  transition-all duration-200 relative data-[filled=true]:border-neutral-300`,
		inputStyle: `flex-1 w-full h-full py-2 outline-none text-sm text-[#999]  bg-transparent relative z-[9999] placeholder:sr-only 
    disabled:cursor-not-allowed`,
		placeholderStyle: "text-sm text-[#666] absolute left-3",
	},
	variants: {
		disabled: {
			true: {
				baseStyle: "bg-neutral-200 dark:bg-neutral-800 cursor-not-allowed",
			},
		},
	},
});

const { baseStyle, inputStyle, placeholderStyle } = inputFocusBlurStyles();

export const InputFocusBlur = forwardRef<HTMLInputElement, InputFocusBlurProps>(
	({ placeholder, disabled, value, ...props }, ref) => {
		const [isFocus, setIsFocus] = useState(false);
		const [internalValue, setInternalValue] = useState("");

		const handle = useCallback((type: "focus" | "blur") => {
			setIsFocus(type === "focus");
		}, []);

		function observeFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
			setInternalValue(event.target.value);
		}

		const isFilled = internalValue.length > 0 || !!value;
		const isFocusOrFilled = isFocus || isFilled;

		const placeholderAnimation: AnimationProps["animate"] = isFocusOrFilled
			? {
					x: EIXO_X_PLACEHOLDER,
					filter: "blur(4px)",
					opacity: 0,
				}
			: {
					x: 0,
				};

		return (
			<div className="w-full max-w-[300px]">
				<div className={baseStyle({ disabled })} data-filled={isFilled}>
					<input
						ref={ref}
						type="text"
						className={inputStyle()}
						placeholder={placeholder}
						onFocus={() => handle("focus")}
						onBlur={() => handle("blur")}
						onChange={observeFieldChange}
						disabled={disabled}
						value={value}
						{...props}
					/>

					<motion.span
						className={placeholderStyle()}
						initial={{
							x: 0,
						}}
						animate={placeholderAnimation}
						transition={{
							easings: ["easeOut"],
							duration: STANDARD_DURATION,
						}}
					>
						{placeholder}
					</motion.span>
				</div>
			</div>
		);
	},
);

InputFocusBlur.displayName = "InputFocusBlur";
