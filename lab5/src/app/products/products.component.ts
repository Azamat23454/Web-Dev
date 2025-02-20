import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';  // Импортируем ProductListComponent

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent],  // Добавляем ProductListComponent в imports
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories = [
    {
      name : 'Medicines',
      products : [
        {
          id : 1, 
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h49/64155461025822.jpg?format=gallery-medium' ,
          name : 'Парацетамол таблетки 500 мг 10 шт',
          description : 'Парацетамол — анальгетик-антипиретик, снижает боль и температуру, без противовоспалительного эффекта. ' ,
          rating : 5 , 
          link : 'https://kaspi.kz/shop/p/paratsetamol-tabletki-500-mg-10-sht-102018705/?c=750000000'
        },
    
        {
          id : 2,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/hfe/he1/64122952843294.jpg?format=gallery-medium' ,
          name : 'Панкреатин таблетки 25 ЕД 60 шт',
          description : 'Панкреатин — ферментный препарат, улучшающий пищеварение, содержит амилазу, липазу, протеазы. ' ,
          rating : 5 , 
          link : 'https://kaspi.kz/shop/p/pankreatin-tabletki-25-ed-60-sht-100967670/?c=750000000'
        },
    
        {
          id : 3, 
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h45/h9a/86624084656158.jpg?format=gallery-medium' ,
          name : 'Танфлекс спрей 0.15% 30 мл',
          description : 'Танфлекс 0,15% спрей: облегчает боль и воспаление в горле.' ,
          rating : 5 , 
          link : 'https://kaspi.kz/shop/p/tanfleks-sprei-0-15-30-ml-101143382/?c=750000000'
        },
    
        {
          id : 4, 
          image : 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h1c/83678055694366.png?format=gallery-medium' ,
          name : 'Мукалтин таблетки 50 мг 10 шт',
          description : 'Мукалтин — отхаркивающее средство, облегчает выведение мокроты при кашле.' ,
          rating : 5 , 
          link : 'https://kaspi.kz/shop/p/mukaltin-tabletki-50-mg-10-sht-100990373/?c=750000000'
        },
    
        {
          id : 5,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h0e/86432698171422.jpg?format=gallery-medium' ,
          name : 'Ибуфен Д Форте Малина суспензия 200 мг/5 мл 100 мл',
          description : 'Ибуфен Д Форте Малина — суспензия с ибупрофеном, снижает жар и боль. ' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/ibufen-d-forte-malina-suspenzija-200-mg-5-ml-100-ml-101154234/?c=750000000'
        }
      ]
    },

    {
      name : 'Books',
      products : [
        {
          id : 6, 
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h48/hc7/86173136551966.jpg?format=gallery-medium' ,
          name : 'Книга Кристи А.: Убийства по алфавиту',
          description : 'Этот роман практически произвел революцию в детективном жанре. В нем Агата Кристи не только проявила в полной мере свой талант.' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/kristi-a-ubiistva-po-alfavitu-101516844/?c=750000000'
        },
    
        {
          id : 7,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h47/h4b/64225442988062.jpg?format=gallery-medium' ,
          name : 'Книга Лондон Д.: Мартин Иден',
          description : '"Мартин Иден" - самый известный роман Джека Лондона, впервые напечатанный в 1908-1909 гг.' ,
          rating : 5 , 
          link : 'https://kaspi.kz/shop/p/london-d-martin-iden-101137240/?c=750000000'
        },
    
        {
          id : 8,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/hed/h2a/85704594391070.jpg?format=gallery-medium' ,
          name : 'Книга Джио С.: Тихие слова любви',
          description : 'Хозяйка цветочного магазина Джейн Уильямс получает в день рождения письмо, где говорится, что она владеет уникальным даром – видеть любовь. ' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/dzhio-s-tihie-slova-ljubvi-26025196/?c=750000000'
        },
    
        {
          id : 9,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/he2/hf8/63844380803102.jpg?format=gallery-medium' ,
          name : 'Книга Кристи А.: Убийство в Восточном экспрессе',
          description : 'Находившийся в Стамбуле великий сыщик Эркюль Пуаро возвращается в Англию на знаменитом «Восточном экспрессе», в котором вместе с ним едут, кажется, представители всех возможных национальностей' ,
          rating : 5 , 
          link : 'https://kaspi.kz/shop/p/kristi-a-ubiistvo-v-vostochnom-ekspresse-100015045/?c=750000000'
        },
    
        {
          id : 10,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h26/h1c/65753445728286.jpg?format=gallery-medium' ,
          name : 'Книга Готогэ К.: Истребитель демонов. Том 1. Жестокость',
          description : 'Начало XX века, эпоха Тайсё. На семью Тандзиро, доброго торговца углём, нападает демон. Выжить удалось только Нэдзуко, младшей сестре Тандзиро, но она и сама становиться демоном' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/gotoge-k-istrebitel-demonov-tom-1-zhestokost--107578814/?c=750000000'
        }

      ]
    },

    {
      name : 'Toys',
      products : [
        {
          id : 11, 
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h9f/h00/64159947161630.jpg?format=gallery-medium' ,
          name : 'Funko POP! Vinyl Гарри Поттер Harry Potter 5858',
          description : 'Фигурка Funko POP! Гарри Поттер 5858 изображает Гарри в школьной мантии, готового к приключениям' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/funko-pop-vinyl-garri-potter-harry-potter-5858-103388811/?c=750000000'
        },
    
        {
          id : 12,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/hed/h62/65925753471006.jpg?format=gallery-medium' ,
          name : 'Funko Squid Game Square Masked Manager 9.5 см',
          description : 'Менеджеры — наземные командиры, действующие по приказу Распорядителя, отвечающие за охрану, передачу информации игрокам и дисциплину среди солдат.' ,
          rating : 4.9 , 
          link : 'https://kaspi.kz/shop/p/funko-squid-game-square-masked-manager-9-5-sm-107640058/?c=750000000'
        },
    
        {
          id : 13,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h15/hd4/86369537884190.jpg?format=gallery-medium' ,
          name : 'Фигурка Funko Deadpool 11 см',
          description : 'Фигурка Funko POP! Marvel: Deadpool - Heavy Metal Deadpool (№1343) изображает Дэдпула в образе хэви-метал музыканта, держащего электрогитару' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/figurka-funko-deadpool-11-sm-1-sht-120759356/?c=750000000'
        },
    
        {
          id : 14,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h4e/64690032279582.jpg?format=gallery-medium' ,
          name : 'Funko POP! Harry Potter Albus Dumbledore (Wand) 5891',
          description : 'Фигурка Funko POP! "Гарри Поттер" №5891 изображает Альбуса Дамблдора с волшебной палочкой. Высота виниловой фигурки составляет примерно 10 см' ,
          rating : 4.9 , 
          link : 'https://kaspi.kz/shop/p/funko-pop-harry-potter-albus-dumbledore-wand-5891-103360422/?c=750000000'
        },
    
        {
          id : 15,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h6d/h53/80249766412318.jpg?format=gallery-medium' ,
          name : 'Funko Venom/Eddie Brock 9.5 см',
          description : 'Фигурка Funko POP! Marvel: Venom — Эдди Брок изображает трансформацию Эдди в Венома, демонстрируя симбиотическое слияние.' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/funko-venom-eddie-brock-9-5-sm-109967739/?c=750000000'
        }

      ]
    }, 
    {
      name : 'Appliances',
      products : [
        {
          id : 16, 
          image : 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium' ,
          name : 'Пылесос Deerma DX700 белый',
          description : 'Пылесос Deerma DX700 – стильный, компактный и удобный пылесос, конструкция которого предусматривает использование в качестве портативного ручного или помощника для эффективной уборки напольных покрытий' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000'
        },
    
        {
          id : 17,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium' ,
          name : 'Электрочайник Yingzheng ZY-305 черный',
          description : 'Современный и стильный, этот электрический чайник сочетает в себе элегантный дизайн и передовые функции для вашего удобства.' ,
          rating : 4.9 , 
          link : 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000'
        },
    
        {
          id : 18,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h4b/85243910946846.jpg?format=gallery-medium' ,
          name : 'Электрогриль Silver Crest EL-8L',
          description : 'Электрогриль Silver Crest EL-8L — это настольный аэрогриль мощностью 2400 Вт, оснащенный антипригарным покрытием и съемными пластинами, которые можно мыть в посудомоечной машине.' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/elektrogril-silver-crest-el-8l-116751664/?c=750000000'
        },
    
        {
          id : 19,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h40/hde/85253298913310.jpg?format=gallery-medium' ,
          name : 'Холодильник LG GC-B459MLWM серый',
          description : 'Холодильник LG GC-B459MLWM — это современный двухкамерный прибор с нижним расположением морозильной камеры, выполненный в стильном сером цвете' ,
          rating : 4.9 , 
          link : 'https://kaspi.kz/shop/p/lg-gc-b459mlwm-seryi-116895924/?c=750000000'
        },
    
        {
          id : 20,
          image : 'https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=gallery-medium' ,
          name : 'Блендер SM-7700 серебристый',
          description : 'Блендер 2 в 1. Блендер + измельчитель (кофемолка), 3 скорости + импульс, стеклянная колба, серебристый цвет.' ,
          rating : 5.0 , 
          link : 'https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000'
        }

      ]
    }


  ];

  selectedCategory: any = null;

  selectCategory(category: any) {
    this.selectedCategory = category;
  }

  share(productLink : string ){
    const text = `Посмотри этот товар: ${productLink}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(text)}`
    window.open(telegramUrl, '_blank')
  }

  openWhatsApp() {
    const url = 'https://web.whatsapp.com/'
    window.open(url, '_blank');
  }
}
