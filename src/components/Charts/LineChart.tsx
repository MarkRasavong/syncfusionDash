import React from 'react'
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
	Tooltip,
	LineSeries,
	AxisModel,
} from '@syncfusion/ej2-react-charts'

import {
	lineCustomSeries,
	LinePrimaryYAxis,
	LinePrimaryXAxis,
} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {
	const { currentMode } = useStateContext()

	return (
		<ChartComponent
			id="line-chart"
			height="420px"
			primaryXAxis={LinePrimaryXAxis as AxisModel}
			primaryYAxis={LinePrimaryYAxis as AxisModel}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			background={currentMode === 'Dark' ? '#33373E' : '#fff'}
		>
			<Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
			<SeriesCollectionDirective>
				{lineCustomSeries.map((ele) => (
					<SeriesDirective
						key={`lineChart_SeriesDirective${Math.random()}`}
						name={ele.name}
						dataSource={ele.dataSource}
						xName="x"
						yName="y"
						marker={{ visible: true, width: 10, height: 10 }}
						width={2}
						type="Line"
					/>
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	)
}
export default LineChart
