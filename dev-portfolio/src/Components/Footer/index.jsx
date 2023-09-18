


export default function Footer(){

    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/Pandax19"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/amanda-whitley-0210991b6/"
        }
    ]
    
    return (
        <footer className="flex-row px-1">
            {icons.map(icon => 
                (
                <a href={icon.link} key ={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>)
                )}
        </footer>
    );

}