import React from "react";

export default function Hero() {
    return (
        <section className="text-white bg-gray-900">
            <div className="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                        Mejore la gestion de tu negocio!

                        <span className="sm:block">
                            Integracion Web con el mejor flow del mercado.
                        </span>
                    </h1>

                    <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                        Sarkis.dev donde encontras soluciones web con aprovacion de administradores profesionales.
                    </p>

                    <div className="flex flex-wrap justify-center mt-8 gap-4">
                        <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                           href="/get-started">
                            Ir a mis mensages
                        </a>

                        <a className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
                           href="/about">
                            Mas productos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}