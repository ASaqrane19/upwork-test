import clsx from 'clsx';
import * as React from 'react';

const list = [
    { id: 1, name: 'Blockchain foundations', time: '12:33', active: true },
    { id: 2, name: 'The technical side', time: '32:02', active: true },
    { id: 3, name: 'Blockchain in use', time: '16:59', active: true },
    { id: 4, name: 'Use cases', time: '45:49', active: true },
    { id: 5, name: 'Blockchain smart contracts', time: '27:30', active: true },
    { id: 6, name: 'Decentralised applications', time: '28:29', active: true },
    { id: 7, name: 'Decentralised applications', time: '28:29', active: false },
    { id: 8, name: 'Blockchain platforms', time: '20:01', active: false },
    { id: 9, name: 'Next steps', time: '07:20', active: false }
]

const SideBarSection = () => {
    return (
        <div className='sticky top-0 w-1/3'>
            <div className='bg-[#0000001A] border-r-2 border-[#1b3345]'>
                <div className='flex flex-col items-start justify-center p-8'>
                    <div className='py-2 text-white'>Blockchain foundations</div>
                    <div className="w-full bg-gray-200 h-2 dark:bg-gray-700">
                        <div className="bg-[#00FFC4] h-2 w-3/4"></div>
                    </div>
                </div>
                <div className='timeline flex px-10 bg-[#162a3a]'>
                    <div className='w-full'>
                        {
                            list.map(item => {
                                console.log(item)
                                return (
                                    <div key={item.id} className={clsx(item.active ? 'container-map' : 'container-map-disable', 'relative text-white')}>
                                        <div className='content'>
                                            <div className={clsx(item.active ? 'roadmap-section-heading' : 'roadmap-section-heading-disable', ' relative pl-8')}>
                                                <div className='flex items-center justify-between'>
                                                    <div className='px-2 text-sm bg-[#FFFFFF1C]'>unit</div>
                                                    <div className='text-[#FFFFFF1C] text-sm'>COMPLETED</div>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <div className='flex items-center justify-start'>
                                                        <div className='text-[#FFFFFF1C] mr-2'>{item.id}.</div>
                                                        <div className='text-lg'>{item.name}</div>
                                                    </div>
                                                    <div className='text-[#FFFFFF1C]'>{item.time}</div>
                                                </div>
                                                <div className='w-full pt-6 border-t-2 border-[#FFFFFF1C]'></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarSection;