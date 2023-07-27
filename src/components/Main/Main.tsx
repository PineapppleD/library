import SpecialBlock from "./MainComponents/SpecialBlock/SpecialBlock";


function Main() {
  return (
    <main>
      <SpecialBlock
        height="570px"
        booktype="commonbook"
        borderRadius="60px"
        title="Специально для вас"
        color="black"
        endpoint="culture"
      />
      <SpecialBlock
        height="570px"
        booktype="commonbook"
        background="#EE82EE"
        borderRadius="0"
        title="О любви"
        color="milk"
        endpoint="combined-print-and-e-book-fiction"
      />
      <SpecialBlock
        height="390px"
        booktype="audiobook"
        title="Популярные аудиокниги"
        borderRadius="0"
        color="black"
        endpoint="culture"
      />
    </main>
  );
}

export default Main;
