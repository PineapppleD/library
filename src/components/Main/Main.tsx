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
      />
      <SpecialBlock
        height="570px"
        booktype="commonbook"
        background="#EE82EE"
        borderRadius="0"
        title="О любви"
        color="milk"
      />
      <SpecialBlock
        height="390px"
        booktype="audiobook"
        title="Популярные аудиокниги"
        borderRadius="0"
        color="black"
      />
    </main>
  );
}

export default Main;
