import Portrait from "../assets/male.jpg";

let imgAfter =
   "after:absolute after:h-12 after:w-12 after:border-b-[10px] after:border-r-[10px] after:right-0 after:bottom-0 after:border-[color:var(--primary)]";
let imgBefore =
   "before:absolute before:h-12 before:w-12 before:border-t-[10px] before:border-l-[10px] before:left-0 before:top-0 before:border-[color:var(--primary)]";

const Home = () => {
   return (
      <article className="max-w-full h-full overflow-y-auto">
         <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-center h-screen">
            <div className="w-2/3 md:w-4/5 lg:w-3/5 mt-[4rem] xs:mt-12 lg:mt-0">
               <h1 className="text-2xl md:text-3xl text-bold ">
                  Hola, mi nombre es
                  <span className="inline font-clickerScript ml-2 text-3xl text-[color:var(--primary)] md:text-4xl ">
                     Kevin Soria
                  </span>
               </h1>

               <h2 className="py-3 text-2xl md:text-2xl text-bold ">
                  Soy
                  <span className="inline text-[color:var(--primary)] ml-2">
                     Desarrollador Web
                  </span>
               </h2>

               <p className="my-3 md:text-lg ">
                  Fugiat voluptate voluptate do velit exercitation consectetur
                  commodo minim eiusmod occaecat aliqua duis sunt.
               </p>

               <div className="py-2.5 px-8 my-4 bg-gray-800 hover:bg-gray-700 rounded-3xl inline-block ">
                  <a href="#contact">Más sobre mi</a>
               </div>
            </div>

            <div className="flex justify-center w-2/3 md:w-auto mt-3 ">
               <div
                  className={`xs:w-[20rem] p-6 relative ${imgAfter} ${imgBefore}`}
               >
                  <img src={Portrait} alt="Foto Personal" />
               </div>
            </div>
         </div>
      </article>
   );
};

export default Home;
