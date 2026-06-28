# Sprawdzenie poprawności planu lotu.

Jednym z pierwszych i kluczowych obowiązków kontrolera ruchu lotniczego na pozycji **delivery** jest weryfikacja planu lotu złożonego przez pilota. Prawidłowy plan lotu gwarantuje bezpieczną separację, płynność ruchu w przestrzeni powietrznej oraz daje informacje o zamiarach pilota. Kontroler ma obowiązek sprawdzić i w razie potrzeb poinformować pilota o ewentualnych nieprawidłowościach przed wydaniem zezwolenia na lot.

## 1. 1. Znak wywoławczy.

Znak wywoławczy w planie lotu może składać się z maksymalnie 7 znaków alfanumerycznych (bez użycia łączników lub symboli specjalnych) i przybierać jedną z następujących form:

- zaakceptowany przez ICAO oznacznik użytkownika, po którym następuje identyfikator lotu (np.
  KLM511, LOT2PZ, WZZ25),

- znak oznaczający narodowość lub wspólne oznaczenie i znak rejestracyjny statku powietrznego
  (np. EIAKO, SPKNA, N2567GA).

## 1. 2. Przepisy wykonywania lotu.

Jeżeli chodzi o przepisy według których pilot wykonuje lot, to w zasadzie na Vatsim mamy do wyboru I-IFR lub V-VFR. Warto zweryfikować to patrząc np. na trasę i gdy pojawiłyby sie jakieś wątpliwości co do tego czy jest to prawdiłowo uzupełnione to warto zapytać pilota czy napewno chce wykonywać lot tak jak to wypełnił w planie lotu. W przypadku lotu VFR trzeba pamiętać że może on być wykonywany w warunkach VMC (wyjątek - lot specjalny VFR).
## 1. 3. Typ statku powietrznego oraz kategoria turbulencji w śladzie areodynamicznym.
**Typ statku powietrznego** zawiera od 2 do 4 znaków. Należy wpisać właściwy oznacznik zgodnie z dokumentem ICAO Doc 8643 (Aircraft Type Designators). Jeżeli dla danego typu nie przydzielono oficjalnego oznacznika, należy wpisać ZZZZ, a w polu remarks podać pełną nazwę konstrukcji, poprzedzając ją słowem kluczowym TYP/.

**Kategoria turbulencji w śladzie aerodynamicznym** wpisywana jest po ukośniku definiującym typ statku powietrznego. Należy wprowadzić jednoznakowe oznaczenie kategorii śladu aerodynamicznego, określone na podstawie maksymalnej certyfikowanej masy startowej:

- J (SUPER) typy statków powietrznyuch określone w ICAO Doc 8643 (Aircraft Type Designators),
- H (CIĘŻKI) >136000kg z wyjątkiem typów statków powietrznych określonych w ICAO Doc 8643 (Aircraft Type Designators),
- M (ŚREDNI) 7000kg>136000kg,
- L (LEKKI)  >=7000kg.

## 1. 4. Wyposażenie i możliwości.
Deklaracja **wyposażenia** w planie lotu potwierdza spełnienie trzech warunków:
- obecność na pokładzie sprawnego i certyfikowanego wyposażenia,
- posiadanie przez załogę odpowiednich uprawnień i kwalifikacji do jego obsługi,
- uzyskanie stosownych zatwierdzeń operacyjnych (upoważnień) od właściwego organu nadzoru lotniczego (jeśli są wymagane).

Prawidłowe podanie wyposażenia:
- N – wpisuje się, jeżeli na pokładzie nie ma wyposażenia w pomoce COM/NAV/podejścia dla zamierzonej
  trasy lotu lub wyposażenie takie jest niesprawne,
- S - wpisuje się, jeżeli na pokładzie znajduje się sprawne standardowe wyposażenie w pomoce
  COM/NAV/podejścia dla zamierzonej trasy lotu. Za standardowe wyposażenie uważa się VHF RTF, VOR i ILS, chyba że
  właściwa władza ATS ustaliła inną kombinację,
- oraz/lub wpisać jedną lub więcej z następujących liter w celu podania posiadanego i sprawnego wyposażenia i
  możliwości COM/NAV/podejścia:

        [tabelka z oznaczeniami wyposażenia]

Wyposażenie i możliwości dozorowania:
- N - jeżeli dla trasy, po której ma być wykonany lot, brak jest wymaganego wyposażenia
  dozorowania lub jest ono niesprawne,
