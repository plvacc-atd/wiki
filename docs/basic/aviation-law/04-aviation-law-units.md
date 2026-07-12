# Podstawowe jednostki miary

W lotnictwie cywilnym obowiązują standardy dotyczące jednostek miary. Opisujemy tu najważniejsze jednostki, których znajomość jest istotna z punktu widzenia osób zapewniających jedną ze służb ruchu lotniczego w polskiej przestrzeni powietrznej.

## Jednostki opisujące ruch i pozycję statków powietrznych

### mila morska (**nautical mile**, **Nm** lub **NM**)

Mila morska to dokładnie 1852 metry. 

:::info
Dlaczego tyle? Możesz policzyć to samodzielnie, obliczając długość łuku południka ziemskiego odpowiadającą jednej minucie kątowej koła wielkiego, przy założeniu, że równik ma długość dokładnie 40 000 kilometrów. Powinno wyjść Ci mniej więcej 1851,851851 metrów. Przyjęto jednak, że 1852 metry to wygodniejsza wartość.
:::

### węzeł (**knot**, l.mn. **knots**, **kt** i **kts**)

Węzeł to jedna mila morska na godzinę. Choć koncepcja jest prosta, niezwykle ważne jest zrozumienie, jak przekłada się to na praktyczne problemy, z którymi wiąże się kontrola ruchu lotniczego. Regularnie musisz sobie wtedy zadawać takie pytania jak: "Za ile ten statek powietrzny znajdzie się nad tamtym punktem?" albo "O ile ten statek powietrzny będzie za chwilę oddalony od innego statku powietrznego, który też się porusza?".

W takich sytuacjach bardzo pomocna jest umiejętność szybkiego szacowania prędkości, a tu przydają się następujące wzory:
* różnica 6 kts odpowiada ok. 1 Nm różnicy po 10 minutach
* różnica 20 kts odpowiada ok. 1 Nm różnicy po nieco ponad 3 minutach
* różnica 30 kts odpowiada ok. 1 Nm różnicy po 2 minutach
* statek powietrzny, którego GS wynosi 180 kts, pokona 10 Nm w nieco ponad 3 minuty
* typowy odrzutowy samolot pasażerski potrzebuje ok. 1 Nm by zwolnić o 10 kts.

:::info
Musisz pamiętać, że w lotnictwie nie ma jednego uniwersalnego określenia na prędkość! Najczęściej stosowane są trzy wartości:
* **IAS** (*Indicated Airspeed* lub *prędkość przyrządowa*) - czyli ta prędkość, którą mierzy prędkościomierz. Ponieważ działanie prędkościomierza opiera się na sprawdzaniu, ile cząsteczek powietrza opływa samolot, IAS jest wartością zawodną. Im wyżej, tym rzadsze powietrze, a zatem wartość prędkości przyrządowej moccniej odbiega od rzeczywistej prędkości. Co istotne, obecnie **VATSIM nie wyświetla kontrolerom tej wartości, a zatem można ją poznać tylko pytając załogę**. To jednak tej wartości używają kontrolerzy zbliżania i obszaru, by sterować prędkościami. 
* **TAS** (*True Airspeed* lub *prędkość rzeczywista*) - czyli prędkość, z którą statek powietrzny rzeczywiście porusza się względem powietrza. Ta wartość nie bierze pod uwagę ruchu powietrza, czyli wiatru. 
* **GS** (*Ground Speed* lub *prędkość względem powietrzchni ziemi*) - czyli prędkość, która jest wypadkową TAS i wiatru. **Symulowane radary w sieci VATSIM wyświetlają jedynie GS**. Jeśli statek powietrzny wydaje się podejrzanie szybki lub podejrzanie wolny, zwłaszcza w trakcie podejścia, przyczyną nie musi być błąd załogi. Warto przynajmniej przed rozpoczęciem sesji sprawdzić, jakie warunki panują na wysokości 3000-4000 ft.
:::

### liczba Macha (**Mach number**, **M** lub **Ma**)

Najprościej mówiąc, jest to ułamek będący wynikiem dzielenia prędkości danego obiektu, na przykład statku powietrznego, do prędkości dźwięku w danych warunkach. Jeśli zatem statek powietrzny utrzymuje liczbę Macha 0.8, to oznacza, że jego prędkość względem powietrza wynosi 80% prędkości dźwięku na danej wysokości.

