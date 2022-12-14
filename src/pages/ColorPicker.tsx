import React from 'react'
import {
	ColorPickerComponent,
	ColorPickerEventArgs,
} from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'

const change = (args: ColorPickerEventArgs) => {
	;(document.getElementById('preview') as HTMLElement).style.backgroundColor =
		args.currentValue.hex
}

const ColorPicker = () => (
	<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
		<Header category="App" title="Color Picker" />
		<div className="text-center">
			<div id="preview" />
			<div className="flex justify-center items-center gap-20 flex-wrap">
				<div>
					<p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
					<ColorPickerComponent
						id="inline-pallete"
						mode="Palette"
						modeSwitcher={false}
						showButtons={false}
						change={change}
						inline
					/>
				</div>
				<div>
					<p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
					<ColorPickerComponent
						id="inline-pallete"
						mode="Picker"
						modeSwitcher={false}
						showButtons={false}
						change={change}
						inline
					/>
				</div>
			</div>
		</div>
	</div>
)

export default ColorPicker
