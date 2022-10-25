import {Database} from '@/database/database'

export default function Home() {
    return (
        <>
            <head>
                <title> Josh Pahwa </title>
            </head>
            <div id={'site'} className={'bg-gray-900 text-white h-screen'}>
                <section id={'navigation-bar'}>
                    <span
                        className={
                            'flex max-w-6xl mx-auto sm:px-6 lg:justify-center px-8 font-bold text-xl py-3'
                        }>
                        JOSH PAHWA
                    </span>
                    <nav
                        className={
                            'hidden md:flex max-w-6xl mx-auto sm:px-6 lg:px-8 font-bold space-x-8 justify-center hover:text-gray-400'
                        }>
                        {Database.navigation.map(([title, href]) => (
                            <a
                                href={href}
                                key={title}
                                className={
                                    'hover:text-white hover:underline underline-offset-8'
                                }>
                                {title}
                            </a>
                        ))}
                    </nav>
                </section>
                <section
                    id={'about-me'}
                    className={
                        'max-w-6xl mx-auto sm:px-6 lg:px-8 overflow-hidden'
                    }>
                    <div
                        id={'container'}
                        className={'flex justify-center space-x-9 py-4'}>
                        <img
                            src={Database.images.splash}
                            alt={'terminal-splash'}
                            className={
                                'hidden md:flex h-96 w-auto rounded-md shadow-lg'
                            }
                        />
                        <div className={'w-full md:w-40 overflow-auto h-96'}>
                            <p>{Database.text.lori_ipsum}</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
