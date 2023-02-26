
const Director = ({director, directorProfile, IMG_BASE_URL}) => (
    <div>
        <h2 className="text-white font-medium text-[1.5rem] mb-[1rem] mx-4 md:mx-8 border-l-[10px] pl-2 border-red-600 ">Director</h2>
          <div>
            <div className="flex flex-col items-center w-[100px] md:w-[130px] ">
              <div  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] inline-block">
                <img src={`${IMG_BASE_URL}${directorProfile}`} alt={director} className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <p className="text-white text-[.9rem] text-center mt-2">{director}</p>
              </div>
            </div>
        </div>
    </div>
  )

export default Director