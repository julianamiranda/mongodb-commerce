// 1. Crie uma query que faça a remoção do campo curtidas do item Big Mac.
db.produtos.updateMany({ nome: { $eq: "Big Mac" } }, { $unset: { curtidas: "" } });

// 2. Crie uma query que retorne o nome para todos os documentos e curtidas (exceto para Big Mac).
db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });