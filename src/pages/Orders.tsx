import React from 'react'
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
	TextAlign,
} from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => (
	<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
		<Header title="Orders" category="Page" />
		<GridComponent
			id="gridcomp"
			dataSource={ordersData}
			contextMenuItems={contextMenuItems}
			allowPaging
			allowSorting
		>
			<ColumnsDirective>
				{ordersGrid.map((ele, idx) => (
					<ColumnDirective
						key={`ColDirect_${idx + Math.random()}`}
						headerText={ele.headerText}
						template={ele.template}
						textAlign={(ele.textAlign as TextAlign) || undefined}
						width={ele.width}
						field={ele.field}
						editType={ele.editType}
						format={ele.format}
					/>
				))}
			</ColumnsDirective>
			<Inject
				services={[
					Resize,
					Sort,
					ContextMenu,
					Filter,
					Page,
					ExcelExport,
					Edit,
					PdfExport,
				]}
			/>
		</GridComponent>
	</div>
)

export default Orders
