import { prisma } from './prisma';

async function main() {
   console.log('Заливаем данные...');

   // Очищаем таблицу перед сидингом
   await prisma.tour.deleteMany();

   await prisma.tour.createMany({
      data: [
         {
            id: 1,
            title: 'Египет: Шарм-эль-Шейх',
            oldPrice: 50000,
            price: 45000,
            date: new Date('2026-03-15'),
            rating: 4.1,
            imageUrl: '/egipet.jpg',
         },
         {
            id: 2,
            title: 'Турция: Анталия',
            oldPrice: 60000,
            price: 38000,
            date: new Date('2026-03-20'),
            rating: 4.2,
            imageUrl: '/turkish.jpg',
         },
         {
            id: 3,
            title: 'ОАЭ: Дубай',
            oldPrice: 100000,
            price: 85000,
            date: new Date('2026-04-01'),
            rating: 4.9,
            imageUrl: '/dubai.jpg',
         },
         {
            id: 4,
            title: 'Таиланд: Пхукет',
            oldPrice: 80000,
            price: 72000,
            date: new Date('2026-03-25'),
            rating: 4.4,
            imageUrl: '/tailand.jpeg',
         },
         {
            id: 5,
            title: 'Мальдивы',
            oldPrice: 150000,
            price: 125000,
            date: new Date('2026-04-10'),
            rating: 4.7,
            imageUrl: '/maldivi.webp',
         },
         {
            id: 6,
            title: 'Греция: Крит',
            oldPrice: 70000,
            price: 55000,
            date: new Date('2026-05-01'),
            rating: 4.3,
            imageUrl: '/greece.jpg',
         },
         {
            id: 7,
            title: 'Италия: Рим и Флоренция',
            oldPrice: 120000,
            price: 95000,
            date: new Date('2026-04-15'),
            rating: 4.6,
            imageUrl: '/italy.jpg',
         },
         {
            id: 8,
            title: 'Испания: Барселона',
            oldPrice: 90000,
            price: 68000,
            date: new Date('2026-05-05'),
            rating: 4.5,
            imageUrl: '/spain.jpg',
         },
         {
            id: 9,
            title: 'Кипр: Айя-Напа',
            oldPrice: 60000,
            price: 48000,
            date: new Date('2026-06-01'),
            rating: 4.8,
            imageUrl: '/kipr.webp',
         },
         {
            id: 10,
            title: 'Черногория: Будва',
            oldPrice: 80000,
            price: 42000,
            date: new Date('2026-06-10'),
            rating: 4.2,
            imageUrl: '/chernogoria.jpeg',
         },
         {
            id: 11,
            title: 'Вьетнам: Нячанг',
            oldPrice: 100000,
            price: 65000,
            date: new Date('2026-05-20'),
            rating: 4.9,
            imageUrl: '/vietnam.jpg.webp',
         },
         {
            id: 12,
            title: 'Грузия: Тбилиси и Батуми',
            oldPrice: 120000,
            price: 35000,
            date: new Date('2026-04-25'),
            rating: 4.1,
            imageUrl: '/gruzia.webp',
         },
         {
            id: 13,
            title: 'Франция: Париж',
            oldPrice: 110000,
            price: 78000,
            date: new Date('2026-05-10'),
            rating: 4.7,
            imageUrl: '/france-pariz.jpg',
         },
         {
            id: 14,
            title: 'США: Сан-Франциско',
            oldPrice: 150000,
            price: 145000,
            date: new Date('2026-06-15'),
            rating: 4.8,
            imageUrl: '/san-francisko.jpg',
         },
         {
            id: 15,
            title: 'ОАЭ: Дубай (VIP)',
            oldPrice: 200000,
            price: 120000,
            date: new Date('2026-04-20'),
            rating: 4.9,
            imageUrl: '/dubai-vip.jpg',
         },
         {
            id: 16,
            title: 'Индонезия: Бали',
            oldPrice: 90000,
            price: 82000,
            date: new Date('2026-05-25'),
            rating: 4.6,
            imageUrl: '/benefits-img.jpeg',
         },
      ],
      skipDuplicates: true,
   });

   console.log('Готово!');
}

main()
   .catch((e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