:::info
Ujmując ściśle, liczba Macha nie jest jednostką, tylko wielkością bezwymiarową (bo nie jest wyrażana w żadnych jednostkach). Dlatego podając liczbę Macha, podajemy liczbę jako drugą, inaczej niż przy podawaniu prędkości w węzłach (**Mach 0.78** czytane jako **Mach decimal seven eight**).
:::

Powyżej pewnej wysokości wypadającej z reguły w przedziale FL240-FL280, liczba Macha jest podstawową wartością służącą do wyrażania prędkości. W kontroli ruchu lotniczego liczby Macha używa się od FL250 wzwyż. Poniżej tego poziomu operujemy prędkością przyrządową, czyli IAS. 

Zmiana liczby Macha o 0.01 przekłada się na zmianę prędkości przyrządowej (IAS) o około 6 węzłów.

W praktyce może pojawić się potrzeba podania statkowi powietrznemu prędkości, którą powinien utrzymywać po przejściu z liczby Macha na węzły. Stosowana jest wówczas fraza **on conversion**, która oznacza, że załoga powinna utrzymywać określoną prędkość w węzłach po przejściu właśnie na tę jednostkę. 

> **ATC**: LOT123, descend FL150, on conversion speed 280 knots or greater.

Ta technika jest przydatna przy wzmożonym ruchu, by sprawniej ułożyć kolejkę przylotów lub zapewnić separację. Warto zachować ostrożność przy wydawaniu tej instrukcji niedoświadczonym użytkownikom, z uwagi na ryzyko nieporozumienia.

### stopa (**foot**, l.mn. **feet**, **ft**)

Stóp używamy do określenia wysokości. Poniżej wysokości przejściowej (*transition altitude*) oraz poniżej poziomu przejściowego (*transition level*) używa się tej jednostki wprost.

> **ATC**: LOT123, descend altitude 7000 feet, QNH 1015. <br/>**ATC**: LOT123, zniżaj altitude 7000 stóp, QNH 1015.

Powyżej wysokość określa się co prawda w poziomach lotu (*flight level*), ale w rzeczywistości nadal chodzi o wysokość mierzoną w stopach. Różnica polega wyłącznie na tym, jakie ciśnienie musi być ustawione w wysokościomierzu. Przykładowo, FL100 oznacza 10 000 stóp według standardowego ciśnienia 1013,25 hPa.

### stopień (**degree**)

Dokładnie ten sam stopień, którego używamy w geometrii do mierzenia kątów. W lotnictwie może służyć do wyznaczenia kursu (**heading**, czyli kąt między północą a osią samolotu, czyli w dużym uproszczeniu "gdzie jest skierowany dziób"), linii drogi (**track**, w polskiej frazeologii **trak**, czyli kąt między północą a trasą, którą statek powietrzny faktycznie pokonuje, a zatem z uwzględnieniem znoszenia przez wiatr) czy radialu (kąt między północą a kierunkiem od radiolatarni).

## Jednostki opisujące warunki na lotnisku

### metr (**meter**, **m**)

### stopień Celsjusza (**degree Celsius** lub **centigrade**)

### węzeł (**knot**, **kt**)

### hektopaskal (**hectopascal**, **hPa**)

## Źródła standardów



:::info
Standardy dotyczące jednostek miary używanych w lotnictwie cywilnym mogą na pierwszy rzut oka wydawać się dziwne. Dlaczego wciąż pojawiają się mile morskie czy stopy, mimo że w fizyce od dawna obowiązuje Międzynarodowy Układ Jednostek Miar (układ SI)? 

Węzły, stopy i mile morskie, jako jednostki spoza układu SI, zgodnie z załącznikiem nr 5 do konwencji chicagowskiej obowiązują tymczasowo, ponieważ większość opisanych w tym dokumencie jednostek pochodzi z układu SI. Ile to jest "tymczasowo"? Dopóki nie minie data zakończenia ich wykorzystywania. Ta data na razie jednak minąć nie może, bo nie została nawet wyznaczona.
:::