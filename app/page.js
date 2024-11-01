import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4 px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold flex gap-2 md:text-5xl justify-center items-center text-3xl">Support Haven </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators. Get funded by your fans and followers.
        </p>
        <div>
          <Link href={'/login'}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 
        py-2.5 text-center me-2 mb-2">Start here</button>
          </Link>

          <Link href={'/about'}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 
        py-2.5 text-center me-2 mb-2">Read more</button>
          </Link>

        </div>

      </div>

      <div className="text-white container mx-auto pb-32 pt-6 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Your fans can fund you</h2>
        <div className="flex gap-5 justify-around">

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full  text-black" width={88} src="/man_animated.webp" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full  text-black" width={100} height={88} src="/group_funding.webp" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full text-black" width={88} height={88} src="/coin_mod.png" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>

        </div>
      </div>

      <div className="text-white container mx-auto pb-32 pt-2">
        <h2 className="text-3xl font-bold text-center mb-14">Learn More About Us</h2>
        <div className="flex gap-5 justify-around">

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <p className="font-bold text-center text-lg">Empowering Creators</p>
            <p className="text-center">Our platform empowers creators to connect with their fans, turning admiration into actionable support.</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <p className="font-bold text-center text-lg">Building a Supportive Community</p>
            <p className="text-center">Join a thriving community where fans can directly contribute to the projects they love, fostering creativity and collaboration.</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <p className="font-bold text-center text-lg">Transforming Passion into Reality</p>
            <p className="text-center">With the backing of your fans, transform your creative ideas into reality and achieve your artistic aspirations.</p>
          </div>

        </div>
      </div>


    </>
  );
}
