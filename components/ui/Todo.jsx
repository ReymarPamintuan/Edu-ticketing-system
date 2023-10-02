import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Todo() {
    return  (
        <div className='col-span-10'>
            <div className="grid grid-cols-12  px-[10px] py-[10px] rounded-[1px]">
                <div className='col-span-9 flex justify-between border-r outline outline-1 outline-[#d8dfed] px-[10px] py-[10px]'>
                    <div className='flex'>
                        <div className='text-[21px] text-blue-600 mr-[5px] cursor-pointer'><Icon icon="icon-park-solid:check-one" /></div>
                        <div className='text-[23px] text-green-600 mr-[20px] cursor-pointer'><Icon icon="ic:round-lens" /></div>
                        <div>Do this thing</div>
                    </div>
                    <div>
                        <img
                            src="/assets/images/all-img/user.png"
                            alt=""
                            className="block w-[25px] object-cover rounded-full cursor-pointer"
                        />
                    </div>
                </div>
                <div className='col-span-3 flex justify-between items-center outline outline-1 outline-[#d8dfed] border-r-0  px-[20px]'>
                    <div>09-09-202</div>
                    <div className='text-[30px] text-green-700 cursor-pointer'><Icon icon="heroicons-outline:dots-vertical" /></div>
                    <div className='cursor-pointer'><Icon icon="heroicons:bars-4-20-solid" /></div>
                </div>
            </div>
        </div>
    );
}


