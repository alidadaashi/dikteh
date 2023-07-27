import './header.scss';
import Image from 'next/image'

export const Header = () => {
    return(
        <header className="max-w-6xl mx-auto header w-full mb-4 justify-center">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/barg-emtehani.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
                />
        </header>
    );
}