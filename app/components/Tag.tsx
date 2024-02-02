interface Props {
    text: string;
}

const Tag: React.FC<Props> = ({text}) => {
        
    return (
        <div className="rounded-lg relative inline-flex items-center justify-center p-0.5  border-2 border-gray-300 ml-2 hover:shadow-md" >
            <span className="px-2 py-1 font-bold text-sm text-gradient">
                {text}
            </ span>
        </div>
        );
};

export default Tag;