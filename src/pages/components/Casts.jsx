const Casts = ({profile, name, character, IMG_BASE_URL}) => (

        <div className="flex flex-col items-center w-[100px] md:w-[130px] ">
          <div  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] inline-block">
            <img src={`${IMG_BASE_URL}${profile}`} alt={name} className="w-full h-full rounded-full object-cover" />
          </div>
          <div>
            <p className="text-white text-[.9rem] text-center mt-2">{name}</p>
            <p className="text-slate-500 text-[.7rem] text-center">{character}</p>
          </div>
        </div>
  )


export default Casts