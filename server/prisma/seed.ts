import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
  // Limpar banco de dados
//   await Promise.all([
//     prisma.user_car.deleteMany(),
//     prisma.user.deleteMany(),
//     prisma.manufacturer.deleteMany(),
//     prisma.colors.deleteMany(),
//     prisma.year.deleteMany(),
//     prisma.company.deleteMany(),
//     prisma.exclusive.deleteMany(),
//     prisma.treasureHunt.deleteMany(),
//     prisma.manufacturer.deleteMany(),
//     prisma.car.deleteMany(),
//   ])

  // Usuário base
//   const newUser = await prisma.user.create({
//     data: {
//       email: 'arturfelipe93@gmail.com',
//       name: 'Arthur Felipe'
//     }
//   })
 

  // Table de montadoras
//    await Promise.all([
//     prisma.manufacturer.create({ data: { id: 0, name: 'None', country: ' ' } }),
//     prisma.manufacturer.create({
//       data: { id: 1, name: 'Aston Martin', country: 'Inglaterra' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 2, name: 'Automobili', country: 'Alemanha' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 3, name: 'BMW', country: 'Alemanha' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 4, name: 'Bugatti', country: 'França' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 5, name: 'Chevrolet', country: 'Estados Unidos' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 6, name: 'Chrysler', country: 'Estados Unidos' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 7, name: 'Dodge', country: 'Estados Unidos' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 8, name: 'Ferrari', country: 'Itália' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 9, name: 'Ford', country: 'Estados Unidos' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 10, name: 'Honda', country: 'Japão' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 11, name: 'Koenigsegg', country: 'Suécia' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 12, name: 'Lamborghini', country: 'Itália' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 13, name: 'McLaren', country: 'Inglaterra' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 14, name: 'Mercedes', country: 'Alemanha' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 15, name: 'Mitsubishi', country: 'Japão' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 16, name: 'Nissan', country: 'Japão' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 17, name: 'Pagani', country: 'Itália' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 18, name: 'Porsche', country: 'Alemanha' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 19, name: 'Renault', country: 'França' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 20, name: 'Tesla', country: 'Estados Unidos' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 21, name: 'Toyota', country: 'Japão' }
//     }),
//     prisma.manufacturer.create({
//       data: { id: 22, name: 'Volkswagen', country: 'Alemanha' }
//     })
//   ])

  // Table de cores
//    await Promise.all([
//     prisma.colors.create({ data: { id: 1, name: 'Amarelo', hex: '#FFFF00' } }),
//     prisma.colors.create({ data: { id: 2, name: 'Ameixa', hex: '#DDA0DD' } }),
//     prisma.colors.create({ data: { id: 3, name: 'Azul', hex: '#0000FF' } }),
//     prisma.colors.create({ data: { id: 4, name: 'Bege', hex: '#F5F5DC' } }),
//     prisma.colors.create({ data: { id: 5, name: 'Branco', hex: '#FFFFFF' } }),
//     prisma.colors.create({ data: { id: 6, name: 'Ciano', hex: '#00FFFF' } }),
//     prisma.colors.create({ data: { id: 7, name: 'Cinza', hex: '#808080' } }),
//     prisma.colors.create({ data: { id: 8, name: 'Coral', hex: '#FF7F50' } }),
//     prisma.colors.create({ data: { id: 9, name: 'Dourado', hex: '#FFD700' } }),
//     prisma.colors.create({ data: { id: 10, name: 'Laranja', hex: '#FFA500' } }),
//     prisma.colors.create({ data: { id: 11, name: 'Magenta', hex: '#FF00FF' } }),
//     prisma.colors.create({ data: { id: 12, name: 'Marrom', hex: '#A52A2A' } }),
//     prisma.colors.create({ data: { id: 13, name: 'Prata', hex: '#C0C0C0' } }),
//     prisma.colors.create({ data: { id: 14, name: 'Preto', hex: '#000000' } }),
//     prisma.colors.create({ data: { id: 15, name: 'Rosa', hex: '#FFC0CB' } }),
//     prisma.colors.create({ data: { id: 16, name: 'Roxo', hex: '#800080' } }),
//     prisma.colors.create({ data: { id: 17, name: 'Turquesa', hex: '#40E0D0' }}),
//     prisma.colors.create({ data: { id: 18, name: 'Verde', hex: '#008000' } }),
//     prisma.colors.create({ data: { id: 19, name: 'Vermelho', hex: '#FF0000' }}),
//     prisma.colors.create({ data: { id: 20, name: 'Violeta', hex: '#EE82EE' } })
//   ])

  // Table years
//   await Promise.all([
//     prisma.year.create({ data: { id: 30, year: 1998, total: 183 } }),
//     prisma.year.create({ data: { id: 31, year: 1999, total: 227 } }),
//     prisma.year.create({ data: { id: 32, year: 2000, total: 250 } }),
//     prisma.year.create({ data: { id: 33, year: 2001, total: 240 } }),
//     prisma.year.create({ data: { id: 34, year: 2002, total: 240 } }),
//     prisma.year.create({ data: { id: 35, year: 2003, total: 220 } }),
//     prisma.year.create({ data: { id: 36, year: 2004, total: 212 } }),
//     prisma.year.create({ data: { id: 37, year: 2005, total: 187 } }),
//     prisma.year.create({ data: { id: 38, year: 2006, total: 223 } }),
//     prisma.year.create({ data: { id: 39, year: 2007, total: 180 } }),
//     prisma.year.create({ data: { id: 40, year: 2008, total: 196 } }),
//     prisma.year.create({ data: { id: 41, year: 2009, total: 190 } }),
//     prisma.year.create({ data: { id: 42, year: 2010, total: 240 } }),
//     prisma.year.create({ data: { id: 43, year: 2011, total: 244 } }),
//     prisma.year.create({ data: { id: 44, year: 2012, total: 247 } }),
//     prisma.year.create({ data: { id: 45, year: 2013, total: 250 } }),
//     prisma.year.create({ data: { id: 46, year: 2014, total: 250 } }),
//     prisma.year.create({ data: { id: 47, year: 2015, total: 250 } }),
//     prisma.year.create({ data: { id: 48, year: 2016, total: 250 } }),
//     prisma.year.create({ data: { id: 49, year: 2017, total: 365 } }),
//     prisma.year.create({ data: { id: 50, year: 2018, total: 365 } }),
//     prisma.year.create({ data: { id: 51, year: 2019, total: 250 } }),
//     prisma.year.create({ data: { id: 52, year: 2020, total: 250 } }),
//     prisma.year.create({ data: { id: 53, year: 2021, total: 250 } }),
//     prisma.year.create({ data: { id: 54, year: 2022, total: 250 } }),
//     prisma.year.create({ data: { id: 55, year: 2023, total: 250 } }),
//     prisma.year.create({ data: { id: 56, year: 2024, total: 250 } })
//   ])
 

  // Table company
//   await Promise.all([
//     prisma.company.create({ data: { id: 0, name: 'None' } }),
//     prisma.company.create({ data: { id: 1, name: 'Hot Wheels', photo: 'https://upload.wikimedia.org/wikipedia/fr/7/70/Logo_Hot_Wheels.svg' } }),
//     prisma.company.create({ data: { id: 2, name: 'Matchbox', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Matchbox-logo-color.svg' } }),
//     prisma.company.create({ data: { id: 3, name: 'Maisto' } }) 
//   ])

  // Table exclusives
