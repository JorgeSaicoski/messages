import React from "react";

export default function Message(){
    return(
        <section className="w-6/12 px-4 flex flex-col bg-white rounded-r-3xl">
            <div className="flex justify-between items-center h-48 border-b-2 mb-8">
                <div className="flex space-x-4 items-center">
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg">Akhil Gautam</h3>
                        <p className="text-light text-gray-400">akhil.gautam123@gmail.com</p>
                        <p className="text-light text-gray-400">093309600</p>
                    </div>
                </div>
            </div>
            <section>
                <h1 className="font-bold text-2xl">We need UI/UX designer</h1>
                <article className="mt-8 text-gray-500 leading-7 tracking-wider">
                    <p>Hi Akhil,</p>
                    <p>Design and develop enterprise-facing UI and consumer-facing UI as well as
                        REST API
                        backends.Work with
                        Product Managers and User Experience designers to create an appealing user experience for
                        desktop web and
                        mobile web.</p>
                    <footer className="mt-12">
                        <p>Thanks & Regards,</p>
                        <p>Alexandar</p>
                    </footer>
                </article>
            </section>
            <section className="mt-6 border rounded-xl bg-gray-50 mb-3">
                    <textarea className="w-full bg-gray-50 p-2 rounded-xl" placeholder="Type your reply here..."
                              rows="3"></textarea>
                <div className="flex items-center justify-between p-2">
                    <button className="h-6 w-6 text-gray-400">

                    </button>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-xl">Reply</button>
                </div>
            </section>
        </section>
    )
}