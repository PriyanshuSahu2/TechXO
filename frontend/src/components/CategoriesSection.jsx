import React from 'react';

const CategoryItem = ({ label, imgSrc, altText }) => {
    return (
        <span className='relative flex items-center justify-center me-5 hover:scale-125 cursor-pointer transition-all '>
            <span className='font-semibold text-[#454D4A] border-2 text-xs border-[#454D4A] rounded-md py-1 pr-5 pl-3 bg-[#d9d9d94f]'>{label}</span>
            <img className='-ms-5 w-14' src={imgSrc} alt={altText} />
        </span>
    );
};

const CategoriesSection = () => {
    return (
        <section className='px-8 my-5 h-fit pb-8 flex flex-col '>
            <div className='relative'>
                <h3 className='text-[#010101] font-semibold text-xl z-10 relative ms-2 rounded'>
                    Categories
                </h3>
                <div className='absolute inset-0 bg-gray-600 bg-headings-pattern bg-cover opacity-20 z-0 w-32 rounded-sm'></div>
            </div>

            <div className='flex w-full mt-3 justify-between '>
                <CategoryItem label='Laptop' imgSrc='/assets/laptop.png' altText='Laptop' />
                <CategoryItem label='Television' imgSrc='/assets/television.png' altText='Television' />
                <CategoryItem label='Camera' imgSrc='/assets/camera.png' altText='Camera' />
                <CategoryItem label='Laptop' imgSrc='/assets/laptop.png' altText='Laptop' />
                <CategoryItem label='Television' imgSrc='/assets/television.png' altText='Television' />
                <CategoryItem label='Camera' imgSrc='/assets/camera.png' altText='Camera' />
                <CategoryItem label='Laptop' imgSrc='/assets/laptop.png' altText='Laptop' />

            </div>
        </section>
    );
};

export default CategoriesSection;
