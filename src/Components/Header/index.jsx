import Plants from '../../assets/images/plants.jpg'


export default function Header(props){
    return (
        <header className='flex-row space-between px-1'>
            <h1>Amanda Whitley</h1>
            <img src={Plants} alt="plants background"></img>
            {props.children}
        </header>
    );
}