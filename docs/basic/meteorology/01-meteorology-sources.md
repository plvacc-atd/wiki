# Źródła danych meteorologicznych

Znajomość podstawowych zjawisk meteorologicznych opisanych w poprzednim rozdziale to dopiero pierwszy krok ku ich właściwemu wykorzystaniu w lotnictwie. W codziennej pracy kontrolera ruchu lotniczego oraz pilota decyzje operacyjne podejmowane są m.in. na podstawie **oficjalnych depesz i prognoz meteorologicznych**, przygotowywanych według jednolitych standardów ICAO oraz Światowej Organizacji Meteorologicznej (WMO).

W środowisku VATSIM obowiązuje dokładnie ta sama zasada: kontroler nie powinien opierać się na pojedynczych wskazaniach aplikacji pogodowych, lecz korzystać z oficjalnych depesz meteorologicznych oraz danych wykorzystywanych również w rzeczywistym lotnictwie. Poniżej przedstawiono najważniejsze źródła informacji meteorologicznej wykorzystywane podczas planowania i prowadzenia operacji lotniczych.

## METAR

**METAR (Meteorological Aerodrome Report)** jest bieżącym raportem meteorologicznym sporządzanym dla konkretnego lotniska. Stanowi podstawowe źródło informacji o aktualnych warunkach atmosferycznych i wykorzystywany jest zarówno przez pilotów, jak i służby kontroli ruchu lotniczego. Raport taki publikowany jest zazwyczaj **co 30 lub 60 minut**, a w przypadku istotnych zmian warunków atmosferycznych może zostać wydany raport specjalny (**SPECI**).

:::caution
METAR opisuje wyłącznie warunki obserwowane w chwili wykonania obserwacji. Nie stanowi prognozy pogody.
:::

Typowy METAR zawiera informacje o:
- kodzie ICAO lotniska, dla którego został wydany;
- dniu miesiąca oraz czasie (UTC) obserwacji;
- kierunku i prędkości wiatru;
- widzialności;
- zjawiskach pogodowych;
- zachmurzeniu;
- temperaturze i temperaturze punktu rosy;
- ciśnieniu QNH;
- ewentualnym trendzie krótkoterminowym.

:::info
Nie jest konieczne zapamiętywanie **wszystkich** możliwych skrótów występujących w depeszach METAR. Znacznie ważniejsze jest zrozumienie ich budowy oraz umiejętność szybkiego odczytania najważniejszych informacji wpływających na prowadzenie operacji lotniczych.
:::

Przykład stosunkowo prostego raportu METAR:
**METAR EPKK 241100Z 26012KT 9999 SCT030 BKN060 21/14 Q1018 NOSIG =**

oznacza:
- obserwację dla lotniska Kraków-Balice z 24. dnia miesiąca z godziny 11:00 UTC;
- wiatr z kierunku 260 stopni o sile 12 węzłów;
- widzialność co najmniej 10 km;
- zachmurzenie SCT o podstawie chmur na wysokości 3 000 stóp oraz BKN na 6 000 stóp;
- temperaturę 21°C;
- punkt rosy 14°C;
- ciśnienie QNH 1018 hPa;
- brak spodziewanych istotnych zmian pogody.

Raport METAR zawierający nieco więcej informacji to na przykład:
**EPKT 031400Z 22018KT 2000 0900W R26/1300D +TSRA BKN041CB 19/16 Q1007 =**

oznacza:
- obserwację dla lotniska Katowice-Pyrzowice z 3. dnia miesiąca o godzinie 14:00 UTC;
- wiatr z kierunku 220 stopni o sile 18 węzłów;
- widzialność 2 000 m;
- widzialność w kierunku zachodnim (W) 900 m;
- RVR (zasięg widzialności wzdłuż drogi startowej) dla pasa 26 wynoszącą 1 300 m i obniżającą się;
- burzę z deszczem o dużym natężeniu;
- zachmurzenie BKN o podstawie chmur na wysokości 4 100 stóp i chmurami typu CB;
- temperaturę 19°C;
- punkt rosy 16°C;
- ciśnienie QNH 1007 hPa.

