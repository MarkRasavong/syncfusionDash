import React from 'react'
import {
	ColumnDirective,
	ColumnsDirective,
	GridComponent,
	Inject,
	Page,
	Search,
	TextAlign,
	Toolbar,
} from '@syncfusion/ej2-react-grids'
import { Header } from '../components'
import { employeesData, employeesGrid } from '../data/dummy'

const Employees = () => (
	<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
		<Header title="Employees" category="Page" />
		<GridComponent
			dataSource={employeesData}
			toolbar={['Search']}
			width="auto"
			allowPaging
			allowSorting
		>
			<ColumnsDirective>
				{employeesGrid.map((ele, idx) => (
					<ColumnDirective
						key={`ColDirect_${idx + Math.random()}`}
						headerText={ele.headerText}
						template={ele.template}
						textAlign={(ele.textAlign as TextAlign) || undefined}
						width={ele.width}
						field={ele.field}
						format={ele.format}
					/>
				))}
			</ColumnsDirective>
			<Inject services={[Page, Search, Toolbar]} />
		</GridComponent>
	</div>
)

export default Employees
