const products = [
  {
    "id": 1,
    "title": "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350",
    "category": "ноутбуки",
    "price": 19950,
    "img": "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
    "desc": "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть"
  },
  {
    "id": 2,
    "title": "Xiaomi Mi 11 Lite",
    "category": "смартфоны",
    "price": 28700,
    "img": "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
    "desc": "Экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г"
  },
  {
    "id": 3,
    "title": "Проектор BenQ MS550",
    "category": "проектор",
    "price": 27390,
    "img": "https://www.kivano.kg/images/product/107796/1655964723_87635300.png",
    "desc": "Тип проектор; Тип стационарный; Технология DLP; Назначение для офиса; Разрешение проектора 800x600; Соотношение сторон изображения 4:3; Количество ЖК-матриц/DMD-панелей 1; Функции и параметры изображения 3D, коррекция трапецеидальных искажений; Особенности колонки"
  },
   {
    "id": 4,
    "title": "Фитнес-браслет Xiaomi Mi Band 4",
    "category": "Фитнес-браслет",
    "price": 2260,
    "img": "https://www.kivano.kg/images/product/70419/70419.jpg",
    "desc": "Фитнес-браслет, влагозащищенный, сенсорный AMOLED-экран, 0.95, уведомление о входящем звонке, совместимость с Android, iOS, мониторинг сна, калорий, физ. активности, устойчивое к царапинам стекло, вес: 22.1 г"
  },
   {
    "id": 5,
    "title": "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350",
    "category": "ноутбуки",
    "price": 19950,
    "img": "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
    "desc": "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть"
  },
  {
    "id": 6,
    "title": "Xiaomi Mi 11 Lite",
    "category": "смартфоны",
    "price": 28700,
    "img": "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
    "desc": "Экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г"
  },
  {
    "id": 7,
    "title": "Проектор BenQ MS550",
    "category": "проектор",
    "price": 27390,
    "img": "https://www.kivano.kg/images/product/107796/1655964723_87635300.png",
    "desc": "Тип проектор; Тип стационарный; Технология DLP; Назначение для офиса; Разрешение проектора 800x600; Соотношение сторон изображения 4:3; Количество ЖК-матриц/DMD-панелей 1; Функции и параметры изображения 3D, коррекция трапецеидальных искажений; Особенности колонки"
  },
   {
    "id": 8,
    "title": "Фитнес-браслет Xiaomi Mi Band 4",
    "category": "Фитнес-браслет",
    "price": 2260,
    "img": "https://www.kivano.kg/images/product/70419/70419.jpg",
    "desc": "Фитнес-браслет, влагозащищенный, сенсорный AMOLED-экран, 0.95, уведомление о входящем звонке, совместимость с Android, iOS, мониторинг сна, калорий, физ. активности, устойчивое к царапинам стекло, вес: 22.1 г"
  },
  {
    "id": 9,
    "title": "Велосипед Aist Rocky 1.0 D26 18 синий",
    "category": "Велосипеды взрослые",
    "price": 31900,
    "img": "https://www.kivano.kg/images/product/107525/1655203374_56260900.jpg",
    "desc": "Велосипед для взрослых; материал рамы алюминий; тормоза дисковые механические; количество скоростей 21; диаметр колес 26; размер рамы 18"
  },
];


window.addEventListener("load", function() {
	const productsInner = document.querySelector(".products__inner");
	const filterContainer = document.querySelector(".products__filters");


	displayProductsItems(products);
  displayFilterBtns();

	function displayProductsItems(products) {
		let displayProducts = products.map(function (item) {
    
			return `
				<article class="products__item">
					<img src="${item.img}">
					<div class="products__item-info">
						<h3>${item.title}</h3>
            <hr>
						<span>${item.price} сом</span>
						<p><h4>${item.desc}</h4></p>
					</div>
				</article>
			`;
		});
    

		displayProducts = displayProducts.join("");
		productsInner.innerHTML = displayProducts;
	}

  function displayFilterBtns() {
    const categories = products.reduce(function(values, item) {
      if(!values.includes(item.category)) {
        values.push(item.category)
      }

      return values;
    },
    
    ["all"]
    );
  

    const categoryBtns = categories.map((cat) => {
    return `
      <button class="products__filters-btn" type="button" data-cat="${cat}">
      ${cat}
      </button>
    `;
    })
    .join("");

    filterContainer.innerHTML = categoryBtns;
      const filterBtns = document.querySelectorAll(".products__filters-btn");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.cat;
        const productCategory = products.filter((item) => {
          if(item.category === category) {
            return item;
          }
        });

        if(category === "all") {
          displayProductsItems(products);
        } else {
          displayProductsItems(productCategory);
        }
      });
    });
  }
});