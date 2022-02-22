export default function Home() {
  return (
    <>
      <header className="bg-blue-700 pt-20 pb-40 flex justify-center items-center">
        <h1 className="text-white font-bold text-4xl">Personal Card</h1>
      </header>
      <main className="py-4">
        <div className="container mx-auto flex justify-evenly">
          <form className="shadow-md px-6 py-4 rounded-md h-full">
            <div className="flex flex-col mb-2">
              <label className="font-semibold mb-2" htmlFor="">
                Nombre
              </label>
              <input
                className={`border border-slate-300 px-4 py-2 outline-none rounded-md`}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold mb-2" htmlFor="">
                Edad
              </label>
              <input
                className={`border border-slate-300 px-4 py-2 outline-none rounded-md`}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold mb-2" htmlFor="">
                Correo
              </label>
              <input
                className={`border border-slate-300 px-4 py-2 outline-none rounded-md`}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold mb-2" htmlFor="">
                Carrera
              </label>
              <input
                className={`border border-slate-300 px-4 py-2 outline-none rounded-md`}
                type="text"
                name=""
                id=""
              />
            </div>
          </form>
          <div className="shadow-md rounded-md h-full mt-[-130px] min-w-[400px] max-w-[600px]">
            <div
              className="h-40 rounded-t-md bg-cover bg-center"
              style={{
                backgroundImage: "url(https://source.unsplash.com/random)",
              }}
            ></div>
            <div className="p-4">
              <p className="font-bold text-xl mb-2">
                Nombre: <span className="font-normal"></span>
              </p>

              <p className="font-bold text-xl mb-2">
                Edad: <span className="font-normal"></span>
              </p>

              <p className="font-bold text-xl mb-2">
                Correo: <span className="font-normal"></span>
              </p>

              <p className="font-bold text-xl">
                Carrera: <span className="font-normal"></span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
