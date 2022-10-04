import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="before:block before:w-2 before:h-full before:bg-sky-300/50 before:ml-4 container mx-auto py-4 flex gap-2 lg:gap-4">
			<div className='py-4'>
				<h1 className='font-bold text-5xl lg:text-9xl text-transparent bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text'>Halo Dunia!</h1>
				<p className='font-sans text-sm lg:text-lg text-slate-50'>Lorem ipsum dolor sit adipisicing elit. Vel repellat, reprehenderit ipsa quos corporis, voluptatibus expedita est perspiciatis error numquam. Provident quam sapiente asperiores quisquam doloribus laudantium, assumenda dignissimos. Obcaecati accusantium ea illum incidunt beatae, libero asperiores cumque delectus. Ipsa placeat possimus id! Maxime animi minus nobis deleniti unde delectus dolore, architecto expedita doloremque libero obcaecati mollitia inventore in, nam iste alias excepturi vero aperiam ratione nostrum voluptatem? Dignissimos necessitatibus blanditiis ea harum itaque doloremque laboriosam, magnam nesciunt expedita?</p>
			</div>
		</div>
	)
}

export default App
