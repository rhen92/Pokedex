const getPokemonDetails = (data) => {
  const { abilities, height, name, moves, types, weight } = data
  const typesInfo = types.map(type => type.type.name).join(' | ')
  const abilitiesName = abilities.map(ability => ability.ability.name).join(' | ')
  const movesName = moves.slice(0, 10).map(move => move.move.name).join(' | ')
  return {
    name: name,
    height: height,
    weight: weight,
    types: typesInfo,
    ability: abilitiesName,
    moves: movesName
  }
}


export default getPokemonDetails
