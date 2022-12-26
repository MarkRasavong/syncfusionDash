import React from 'react'

interface ButtonProps {
	bgColor: string
	color: string
	size: string
	text: string
	borderRadius: string
	icon?: JSX.Element
	bgHoverColor?: string
	width?: string
}

const Button = ({
	bgColor,
	color,
	size,
	text,
	borderRadius,
	bgHoverColor,
	icon,
	width,
}: ButtonProps) => (
	<button
		type="button"
		className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
		style={{ backgroundColor: bgColor, color, borderRadius }}
	>
		{icon} {text}
	</button>
)

Button.defaultProps = {
	icon: '',
	bgHoverColor: 'inherit',
	width: 'auto',
}

export default Button
