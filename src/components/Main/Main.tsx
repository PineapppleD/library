import SpecialBlock from "./MainComponents/SpecialBlock";


function Main() {

    return ( 
        <main>
            <SpecialBlock borderRadius="60px" title="Специально для вас" color="black" endpoint="culture"/>
            <SpecialBlock background="#969FA8" borderRadius="0" title="О любви" color="milk" endpoint="combined-print-and-e-book-fiction"/>
        </main>
     );
}

export default Main;