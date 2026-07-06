# Statki powietrzne

Statki powietrzne różnią się między sobą nie tylko wielkością, typem napędu, osiągami, czy przeznaczeniem, ale również charakterystyką lotu oraz wpływem, jaki wywierają na inne statki powietrzne. Dla potrzeb organizacji ruchu lotniczego stosuje się różne systemy klasyfikacji, które wykorzystywane są m.in. przy planowaniu separacji, doborze procedur oraz prowadzeniu ruchu lotniczego. Nie istnieje jeden uniwersalny podział obejmujący wszystkie aspekty wykonywania lotów. Statki powietrzne klasyfikowane są według różnych kryteriów, zależnie od celu, jakiemu dana klasyfikacja służy.

## Kategorie statków powietrznych

W praktyce służb kontroli ruchu lotniczego największe znaczenie mają klasyfikacje związane z **turbulencją w śladzie aerodynamicznym (Wake Turbulence Category – WTC)**, **prędkością podejścia (Approach Category)** oraz **wymiarami statku powietrznego**.

Kontroler ruchu lotniczego powinien znać podstawowe założenia każdej z tych klasyfikacji, ponieważ mają one bezpośredni wpływ na stosowane separacje, organizację ruchu oraz sposób wykonywania procedur lotniczych.

### Kategoria turbulencji w śladzie aerodynamicznym (Wake Turbulence Category)

Najważniejszą z punktu widzenia kontroli ruchu lotniczego jest klasyfikacja **Wake Turbulence Category (WTC)** określona przez ICAO.

Siła wirów aerodynamicznych powstających za lecącym statkiem powietrznym zależy przede wszystkim od jego masy (MTOM - _Maximum Take-Off Weight_ - Maksymalna Masa Startowa), prędkości, konfiguracji oraz charakterystyki lotu. Najsilniejsze wiry powstają podczas lotu statku powietrznego o dużej masie, lecącego z niewielką prędkością i generującego dużą siłę nośną, co najczęściej ma miejsce podczas startu i podejścia do lądowania. Aby zapewnić bezpieczne separacje pomiędzy statkami powietrznymi, ICAO podzieliła je na cztery podstawowe kategorie.

|Kategoria|Oznaczenie|Charakterystyka|Przykład|
|---|---|---|---|
|Light|**L**|MTOM poniżej 7 000 kg|Cessna 152, Diamond DA40, Piper PA-28
|Medium|**M**|MTOM od 7 000 kg do mniej niż 136 000 kg|Casa C-295, Embraer E195, Airbus A320, Boeing 737
|Heavy|**H**|MTOM co najmniej 136 000 kg|Boeing B747, Airbus A340, Boeing B787
|Super|**J**|Wybrane statki powietrzne generujące wyjątkowo silną turbulencję| Airbus A380, Antonov An-225|

Kategoria turbulencji w śladzie aerodynamicznym (WTC) publikowana jest m.in. w planie lotu ICAO oraz w bazach danych wykorzystywanych przez systemy kontroli ruchu lotniczego. Dzięki temu kontroler nie musi ustalać jej samodzielnie dla każdego typu statku powietrznego i może stosować właściwe minima separacji zarówno na podejściu, jak i przy starcie.

