import Image from 'next/image'

export function FirstLogo(){
    return(
        <Image
        src='/lontrinha1.jpg'
        alt='image'
        width={50}
        height={50}
        />
    )
}