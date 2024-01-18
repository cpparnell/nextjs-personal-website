import React, { ReactNode } from 'react';

interface Props {
    title: string;
    children: ReactNode;
}

const Box: React.FC<Props> = ({title, children}) => {
    return (
        <section className="w-full pl-[400px] pr-[200px]">
        <div className="justify-start items-start block p-6 bg-white border border-gray-300 rounded-lg">
            <div>
                <p className="font-medium dark:text-white sm:text-md md:text-lg lg:text-lg">{title}</p>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            {children}
        </div>
    </section>
    );
};

export default Box;