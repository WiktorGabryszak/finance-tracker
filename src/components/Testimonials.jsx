import { useState } from "react";

const testimonials = [
	{
		id: 1,
		name: "Emma P.",
		feedback:
			"Using this money tracking app has completely transformed how I manage my finances. I can easily see where my money is going, and for the first time, I feel in control of my budget!",
	},
	{
		id: 2,
		name: "Michael S.",
		feedback:
			"I’ve tried several budgeting tools, but this one stands out. It's simple to use, and the visual breakdowns make saving so much easier. I’ve finally built a saving habit I can stick to.",
	},
	// {
	// 	id: 3,
	// 	name: "Lena M.",
	// 	feedback:
	// 		"This app has been a game-changer for tracking my daily expenses. I’ve cut down on unnecessary spending and managed to save more in just a few months than I did all last year.",
	// },
	// {
	// 	id: 4,
	// 	name: "David H.",
	// 	feedback:
	// 		"I love how this tool keeps me organized without being overwhelming. It’s helped me set clearer financial goals and track my progress every step of the way.",
	// },
	// {
	// 	id: 5,
	// 	name: "Sarah T.",
	// 	feedback:
	// 		"The best part about this money tracker is how effortless it is. I can track transactions in seconds, and seeing the bigger financial picture motivates me to keep improving.",
	// },
];

function Testimonials() {
	const [testi, setTesti] = useState([
		{
			id: 1,
			name: "Emma P.",
			feedback:
				"Using this money tracking app has completely transformed how I manage my finances. I can easily see where my money is going, and for the first time, I feel in control of my budget!",
		},
		{
			id: 2,
			name: "Michael S.",
			feedback:
				"I’ve tried several budgeting tools, but this one stands out. It's simple to use, and the visual breakdowns make saving so much easier. I’ve finally built a saving habit I can stick to.",
		},
	]);

	

	return (
		<div className='flex max-w-screen-2xl items-center justify-center px-8 mx-auto py-12 w-full rounded-2xl my-20 gap-12'>
			<div className='flex flex-col gap-12 w-1/2 text-left'>
				<h2 className='font-black text-5xl uppercase tracking-wide'>Trusted by people for our reliability and quality</h2>
				<div className='flex gap-4'>
					<button className='bg-slate-200 w-16 h-16 rounded-full font-semibold hover:bg-slate-300 transition-colors duration-200'>
						Previous
					</button>
					<button className='bg-slate-200 w-16 h-16 rounded-full font-semibold hover:bg-slate-300 transition-colors duration-200'>
						Next
					</button>
				</div>
			</div>

			<div className='flex w-1/2 gap-4 overflow-hidden '>
				{testi.map((testi) => (
					<div className='flex flex-col w-1/2 bg-lime-400 px-8 py-16 rounded-2xl gap-8 text-lime-950' key={testi.id}>
						<img src='/money.svg' className='w-24 h-24 rounded-full' />
						<p className='font-medium text-lg'>&quot;{testi.feedback}&quot;</p>
						<p className='font-bold text-base bg-lime-950 text-lime-400 px-4 py-2 w-1/2 rounded-full text-center'>
							{testi.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Testimonials;
