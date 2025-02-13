import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Смартфон Apple iPhone 15 256Gb черный',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.',
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h44/he4/83559338672158.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/h0b/83559328448542.jpg?format=gallery-medium'
      ],
      link: 'kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/'
    },
    {
      name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      description: 'Samsung Galaxy S23 Ultra — смартфон, у которого есть все шансы стать легендой',
      rating: 4.8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/hb0/69635684368414.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/hae/69635684892702.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-chernyi-112233105/'
    },
    {
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXY3',
      description: 'MacBook Air 2022 года можно назвать одним из крупнейших обновлений линейки за всю историю.',
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hc1/64515219095582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/hb7/64515222274078.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-106110064/'
    },
    {
      name: 'Ноутбук ASUS ROG Strix G16 16" / 16 Гб / SSD 512 Гб / Без ОС / G614JU-N3186 / 90NR0CC1-M00Y20',
      description: 'Получите больше кадров в секунду и добейтесь больше побед в играх – с ноутбуком ROG Strix G16.',
      rating: 4.7,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he4/hfc/85373324623902.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/hc8/85373324689438.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/hb9/85373324754974.png?format=gallery-medium'
      ],
      link: 'kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-512-gb-bez-os-g614ju-n3186-90nr0cc1-m00y20-117251822/'
    },
    {
      name: 'Мышь Logitech MX Master 3S 910-006559 черный',
      description: 'Это лучшее устройство для тех, кто профессионально занимается работой на компьютере',
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h51/64417186480158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h13/ha1/64417188675614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h01/64417190739998.jpg?format=gallery-medium'
      ],
      link: 'kaspi.kz/shop/p/logitech-mx-master-3s-910-006559-chernyi-106172365/'
    },
    {
      name: 'Мышь Razer DeathAdder Essential 2021 RZ01-03850100-R3M1 черный',
      description: 'Уже более десяти лет серия Razer DeathAdder является основной на мировой киберспортивной арене.',
      rating: 4.8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h9a/64000853966878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/h71/64000859799582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/hdf/64000864518174.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/razer-deathadder-essential-2021-rz01-03850100-r3m1-chernyi-104030585/'
    },
    {
      name: 'Клавиатура Logitech G Pro X TKL 920-012136 черный',
      description: 'Механическая Клавиатура от Logitech',
      rating: 4.8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h88/84598088302622.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hbd/84598088368158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h29/84598088499230.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-tkl-920-012136-chernyi-114947449/'
    },
    {
      name: 'Клавиатура SteelSeries Apex Pro Mini черный',
      description: 'High-performance mechanical keyboard with OLED screen.',
      rating: 4.7,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h25/86351370190878.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h7c/86351370223646.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h57/h8e/86351370256414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/steelseries-apex-pro-mini-chernyi-109575274/'
    },
    {
      name: 'Монитор 32" Samsung Odyssey G6 черный',
      description: 'Curved gaming monitor with 240Hz refresh rate.',
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h20/69305592217630.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h82/69305592741918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha8/h53/69305593790494.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/32-samsung-odyssey-g6-chernyi-109020382/'
    },
    {
      name: 'Наушники Sony WH-1000XM5 черный',
      description: 'WH-1000XM5 поддерживают форматы High-Resolution Audio и High-Resolution Audio Wireless благодаря LDAC ',
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/'
    }
  ];

  share(productLink: string, platform: string) {
    if (platform === 'whatsapp') {
      window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(productLink), '_blank');
    } else if (platform === 'telegram') {
      window.open('https://t.me/share/url?url=' + encodeURIComponent(productLink), '_blank');
    }
  }
}