:::info
Choć klasyfikacja WTC opiera się głównie na maksymalnej masie startowej (MTOM), obecnie ICAO rozwija bardziej szczegółowy system [**Wake Turbulence Groups (A–G)**](https://www.icao.int/sites/default/files/APAC/Meetings/2023/2023%20RECAT%20Webinar/5-Presentations/1.ICAO-Wake-Turbulence-Groups.pdf), uwzględniający dodatkowo rozpiętość skrzydeł oraz charakterystykę generowanych wirów. W większości państw oraz na VATSIM nadal stosowana jest jednak klasyczna klasyfikacja WTC. 
:::

### Kategoria prędkości podejścia (Approach Category)

Drugim często spotykanym podziałem statków powietrznych jest uzależnienie ich kategorii od **prędkości podejścia**, tj. prędkości **Vat** statku powietrznego.

Prędkość _Vat_ oznacza prędkość podejścia wskazywaną nad progiem pasa przy maksymalnej certyfikowanej masie do lądowania i ma znaczenie przede wszystkim podczas projektowania procedur instrumentalnych oraz określania minimów operacyjnych. W planie lotu ICAO, kategoria ta oznaczana jest w polu nr 18 przy pomocy oznaczenia PER/x, gdzie x to litera od A do E zgodnie z poniższą tabelą.

|Kategoria|Prędkość Vat|
|---|---|
|A|poniżej 91 węzłów|
|B|91–120 węzłów|
|C|121–140 węzłów|
|D|141–165 węzłów|
|E|166–210 węzłów|

W praktyce większość samolotów komunikacyjnych należy do kategorii **C** lub **D**, natomiast lekkie samoloty lotnictwa ogólnego najczęściej mieszczą się w kategoriach **A** lub **B**.

### Klasyfikacja według wymiarów statku powietrznego

Podczas projektowania i użytkowania lotnisk stosowana jest również klasyfikacja oparta na **kodzie referencyjnym ICAO**, określonym w Załączniku 14 do Konwencji o międzynarodowym lotnictwie cywilnym. Kod referencyjny składa się z cyfry oraz litery. Cyfra określa wymaganą długość drogi startowej, natomiast litera określana jest na podstawie rozpiętości skrzydeł oraz zewnętrznego rozstawu kół podwozia głównego.

Najczęściej spotykane kody literowe obejmują:

|Kod|Rozpiętość skrzydeł|Zewnętrzny rozstaw kół podwozia głównego|
|---|---|---|
|A|poniżej 15 m|poniżej 4,5 m
|B|15–24 m|4,5-6 m
|C|24–36 m|6-9 m
|D|36–52 m|9-14 m
|E|52–65 m|9-14 m
|F|65–80 m|14-16 m

Klasyfikacja ta wykorzystywana jest podczas projektowania infrastruktury lotniskowej, m.in. dróg startowych, dróg kołowania oraz stanowisk postojowych. Dla kontrolera ma znaczenie przede wszystkim podczas organizacji ruchu naziemnego oraz korzystania przez duże statki powietrzne z infrastruktury lotniska.

### Znaczenie operacyjne

Choć opisane klasyfikacje dotyczą tych samych statków powietrznych, każda z nich służy innemu celowi.

- **WTC** wykorzystywana jest przede wszystkim do stosowania minimów separacji wynikających z turbulencji w śladzie aerodynamicznym;
- **Kategoria prędkości podejścia** ma znaczenie przy projektowaniu procedur instrumentalnych, określaniu minimów operacyjnych oraz przewidywania zachowań statków powietrznych;
- **Kod referencyjny ICAO** określa wymagania dotyczące infrastruktury lotniskowej.

Nie jest wymagana znajomość szczegółowych parametrów każdego typu statku powietrznego. W trakcie szkolenia należy jednak poznać kategorie WTC oraz kody referencyjne ICAO najczęściej spotykanych statków powietrznych w sieci VATSIM. Wiedza ta ułatwia stosowanie właściwych minimów separacji, organizację ruchu naziemnego oraz planowanie operacji na lotnisku. Kluczowe jest jednak zrozumienie celu stosowania poszczególnych klasyfikacji oraz ich znaczenia dla bezpiecznego prowadzenia ruchu lotniczego.

## Turbulencja w śladzie aerodynamicznym

Jednym z najistotniejszych zagrożeń związanych z ruchem lotniczym jest **turbulencja w śladzie aerodynamicznym** (_wake turbulence_), powstająca za każdym statkiem powietrznym wytwarzającym siłę nośną. Zjawisko to ma bezpośredni wpływ na minima separacji stosowane przez kontrolerów ruchu lotniczego i zostało szczegółowo opisane w _ICAO Doc 4444 (PANS-ATM)_.

### Powstawanie turbulencji

Podczas lotu na końcówkach skrzydeł tworzą się wiry powietrza będące naturalnym skutkiem różnicy ciśnień pomiędzy górną i dolną powierzchnią skrzydła. Za lecącym statkiem powietrznym powstaje para przeciwbieżnych wirów - każdy z wirów obraca się w przeciwnym kierunku, a oba przemieszczają się za statkiem powietrznym jako jego ślad aerodynamiczny.

Najsilniejsze wiry powstają podczas lotu:
- z dużą masą;
- przy małej prędkości;
- w konfiguracji do startu lub lądowania.

Z tego powodu największe zagrożenie występuje podczas podejścia do lądowania oraz bezpośrednio po starcie.

### Zagrożenie dla innych statków powietrznych

Przelot przez silny wir aerodynamiczny może spowodować:
- utratę kontroli;
- gwałtowne przechylenie statku powietrznego;
- częściową utratę siły nośnej;
- znaczne odchylenie od toru lotu;
- konieczność przerwania podejścia.

Najbardziej narażone są lekkie statki powietrzne lecące za cięższymi.

### Kategorie WTC

Aby ograniczyć ryzyko wystąpienia turbulencji w śladzie aerodynamicznym, ICAO wprowadziła klasyfikację Wake Turbulence Category, o której mowa nieco wyżej w tym artykule. Im wyższa kategoria statku powietrznego poprzedzającego, tym większe separacje mogą być wymagane od statku powietrznego lecącego za nim. Największe wiry generują statki powietrzne kategorii **Heavy** oraz **Super**, dlatego ich operacje wymagają stosowania zwiększonych minimów separacji.

### Separacja wynikająca z turbulencji

Zgodnie z _ICAO Doc 4444_ kontroler, oprócz standardowych minimów radarowych lub proceduralnych, w określonych sytuacjach zobowiązany jest uwzględnić również separację wynikającą z turbulencji w śladzie aerodynamicznym.

Może ona być wyrażona:
- minimalną odległością pomiędzy statkami powietrznymi;
- odstępem czasowym między kolejnymi startami;
- dodatkowymi ograniczeniami dotyczącymi startów i lądowań.

Szczegółowe wartości minimów zależą m.in. od kategorii WTC obu statków powietrznych oraz rodzaju wykonywanej operacji. Zasady separacji są opisane m.in. w dokumencie _Operations Manual vFIR Warszawa_ oraz w _ICAO Doc 4444_.

### Znaczenie operacyjne

W codziennej pracy kontrolera ruchu lotniczego zagrożenie turbulencją w śladzie aerodynamicznym występuje przede wszystkim podczas:
- startów wykonywanych jeden po drugim;
- podejść do lądowania;
- wykonywania procedury odlotu z intersekcji (a nie z pełnej długości pasa);
- operacji wykonywanych za statkiem powietrznym należącym do wyższej kategorii WTC (np. Cessna 152 wykonująca konwojera po starcie Airbusa 320).

Na VATSIM większość symulatorów nie odwzorowuje obecnie w pełni skutków turbulencji w śladzie aerodynamicznym. Nie zmienia to jednak faktu, że kontroler powinien stosować obowiązujące minima separacji zgodnie z dokumentacją ICAO oraz lokalnymi procedurami. Dzięki temu ruch prowadzony jest zgodnie z rzeczywistymi zasadami służb kontroli ruchu lotniczego, co wypełnia przesłanki głównego hasła VATSIM: _"as real as it gets"_.
