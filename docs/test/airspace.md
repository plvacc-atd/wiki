# Przestrzeń powietrzna

Przestrzeń powietrzna to po prostu wycinek atmosfery. Ruch statków powietrznych od startu do lądowania z definicji odbywa się właśnie w  przestrzeni powietrznej. Cechy tej przestrzeni w danym miejscu decydują między innymi o tym, czy lot w ogóle jest dopuszczalny, według jakich przepisów można go wykonywać (tylko IFR, czy także VFR), czy zapewniana jest służba kontroli ruchu lotniczego, czy też na jakich zasadach statkom powietrznym w przestrzeni kontrolowanej zapewniana jest separacja. Zarówno z punktu widzenia kontrolera, jak i pilota, ogromne znaczenie ma umiejętność interpretacji map, czyli przede wszystkim przełożenia ich na trójwymiarowy obraz przestrzeni. Kontroler musi na tej podstawie ustalić zarówno własne obowiązki, jak i być w stanie reagować, jeśli załoga statku powietrznego naruszy swoje obowiązki (np. bez zezwolenia wleci do przestrzeni kontrolowanej).

## Definicje

> **przestrzeń powietrzna kontrolowana** (*controlled airspace*) - przestrzeń powietrzna o określonych wymiarach, w której służba kontroli ruchu lotniczego jest zapewniana zgodnie z klasyfikacją przestrzeni powietrznej 

Na terenie Polski przestrzeń niekontrolowana obejmuje przestrzeń od powierzchni ziemi do FL95 oprócz tych elementów, które stanowią przestrzeń kontrolowaną (w realiach Vatsim: CTR i TMA). Pomijamy tu wyjątki specyficznymi dla ruchu wojskowego.

> **strefa kontrolowana lotniska** (*control zone* lub *CTR*) - kontrolowana przestrzeń powietrzna rozciągająca się od powierzchni ziemi do określonej górnej granicy.

CTR ma zabezpieczać manewry podejścia do lądowania, startu i nabrania wysokości. Dlatego obejmuje lotnisko i bezpośrednio otaczającą je przestrzeń i z definicji sięga do powierzchni ziemi. Górna granica CTR wyznaczana jest indywidualnie. Przykładowo, CTR lotniska Kraków-Balice sięga do wysokości 2300 stóp.

> **obszar kontrolowany** (*control area* lub *CTA*) - kontrolowana przestrzeń powietrzna rozciągająca się w górę od określonej granicy nad ziemią.

Obszar kontrolowany nie musi sięgać powierzchni ziemi i z reguły tak nie jest. Przykład obszaru kontrolowanego jest rejon kontrolowany lotniska (*Terminal Maneuvering Area* lub *TMA*), który ustanawia się w pobliżu jednego lub kilku lotnisk. Do obszarów kontrolowanych zaliczamy także *drogi lotnicze* stałe (*airway*) lub warunkowe (*conditional route*). Obszarem kontrolowanym na terenie Polski jest też niewchodząca w skład innych kategorii przestrzeń rozciągająca się od FL95 do FL660 (z wyjątkami specyficznymi dla ruchu wojskowego, których tu nie omawiamy).

:::caution
Zarówno CTR, jak i obszary kontrolowane (w tym TMA) z definicji zaliczamy do przestrzeni kontrolowanej.
:::

> **strefa ruchu lotniskowego** (*aerodrome traffic zone* lub *ATZ*) - przestrzeń powietrzna o określonych wymiarach, ustanowiona wokół lotniska dla ochrony ruchu lotniskowego.

ATZ to przestrzeń niekontrolowana, wyznaczona nad lotniskiem niekontrolowanym oraz przylegającym terenem.

> **strefa zakazana** (*P* lub *prohibited area*) - przestrzeń powietrzna o określonych wymiarach nad obszarami lądowymi lub wodami terytorialnymi państwa, w której loty statków powietrznych są zabronione

> **strefa niebezpieczna** (*D* lub *danger zone*) - przestrzeń powietrzna o określonych wymiarach, w której w danym czasie mogą odbywać się działania niebezpieczne dla lotów statków powietrznych

> **strefa ograniczona** (*R* lub *restricted area*) - przestrzeń powietrzną o określonych wymiarach nad obszarami lądowymi lub wodami terytorialnymi państwa, w której loty statków powietrznych są ograniczone zgodnie z pewnymi określonymi warunkami

