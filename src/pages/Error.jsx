export default function E404() {
    return (
        <div className="flex items-center justify-center min-h-screen from-edu-turquoise via-muted to-accent-green bg-gradient-to-bl">
            <div className="w-full max-w-lg px-10 py-8 mx-auto bg-dark/80 rounded-lg shadow-xl">
                <div className="max-w-md mx-auto space-y-6">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h1 className="mb-4 text-7xl tracking-tight text-white font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                                404
                            </h1>
                            <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">
                                Page not found
                            </p>
                            <p className="mb-4 text-lg font-light text-muted ">
                                we are sorry, but the page you requested was not found
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}