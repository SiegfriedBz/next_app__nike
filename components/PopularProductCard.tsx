import Image from 'next/image'

type Props = {
  product: {
    src: string
    name: string
    price: string
  }
}
const PopularProductCard = ({ product }: Props) => {
  return (
    <div className='flex flex-col items-center justify-start gap-4'>
      <div className='relative h-64 w-64 bg-primary'>
        <Image
          src={product.src}
          fill
          alt={product.name}
          className='object-contain'
        />
      </div>
      <div className='flex w-full flex-col items-start justify-center gap-2'>
        <div className='flex items-center justify-center gap-2'>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <Image
                key={index}
                src='/icons/star.svg'
                alt='star'
                width={20}
                height={20}
              />
            )
          })}
          (4.5)
        </div>
        <h3 className='font-palanquin text-xl font-semibold'>{product.name}</h3>
        <p className='font-montserrat text-xl font-semibold text-coral-red'>
          {product.price}
        </p>
      </div>
    </div>
  )
}

export default PopularProductCard
