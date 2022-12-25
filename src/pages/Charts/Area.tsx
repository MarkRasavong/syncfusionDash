import React from 'react'
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DateTime,
	SplineAreaSeries,
	Legend,
	AxisModel,
	ChartSeriesType,
} from '@syncfusion/ej2-react-charts'

import {
	areaCustomSeries,
	areaPrimaryYAxis,
	areaPrimaryXAxis,
} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'

const Area = () => {
	const { currentMode } = useStateContext()

	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header category="Chart" title="Inflation Rate" />
			<div className="w-full">
				<ChartComponent
					id="area-chart"
					height="420px"
					primaryXAxis={areaPrimaryXAxis as AxisModel}
					primaryYAxis={areaPrimaryYAxis as AxisModel}
					chartArea={{ border: { width: 0 } }}
					tooltip={{ enable: true }}
					background={currentMode === 'Dark' ? '#33373E' : '#fff'}
				>
					<Inject services={[DateTime, Legend, SplineAreaSeries]} />
					<SeriesCollectionDirective>
						{areaCustomSeries.map((ele) => (
							<SeriesDirective
								key={`areaChart_SeriesDirective${Math.random()}`}
								name={ele.name}
								dataSource={ele.dataSource}
								xName={ele.xName}
								yName={ele.yName}
								opacity={Number(ele.opacity)}
								width={Number(ele.width)}
								type={ele.type as ChartSeriesType}
							/>
						))}
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</div>
	)
}
export default Area
