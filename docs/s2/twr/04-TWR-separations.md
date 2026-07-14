# Separacja

Jednym z głównych zadań służb kontroli ruchu lotniczego jest zapewnienie odpowiedniej separacji pomiędzy statkami powietrznymi. Rodzaj stosowanej separacji zależy od rodzaju wykonywanego lotu, klasy przestrzeni powietrznej, etapu lotu oraz obowiązujących procedur. W praktyce separacja jest narzędziem służącym bezpiecznej organizacji ruchu i poświęcone jej są m.in. dwa rozdziały (piąty oraz szósty) dokumentu _ICAO Doc 4444 (PANS-ATM)_. W przypadku kontrolera TWR separacje dotyczą przede wszystkim organizacji operacji wykonywanych na drodze startowej oraz w jej bezpośrednim otoczeniu.

## Separacja lotniskowa

Separacja lotniskowa obejmuje organizację ruchu na drodze startowej oraz w jej bezpośrednim sąsiedztwie. Jej naczelną zasadą jest zapewnienie, że droga startowa jest dostępna do wykonania określonej operacji. Kontroler przed wydaniem zezwolenia powinien upewnić się, że:
- droga startowa będzie dostępna do wykonania planowanej operacji zgodnie z obowiązującymi przepisami, patrz:
  1) ICAO Doc 4444 7.9.3. dla startów;
  2) ICAO Doc 4444 7.10. dla lądowań;
- zachowane zostały wymagane minima wynikające z turbulencji w śladzie aerodynamicznym;
- nie istnieją inne okoliczności uniemożliwiające wydanie zezwolenia.

W praktyce separacja lotniskowa obejmuje między innymi:
- wydanie zezwolenia na operację na pasie (np. lądowanie, niski przelot, konwojer);
- kolejność startów;
- operacje mieszane (start po lądowaniu lub lądowanie po starcie);
- wykorzystanie intersekcji;
- jednoczesne wykorzystanie jednej drogi startowej przez więcej niż jeden statek powietrzny, patrz:
  1) ICAO Doc 4444, 7.11. zmniejszone minima separacji na drodze startowej - RRSM - _Reduced Runway Separation Minima_;
  2) ICAO Doc 7030, 6.5.3. wielokrotne zajęcie pozycji na tej samej drodze startowej.

Podstawową zasadą pozostaje niewydawanie zezwolenia, jeżeli nie istnieje uzasadniona pewność, że w chwili wykonywania operacji zostaną zachowane wymagane minima separacji na drodze startowej. Przykładowo zezwolenie na lądowanie nie powinno zostać wydane, jeżeli nie ma uzasadnionej pewności, że poprzedzający ruch zwolni drogę startową przed minięciem progu przez lądujący statek powietrzny.

### Separacja pozioma

Separacja pozioma może być zapewniana pomiędzy statkami powietrznymi znajdującymi się na tym samym poziomie lotu lub podczas wykonywania wznoszenia i zniżania, pod warunkiem że kontroler zapewni zachowanie wymaganych minimów przez cały czas trwania manewru. Chociaż zapewnianie radarowej separacji poziomej należy do zadań organów zbliżania i kontroli obszaru, minima te mają znaczenie również dla kontrolera TWR podczas planowania odlotów i wydawania zezwoleń na start kolejnych statków powietrznych.

Zgodnie z ICAO Doc 4444 8.7.3.1 standardowe minimum poziomej separacji zapewnianej z wykorzystaniem radaru, ADS-B lub systemów MLAT wynosi 5 NM. Dokument dopuszcza jednak możliwość zmniejszenia tego minimum do 3 NM, jeżeli właściwa władza ATS dopuści takie rozwiązanie oraz parametry systemu dozorowania spełniają wymagane kryteria. W Polsce separacja radarowa w vFIR Warszawa wynosi standardowo **5 NM**, natomiast w **TMA Warszawa** oraz w określonej części **TMA Gdańsk** (w promieniu 16 NM , tj. 30 km od radaru - na VATSIM dla uproszczenia od lotniska EPGD) może zostać zmniejszona do **3 NM**.

Minima separacji dla odlotów, dozorowanie radarowe:

|Sytuacja|Minimalna separacja|
|---|---|
|Odloty w różnych kierunkach / różne SID-y|3 NM|
|Odloty w tym samym kierunku / ten sam SID|5 NM|
|Odloty w różnych kierunkach / różne SID-y,<br/>gdy statek poprzedzający jest o 40 kt lub więcej<br/>wolniejszy od statku podążającego|5 NM|

### Separacja dla turbulencji w śladzie aerodynamicznym