//   await Promise.all([
//     prisma.exclusive.create({ data: { id: 0, name: 'Normal', letter: ' ' } }),
//     prisma.exclusive.create({ data: { id: 1, name: 'Boulevard', letter: 'B', photo: 'https://www.hotwheelsbr.com/Boulevard/Logo-lg.jpg' } }),
//     prisma.exclusive.create({ data: { id: 2, name: 'Car Culture', letter: 'A', photo: 'https://static.wikia.nocookie.net/hotwheels/images/3/3b/CarCulture.jpg/revision/latest?cb=20210307031108' } }),
//     prisma.exclusive.create({ data: { id: 3, name: 'Convention', letter: 'C', photo: ' ' } }),
//     prisma.exclusive.create({ data: { id: 4, name: 'Dollar General', letter: 'D', photo: 'https://en.wikipedia.org/wiki/Dollar_General#/media/File:Dollar_General_logo.svg' } }),
//     prisma.exclusive.create({ data: { id: 5, name: 'Entertainment', letter: 'E', photo: ' ' } }),
//     prisma.exclusive.create({ data: { id: 6, name: 'Kmart', letter: 'M', photo: 'https://pt.wikipedia.org/wiki/Kmart#/media/Ficheiro:Kmart_logo.svg' } }), 
//     prisma.exclusive.create({ data: { id: 7, name: 'Kroger', letter: 'K', photo: 'https://en.wikipedia.org/wiki/Kroger#/media/File:Kroger_(2021)_logo.svg'} }),
//     prisma.exclusive.create({ data: { id: 8, name: 'Red Edition', letter: 'R', photo: 'https://static.wikia.nocookie.net/hotwheels/images/3/31/Red_Edition_Logo.png/revision/latest?cb=20181205003723'} }),
//     prisma.exclusive.create({ data: { id: 9, name: 'Team Transport', letter: 'T', photo: 'https://globaldiecastdirect.com/c/1385-category_default/car-culture-team-transport.jpg'} }),
//     prisma.exclusive.create({ data: { id: 10, name: 'Walmart', letter: 'W', photo: 'https://pt.wikipedia.org/wiki/Walmart#/media/Ficheiro:Walmart_logo.svg'} }),
//     prisma.exclusive.create({ data: { id: 11, name: 'Zamac', letter: 'Z', photo: 'https://www.picclickimg.com/ku8AAOSwm~lkaqB4/Hot-Wheels-ZAMAC-your-choice.webp'} })
//   ])
 

  // Table TH
//   await Promise.all([
//     prisma.treasureHunt.create({
//       data: { id: 0, name: 'Normal', letter: ' ' }
//     }),
//     prisma.treasureHunt.create({
//       data: { id: 1, name: 'Regular Treasure Hunt', letter: 'R' }
//     }),
//     prisma.treasureHunt.create({
//       data: { id: 2, name: 'Super Treasure Hunt', letter: 'S' }
//     })
//   ])

  // Table Manufeacturers
//   await Promise.all([
//     prisma.manufacturer.create({
//       data: { id: 0, name: 'None', country: ' ', flag: ' ', photo: ' ' }
//     }),
//     prisma.manufacturer.create({
//       data: {
//         id: 1,
//         name: 'Ferrari',
//         country: 'Italy',
//         flag: '/Flags/Europe/Italy.svg',
//         photo:
//           'https://pt.wikipedia.org/wiki/Scuderia_Ferrari#/media/Ficheiro:Logotipo_da_Scuderia_Ferrari.svg'
//       }
//     }),
//     prisma.manufacturer.create({
//       data: {
//         id: 2,
//         name: 'McLaren',
//         country: 'England',
//         flag: '/Flags/Europe/United Kingdom.svg',
//         photo:
//           'https://pt.wikipedia.org/wiki/McLaren_Automotive#/media/Ficheiro:McLaren_Automotive_logo.svg'
//       }
//     })
//   ])

  // Table cars
//   await Promise.all([
//     prisma.car.create({
//       data: {
//         id: 0,
//         manufactureId: 2,
//         code: 'CFH20',
//         yearId: 47,
//         year_number: 223,
//         colorId: 10,
//         color_wikia: 'Metalflake Dark Orange',
//         rubber: false,
//         custom: false,
//         treasure_huntId: 0,
//         new_model: true,
//         companyId: 1,
//         exclusiveId: 0,
//         type: 'M',
//         loose: true,
//         price_buy: 10.0,
//         price_sell: 25.0,
//         sell: false
//       }
//     })
//   ])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
