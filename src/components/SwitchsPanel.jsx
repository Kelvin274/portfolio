const colorsClass =
   "w-8 h-8 border-2 border-neutral-900 rounded-full cursor-pointer";
const colors = [
   "--primary",
   "--secondary",
   "--tertiary",
   "--quaternary",
   "--quintary",
];

const SwitchPanel = () => {
   return (
      <div className="flex flex-col jusfity-evenly absolute w-44 h-20 top-2 right-2 bg-neutral-800 rounded-xl">
         <p className="p-2 text-center font-bold text-lg bold">
            Select a color
         </p>
         <div className="flex justify-evenly w-auto h-auto">
            {colors.map((color, ind) => (
               // console.log(color)
               <div
                  key={ind + 1}
                  className={`${colorsClass} bg-[color:var(${color})]`}
               ></div>
            ))}
         </div>
      </div>
   );
};

export default SwitchPanel;
