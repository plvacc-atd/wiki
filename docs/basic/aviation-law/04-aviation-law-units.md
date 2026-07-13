# Podstawowe jednostki miary

W lotnictwie cywilnym obowiązują standardy dotyczące jednostek miary wyznaczone przez ICAO. Opisujemy wybrane, najistotniesze z punktu widzenia służb ruchu lotniczego. Niektóre mogą wydawać się dziwne: dlaczego wciąż używane są mile morskie czy stopy, mimo że w fizyce od dawna obowiązuje Międzynarodowy Układ Jednostek Miar (układ SI)?  Formalnie węzły, stopy i mile morskie, jako jednostki spoza układu SI, obowiązują tylko tymczasowo. Jednak "tymczasowo" oznacza w tym wypadku "dopóki nie minie data zakończenia ich wykorzystywania", a ta data jak dotąd nie została wyznaczona.

## Jednostki opisujące ruch i pozycję statków powietrznych

### mila morska 

Mila morska (**nautical mile**, **Nm** lub **NM**) to jednostka odległości równa 1852 metrom. 

:::info
Dlaczego tyle? Możesz policzyć to samodzielnie, obliczając długość łuku południka ziemskiego odpowiadającą jednej minucie kątowej koła wielkiego, przy założeniu, że równik ma długość dokładnie 40 000 kilometrów. Powinno wyjść Ci mniej więcej 1851,8518 metrów. Przyjęto jednak, że 1852 metry to wygodniejsza wartość.
:::

### węzeł 

Węzeł (**knot**, l.mn. **knots**, **kt** i **kts**) to jedna mila morska na godzinę. Choć koncepcja jest prosta, bardzo ważne jest zrozumienie, jak przekłada się to na praktyczne problemy, z którymi wiąże się kontrola ruchu lotniczego, takie jak: "Kiedy ten statek powietrzny znajdzie się nad tamtym punktem?" albo "O ile ten statek powietrzny będzie za chwilę oddalony od innego statku powietrznego, który też się porusza?".

W takich sytuacjach bardzo pomocna jest umiejętność szybkiego szacowania prędkości, a tu przydają się następujące uproszczenia:
* różnica 6 kts odpowiada ok. 1 Nm różnicy po 10 minutach lotu,
* różnica 20 kts odpowiada ok. 1 Nm różnicy po nieco ponad 3 minutach lotu,
* różnica 30 kts odpowiada ok. 1 Nm różnicy po 2 minutach lotu,
* statek powietrzny, którego GS wynosi 180 kts, pokona 10 Nm w nieco ponad 3 minuty,
* typowy odrzutowy samolot pasażerski potrzebuje ok. 1 Nm by zwolnić o 10 kts.

:::info
Musisz pamiętać, że w lotnictwie nie ma jednego uniwersalnego parametru określającego prędkość! Najczęściej stosowane są trzy wartości:
* **IAS** (*Indicated Airspeed* lub *prędkość przyrządowa*) - czyli ta prędkość, którą mierzy prędkościomierz. Ponieważ jednak działanie prędkościomierza opiera się na sprawdzaniu, ile cząsteczek powietrza opływa samolot, IAS jest wartością zawodną. Im wyżej, tym rzadsze powietrze, a zatem wartość prędkości przyrządowej mocniej odbiega od rzeczywistej prędkości. Co istotne, obecnie **VATSIM nie wyświetla kontrolerom tej wartości, a zatem można ją poznać tylko pytając załogę**. To jednak tej wartości używają kontrolerzy zbliżania i obszaru, by sterować prędkościami. 
* **TAS** (*True Airspeed* lub *prędkość rzeczywista*) - czyli prędkość, z którą statek powietrzny rzeczywiście porusza się względem powietrza. Ta wartość nie bierze pod uwagę ruchu powietrza, czyli wiatru. TAS nie można zmierzyć - można ją tylko policzyć.
* **GS** (*Ground Speed* lub *prędkość względem powietrzchni ziemi*) - czyli prędkość, która jest wypadkową TAS i wiatru. **Symulowane radary w sieci VATSIM wyświetlają jedynie GS**. Jeśli statek powietrzny wydaje się podejrzanie szybki lub podejrzanie wolny, zwłaszcza w trakcie podejścia, przyczyną nie musi być błąd załogi. Warto przynajmniej przed rozpoczęciem sesji sprawdzić, jakie warunki panują na wysokości 3000-4000 ft.
:::

### liczba Macha 

Najprościej mówiąc, liczba Macha (**Mach number**, **M** lub **Ma**) to ułamek będący wynikiem dzielenia prędkości danego obiektu, na przykład statku powietrznego, do prędkości dźwięku w danych warunkach. Jeśli zatem statek powietrzny utrzymuje liczbę Macha 0.8, to oznacza, że jego prędkość względem otaczającego go powietrza (inaczej TAS), wynosi 80% prędkości dźwięku na danej wysokości.

:::info
Ujmując ściśle, liczba Macha nie jest jednostką, tylko wielkością bezwymiarową (bo nie jest wyrażana w żadnych jednostkach). Dlatego podając liczbę Macha, podajemy jej wartość jako drugą, odwrotnie niż przy podawaniu prędkości w węzłach (**Mach 0.78** czytane jako **Mach decimal seven eight**).
:::

Powyżej pewnej wysokości wypadającej z reguły w przedziale FL240-FL280, liczba Macha jest podstawową wartością służącą do wyrażania prędkości. W kontroli ruchu lotniczego liczby Macha używa się od FL250 wzwyż. Poniżej tego poziomu operujemy prędkością przyrządową, czyli IAS. 

Zmiana liczby Macha o 0.01 przekłada się na zmianę prędkości przyrządowej (IAS) o około 6 węzłów.

W praktyce może pojawić się potrzeba podania statkowi powietrznemu prędkości, którą powinien utrzymywać po przejściu z liczby Macha na węzły. Stosowana jest wówczas fraza **on conversion**, która oznacza, że załoga powinna utrzymywać określoną prędkość w węzłach po przejściu właśnie na tę jednostkę. 

> **ATC**: LOT123, descend FL150, on conversion speed 280 knots or greater.

Ta technika jest przydatna przy wzmożonym ruchu, by sprawniej ułożyć kolejkę przylotów lub zapewnić separację. Warto zachować ostrożność przy wydawaniu tej instrukcji niedoświadczonym użytkownikom, z uwagi na ryzyko nieporozumienia.

### stopa 

Stopa (**foot**, l.mn. **feet**, **ft**) w lotnictwie to jednostka wysokości. Poniżej wysokości przejściowej (*transition altitude*) oraz poniżej poziomu przejściowego (*transition level*) używa się tej jednostki wprost.

> **ATC**: LOT123, descend altitude 7000 feet, QNH 1015. <br/>**ATC**: LOT123, zniżaj altitude 7000 stóp, QNH 1015.

Powyżej wysokość określa się co prawda w poziomach lotu (*flight level*), ale w rzeczywistości nadal chodzi o wysokość mierzoną w stopach. Różnica polega wyłącznie na tym, jakie ciśnienie musi być ustawione w wysokościomierzu. Przykładowo, FL100 oznacza 10 000 stóp według standardowego ciśnienia 1013,25 hPa.

Na (bardzo) starych mapach, a także w procedurach obowiązujących w niektórych państwach (Federacja Rosyjska, Białoruś, Chińska Republika Ludowa) możesz spotkać się z wysokościami wyrażonymi w metrach.

### stopy na minutę

Stóp na minutę (**feet per minute**, **ft/min.**), przeważnie w tysiącach (np. 2000 ft/min.) używamy do oznaczenia prędkości pionowej podczas wznoszenia lub zniżania.

> **ATC**: LOT123, rate of descent 2000 feet per minute or greater. <br/>**ATC**: LOT123, tempo zniżania 2000 stóp na minutę lub większe.

:::info
Znając GS i tempo zniżania można ustalić, czy statek powietrzny zniża po typowej ścieżce o nachyleniu 3 stopni. Jest tak, jeżeli tempo zniżania jest zbliżone do pięciokrotności GS. Wyższe tempo zniżania oznacza bardziej stromą ścieżkę, co w praktyce przekłada się na większą prędkość i utrudnienie (lub wręcz brak możliwości) jej redukcji.
:::

### stopień 

Stopień (**degree**) to dokładnie ta sama miara, której używamy w geometrii do mierzenia kątów. W lotnictwie może służyć do wyznaczenia kursu (**heading**, czyli kąta między północą a osią samolotu, czyli w dużym uproszczeniu "gdzie jest skierowany dziób"), linii drogi (**track**, w polskiej frazeologii **trak**, czyli kąta między północą a trasą, statku powietrznego, a zatem "w którym kierunku leci z uwzględnieniem wiatru") czy radialu (kąta między północą a kierunkiem od radiolatarni).

## Pozostałe przypadki

### metr

W metrach (**meter**, **m**) podawane są przede wszystkim:
* [parametry drogi startowej](../../s1/00-aerodromes.mdx#parametry-drogi-startowej), takie jak TORA, TODA czy ASDA,
* ograniczenia rozpiętości skrzydeł na drogach kołowania,
* widzialność (**visibility**), która może być też określona w kilometrach,
* widzialność wzdłuż drogi startowej (**runway visual range** lub **RVR**).

### stopa 

W stopach, a w zasadzie w setkach stóp, podawana jest wysokość podstawy chmur (np. w parametrze **SCT030** chodzi o 3000 stóp) oraz widzialność pionowa (np. **VV001** oznacza 100 stóp widzialności pionowej). 

### stopień i węzeł

Prędkość wiatru podawana jest w węzłach, czyli tych samych jednostkach, co prędkość statków powietrznych. Podobnie kierunek wiatru określany jest w stopniach względem północy geograficznej. Dzięki temu załoga może wykonać obliczenia (nawigacyjny trójkąt prędkości) bez przeliczania jednostek.

### stopień Celsjusza

W Europie w stopniach Celsjusza (**degree Celsius** lub **centigrade**) podaje się temperaturę (**temperature**) oraz temperaturę punktu rosy (**dew point**).

### hektopaskal

Paskal to w układzie SI jednostka ciśnienia. W Europie dla uproszczenia używamy hektopaskali (**hectopascal**, **hPa**), czyli setek paskali, aby podawać wartość ciśnienia atmosferyczngo oraz związanej z nim nastawy wysokościomierza.

## Źródła
- [Załącznik 5 do konwencji o międzynarodowym lotnictwie cywilnym - służby ruchu lotniczego](https://ulc.gov.pl/_download/prawo/prawo_miedzynarodowe/konwencje/zal5_wyd_7_pop17.pdf)
- [Skybrary - Indicated Airspeed](https://skybrary.aero/articles/indicated-airspeed-ias)
- [Skybrary - True Airspeed](https://skybrary.aero/articles/true-airspeed)
- [Skybrary - Ground Speed](https://skybrary.aero/articles/ground-speed)
- [Skybrary - Basic Controller Techniques: Speed Control ](https://skybrary.aero/articles/basic-controller-techniques-speed-control)
- [Skybrary - Heading, track and radial](https://skybrary.aero/articles/heading-track-and-radial)
- [IMGW - opis depeszy METAR](https://awiacja.imgw.pl/uploads/Opis_szczegolowy_METAR_ece006ac34.pdf)
