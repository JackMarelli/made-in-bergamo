import React, { useRef, useState, useEffect } from 'react';

export default function SpyTextGalleryLayout({ text, children, textColor, backgroundColor = 'bg-transparent' }) {
    return (
        <div className="relative col-span-4 md:col-span-12 my-24">
            <div className="sticky top-[30vh]">
                <h2 className={`text-4xl md:text-7xl lg:text-9xl font-medium tracking-tight font-crimson-pro text-center ${textColor}`}>
                    {text}
                </h2>
            </div>
            <div className="w-full min-h-screen grid grid-cols-4 md:grid-cols-12">
                {children}
            </div>
            <h2 className={`mt-20 text-4xl md:text-7xl lg:text-9xl font-medium tracking-tight font-crimson-pro text-center text-transparent`}>
                {text}
            </h2>
        </div>
    );
}
