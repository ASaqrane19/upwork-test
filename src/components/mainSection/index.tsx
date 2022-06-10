import { BellIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'

const MainSection = () => {
    return (
        <div className="w-full h-full text-white">
            <div className='border-b-2 border-[#1b3345] p-10'>
                <div className="text-5xl font-bold py-4">Blockchain smart contracts</div>
                <div className="flex items-center justify-start">
                    <div className='flex items-center justify-between rounded-full bg-gray-600/50 border-[1px] border-gray-500 p-2 mr-2'>
                        <div className='rounded-full w-8 h-8 mr-2'>
                            <img className='rounded-full w-8 h-8' src='./images/header/avatar.jpg' />
                        </div>
                        <div className='tex-sm flex items-center justify-center'>
                            <div>Taught by</div>
                            <div className='mx-2 text-[#00FFC4]'>
                                Haruto Yamamoto
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-600/50 border-[1px] border-gray-500 text-white p-2 rounded-full mr-2">
                        <BellIcon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <div className="bg-gray-600/50 border-[1px] border-gray-500 text-white p-2 rounded-full mr-2">
                        <BellIcon className="h-8 w-8" aria-hidden="true" />
                    </div>
                </div>
                <div className='p-10'>
                    <img src='./images/main/video.png' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-between rounded-full bg-gray-600/50 border-[1px] border-gray-500 px-4 py-2'>
                        <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                        <div className='ml-2'>
                            Last unit
                        </div>
                    </div>
                    <div className='flex items-center justify-between rounded-full text-black bg-[#00FFC4] border-[1px] border-[#00FFC4] px-4 py-2'>
                        <div className='mr-2'>
                            Next unit
                        </div>
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                </div>
            </div>
            <div className='p-10'>
                <div className='flex items-center justify-between'>
                    <div className='text-3xl'>
                        Join the discussion
                    </div>
                    <div className=''>
                        <div className="flex mb-5 -space-x-4">
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="./images/main/1.jpg" alt="" />
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="./images/main/2.jpg" alt="" />
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="./images/main/3.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center justify-between rounded-full bg-gray-600/50 border-[1px] border-gray-500 p-2 mr-2'>
                        <div className='w-[200px] tex-sm flex items-center justify-center'>
                        </div>
                        <div className='rounded-full w-8 h-8 mr-2 bg-[#00FFC4]'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection;