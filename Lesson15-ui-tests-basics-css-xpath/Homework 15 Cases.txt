Відкритий сайт https://vivat.com.ua/

1 На головній сторінці клікнути на полі пошуку з текстом "Пошук товарів, категорій"
	[class="sc-66d98d63-4 hWZzYH"]
	//*[@class="sc-66d98d63-4 hWZzYH"]

* з'являється рядок пошуку для введення тексту
	#q
	//*[@id="q"]

2 В пошуку ввести текст "Брендон Сандерсон"

* з'являться результати пошуку
	[class="multi-cell multi-lists"]
	//*[@class="multi-cell multi-lists"]

3 Обрати розділ "Автори"
	[href="https://vivat.com.ua/avtory/"]
	//*[@href="https://vivat.com.ua/avtory/"]
4 Клікнути напис "Сандерсон Брендон"
	.multi-content [href="https://vivat.com.ua/avtory/sanderson-brendon/"]
	//div[contains(@class, "multi-content")]//a[@href="https://vivat.com.ua/avtory/sanderson-brendon/"]

* Відкривається сторінка https://vivat.com.ua/avtory/sanderson-brendon/

5 Клікнути на зображеннф книги "Тресс зі Смарагдового моря"
	[title="Тресс зі Смарагдового моря"]
	//*[@title="Тресс зі Смарагдового моря"]

* Відкривається сторінка https://vivat.com.ua/product/tress-zi-smarahdovoho-moria/




-----------------------------------
Відкритий сайт https://rozetka.com.ua/ua/

1 На головній сторінці обрати категорію "Товари для геймерів"
	.category-link.px-3.text-base.reset-link[href="https://rozetka.com.ua/ua/game-zone/c80261/"]
	//a[contains(@class, "category-link") and contains(@class, "px-3") and contains(@class, "text-base") and contains(@class, "reset-link") and @href="https://rozetka.com.ua/ua/game-zone/c80261/"]

* перехід на сторінку https://rozetka.com.ua/ua/game-zone/c80261/

2 Натиснути напис "Крісла для геймерів"
	.tile-cats__heading.tile-cats__heading_type_center[href="https://rozetka.com.ua/ua/geymerskie-kresla/c4657827/"]
	//a[contains(@class, "tile-cats__heading") and contains(@class, "tile-cats__heading_type_center") and @href="https://rozetka.com.ua/ua/geymerskie-kresla/c4657827/"]

* перехід на сторінку https://rozetka.com.ua/ua/geymerskie-kresla/c4657827/

3 У фільтрах обрати бренд "ASUS"
	[data-id="ASUS"]
	//*[@data-id="ASUS"]

* перехід на сторінку https://rozetka.com.ua/ua/geymerskie-kresla/c4657827/producer=asus/

4 На картці товару "Крісло для геймерів ASUS ROG Chariot X (Wide) (90GC01M0-MSG030)" натиснути кнопку додавання в кошик
	.goods-tile [data-goods-id="443208110"] rz-buy-button
	//div[contains(@class, 'goods-tile')]//*[@data-goods-id='443208110']//rz-buy-button

5 Натиснути іконку з кошиком в хедері
	[class="header-cart__button"]
	//*[@class="header-cart__button"]

* з'являється вікно кошика
	[class="cart-product__main"]
	//*[@class="cart-product__main"]

6 Натиснути 3dot меню
	#cartProductActions0
	//*[@id="cartProductActions0"]

7 У меню, що з'явилося, натиснути "Видалити"
	.button.button--medium.button--with-icon.button--link
	//button[contains(@class, "button") and contains(@class, "button--medium") and contains(@class, "button--with-icon") and contains(@class, "button--link")]

* кошик стає порожнім
	data-testid="empty-cart"
	//*[@data-testid="empty-cart"]