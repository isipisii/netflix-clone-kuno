const Casts = ({profile, name, character, IMG_BASE_URL}) => (

        <div className="flex flex-col items-center w-[100px] md:w-[130px] ">
          <div  className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] inline-block">
            {profile !== null ? <img src={`${IMG_BASE_URL}${profile}`} alt={name} className="w-full h-full rounded-full object-cover" /> :
            <p className="text-[#ffffff8d] text-center text-[.7rem] h-full w-full flex items-center justify-center">Unavailable</p>}
          </div>
          <div>
            <p className="text-white text-[.7rem] text-center mt-2">{name}</p>
            <p className="text-slate-500 text-[.6rem] text-center">{character}</p>
          </div>
        </div>
  )


export default Casts