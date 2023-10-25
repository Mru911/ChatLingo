import Link from 'next/link'
import { AspectRatio } from './ui/aspect-ratio'
import LogoImage from '../images/logos/chatlingo.png'
import Image from 'next/image'
function Logo() {
  return (
    <Link href='/' prefetch={false} className='overflow-hidden'>
        <div className='flex items-center w-72 h-14'>
           <AspectRatio
            ratio={16/9}
            className="flex items-center justify-center">
                <Image
                priority
                src={LogoImage}
                alt='chat logo'
                className='rounded-full dark:filter dark:invert mt-2 h-15 w-20 ml-[2rem] '
                />
            </AspectRatio>

        </div>
    </Link>
  )
}

export default Logo