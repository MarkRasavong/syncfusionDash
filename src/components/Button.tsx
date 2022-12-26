import React from 'react'

interface ButtonProps {
	bgColor?: string
	color: string
	text?: string
	borderRadius: string
	icon?: JSX.Element
	bgHoverColor?: string
	width?: string
	size?: string
	onClick?: () => void
}

const Button = ({
	bgColor,
	color,
	text,
	borderRadius,
	bgHoverColor,
	icon,
	width,
	size,
	onClick,
}: ButtonProps) => (
	<button
		onClick={onClick}
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
	size: 'base',
	onClick: () => {},
	bgColor: '',
	text: '',
}

export default Button
