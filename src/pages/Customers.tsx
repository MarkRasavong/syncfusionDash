import React from 'react'
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Selection,
	Inject,
	Edit,
	Toolbar,
	Sort,
	Filter,
	TextAlign,
} from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => (
	<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
		<Header title="Customers" category="Page" />
		<GridComponent
			dataSource={customersData}
			toolbar={['Delete']}
			editSettings={{ allowDeleting: true, allowEditing: true }}
			width="auto"
			allowPaging
			allowSorting
		>
			<ColumnsDirective>
				{customersGrid.map((ele, idx) => (
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
			<Inject services={[Page, Selection, Edit, Sort, Filter, Toolbar]} />
		</GridComponent>
	</div>
)

export default Customers
