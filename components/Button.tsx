// TypeScript
interface Props {
    title: string;
    onClick?: () => void;
    width?: string;
    loading?: boolean;
    margin?: string;
}

function Button({ title, onClick, width, loading, margin}: Props) {
    return (
        <button 
        onClick={onClick} 
        className={`${width ? width : "w-auto"} 
        ${margin} 
        relative inline-flex items-center justify-start px-6 py-3 
        overflow-hidden font-medium transition-all bg-[#f10025] 
        rounded-xl group`
        }>
            <span 
            className="absolute top-0 right-0 
            inline-block w-4 h-4 transition-all 
            duration-500 ease-in-out 
            bg-red-500 rounded 
            group-hover:-mr-4 group-hover:-mt-4">
            <span 
            className="absolute top-0 
            right-0 w-5 h-5 rotate-45 
            translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span 
            className="relative w-full text-left 
            text-white transition-colors 
            duration-200 ease-in-out 
            group-hover:text-white">
            {loading ? 'جار التحميل...' : title}
            </span>
        </button>
    )
}

export default Button;