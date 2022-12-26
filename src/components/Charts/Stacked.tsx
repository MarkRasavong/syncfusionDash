import React from 'react'
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
	ChartSeriesType,
} from '@syncfusion/ej2-react-charts'
import {
	stackedCustomSeries,
	stackedPrimaryXAxis,
	stackedPrimaryYAxis,
} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

interface StackedProps {
	width: string
	height: string
}

const Stacked = ({ width, height }: StackedProps) => {
	const { currentMode } = useStateContext()

	return (
		<ChartComponent
			width={width}
			height={height}
			id="charts"
			primaryXAxis={stackedPrimaryXAxis}
			primaryYAxis={stackedPrimaryYAxis}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			background={currentMode === 'Dark' ? '#33373E' : '#fff'}
			legendSettings={{ background: 'white' }}
		>
			<Inject services={[Legend, Tooltip, Category, StackingColumnSeries]} />
			<SeriesCollectionDirective>
				{stackedCustomSeries.map(
					({ dataSource, xName, yName, name, type }, idx) => (
						<SeriesDirective
							key={`stackCustomSeries${idx + Math.random()}`}
							dataSource={dataSource}
							name={name}
							xName={xName}
							yName={yName}
							type={type as ChartSeriesType}
						/>
					)
				)}
			</SeriesCollectionDirective>
		</ChartComponent>
	)
}

export default Stacked
