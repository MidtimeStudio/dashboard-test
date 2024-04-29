import Link from 'next/link'
import soap from '@/lib/assets/soap.png'
import Image from 'next/image'
import { Code } from '@nextui-org/code'

export default function NotFound() {
  return (
    <div className='text-center mt-15 flex flex-col'>
      <Image src={soap} alt='' className='flex justify-center self-center pointer-events-none' width={500} height={500}/>
      <span className='font-bold mt-5'>404, please turn back</span>
      <Link href={'/'}>
      <Code color="warning">Or pick up the soap!</Code>
      </Link>
    </div>
  )
}