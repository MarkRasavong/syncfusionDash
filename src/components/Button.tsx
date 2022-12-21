import React from 'react'

interface ButtonProps {
	bgColor: string
	color: string
	size: string
	text: string
	borderRadius: string
}

const Button = ({ bgColor, color, size, text, borderRadius }: ButtonProps) => (
	<button
		type="button"
		className={`text-${size} p-3 hover:drop-shadow-xl`}
		style={{ backgroundColor: bgColor, color, borderRadius }}
	>
		{text}
	</button>
)

export default Button
