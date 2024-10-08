import HomeNav from "../components/HomeNav";
import Testimonials from "../components/Testimonials";

function Homepage() {
	return (
		<main className='flex flex-col gap-4 text-slate-950'>
			<HomeNav />
			<div className='flex max-w-screen-2xl items-start justify-start px-8 mx-auto py-20 bg-lime-400 w-full rounded-2xl'>
				<div className='w-1/2 flex flex-col gap-6 items-start'>
					<h1 className='font-black text-6xl uppercase tracking-wider leading-tight'>
						Master Your Finances: Simple & Smart
					</h1>
					<p>
						A simple and smart tool to help you manage your finances and achieve financial success. Keep all your finances in
						one place, accessible anytime.
					</p>
					<button className='bg-white px-6 py-3 font-semibold mt-2 w-1/3 rounded-2xl hover:bg-zinc-100 transition-colors duration-300'>
						Log in
					</button>
				</div>
			</div>
			<div className='flex flex-col max-w-screen-2xl items-center justify-center px-8 mx-auto py-12 w-full rounded-2xl my-20 gap-12'>
				<h2 className='font-black text-3xl uppercase tracking-wide w-1/2 text-center'>
					Simple process to manage your personal finance
				</h2>
				<div className='flex gap-40'>
					<div className='flex flex-col items-center gap-4'>
						<div className='bg-lime-200 px-3 py-3 rounded-2xl shadow-md shadow-lime-300'>
							<img src='/money.svg' className='w-20 h-20' />
						</div>
						<div>
							<p className='font-semibold text-lg '>Create an account</p>
						</div>
					</div>

					<div className='flex flex-col items-center gap-4 mt-16'>
						<div className='bg-lime-200 px-3 py-3 rounded-2xl shadow-md shadow-lime-300'>
							<img src='/money.svg' className='w-20 h-20' />
						</div>
						<div>
							<p className='font-semibold text-lg '>Put your money</p>
						</div>
					</div>
					<div className='flex flex-col items-center gap-4'>
						<div className='bg-lime-200 px-3 py-3 rounded-2xl shadow-md shadow-lime-300'>
							<img src='/money.svg' className='w-20 h-20' />
						</div>
						<div>
							<p className='font-semibold text-lg '>Track your finance</p>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-lime-400 w-full'>
				<div className='flex max-w-screen-2xl items-center justify-between px-4 mx-auto py-20 w-full gap-24'>
					<div className='flex items-center justify-center w-1/2'>
						<img src='/money-tracking.jpg' className='w-full h-[800px] rounded-2xl' />
					</div>
					<div className='flex flex-col items-start w-1/2 gap-4 text-lime-950'>
						<h2 className='font-black text-3xl uppercase tracking-wide w-1/2 text-left'>Manage your money by one click</h2>
						<p className='w-2/3'>
							Save money when you send, spend and get paid in different currencies. All you need, in one account, whenever
							you need it.
						</p>
						<button className='bg-white px-6 py-3 font-semibold mt-2 w-1/3 rounded-2xl hover:bg-zinc-100 transition-colors duration-300'>
							Log in
						</button>
					</div>
				</div>
			</div>
			<Testimonials />
		</main>
	);
}

export default Homepage;
