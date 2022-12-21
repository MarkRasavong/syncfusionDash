import React from 'react'
import {
	SparklineComponent,
	Inject,
	SparklineTooltip,
} from '@syncfusion/ej2-react-charts'

interface SparklineProps {
	id: string
	height: string
	width: string
	color: string
	type: 'Line' | 'Column' | 'WinLoss' | 'Pie' | 'Area' | undefined
	currentColor: string
	// eslint-disable-next-line @typescript-eslint/ban-types
	data: Object[] | undefined
}

const SparkLine = ({
	id,
	width,
	height,
	color,
	type,
	currentColor,
	data,
}: SparklineProps) => (
	<SparklineComponent
		id={id}
		height={height}
		width={width}
		lineWidth={1}
		valueType="Numeric"
		fill={color}
		border={{ color: currentColor, width: 2 }}
		dataSource={data}
		xName="x"
		yName="y"
		type={type}
		tooltipSettings={{
			visible: true,
			// eslint-disable-next-line no-template-curly-in-string
			format: '${x}: data ${y}',
			trackLineSettings: { visible: true },
		}}
	>
		<Inject services={[SparklineTooltip]} />
	</SparklineComponent>
)

export default SparkLine
