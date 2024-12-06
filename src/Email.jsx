import React from 'react';

function EmailEditor() {
    return (
        <div className="p-4 bg-white rounded-[16px] mt-[20px] shadow-md">
            <div className="mb-4">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">+Add Attachment</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <input type="text" placeholder="From:CreatorLo"   readOnly  className="border p-2 w-full" />
                <input type="text" placeholder="To:Youtube Influencer" readOnly className="border p-2 w-full" />
                <div className="md:col-span-2">
                    <input type="text" placeholder="Sponsorship" readOnly className="border  p-2 w-full" />
                    <div className="flex justify-end space-x-2 mt-1">
                        <button className="border px-2 py-1">Cc</button>
                        <button className="border px-2 py-1">Bcc</button>
                    </div>
                </div>
            </div>
            <div className="border p-2">
                <div className="flex flex-wrap justify-center sm:justify-start space-x-2 mb-2">
                    <button className="border px-2 py-1">🔙</button>
                    <button className="border px-2 py-1">🔁</button>
                    <button className="border px-2 py-1">I</button>
                    <button className="border px-2 py-1">Font -</button>
                    <button className="border px-2 py-1">𝐓</button>
                    <button className="border px-2 py-1">𝐁</button>
                    <button className="border px-2 py-1">𝐈</button>
                    <button className="border px-2 py-1">𝐔</button>
                    <button className="border px-2 py-1">𝐀</button>
                    <button className="border px-2 py-1">𝐀</button>
                    <button className="border px-2 py-1">A₂</button>
                    <button className="border px-2 py-1">🔗</button>
                    <button className="border px-2 py-1">🖼️</button>
                    <button className="border px-2 py-1">≡</button>
                    <button className="border px-2 py-1">≡</button>
                    <button className="border px-2 py-1">≡</button>
                    <button className="border px-2 py-1">≡</button>
                    <button className="border px-2 py-1">≡</button>
                    <button className="border px-2 py-1">≡</button>
                    <button className="border px-2 py-1">≡</button>
                    <button className="border px-2 py-1">—</button>
                </div>
                <textarea className="w-full h-40 p-2 border" readOnly placeholder="Hi , I am Peter from CreatorLo .I have an Sponsorship . Are you Intrested? "></textarea>
            </div>
        </div>
    );
}

export default EmailEditor;
