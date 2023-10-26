import { Tag } from './Tag';
import deleteIcon from '../assets/delete.png';

export const TaskCard = () => {
	return (
		<article className='w-full min-h-[100px] border-solid border-[1px] border-[#dcdcdc] rounded-xl p-4 my-4 mx-0'>
			<p className='font-[600] text-[18px] mb-[15px]'>texto simple</p>
			<div className='flex items-center justify-between'>
				<div>
					<Tag tagName={'HTML'} />
					<Tag tagName={'CSS'} />
				</div>
				<div className='w-[35px] h-[35px] rounded-[100%] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#ebebeb]'>
					<img
						className='w-[20px] opacity-50 transition-all duration-300 ease-in-out hover:opacity-80'
						src={deleteIcon}
					/>
				</div>
			</div>
		</article>
	);
};