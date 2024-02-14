import { Title } from "../Title"


export function Card({title, text, img}){
    return(
        <div className='bg-white flex flex-col gap-8 p-[26px] rounded-[20px] md:p-8'> 
            <img className='w-20 h-20 md:w-24 md:h-24' src={img} alt="Planeta"/>

            <div className='flex flex-col gap-1 w-full'>
                <Title text={title}/>

            <p className='font-semibold text-text text-left'>
                {text}
            </p> 

            </div>
        </div>        
    )
}