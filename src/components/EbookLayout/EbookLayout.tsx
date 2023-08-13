import Image from 'next/image'
import { Facebook } from '@/components/icons/Facebook'
import { Instagram } from '@/components/icons/Instagram'
import { Whatsapp } from '@/components/icons/Whatsapp'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  img: string
  title: string
  subtitle: string
  price: string
  children: ReactNode
}

const EbookLayout: React.FC<Props> = ({
  children,
  img,
  title,
  subtitle,
  price
}) => {
  return (
    <section>
      <div>
        <Image src={img} alt={`Imagen ${title}`} width={350} height={600} />
        <h1>{title}</h1>
      </div>
      <div>
        <div>
          <span>sharpness</span>
          <h2>{subtitle}</h2>
          <p>{price}</p>
        </div>

        {children}

        <div>
          <Link href="#">Adquirir ahora</Link>
          <Instagram />
          <Facebook />
          <Whatsapp />
        </div>
      </div>
    </section>
  )
}

export default EbookLayout