## TAF

**TAF (Terminal Aerodrome Forecast)** jest prognozą meteorologiczną dla lotniska i jego bezpośredniego otoczenia. W przeciwieństwie do depeszy METAR, depesza TAF nie opisuje warunków aktualnych, lecz przewidywane zmiany pogody w określonym przedziale czasu.

W zależności od lotniska prognoza obejmuje najczęściej od **9 do 24 godzin**.

TAF zawiera prognozy dotyczące:
- wiatru;
- widzialności;
- zjawisk pogodowych;
- zachmurzenia;
- oczekiwanych istotnych zmian powyższych warunków meteorologicznych.

W depeszach TAF często spotkać można oznaczenia:
- **BECMG** (_becoming_) – stopniowa zmiana warunków;
- **TEMPO** (_temporary_) – zmiana przejściowa;
- **PROB30** / **PROB40** – odpowiednio 30% lub 40% prawdopodobieństwa (_probability_) wystąpienia danego zjawiska.

Przykładowy raport TAF:
**TAF EPKT 201130Z 2012/2112 01010KT 9999 SCT035**
**BECMG 2012/2014 36015G25KT 4000 -SHSNRA BKN020TCU**
**PROB40 TEMPO 2022/2108 1000 SHSN BKN004 BKN008CB**
**PROB40 TEMPO 2108/2112 01015G25KT SCT025TCU =**

oznacza (skupiając się tylko na 3. linijce), że dla lotniska Katowice-Pyrzowice od godz. 22 UTC w 20. dniu miesiąca do godz. 08:00 UTC w 21. dniu miesiąca z 40% prawdopodobieństwem przewidywana jest przejściowa zmiana warunków: widzialność wynosiła będzie 1 000 metrów, spodziewane są przelotne opady śniegu oraz zachmurzenie BKN o podstawie chmur 400 stóp oraz zachmurzenie BKN o podstawie 800 stóp z występującymi chmurami typu CB.

Dla kontrolera **TAF jest przede wszystkim narzędziem pozwalającym przewidywać przyszłą sytuację operacyjną**. Jeżeli prognoza wskazuje na pogarszającą się widzialność lub zmianę kierunku wiatru, można spodziewać się konieczności uruchomienia procedur LVP lub zmiany kierunku operacji lotniskowych.

## TREND

**TREND** stanowi krótkoterminową prognozę dołączaną do depesz METAR dla niektórych lotnisk i wskazuje istotne zmiany jednego lub więcej elementów, takich jak: wiatr przyziemny, widzialność, pogoda aktualna i zachmurzenie. Obejmuje zwykle okres **dwóch godzin od chwili obserwacji** i informuje o przewidywanych zmianach pogody w najbliższym czasie.

Najczęściej wykorzystuje te same oznaczenia co TAF, przede wszystkim:
- BECMG;
- TEMPO;
- NOSIG.

TREND jest szczególnie przydatny podczas podejmowania bieżących decyzji operacyjnych, gdy pogoda ulega szybkim zmianom.

## SNOWTAM

**SNOWTAM (Snow Notice to Airmen)** jest specjalnym rodzajem depeszy informującej o stanie nawierzchni pola manewrowego lotniska, jeżeli występuje na niej śnieg, lód, błoto pośniegowe (slush), stojąca woda lub inne zanieczyszczenia mogące wpływać na bezpieczeństwo operacji lotniczych. W przeciwieństwie do depesz **METAR** i **TAF**, SNOWTAM **nie opisuje aktualnej ani prognozowanej pogody**, lecz jej skutki dla infrastruktury lotniskowej.

