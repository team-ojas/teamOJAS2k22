import React from "react";

export default function Events() {
    return (
        <div className="projects flex- flex-col p-3 max-w-7xl m-auto">
            <h1 className="text-4xl mt-3 mb-6 text-white text-center">Our Events</h1>
            <div className="flex flex-wrap gap-16">
                <div className="project-card flex flex-col p-4 border-2 rounded-md border-white border-opacity-20">
                    <div className="flex flex-col m-auto max-w-6xl p-2">
                        <img className="h-32" src="/images/img1.svg" alt="image1" />
                        <h1 className="text-2xl text-pink-600 text-center my-10">Event1</h1>
                        <p className="text-grey-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos sit aliquam error atque. In, excepturi laborum. Eos, consectetur ad non sit eum velit molestias soluta excepturi dolores esse atque.
                        </p>
                    </div>
                </div>
            <div className="project-card flex flex-col p-4 border-2 rounded-md border-white border-opacity-20">
                <div className="flex flex-wrap gap-16">
                    <div className="flex flex-col m-auto max-w-6xl p-2">
                        <img className="h-32" src="/images/img1.svg" alt="image1" />
                        <h1 className="text-2xl text-pink-600 text-center my-10">Event2</h1>
                        <p className="text-grey-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos sit aliquam error atque. In, excepturi laborum. Eos, consectetur ad non sit eum velit molestias soluta excepturi dolores esse atque.
                        </p>
                    </div>
                </div>
                </div>
            <div className="project-card flex flex-col p-4 border-2 rounded-md border-white border-opacity-20">
                <div className="flex flex-wrap gap-16">
                    <div className="flex flex-col m-auto max-w-6xl p-2">
                        <img className="h-32" src="/images/img1.svg" alt="image1" />
                        <h1 className="text-2xl text-pink-600 text-center my-10">Event3</h1>
                        <p className="text-grey-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos sit aliquam error atque. In, excepturi laborum. Eos, consectetur ad non sit eum velit molestias soluta excepturi dolores esse atque.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div >
    );
}