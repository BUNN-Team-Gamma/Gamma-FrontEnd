export default function ListView({ list }: { list: any[] }) {
  return (
    <>
      <div className="grid gap-4 grid-cols-4 w-full">
        {list.map((item, index) => {
          return (
            <button
              className="flex px-6 py-4 border rounded-xl border-black flex-col text-left"
              key={index}
            >
              <span className="flex font-semibold text-nowrap w-48 line-clamp-1">
                Thermodynamics Fluid Mechanics World Pollution
              </span>
              <span className="flex text-[0.875rem] text-nowrap w-48">
                Total Characters: 4857
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
