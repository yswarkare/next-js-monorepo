import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id='projects'>
      <h1 className="heading">
        A small selection of {' '}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80%]">
            <PinContainer title={title} href={link}>
              <div className="relative flex flex-col items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[50vh] lg:h-[60vh] mb-2">
                <div className='relative z-[0] top-0 left-0 w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src='/bg.png' alt='bg-img' />
                </div>
                <div>
                  <img src={img} alt={title} />
                </div>
                <h1 className="font-bold lg:text-xl md:text-md text-base line-clamp-1 overflow-visible">
                  {title}
                </h1>
                <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-2 overflow-visible">
                  {des}
                </p>
                <div className="w-full min-h-max flex items-center justify-between p-2">
                  <div className="w-full flex flex-row items-center">
                    {
                      iconLists.map(({ label, icon }, index) => (
                        <div key={icon} className='z-50 tooltip border border-white/[0.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center' style={{ transform: `translateX(-${10 * index }px)` }} data-tip={label}>
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      ))
                    }
                  </div>
                  <div className="flex justify-center items-center">
                    <p className='min-w-max flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
