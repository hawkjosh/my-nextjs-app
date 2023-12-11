import { twMerge } from 'tailwind-merge'

const Button = ({
	label,
	btnType,
	btnStyle,
	className,
	children,
	...props
}) => {
	return (
		<button
			type={btnType || 'button'}
			className={twMerge(
				'uppercase px-2 py-1 border w-fit rounded-md flex place-items-center place-content-center place-self-center cursor-pointer transition-all duration-300 hover:shadow-md hover:filter hover:brightness-105',
				btnStyle === 'btn' &&
					'text-sm bg-slate-200 border-slate-400 hover:bg-slate-400 hover:border-slate-600',
				btnStyle === 'link' &&
					'border-none hover:bg-transparent hover:border-none hover:shadow-none hover:filter-none hover:text-blue-500',
				btnStyle === 'icon' &&
					'text-2xl p-1 border-none rounded-full hover:transform hover:scale-125 hover:shadow-none hover:filter-none',
				props.disabled &&
					'text-gray-400 bg-gray-200 border-gray-200 cursor-not-allowed hover:bg-gray-200 hover:border-gray-200 hover:shadow-none hover:filter-none',
				className
			)}
			{...props}
		>
			{label || children}
		</button>
	)
}

export default Button