:::info
Na terenie Polski strefy, o których tu mowa, rozpoznasz na mapach po skrócie w formacie EPXn, gdzie *X* to typ strefy, a *n* to jej numer. Przykładowo, EPP20 to strefa zakazana wyznaczona wokół muzeum KL Auschwitz-Birkenau, EPD24 to strefa niebezpieczna wokół poligonu w Drawsku Pomorskim, a EPR14, niedaleko na północ od lotniska Kraków-Balice, to strefa ograniczona chroniąca Ojcowski Park Narodowy.
:::

> **strefa obowiązkowej łączności radiowej** (*RMZ*) - przestrzeń powietrzną o określonych wymiarach, w której obowiązkowe jest posiadanie na wyposażeniu działających urządzeń radiowych

Załogi wykonujące lot w RMZ mają obowiązek ciągle nasłuchiwać łączność na wskazanej częstotliwości. W rzeczywistości taki status ma wiele elementów przestrzeni kontrolowanej, przy czym strefy RMZ obowiązują, gdy nie jest zapewniana służba kontroli ruchu lotniczego. W realiach Vatsim znaczenie RMZ jest ograniczone, ponieważ większość stref pokrywa się z przestrzeniami, w których zapewniana jest służba kontroli ruchu lotniczego zgodnie z zasadą *top-down*. Wyjątki to RMZ Warszawa (sięgająca przestrzeni niekontrolowanej pod TMA Warszawa) i RMZ DORSZ (w okolicach Rzeszowa). Tam załogi mają obowiązek nasłuchiwać częstotliwości zalogowanego kontrolera, który na danym obszarze zapewnia służbę informacji powietrznej.

> **strefa obowiązkowego używania transpondera** (*TMZ*) - przestrzeń powietrzna o określonych wymiarach, w której obowiązkowe jest posiadanie na wyposażeniu działających transponderów informujących o wysokości ciśnieniowej

Obecnie granice tych stref pokrywają się z granicami przestrzeni kontrolowanej. Dlatego w realiach Vatsim, w związku z zasadą *top-down*, nie symulujemy stref TMZ.

## Orientacja w przestrzeni

### Klasyfikacja przestrzeni powietrznej

Przestrzeń powietrzną można przypisać do jednej z siedmiu klas oznaczonych literami od A do G. Im wyższa klasa, tym bardziej restrykcyjne zasady obowiązują w danej przestrzeni.

#### Klasa A

W przestrzeni klasy A dozwolone są co do zasady tylko loty IFR, którym świadczona jest służba kontroli ruchu lotniczego. Wszystkim statkom powietrznym zapewniana jest separacja. Lot w przestrzeni klasy A zawsze wymaga zezwolenia. W polskiej przestrzeni powietrznej **nie wyznaczono obecnie przestrzeni tej klasy**.

#### Klasa B

W przestrzeni klasy B dozwolone są loty IFR oraz VFR, którym świadczona jest służba kontroli ruchu lotniczego. Wszystkim statkom powietrznym zapewniana jest separacja (IFR od IFR, IFR od VFR, VFR od IFR oraz VFR od VFR). Lot w przestrzeni klasy B zawsze wymaga zezwolenia. W polskiej przestrzeni powietrznej **nie wyznaczono obecnie przestrzeni tej klasy**.

#### Klasa C

W przestrzeni klasy C dozwolone są loty IFR oraz VFR. Lotom IFR zapewnia się służbę kontroli ruchu lotniczego oraz separację zarówno od innych lotów IFR, jak i od lotów VFR. Z kolei lotom VFR zapewnia się służbę kontroli ruchu lotniczego i separację od IFR. Loty VFR nie są jednak separowane od innych lotów VFR. Choć może być to nieintuicyjne, bo nadal mówimy o przestrzeni kontrolowanej, zamiast separacji zapewnia się informację o ruchu VFR/VFR i, na żądanie załogi, udziela się rady dla zapobieżenia kolizji. Ponadto, dla lotów VFR poniżej FL100 obowiązuje ograniczenie prędkości przyrządowej do 250 węzłów. **W Polsce do klasy C należy większość przestrzeni TMA oraz kontrolowana przestrzeń powietrzna poza TMA znajdująca się powyżej FL95**.

Lot w przestrzeni klasy C zawsze wymaga zezwolenia.

Z punktu widzenia kontrolera, kluczowe znaczenie ma obowiązek zapewnienia separacji (IFR/IFR, IFR/VFR i VFR/IFR). W uproszczeniu oznacza to, że kontroler musi zapewnić, że statki powietrzne są albo na wystarczająco różnych wysokościach, albo wystarczająco daleko od siebie, by zażegnać ryzyko kolizji. To, ile to jest "wystarczająco", omawiamy w innych miejscach.

