
export function Input({icon: Icon, ...rest}){
    return(
        <div className="flex w-full items-center rounded-[20px] border-2 border-borderColor text-text font-semibold">
            {Icon && <Icon  className=' m-4 text-title'/>}
            <input {...rest} className="w-full h-[48px] font-semibold p-4 bg-transparent border-none outline-none placeholder:text-text"/>
        </div>
    )
}