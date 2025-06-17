
// é possível não ter casa
const WORD_MAP = new Map([
    ["Gryffindor", "Grifinória"],
    ["Slytherin", "Sonserina"],
    ["Hufflepuff", "Lufa-lufa"],
    ["Ravenclaw", "Corvinal"],

    ["human", "Humano"],
    ["goblin", "Goblin"],
    ["owl", "Coruja"],
    ["toad", "Sapo"],
    ["ghost", "Fantasma"],
    ["poltergeist", "Poltergeist"],
    ["dog", "Cachorro"],
    ["three-headed dog", "Cachorro de Três Cabeças"],
    ["dragon", "Dragão"],
    ["centaur", "Centauro"],
    ["cephalopod", "Cephalopod"],
    ["selkie", "Selkie"],
    ["house-elf", "Elfo"],
    ["serpent", "Serpente"],
    ["acromantula", "Acromantula"],
    ["hippogriff", "Hippogriffo"],
    ["hat", "Chapéu"],
    ["werewolf", "Lobisomem"],
    ["phoenix", "Fênix"],
    ["half-giant", "Meio gigante"],
    ["giant", "Gigante"],
    ["pygmy", "Pygmy"],
    ["puff", "Puff"],
    ["vampire", "Vampiro"],
]);

// formata os campos e coloca o valor "N/A" (padrão) como fallback
export function get(k, fallback = "N/A") {
    return WORD_MAP.get(k) ?? fallback;
}