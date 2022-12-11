import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import receitas from "./receitas"
import temperosArtesanais from "./temperosArtesanais"
import temperosSecos from "./temperosSecos"

export default createSchema({

  name: 'default',

  types: schemaTypes.concat([
    receitas, temperosArtesanais, temperosSecos
  ]),
})
