# Operacje HEMS

**HEMS (Helicopter Emergency Medical Service)** to Śmigłowcowa Służba Ratownictwa Medycznego, której zadaniem jest wykonywanie lotów związanych z ratowaniem życia i zdrowia ludzi. Operacje HEMS obejmują między innymi transport poszkodowanych, pacjentów wymagających pilnej pomocy medycznej oraz transport narządów przeznaczonych do przeszczepów. Choć zdecydowana większość takich lotów wykonywana jest śmigłowcami, analogiczne zadania mogą realizować również samoloty. W Polsce służbę HEMS zapewnia Lotnicze Pogotowie Ratunkowe, w skrócie LPR.

## Procedury

W vFIR Warszawa operacje HEMS prowadzone są zgodnie z obowiązującymi procedurami opublikowanymi przez Polish VACC. Podstawowym dokumentem regulującym zasady wykonywania takich lotów jest **HEMS FLIGHT RULES IN vFIR WARSZAWA – ATCO and pilots manual**, dostępny w systemie [CORE PL-VACC](https://cv.plvacc.pl/documents) w zakładce _Operational documents_. Dokument ten stanowi obowiązujące źródło procedur zarówno dla pilotów, jak i kontrolerów pełniących służbę w polskiej przestrzeni VATSIM.

Z punktu widzenia służb ruchu lotniczego lot HEMS należy co do zasady traktować jako **lot VFR**. Oznacza to, że stosuje się do niego standardowe zasady wykonywania lotów z widocznością, z uwzględnieniem kilku wyjątków wynikających ze specyfiki misji ratowniczych. Należy jednak podkreślić jedną z najważniejszych zasad obowiązujących na VATSIM, wynikającą z punktu B6 [VATSIM Code of Conduct](https://vatsim.net/docs/policy/code-of-conduct): **lot HEMS nie ma automatycznie priorytetu wobec pozostałego ruchu lotniczego**. Pilot nie może bowiem samodzielnie nadać sobie pierwszeństwa wyłącznie z racji wykonywania lotu ratowniczego. Zezwolenie na wykonanie lotu HEMS wydaje aktualnie aktywny organ kontroli ruchu lotniczego, który przed jego wydaniem powinien ocenić, czy jest w stanie bezpiecznie przeprowadzić statek powietrzny przez kontrolowaną przestrzeń powietrzną bez powodowania nieuzasadnionych zakłóceń pozostałego ruchu. Jednocześnie należy pamiętać o charakterze takich operacji. Jeżeli sytuacja ruchowa na to pozwala, dobrą praktyką jest zapewnienie lotowi HEMS możliwie najkrótszej trasy do miejsca przeznaczenia. Wynika to z obowiązującej na VATSIM zasady _as real as it gets_.

Spora część lotów HEMS wykonywana jest poza lotniskami, z wykorzystaniem lądowisk przyszpitalnych lub miejsc przygodnych. W takich przypadkach kontroler odpowiada wyłącznie za prowadzenie ruchu w kontrolowanej przestrzeni powietrznej. **Nie wydaje on zezwolenia na lądowanie poza lotniskiem** - odpowiedzialność za wybór miejsca lądowania oraz bezpieczeństwo wykonania tej operacji spoczywa na dowódcy statku powietrznego. W praktyce oznacza to, że zadaniem kontrolera jest przede wszystkim:

- zapewnienie bezpiecznego lotu w kontrolowanej przestrzeni powietrznej;
- przekazanie niezbędnych informacji operacyjnych (wiatr z najbliższego lotniska kontrolowanego, QNH, informacje o ruchu);
- umożliwienie wykonania lotu na tyle sprawnie, na ile pozwala sytuacja operacyjna.

:::info
Na VATSIM pilot wykonujący lot HEMS nie musi posiadać złożonego planu lotu, choć jego złożenie jest zalecane. W przypadku braku planu lotu kontroler powinien uzyskać od pilota informacje o planowanej trasie oraz miejscu lądowania, aby wiedzieć na przykład czy statek powietrzny będzie opuszczał przestrzeń kontrolowaną. Jest to ważne m.in. w kontekście konieczności zakończenia służby kontroli ruchu lotniczego.
:::

## Minima meteorologiczne dla lotów HEMS

Warunki meteorologiczne są jednym z najważniejszych ograniczeń wpływających na możliwość wykonania lotów HEMS. W odróżnieniu od standardowych operacji VFR, loty ratownicze mogą być wykonywane w warunkach gorszych niż standardowe minima dla lotów z widocznością, jednak wyłącznie w określonych sytuacjach i przy spełnieniu dodatkowych wymagań. Na VATSIM kontroler nie ocenia jednak, czy pilot posiada odpowiednie uprawnienia lub doświadczenie do wykonania takiego lotu. Jego zadaniem jest natomiast upewnienie się, że pilot jest świadomy aktualnych warunków meteorologicznych i potwierdził możliwość wykonania operacji.

Minimalne warunki meteorologiczne dla wykonywania lotów HEMS przedstawiono w tabeli poniżej.

|Pora dnia|Podstawa chmur|Minimalna widzialność|
|---|---|---|
|Dzień|300–400 stóp|3 km|
|Dzień|410–500 stóp|2 km|
|Dzień|powyżej 500 stóp|1 500 m|
|Noc|powyżej 1 500 stóp|powyżej 5 km|

W przypadku gdy pilot zgłasza zamiar wykonania lotu HEMS poniżej minimów dla specjalnego lotu VFR śmigłowcowego (podstawa chmur 600 stóp, widzialność 800 m), kontroler powinien przekazać aktualne warunki meteorologiczne i uzyskać potwierdzenie od pilota, że zna warunki i jest w stanie wykonać lot.

Przykład sytuacji:

> **Pilot**: Wrocław Wieża, Ratownik 13, aktywny, informacja H, odlot na północ do miejsca zdarzenia. <br/>**ATC**: Ratownik 13, Wrocław Wieża, podstawy chmur 400 stóp, widzialność 3 kilometry. Potwierdź możliwość wykonania lotu w tych warunkach.<br/> **Pilot**: Potwierdzam, Ratownik 13. <br/>**ATC**: Ratownik 13, zezwalam na lot w CTR Wrocław, nie wyżej niż altitude 1500 stóp. Wiatr cisza. Zgłoś w powietrzu.

Po otrzymaniu takiego potwierdzenia kontroler może kontynuować standardową obsługę lotu VFR, nie podając jednak rodzaju lotu (np. VFR, VFR specjalny), na który wydaje zezwolenie. **Należy pamiętać, że poniżej określonych minimów odpowiedzialność za możliwość wykonania lotu pozostaje po stronie dowódcy statku powietrznego. Rolą ATC jest zapewnienie bezpiecznej organizacji ruchu, a nie podejmowanie decyzji za załogę.**

## Bazy LPR

Znajomość lokalizacji baz LPR jest przydatna, ponieważ znaki wywoławcze wykorzystywane przez śmigłowce ratownictwa medycznego są bezpośrednio powiązane z numerem bazy, z której wykonywany jest lot. W przeciwieństwie do zwykłych lotów VFR, gdzie znak wywoławczy zazwyczaj odpowiada rejestracji statku powietrznego, śmigłowce LPR wykonujące lot ratowniczy korzystają ze znaków wywoławczych typu **Ratownik XX**.

|Numer|Baza|Lotnisko|
|---|---|---|
|LPR1|Białystok|EPBK|
|LPR2|Bydgoszcz|EPBH|
|LPR3|Gdańsk|EPGD|
|LPR4|Katowice|EPKM|
|LPR5|Kielce|EPKA|
|LPR6|Kraków|EPKX|
|LPR7|Lublin|EPLX|
|LPR8|Olsztyn|EPGR|
|LPR9|Poznań|EPPO|
|LPR10|Sanok|EPSA|
|LPR11|Szczecin|EPSC|
|LPR12|Warszawa|EPBC|
|LPR13|Wrocław|EPWR|
|LPR15|Zielona Góra|EPZP|
|LPR16|Łódź|EPLL|
|LPR17|Suwałki|EPSU|
|LPR18|Płock|EPPL|
|LPR19|Sokołów Podlaski|EPXS|
|LPR21|Ostrów Wielkopolski|EPOM|
|LPR22|Koszalin|EPKH|
|LPR23|Opole|EPOP|
|LPR24|Gorzów Wielkopolski|EPXG|

Dla kontrolera najważniejsze jest nie tyle zapamiętanie wszystkich lokalizacji, ile zrozumienie zasady: **Ratownik XX oznacza konkretną bazę operacyjną, a nie konkretny egzemplarz statku powietrznego.**

## Znaki wywoławcze

W zależności od charakteru wykonywanego lotu stosuje się różne znaki wywoławcze.

### Lot ratunkowy LPR

Śmigłowce LPR wykonujące lot o statusie HEMS używają znaku **Ratownik XX**, gdzie XX oznacza numer bazy LPR. Dla przykładu, **Ratownik 6** oznacza śmigłowiec wykonujący operację HEMS z bazy LPR6 w podkrakowskim Kokotowie. Zgodnie z procedurami PL-VACC lotowi HEMS należy przydzielić kod transpondera (squawk) 0001.

### Lot treningowy LPR

Loty szkolne i treningowe wykonywane przez śmigłowce LPR używają znaku **Ratownik XXX**, gdzie XXX oznacza trzy ostatnie znaki rejestracji statku powietrznego. Przykładowo **Ratownik HXM** to śmigłowiec SP-HXM.

Należy pamiętać, że lot treningowy **nie jest lotem HEMS** i nie posiada statusu lotu ratunkowego.

### Pozostałe loty LPR

Loty niezwiązane z operacjami HEMS ani szkoleniem (np. przebazowanie śmigłowca) wykonywane są ze znakiem odpowiadającym rejestracji statku powietrznego, na przykład **SP-HXD**.

### Loty SAR

Loty poszukiwawczo-ratownicze wykonywane przez wojskowe grupy SAR używają znaków **Rescue Helicopter XXX** lub skróconego **Rescue XXX**, gdzie XXX oznacza numer taktyczny śmigłowca.

### Samoloty LPR

Dwa samoloty LPR posiadają stałe znaki wywoławcze:

|Rejestracja|Znak wywoławczy|
|---|---|
|SP-MXR|LPR41|
|SP-MXS|LPR42|

## Frazeologia

Komunikacja z lotami HEMS opiera się zasadniczo na standardowej frazeologii stosowanej dla ruchu VFR. Specyfika tych operacji powoduje jednak występowanie kilku dodatkowych elementów.

Podczas pierwszego zgłoszenia pilot powinien przekazać informacje pozwalające kontrolerowi określić sytuację operacyjną:
- znak wywoławczy;
- informację o charakterze lotu;
- posiadanie informacji ATIS (jeżeli została odsłuchana);
- aktualną pozycję lub zamiar;
- zamierzony kierunek lotu lub miejsce docelowe.

Szczególne znaczenie mają określenia:
- **aktywny**;
- **do miejsca zdarzenia**;
- **do szpitala**.

Informują one kontrolera, że statek powietrzny wykonuje faktyczną misję ratowniczą (a nie lot treningowy czy przelot techniczny) i powinien, jeżeli sytuacja ruchowa na to pozwala, zostać skierowany możliwie najkrótszą trasą.

## Procedury kontroli

Obsługa lotów HEMS przez kontrolera nie wymaga tworzenia odrębnych procedur kontroli. Najważniejsze jest prawidłowe zastosowanie zasad obowiązujących dla ruchu VFR z uwzględnieniem specyfiki tych operacji. Przed wydaniem zezwolenia kontroler powinien uzyskać:

- planowaną trasę lotu;
- miejsce docelowe;
- informację, czy lot będzie opuszczał kontrolowaną przestrzeń powietrzną.

Korespondencja może zatem wyglądać następująco:
> **Pilot**: Kraków Wieża, Ratownik 6, **aktywny**, informacja L, 1600 stóp, wykonujemy do miejsca zdarzenia na autostradzie A4 ok. 5 km na zachód od węzła Balice, za około minutę granica CTRu.

Zezwolenie na lot w kontrolowanej przestrzeni powietrznej wydawane jest na takich samych zasadach jak dla każdego innego lotu VFR, czyli:
> **ATC**: Ratownik 6, Kraków Wieża, **zidentyfikowany**, zezwalam na lot VFR w CTR Krakowa, nie wyżej niż altitude 2000 stóp, QNH 1005, squawk 0001.

_(zasady identyfikacji radarowej opisane są w odrębnym artykule)_

W przypadku lotu do miejsca znajdującego się poza lotniskiem kontrolowanym kontroler nie wydaje zezwolenia na lądowanie. Zamiast tego może jedynie przekazać informacje pomocne pilotowi:
> **Pilot**: Kraków Wieża, Ratownik 6, w dolocie do miejsca zdarzenia. <br/>**ATC**: Ratownik 6, Kraków Wieża, wiatr z Balic 240 stopni 14 węzłów, lądowanie we własnym zakresie, zgłoś na ziemi.

Po wykonaniu lądowania w terenie przygodnym pilot powinien ponownie uzyskać odpowiednie zezwolenie przed wejściem w kontrolowaną przestrzeń powietrzną:
> **Pilot**: Kraków Wieża, Ratownik 6, przed odlotem z miejsca zdarzenia, będziemy wykonywać do szpitala Rydygiera. <br/>**ATC**: Ratownik 6, Kraków Wieża, zezwalam wykonywać jako VFR w CTR Krakowa nie wyżej niż altitude 2000 stóp, wiatr z Balic 240 stopni 14 węzłów, start we własnym zakresie, następnie wykonuj bezpośrednio do szpitala, zgłoś w dolocie.

W przypadku VATSIM należy również pamiętać o zasadzie top-down. Przed opuszczeniem przestrzeni kontrolowanej (np. jeśli miejsce zdarzenia znajduje się poza CTRem) pilot powinien zostać przekazany do właściwego organu zapewniającego FIS, zgodnie z aktualnym pokryciem stanowisk ATC. Przykładowa frazeologia może wyglądać następująco:
> **ATC**: Ratownik 6, Kraków Wieża, opuszczasz przestrzeń kontrolowaną Krakowa, służba kontroli ruchu lotniczego zakończona, służba informacji powietrznej dostępna na Kraków Zbliżanie, 121.075.

Szczególnej uwagi wymagają operacje HEMS wykonywane w pobliżu osi podejścia do pasa. Dobrym przykładem jest CTR Krakowa, gdzie kilka lądowisk przyszpitalnych (m.in. Szpital Rydygiera czy Szpital im. św Jana Pawła II) znajduje się w bezpośrednim sąsiedztwie osi podejścia do pasa 25. W praktyce oznacza to, że śmigłowce wykonujące loty ratownicze na te lądowiska bardzo często przecinają oś podejścia lub wykonują lot w jej bezpośrednim sąsiedztwie, gdy na podejściu znajduje się np. samolot rejsowy.

W takich sytuacjach kontroler powinien przekazać obu załogom informacje o ruchu oraz odpowiednio zaplanować moment przecięcia osi podejścia. Może również zalecić pilotowi HEMS utrzymywanie własnej separacji.

**W zależności od sytuacji ruchowej kontroler może na przykład:**
- zezwolić na przecięcie osi podejścia po minięciu ruchu IFR;
- polecić pilotowi HEMS wykonywać za podchodzącym (po potwierdzeniu przez niego kontaktu wzrokowego);
- ostrzec o turbulencji w śladzie aerodynamicznym;
- polecić oczekiwanie przed osią podejścia do czasu minięcia ruchu.

Przykładowa frazeologia:
> **ATC**: Ratownik 6, za podchodzącym Boeingiem 737 możesz przeciąć oś podejścia. <br/>**ATC**: Ratownik 6, wykonuj z uwagą za podchodzącym. <br/>**ATC**: Ratownik 6, z uwagą na turbulencję w śladzie aerodynamicznym, ruch kategoria średni. <br/>**ATC**: Ratownik 6, oczekuj po północnej stronie osi podejścia.

Można również wydać załodze statku powietrznego IFR instrukcję odejścia na drugi krąg. Wybór rozwiązania powinien zawsze wynikać z bieżącej sytuacji ruchowej i zapewniać bezpieczeństwo operacji.

:::tip
**Dobra praktyka kontrolera**

Lot HEMS wymaga od kontrolera przede wszystkim dobrej oceny sytuacji. Nie chodzi o „dawanie pierwszeństwa”, lecz o świadome zarządzanie ruchem tak, aby umożliwić wykonanie zadania ratowniczego bez pogorszenia bezpieczeństwa pozostałych użytkowników przestrzeni powietrznej. W praktyce dobra obsługa lotów HEMS polega przede wszystkim na przewidywaniu rozwoju sytuacji. Im wcześniej kontroler dostrzeże potencjalny konflikt z innym ruchem, tym większa szansa na jego rozwiązanie bez konieczności opóźniania operacji HEMS lub wywierania istotnego wpływu na pozostały ruch lotniczy.
:::