Depesza może zawierać informacje m.in. o:
- zanieczyszczeniu drogi startowej śniegiem, lodem, błotem pośniegowym lub wodą;
- stopniu pokrycia nawierzchni;
- grubości zalegającej warstwy;
- stanie hamowania lub **Runway Condition Code (RWYCC)** określonym zgodnie z [**Global Reporting Format (GRF)**](https://ulc.gov.pl/_download/lotniska/drogi-startowe/posiedzenia-prezentacje/GSwierzewska_Wdraz%cc%87anie_GRF_na_lotniskach.pdf);
- zamknięciu części drogi startowej lub drogi kołowania z powodu odśnieżania.

Dla pilotów informacje zawarte w SNOWTAM mają istotne znaczenie podczas obliczania osiągów statku powietrznego, zwłaszcza wymaganej długości startu i lądowania oraz skuteczności hamowania. Choć na VATSIM depesze SNOWTAM wykorzystywane są znacznie rzadziej niż METAR czy TAF, kontroler powinien mieć świadomość ich istnienia oraz przeznaczenia. Przy wiernym odwzorowywaniu zimowych warunków operacyjnych, informacje o stanie nawierzchni mogą wpływać na sposób wykonywania operacji przez pilotów, wydłużony czas kołowania, konieczność odladzania, wybór pasa startowego czy ewentualne ograniczenia wynikające z symulowanego stanu nawierzchni lotniska.

## SIGMET

**SIGMET (Significant Meteorological Information)** zawiera informacje o faktycznym lub przewidywanym występowaniu określonych zjawisk meteorologicznych na trasie lotu, które mogą wpłynąć na bezpieczeństwo statków powietrznych.

Depesze SIGMET mogą dotyczyć m.in.:
- burz,
- silnych turbulencji,
- silnego oblodzenia,
- pyłu wulkanicznego,
- burz piaskowych,
- cyklonów tropikalnych.

W praktyce VATSIM komunikat SIGMET pozwala przewidzieć potencjalne prośby od załóg o zmianę poziomu lotu lub przebiegu ich lotu.

## AIRMET

**AIRMET** jest informacją dotyczącą określonych zjawisk meteorologicznych występujących lub mogących wystąpić na określonej trasie, które mogą mieć wpływ na bezpieczeństwo lotów na małych wysokościach. Dotyczy zjawisk meteorologicznych mniej intensywnych niż te podane w depeszy SIGMET, jednak nadal mających znaczenie dla lotnictwa, zwłaszcza lotów wykonywanych według przepisów VFR.

W praktyce kontrolerzy VATSIM korzystają z AIRMET znacznie rzadziej niż z METAR lub TAF, jednak znajomość jego przeznaczenia ułatwia zrozumienie sytuacji meteorologicznej podczas lotów VFR.

## ATIS

Choć **ATIS (Automatic Terminal Information Service)** nie jest depeszą meteorologiczną, stanowi jedno z podstawowych źródeł informacji wykorzystywanych przed rozpoczęciem operacji na lotnisku. Jest nadawanym nieustannie w języku angielskim komunikatem w postaci nagrania na określonej dla konkretnego lotniska częstotliwości, zawierającym dane operacyjne i meteorologiczne dotyczące tego lotniska, pochodzące z aktualnego METAR lub obserwacji lotniskowej.

ATIS podaje między innymi:
- identyfikator informacji (np. D - Delta)
- pas startowy w użyciu;
- kierunek i prędkość wiatru;
- widzialność;
- zachmurzenie;
- temperaturę;
- punkt rosy;
- QNH;
- informacje o obowiązujących procedurach.

Na VATSIM treść ATIS dla danego lotniska przygotowuje i udostępnia kontroler (w vFIR Warszawa - TWR lub wyższa pozycja sprawująca służbę kontroli ruchu lotniczego na tym lotnisku w ramach zasady top-down) i powinna ona być zgodna z aktualnymi depeszami meteorologicznymi oraz sytuacją operacyjną na lotnisku.

Przykładowy rzeczywisty komunikat ATIS dla lotniska EPKT:
> This is Katowice information Papa. Time zero niner five five. Expect Delta arrival ILS approach for runway two six. Runway two six runway condition codes six, six, six. First part dry, second part dry, third part dry. Transition level eight zero. Wind three three zero degrees one five knots varying between two seven zero and three four zero degrees. Visibility touchdown zone one zero kilometres or more. Clouds scattered four thousand seven hundred feet. Temperature two one. Dew point eight. QNH one zero one niner. For ATC clearance use DataLink or contact one two four decimal zero eight zero. End of information Papa.

## GAMET

**GAMET** (**G**eneral **A**viation **MET**eorological Information) to prognoza obszarowa w postaci tekstu otwartego, przedstawiona z wykorzystaniem obowiązujących skrótów, dotycząca warunków meteorologicznych na małych wysokościach, w rejonie FIR-u lub jego części, do poziomu lotu FL 100 (FL 150 w terenie górzystym). Skróty stosowane w prognozie GAMET, zostały zawarte w [załączniku 3 ICAO](https://ulc.gov.pl/_download/prawo/prawo_miedzynarodowe/konwencje/Zalacznik_3_ICAO_zm_82.pdf). Okres ważności prognozy wynosi 6 godzin.

Prognoza GAMET składa się z dwóch części, z których pierwsza zawiera informacje o niebezpiecznych zjawiskach pogody, a druga zawiera informacje takie jak ciśnienie, zachmurzenie, czy kierunek i siłę wiatru na różnych wysokościach, wysokość izotermy zero oraz prognozowaną minimalną wartości QNH.

Prognozy GAMET są opracowywane dla poszczególnych sektorów FIS w WARSAW FIR:
- A1-FIS GDAŃSK;
- A2-FIS POZNAŃ;
- A3-FIS OLSZTYN;
- A4-FIS OKĘCIE;
- A5-FIS KRAKÓW.

Szczegółowe omówienie prognozy GAMET oraz przykłady prognozy obszarowej znaleźć można np. [tutaj](https://dlapilota.pl/wiadomosci/imgw/gamet-prognoza-obszarowa-dla-lotow-na-malych-wysokosciach), [tutaj](https://dlapilota.pl/files/upld/4przyklady_prognozy_obszarowej.pdf) oraz [tutaj](https://skybrary.aero/articles/gamet).

Choć prognozy GAMET wykorzystywane są przede wszystkim przez pilotów wykonujących loty na małych wysokościach, kontroler VATSIM powinien wiedzieć o ich istnieniu i przeznaczeniu, zwłaszcza podczas obsługi ruchu VFR w lotach trasowych.

## Gdzie szukać informacji?

Zamiast zapamiętywać wszystkie skróty występujące w depeszach meteorologicznych, znacznie lepiej nauczyć się ich interpretacji oraz korzystać z wiarygodnych źródeł informacji. Szczególnie warte polecenia są:

- [**Załącznik nr 3 do Konwencji o międzynarodowym lotnictwie cywilnym: Służba meteorologiczna dla międzynarodowej żeglugi powietrznej**](https://ulc.gov.pl/_download/prawo/prawo_miedzynarodowe/konwencje/Zalacznik_3_ICAO_zm_82.pdf) – dokument określający międzynarodowe standardy i zalecane metody postępowania w zakresie zapewniania jednolitej służby meteorologicznej dla lotnictwa - link prowadzi do wydania dwudziestego pierwszego, z sierpnia 2025 r.;
- - [**Awiacja IMGW-PIB**](https://awiacja.imgw.pl/) – serwis pogodowy dla lotnictwa zawierający prognozy oraz depesze meteorologiczne dla Polski;
- [**METAR/TAF Decoder**](https://www.metar-taf.com/explanation) – czytelne wyjaśnienie struktury depesz, występujących w nich skrótów oraz tłumaczenie ich treści;
- [**Awiacja IMGW-PIB: METAR**](https://awiacja.imgw.pl/uploads/Detailed_description_METAR_84b34cfe19.pdf) – dokładniejsze wyjaśnienie struktury depeszy i skrótów, z uwzględnieniem praktyki IMGW
- [**Ogimet**](https://www.ogimet.com) – archiwalne i bieżące depesze METAR oraz TAF z całego świata.
