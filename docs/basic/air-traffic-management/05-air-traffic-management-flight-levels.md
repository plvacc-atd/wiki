# Poziomy lotu

Wyobraźmy sobie dwóch pilotów lecących obok siebie na tej samej wysokości. Każdy z nich korzysta jednak z innego ustawienia wysokościomierza, wynikającego z lokalnego ciśnienia atmosferycznego np. z lotniska ich odlotu. W efekcie wskazania na wysokościomierzach różnią się, mimo że rzeczywiste położenie w przestrzeni jest identyczne. Aby wyeliminować ten problem, w lotnictwie wprowadzono system **poziomów lotu (Flight Levels, FL)** – wspólny, standardowy system odniesienia wysokości oparty o stałe ciśnienie 1013,25 hPa (QNE). Dzięki temu wszystkie statki powietrzne powyżej określonego poziomu korzystają z tego samego punktu odniesienia, co umożliwia jednoznaczną separację pionową. 

Poziomy lotu stosuje się po przejściu z lokalnego nastawienia ciśnienia (QNH) na ciśnienie standardowe (QNE). **Poziom lotu to umowne położenie statku powietrznego w pionie, wyrażone w setkach stóp względem standardowego ciśnienia 1013,25 hektopaskali (hPa) lub 29,92 cali słupa rtęci (inHg)**.

Przykładowo:
- FL100 ≈ 10 000 ft
- FL350 ≈ 35 000 ft

System ten eliminuje wpływ zmian ciśnienia atmosferycznego pomiędzy różnymi obszarami i zapewnia jednolite odniesienie dla wszystkich statków powietrznych.

## Poziomy lotu - IFR oraz VFR

Podczas wykonywania lotów poziomy lotu są przydzielane zgodnie z zasadą półkulową (**Semicircular Rule**), określoną przez ICAO. Jej celem jest zapewnienie podstawowej separacji pionowej pomiędzy statkami powietrznymi lecącymi w przeciwnych kierunkach jeszcze przed zastosowaniem dalszych minimów separacji. Kierunek lotu określa się na podstawie **kursu magnetycznego**.

| Rodzaj lotu | Zasada przydziału poziomów | Opis |
|---|---|---|
| **IFR** | westbound = even<br/><br/>eastbound = odd | Poziomy lotu przydzielane zgodnie z zasadą półkulową. Statkom powietrznym lecącym zasadniczo na zachód (180°–359°) przydziela się parzyste poziomy lotu (np. FL140, FL180), natomiast lecącym na wschód (000°–179°) – poziomy nieparzyste (np. FL150, FL190). System ten zapewnia podstawową, kierunkową separację pionową ruchu IFR. |
| **VFR** | westbound = even + 500 ft<br/><br/>eastbound = odd + 500 ft | Stosowana jest ta sama zasada kierunkowa co w IFR, jednak z przesunięciem o 500 ft. Ma to na celu zwiększenie separacji pionowej pomiędzy ruchem IFR a VFR oraz zmniejszenie ryzyka konfliktów na tych samych „nominalnych” poziomach. |