Każdy statek powietrzny podczas lotu wytwarza wiry powstające na końcówkach skrzydeł. Zjawisko to określane jest jako turbulencja w śladzie aerodynamicznym (_wake turbulence_). Szczególnie silne wiry powstają za dużymi i ciężkimi statkami powietrznymi wykonującymi lot z niewielką prędkością, zwłaszcza podczas startu i podejścia do lądowania. Więcej na ten temat można przeczytać w [artykule poświęconym kategoriom statków powietrznych](/docs/basic/aircraft/aircraft.md#turbulencja-w-śladzie-aerodynamicznym).

Podczas organizacji ruchu kontroler powinien uwzględniać kategorię turbulencji statków powietrznych oraz stosować odpowiednie minima określone w obowiązujących przepisach. Szczególnego znaczenia nabiera to podczas:
- kolejnych startów lub innych operacji (np. niski przelot, konwojer) z wykorzystaniem tej samej drogi startowej przez statki powietrzne różnych kategorii WTC;
- wykonywania operacji, podczas których statek powietrzny niższej kategorii WTC może znaleźć się w śladzie aerodynamicznym statku powietrznego wyższej kategorii.

Minima te mogą mieć postać odległości, odstępu czasowego lub obowiązku przekazania ostrzeżenia o turbulencji w śladzie aerodynamicznym, w zależności od rodzaju wykonywanej operacji.

### Separacja czasowa

W określonych sytuacjach możliwe jest stosowanie separacji czasowej zamiast separacji odległościowej. Polega ona na zapewnieniu określonego odstępu czasu pomiędzy kolejnymi statkami powietrznymi wykonującymi operacje w tym samym kierunku lub korzystającymi z tej samej procedury. Separacja czasowa znajduje zastosowanie przede wszystkim przy następujących po sobie odlotach statków powietrznych różnych kategorii turbulencji w śladzie aerodynamicznym.

Przy następujących po sobie odlotach statków powietrznych z różnych kategorii WTC stosuje się poniższe separacje czasowe.

* ten sam punkt rozpoczęcia rozbiegu:

|SP poprzedzający<br/>(pierwszy odlot)|SP podążający<br/>(drugi odlot)|Separacja|
|---|---|---|
|SUPER (J)|HEAVY (H)|2 min|
|SUPER (J)|MEDIUM (M)|3 min|
|SUPER (J)|LIGHT (L)|3 min|
|HEAVY (H)|MEDIUM (M)|2 min|
|HEAVY (H)|LIGHT (L)|2 min|
|MEDIUM (M)|LIGHT (L)|2 min|

* statek powietrzny podążający rozpoczyna start z pośredniej części pasa:

|SP poprzedzający<br/>(pierwszy odlot)|SP podążający<br/>(drugi odlot)|Separacja|
|---|---|---|
|SUPER (J)|HEAVY (H)|3 min|
|SUPER (J)|MEDIUM (M)|4 min|
|SUPER (J)|LIGHT (L)|4 min|
|HEAVY (H)|MEDIUM (M)|3 min|
|HEAVY (H)|LIGHT (L)|3 min|
|MEDIUM (M)|LIGHT (L)|3 min|

:::tip
Znajomość kategorii turbulencji w śladzie aerodynamicznym (WTC – _Wake Turbulence Category_) najpopularniejszych statków powietrznych oraz uwzględnienie wymaganych separacji podczas zarządzania ich odlotami pozwala na usprawnienie przepływu ruchu lotniczego na lotnisku. Jest to istotne zwłaszcza podczas organizacji wydarzeń, które cechują się większym niż zwykle natężeniem ruchu (np. Poland Sunday). Aby osiągnąć optymalny przepływ ruchu lotniczego w dużym jego natężeniu, należy jako kontroler ADC brać pod uwagę kategorię turbulencji w śladzie statku powietrznego, planowany punkt rozpoczęcia rozbiegu oraz procedurę SID, jaką wykonywał będzie dany lot.
:::

### Separacja w locie VFR

W lotach VFR w przestrzeni klasy D to pilot jest odpowiedzialny za obserwację przestrzeni powietrznej oraz separację od innych statków powietrznych. Nie zwalnia to jednak kontrolera z obowiązku przekazywania informacji o ruchu, jeżeli wymagają tego obowiązujące przepisy. Należy wtedy również przekazać informację o kategorii turbulencji w śladzie aerodynamicznym, jeżeli może ona mieć wpływ na bezpieczeństwo wykonywanego lotu (tj. jeżeli poprzedzający statek powietrzny jest w wyższej kategorii WTC niż podążający).

Przykład:
> **ATC:** SP-ABC, Boeing 737 na podejściu do pasa 25, 2. mila, zgłoś w zasięgu wzroku. <br/>**Pilot:** Ruch w zasięgu wzroku, SP-ABC. <br/>**ATC:** SP-ABC, kontynuuj z własną separacją, z uwagą na turbulencję w śladzie, poprzednik kategoria średni.

:::info
O ile w przypadku przylotów VFR kontroler TWR może poprzestać na przekazaniu informacji o kategorii turbulencji w śladzie poprzednika, o tyle już przy operacji odlotowej zobowiązany jest zapewnić odpowiednią separację czasową - na przykład statek powietrzny VFR kategorii WTC L wykonujący konwojera na pasie, z którego wystartował właśnie ruch kategorii M powinien być traktowany jako start z intersekcji i tym samym kontroler powinien zapewnić, aby statek powietrzny nie rozpoczął rozbiegu przed upływem wymaganej separacji czasowej wynoszącej 3 minuty.
:::
