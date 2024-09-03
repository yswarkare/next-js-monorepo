'use client';
import { useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { BackgroundGradientAnimation } from './GradientBG';
import { GlobeDemo } from './GridGlobe';
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import Toast from '../daisyUi/toast';


export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn('grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ', className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  header,
  icon,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<any>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText('yswarkare@gmail.com');
    setCopied(true);
    clearInterval(copiedTimer.current)
    copiedTimer.current = setTimeout(() => {
      setCopied(false);
      clearInterval(copiedTimer.current);
    }, 3000)
  };

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-white justify-between flex flex-col space-y-4 border border-white/[0.1]',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className='w-fill h-fill absolute'>
          {img && <img src={img} className={cn(imgClassName, 'rounded-3xl', 'object-cover', 'object-center')} alt={`${img}`} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && <img src={spareImg} className={`object-cover object-center h-full w-full`} alt={`${spareImg}`} />}
        </div>
      </div>
      {id === 6 && (
        <BackgroundGradientAnimation containerClassName='w-fill h-fill'>
          {/* <div className='absolute z-50 flex items-center justify-center text-white font-bold' /> */}
        </BackgroundGradientAnimation>
      )}

      <div
        className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}
      >
        <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>{description}</div>
        <div className='font-sans font-bold lg:text-3xl max-w-96 z-10'>{title}</div>

        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
            <div className='flex flex-col gap-3 lg:gap-8'>
              {['React.js', 'Next.js', 'TypeScript'].map((item) => (
                <span
                  key={item}
                  className='py-2 lg:py-4 lg:px-3 px-3 text-sx lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]'
                >
                  {item}
                </span>
              ))}
              <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]' />
            </div>
            <div className='flex flex-col gap-3 lg:gap-8'>
              <span className='py-5 px-3 rounded-lg text-center bg-[#10132e]' />
              {['Vue.js', 'Node.js', 'JavaScript'].map((item) => (
                <span
                  key={item}
                  className='py-2 lg:py-4 lg:px-3 px-3 text-sx lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {id === 6 && (
          <div className={`mt-5 relative animatecss ${copied ? 'animatecss-heartBeat' : "animatecss-flipInX"}`}>
            <Toast message='Email copied' show={copied} />
            <MagicButton
              title={copied ? 'Email copied' : 'Copy my email'}
              icon={<IoCopyOutline />}
              position='left'
              otherClasses='!bg-[#161831]'
              handleClick={() => { handleCopy() }}
            />
          </div>
        )}
      </div>
    </div >
  );
};