Dwie ciekawostki:
- powyżej przestrzeni RVSM, tj. powyżej FL410, [system przydzielania poziomów lotu wygląda inaczej](/docs/basic/air-traffic-management/05-air-traffic-management-flight-levels.md#RVSM);
- istnieją kraje w Europie (np. Szwajcaria, Francja, Hiszpania czy Portugalia), w których zasada półkulowa wygląda nieco inaczej, tj. **northbound = even, southbound = odd**. Tam statki powietrzne wykonujące loty w kierunku północnym lecą na parzystym poziomie lotu, a te lecące w kierunku południowym obierają poziom lotu nieparzysty.

:::info
Nie wszystkie loty VFR wykonywane są na wysokościach wynikających z zasady półkulowej. Podczas lotów w kręgu nadlotniskowym, lotów szkolnych czy wykonywania zadań specjalnych kontroler może wydać inne instrukcje dotyczące wysokości.
:::

## Procedury nastawiania wysokościomierza

Bezpieczna separacja pionowa wymaga jednolitego odniesienia ciśnienia atmosferycznego:

- **QNH** – do wysokości przejściowej
- **QNE (1013 hPa)** – powyżej wysokości przejściowej

Zmiana nastaw odbywa się w dwóch punktach odniesienia: **TA i TL**.

### Wysokość przejściowa (Transition Altitude – TA)

**TA** to wysokość przejścia z QNH na ciśnienie standardowe podczas wznoszenia.
- ustalana lokalnie (publikacje AIP, np. karty SID dla poszczególnych lotnisk)
- w Polsce typowo: **6500 ft AMSL**
- powyżej TA obowiązują poziomy lotu

### Poziom przejściowy (Transition Level – TL)

**TL** to najniższy dostępny poziom lotu powyżej TA.
- zależny od aktualnego QNH
- publikowany w ATIS lub podawany przez ATC
- podczas zniżania pilot przechodzi z QNE na QNH po jego przekroczeniu

W Polsce typowo **TL = FL80** jednak gdy QNH na dowolnym lotnisku w naszym kraju spada poniżej **995 hPa**, wtedy **TL = FL90**.

Kontroler wydając zniżanie poniżej TL, wydaje je instrukcją zawierającą **wysokość** oraz zawsze **wartość QNH**, jaką należy podczas zniżania ustawić na wysokościomierzu, np.:
> **ATC**: SP-ABC, descend altitude 6,000 ft by QNH 1020.<br/>
**ATC**: SP-ABC, zniżaj wysokość 6 000 stóp, QNH 1020.

### Warstwa przejściowa (Transition Layer)

Pomiędzy TA a TL znajduje się **warstwa przejściowa**.

Nie zaleca się wykorzystywania jej przez statki powietrzne ze względu na ryzyko naruszenia separacji. Stanowi bufor separacyjny, w którym jedne statki powietrzne lecą jeszcze na QNH, a inne już na QNE. Zapobiega to konfliktom wynikającym z różnych nastaw wysokościomierzy.

:::tip
Podsumowując, w praktyce system wysokości w lotnictwie opiera się na dwóch reżimach ciśnieniowych:
- podczas wznoszenia statki powietrzne korzystają z QNH do wysokości przejściowej, a powyżej niej przechodzą na standardowe ciśnienie 1013 hPa – w tym zakresie stosowane są już wyłącznie poziomy lotu;
- podczas zniżania obowiązuje reżim odwrotny: statek powietrzny pozostaje na ciśnieniu standardowym do momentu przejścia przez poziom przejściowy lub do otrzymania od ATC instrukcji zawierającej jednocześnie wysokość oraz QNH, po czym następuje ponowne przejście na nastawienie wysokościomierza QNH.
:::

## RVSM

Poziomy lotu nabierają szczególnego znaczenia w przestrzeni RVSM (Reduced Vertical Separation Minima; FL290–FL410), gdzie obowiązuje zmniejszona separacja pionowa do 1 000 stóp, co pozwala na bardziej efektywne wykorzystanie przestrzeni powietrznej w jej zakresie najczęściej wykorzystywanym przez ruch lotniczy. Warunkiem operacji w RVSM jest odpowiednie wyposażenie statku powietrznego oraz posiadanie stosownego zatwierdzenia operacyjnego. W praktyce wpływa to bezpośrednio na dostępność poziomów lotu i planowanie separacji przez ATC.

:::info
Warto wiedzieć, że powyżej przestrzeni RVSM, poziomy lotu są już tylko nieparzyste ze względu na separację 2 000 stóp. Oznacza to, że ostatni poziom lotu w RVSM to FL410 na wschód. Kolejny dostępny poziom to FL430 i leci się na nim na zachód, następnie FL450 na wschód, FL470 na zachód itd. W praktyce na tych poziomach lotu ruch lotniczy jest już znikomy i może się zdarzyć, że kontroler obszaru zezwoli na lot na zachód na FL460. Co do zasady jednak, w planie lotu poziom przelotowy powinien być wskazany zgodnie z powyższymi założeniami.
:::