- A - transponder mod A,
- C - transponder mod A + C.

        [oznaczenia dla modu S]

## 1. 5. Lotnisko odlotu, przylotu, zapasowe oraz EOBT.
Zarówno dla lotniska do odlotu, przylotu oraz zapasowego wpisuje sie przyjęty przez ICAO czteroliterowy wskaźnik lokalizacji lotniska określony w Doc 7910. W przypadku gdy taki wskażnik nie został przydzielony zapisuje się ZZZZ oraz podaję nazwe  lotniska lub w przypadku terenu przygodnego np. pobliską miejscowość w polu remarks poprzepodzoną odpowiednio skrótem DEP/, DEST/ lub ALTN/.

EOBT - estimated off-block time. Jest to przewidywany czas w którym SP opóści swoje stanowisko postojowe czy to przez wypychanie lub kołowania w przypadku stanowisk przelotowych. KRL wydaje zezwolenie na lot najwcześniej 30 minut przed EOBT. W przypadku gdy EOBT jest w przeszłości, pilota powiadamia się o wygaśnięciu ważności jego planu lotu oraz obowiązku wysłania nowego z prawidłowym EOBT.

## 1. 6. Trasa
KRL ma obowiązek sprawdzić prawidłowość trasy do granic polskiego FIRu (zalecane sprawdzenie całej trasy). W trasie mogą znaleźć się:
- pomoce radionawigacyjne np. VOR, NDB,
- określone punkty nawigacji obszarowej np. BAVOK,
- opisane punkty VFR zgodnie z AIP:
    - ICAOx – np. EPKTB – jako punkt VFR BRAVO dla lotniska EPKT,
    - AICAO – np. AEPKT – Punkt referencyjny lotniska EPKT,
- nazwy geograficzne miejscowości, o ile zapisane są w odpowiednim formacie:
    - Route: 5020N01912E w sekcji Remarks: 5020N01912E KATOWICE,
    - Route: 5020N01912E(Katowice),
- dowolny inny punkt opisany współrzędnymi, np.: Route: 5018N01857E, w sekcji Remarks: 5018N01857E PARK SLASKI CHORZOW,
- pomiędzy punktami wpisuje się drogi lotnicze lub gdy lot nie odbywa sie nimi to między punktami należy wpisać DCT z **wyjatkiem** - nie wpisujemy DCT między kolejnymi punktami wyznaczonymi współrzędnymi lub namiarem i odległością od pomocy nawigacyjnej.

Należy również sprawdzić czy:
- trasa nie posiada punktów terminalowych np. WA901, OFFUK,
- rasa nie posiada SID oraz STAR dla polskich lotnisk(w zależności od państawa czasami wpisuje się je do trasy).

Punkt, w którym planowane jest rozpoczęcie zmiany prędkości (o 5% TAS lub 0,01 Macha lub więcej) lub zmiany
poziomu, oznacza sie w nastepujący sposób np. MAY/N0305F180, HADDY/N0420F330.

Punkt, w którym jest planowana zmiana przepisów wykonywania lotu, oznacza się stosując odstęp oraz jeden z następujących skrótów:
- VFR — gdy ma nastąpić zmiana z IFR na VFR np. KK659 VFR,
- IFR — gdy ma nastąpić zmiana z VFR na IFR np. OFFUK IFR.

Warto również wspomnieć o wskażniku STAY. Służy wpisaniu do planu lotu opóźnień wynikających z innych działań w locie np.: krąg nadlotniskowy, zrzut skoczków spadochronowych oraz wiele innych. Pawidłowy zapis wygląda następująco Route: EPKKB STAY1/0020 EPKKB, w sekcji Remarks: STAYINFO1/BIRD PHOTOGRAPHY. Oznacza to opóźnienie trwające 20 minut zaczynające się i kończące się w punkcjie BRAVO lotniska Kraków Balice, w polu remarks możemy doczytać że opóźnienie wynika z fotografowania ptaków.

## 1. 7. Poziom przelotu.
Należy sprawdzić czy poziom przelotu został prawidłowo dobrany(patrz 5. Przydział poziomów lotu.).

## 1. 8. Remarks.
W polu remarks piloci zamieszczają dodatkowe informacje. Oprócz tego co zostało już wymienione mogą pojawić się tam informacje o NEWBIE PILOT czy to jak się czyta dany znak wywoławczy. Właśnie dlatego zawsze warto tam zerknąć bo może to poprawić świadomość sytuacyjną KRL.