#### Klasa D

W przestrzeni klasy D dozwolone są loty IFR oraz VFR. Lotom IFR zapewnia się służbę kontroli ruchu lotniczego, ale **separację zapewnia się jedynie od innych lotów IFR**. Nie zapewnia się jednak separacji lotów IFR od lotów VFR, a jedynie informację o ruchu i, na żądanie, radę dla zapobieżenia kolizji. Z kolei lotom VFR zapewnia się służbę kontroli ruchu lotniczego, ale w powietrzu nie zapewnia się separacji. Zapewniana jest jedynie informacja o ruchu IFR/VFR i VFR/VFR, a także rada na żądanie załogi. Dla wszystkich lotów poniżej FL100 obowiązuje ograniczenie prędkości przyrządowej do 250 węzłów. **W Polsce do klasy D należy część przestrzeni TMA oraz wszystkie CTR**. 

Lot w przestrzeni klasy D zawsze wymaga zezwolenia.

Umiejętność właściwego wykorzystania cech przestrzeni klasy D jest kluczowa dla kontrolerów TWR. Brak obowiązku separowania VFR od IFR oraz VFR od VFR pozwala na zapewnienie płynności ruchu, co w realiach Vatsim jest szczególnie istotne, jeśli w CTR operacje szkoleniowe (kręgi nadlotniskowe) wykonuje kilka statków powietrznych. Jednocześnie, kontroler TWR musi zapewnić załogom wystarczająco dużo informacji, by umożliwić im "samodzielne separowanie się".

:::caution
Zwróć uwagę, że lotom VFR nie zapewnia się separacji *w powietrzu*. W dalszym ciągu obowiązują jednak inne wymagania, takie jak zapewnienie odpowiedniej separacji na drodze startowej czy, w niektórych przypadkach, zapewnienie separacji w śladzie aerodynamicznym!
:::

#### Klasa E

W przestrzeni klasy E dozwolone są loty IFR oraz VFR. Lotom IFR zapewnia się służbę kontroli ruchu lotniczego, ale separację zapewnia się jedynie od innych lotów IFR. Nie zapewnia się jednak separacji lotów IFR od lotów VFR, a jedynie w miarę możliwości informację o ruchu. Czemu w miarę możliwości? Ze względu na zasady obowiązujące dla lotów VFR. O ile lot IFR w przestrzeni klasy E wymaga zezwolenia, o tyle loty VFR nie tylko nie potrzebują zezwolenia, ale nawet (poza RMZ) nie jest od nich wymagana łączość radiowa. Lotom VFR zapewnia się tylko służbę informacji powietrznej, o ile jest to możliwe. Podobnie jak w przestrzeni D, nie zapewnia się im separacji. Dla wszystkich lotów poniżej FL100 obowiązuje ograniczenie prędkości przyrządowej do 250 węzłów. W polskiej przestrzeni powierznej **nie wyznaczono obecnie przestrzeni tej klasy**.

#### Klasa F

W przestrzeni klasy F dozwolone są loty IFR oraz VFR. Na lot w przestrzeni klasy F nie jest wymagane zezwolenie, a tylko loty IFR mają obowiązek utrzymywać łączność radową. Separację zapewnia się lotom IFR od innych IFR, ale tylko w miarę możliwości. Przestrzeń klasy F to przestrzeń niekontrolowana. Lotom IFR zapewniana jest służba doradcza, a wszystkim lotom, na żądanie, także służba informaji powietrznej. Dla wszystkich lotów poniżej FL100 obowiązuje ograniczenie prędkości przyrządowej do 250 węzłów. W polskiej przestrzeni powierznej **nie wyznaczono obecnie przestrzeni tej klasy**.

#### Klasa G

W przestrzeni klasy F dozwolone są loty IFR oraz VFR. Cała **przestrzeń niekontrolowana w Polsce jest przypisana do klasy G**. W przestrzeni tej nie zapewnia się służby kontroli ruchu lotniczego, a jedynie służbę informacji powietrznej (na żądanie). Tylko loty IFR

Dla wszystkich lotów poniżej FL100 obowiązuje ograniczenie prędkości przyrządowej do 250 węzłów.

### Przestrzeń powietrzna w trzech wymiarach

### Odczytywanie z mapy cech przestrzeni powietrznej