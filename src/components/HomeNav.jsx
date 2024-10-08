import { Link } from "react-router-dom";

function HomeNav() {
	return (
		<div className='flex justify-center items-center max-w-screen-2xl w-full mx-auto px-8 py-6'>
			<nav className='flex items-center w-full justify-between'>
				<Link to='/' className='flex items-center gap-2'>
					<span className='font-black text-xl tracking-widest uppercase italic '>Finance</span>
				</Link>
				<ul className='flex items-center gap-2 font-medium text-base '>
					<li className='px-3 py-1 rounded-full cursor-pointer hover:bg-slate-100 transition-colors duration-300'>Home</li>
					<li className='px-3 py-1 rounded-full cursor-pointer hover:bg-slate-100 transition-colors duration-300'>
						About Us
					</li>
					<li className='px-3 py-1 rounded-full cursor-pointer hover:bg-slate-100 transition-colors duration-300'>
						Pricing
					</li>
					<li className='bg-lime-400 px-4 py-1 rounded-full cursor-pointer hover:bg-lime-300 transition-colors duration-300'>
						Log in
					</li>
					<li className='px-3 py-1 rounded-full cursor-pointer hover:bg-slate-100 transition-colors duration-300'>
						Sign In
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default HomeNav;
