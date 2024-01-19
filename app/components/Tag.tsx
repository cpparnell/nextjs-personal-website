interface Props {
    color: string;
  }

const Tag: React.FC<Props> = ({color}) => {
    
    const lowercase_color = color.toLowerCase();
    
    return (
        <span className={`bg-${lowercase_color}-100 text-${lowercase_color}-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${lowercase_color}-900 dark:text-${lowercase_color}-300`}>
            Default
        </span>    );
};

export default Tag;