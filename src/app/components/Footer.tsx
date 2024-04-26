import Link from "next/link"

export const Footer = () => {
    return (
        <span className="flex justify-end p-[30px] gap-1">
            Made by
            <Link href={'https://github.com'}>
            <b className="">Midtime Lab</b>
            </Link>
        </span>
    )
}

export default Footer