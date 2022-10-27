// 1. Crie uma query que inclua um campo vendasPorDia em todos os sanduíches. O valor deste campo deverá ser um array com sete posições.
db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

// 2. Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60.
db.produtos.updateOne({ nome: { $eq: "Big Mac" } }, { $inc: { "vendasPorDia.3": 60 } });

// 3. Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino aos sábados em 120.
db.produtos.updateOne({ tags: { $in: ["bovino"] } }, { $inc: { "vendasPorDia.6": 120 } });

// 4. Crie uma query que retorne o nome e vendasPorDia de todos os documentos.
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });