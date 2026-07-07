# Ruch na płycie

Po zakończeniu wypychania lub uruchomienia silników przez załogę zadaniem kontrolera GND jest bezpieczne poprowadzenie statku powietrznego do punktu oczekiwania przed pasem startowym. W przypadku przylotów sytuacja wygląda odwrotnie: samolot należy wówczas bezkolizyjnie doprowadzić z drogi startowej do przydzielonego stanowiska postojowego.

Wydawanie instrukcji kołowania wymaga planowania kilku ruchów naprzód. Dobry kontroler nie zastanawia się, którędy poprowadzić samolot dopiero po otrzymaniu zgłoszenia od załogi, lecz już wcześniej analizuje sytuację na lotnisku, przewiduje możliwe konflikty i wybiera trasę zapewniającą największą możliwą płynność ruchu.

## Kołowanie odlotów

Po zakończeniu wypychania lub uruchomienia silników załoga zgłasza gotowość do kołowania.

> **Pilot**: Kraków Ground, SP-ABC, ready to taxi. <br/>**Pilot**: Kraków Ground, SP-ABC, gotowy do kołowania.

Kontroler wydaje instrukcję kołowania do właściwego punktu oczekiwania przed pasem startowym.

> **ATC**: SP-ABC, taxi holding point runway 25 via Z and A. <br/>**ATC**: SP-ABC, kołuj do punktu oczekiwania przed pasem 25 drogami Z oraz A.

:::info
Wydając instrukcję kołowania należy upewnić się, że:

- wybrana trasa jest dostępna dla danego typu statku powietrznego,
- nie prowadzi przez zamknięte drogi kołowania,
- nie spowoduje konfliktu z innym ruchem naziemnym,
- jest możliwie najkrótsza i zgodna z lokalnymi procedurami.

Nie zawsze jednak najkrótsza droga jest najlepszym rozwiązaniem. Czasami korzystniejsze będzie poprowadzenie samolotu nieco dłuższą trasą, jeżeli pozwoli to uniknąć zatrzymywania go na skrzyżowaniu dróg kołowania, oczekiwania na przejazd innego statku powietrznego lub sytuacji, w której dwa statki powietrzne spotkają się na odcinku drogi kołowania uniemożliwiającym bezpieczne minięcie.
:::

Przekazanie statku powietrznego do kontrolera TWR następuje zgodnie z zasadami podanymi w [GND 0 - Przekazanie statku powietrznego do kolejnego kontrolera](/docs/test/gnd-ground/00-GND-duties.md).

## Kołowanie przylotów

Po opuszczeniu drogi startowej kontroler TWR przekazuje przylatujący statek powietrzny na częstotliwość GND. Kontroler GND wydaje instrukcję kołowania do stanowiska postojowego.

> **ATC**: SP-ABC, taxi stand 13 via B, W and T. <br/>**ATC**: SP-ABC, kołuj do stanowiska 13 drogami B, W oraz T.

Podobnie jak w przypadku odlotów, należy zwrócić uwagę na możliwość wystąpienia konfliktów z ruchem kołującym do startu oraz z samolotami wykonującymi wypychanie.

:::info
Instrukcja kołowania powinna jednoznacznie określać **miejsce, do którego statek powietrzny ma kołować**, czyli tzw. _clearance limit_. Najczęściej będzie to punkt oczekiwania przed drogą startową lub stanowisko postojowe.
> **ATC**: SP-ABC, taxi holding point runway 25 via Z and A. <br/>**ATC**: SP-ABC, kołuj do punktu oczekiwania przed pasem 25 drogami Z i A.

 W sytuacji zwiększonego natężenia ruchu kontroler może jednak wydać instrukcję jedynie do miejsca pośredniego, np. przed skrzyżowaniem dróg kołowania.
 > **ATC**: SPABC, taxi via W, hold short of B. 

Po osiągnięciu tego miejsca załoga otrzyma dalsze instrukcje kołowania.

Co ważne, należy unikać łączenia obu rodzajów poleceń w jednej transmisji. Niepoprawna będzie zatem instrukcja:
> **ATC**: SP-ABC, taxi holding point runway 25 via Z, W, B and A, on W hold short of B.

zawiera ona dwa różne miejsca zakończenia instrukcji kołowania: punkt oczekiwania przed pasem 25 oraz punkt zatrzymania przed drogą kołowania B. Załoga nie powinien otrzymywać jednocześnie polecenia dojechania do punktu oczekiwania i zatrzymania się wcześniej.
:::

## Progressive taxi

Nie każda załoga na VATSIM zna układ dróg kołowania lotniska, na którym wykonuje operacje. Dotyczy to zwłaszcza lotnictwa ogólnego, załóg wykonujących lot na dane lotnisko po raz pierwszy lub użytkowników mniej szczegółowych scenerii. W takiej sytuacji załoga może poprosić o **progressive taxi**, czyli prowadzenie po lotnisku krok po kroku.

> **Pilot**: Kraków Ground, SP-ABC, request progressive taxi.

Zamiast wydawać jedną długą instrukcję kołowania, kontroler prowadzi statek powietrzny kolejnymi poleceniami, np.:
> **ATC**: SP-ABC, taxi ahead on Z, I will advise when to turn onto W.

Po osiągnięciu wskazanego miejsca:
> **ATC**: SP-ABC, turn right onto W.

Następnie:
> **ATC**: SP-ABC, now turn right onto B and taxi ahead via B.

Na VATSIM z progressive taxi spotykamy się stosunkowo rzadko, jednak warto pamiętać, że załoga ma pełne prawo poprosić o taką pomoc. Jeżeli sytuacja ruchowa na to pozwala, kontroler powinien udzielić możliwie prostych i jednoznacznych instrukcji, pamiętając jednocześnie, aby nie koncentrować całej uwagi wyłącznie na jednym statku powietrznym.

## Ograniczenia w kołowaniu

Nie każda droga kołowania może być wykorzystana przez każdy statek powietrzny. Planując trasę, należy uwzględnić wszystkie ograniczenia opublikowane w dokumentacji lotniska.

### Ograniczenia wynikające z rozpiętości skrzydeł

Najczęściej spotykane są ograniczenia dotyczące maksymalnej rozpiętości skrzydeł.

Skąd wiadomo, czy dany samolot może korzystać z konkretnej drogi kołowania? Z pomocą przyjdą nam dokumenty przywołane w części [Lotniska - Gdzie szukać informacji?](/docs/test/00-aerodromes.md#gdzie-szukać-informacji).
Dla przypomnienia, karty związane z operacjami naziemnymi na lotnisku (karta lotniska, stanowiska, karty ukazujące układ poszczególnych płyt postojowych) zazwyczaj znaleźć można podążając ścieżką: [AIP Polska](https://www.ais.pansa.pl/publikacje/aip-polska/) IFR -> CZĘŚĆ 3 - LOTNISKA (AD) -> EPKK -> EPKK 2 oraz EPKK 4. Zawsze warto również zaznajomić się z sekcją opisową EPKK 1, zwłaszcza częściami od 2.20 do 2.23.

Czego możemy dowiedzieć się np. o lotnisku Kraków-Balice patrząc na w/w karty oraz zapisy?
- karta EPKK AD 2 to AERODROME CHART, czyli karta przedstawiająca ogólny układ lotniska; zawiera również zapisy o szerokości poszczególnych dróg kołowania;
- karta EPKK AD 4 to AIRCRAFT PARKING CHART, czyli karta dokładniej ukazująca poszczególne stanowiska, wraz z tabelą zawierającą w kolumnie ACFT REF. CODE literę od A do F - jest to litera kodu referencyjnego ICAO (Aircraft Reference Code), określająca maksymalną rozpiętość skrzydeł oraz rozstaw kół podwozia głównego statku powietrznego, dla którego przeznaczone jest dane stanowisko (np. litera C oznacza rozpiętość skrzydeł od 24 do 36 metrów a rozstaw kół podwozia głównego od 6 do 9 m - to najpopularniejsze na Balicach samoloty, np. Airbus A320 czy Boeing 737);
- w części EPKK AD 2.20 LOKALNE PRZEPISY DLA LOTNISKA odnajdziemy również w punkcie 3.1 PROCEDURY DOTYCZĄCE KOŁOWANIA m.in. następujące informacje:
    > TWY Z4, TWY Z5 i TWY Z6 dostępne dla statków powietrznych o rozpiętości skrzydeł do 52 m. <br/>
    > TWY T i TWY S dostępne dla samolotów o rozpiętości skrzydeł 36 m.

Zgodnie z zasadą „as real as it gets” na VATSIM staramy się przestrzegać procedur obowiązujących w rzeczywistości. W związku z tym B789 (Dreamliner o rozpiętości skrzydeł przekraczającej 60 m) zaparkowany przy rękawie na stanowisku nr 5 powinien spodziewać się wypchnięcia dziobem na zachód, a następnie kołowania do punktu oczekiwania przed pasem 25 drogami Z, W, B i A, ponieważ drogi Z4, Z5 i Z6 są niedostępne dla samolotów o rozpiętości skrzydeł powyżej 52 m. Stojący obok B738, którego rozpiętość skrzydeł nie przekracza 36 m, może natomiast zostać wypchnięty dziobem na wschód i kołować do tego samego miejsca drogami Z oraz A.

### Ograniczenia wynikające z tymczasowych ograniczeń infrastruktury

Zdarza się, że drogi kołowania są niedostępne lub mają dodatkowe ograniczenia w związku z różnymi względami operacyjnymi (na przykład prowadzone prace remontowe czy powstanie przeszkody w polu manewrowym). Wszystkie ograniczenia tego typu obowiązujące na VATSIM publikowane są na stronie _Self check-in_ w postaci NOTAMów, przykładowo:

- ograniczenie dostępności dróg kołowania:
    ```
    A1604/26 NOTAMN 
    Q) EPWW/QMXLT/IV/M  /A /000/999/5210N02058E005 
    A) EPWA B) 2606121138 C) 2609112359EST 
    E) TWY E4, TWY E3, TWY N3 AND SEGMENT OF TWY E2 BTN TWY R AND TWY E4 
    AVBL FOR ACFT WITH WINGSPAN BELOW 36M. 
    ```

- zamknięcie dróg kołowania:
    ```
    E2314/26 NOTAMN
    Q) EPWW/QMXLC/IV/BO /A /000/999/5306N01759E005
    A) EPBY B) 2607030546 C) 2607032359
    E) TWY E2 CLSD FROM ACFT STAND NR 17 TO TWY C. INTERSECTION OF TWY E
    AND TWY C AVBL FOR TAXING.
    ```

- kołowanie tylko w asyscie FOLLOW-ME (niesymulowane na Vatsim):
    ```
    H0765/26 NOTAMN
    Q) EPWW/QMXLT/IV/M  /A /000/999/5106N01653E005
    A) EPWR B) 2604081330 C) 2607082359 EST
    E) TWY J2 AND B4 TAXIING WITH FOLLOW ME ASSISTANCE ONLY.
    ```

## Low Visibility Procedures (LVP)

Podczas obowiązywania procedur ograniczonej widzialności (**LVP**) część dróg kołowania może zostać wyłączona z użytkowania, a ruch naziemny odbywa się według specjalnych zasad opublikowanych dla danego lotniska. Na VATSIM procedury LVP stosowane są wtedy, gdy warunki pogodowe rzeczywiście uzasadniają ich wprowadzenie. Kontroler GND powinien wówczas zapoznać się z lokalnymi procedurami i prowadzić ruch zgodnie z opublikowanymi ograniczeniami.

Informacje dotyczące procedur LVP dla poszczególnych lotnisk w Warszawa vFIR można znaleźć w dokumencie _Operations Manual vFIR Warszawa_ oraz w przywołanej już powyżej sekcji AIP CZĘŚĆ 3 - LOTNISKA (AD) -> EPKK -> EPKK 1 -> AD 2.22.

Kluczowe ograniczenia związane z LVP na lotnisku Kraków-Balice to m.in.: ruch statków powietrznych na płytowych drogach kołowania odbywa się wyłącznie w asyście FOLLOW-ME (nie symulujemy tego aspektu w sieci VATSIM); drogi kołowania C oraz D są niedostępne.

## Dobra praktyka

Wydając instrukcję kołowania, warto przez kilka sekund spojrzeć nie tylko na statek powietrzny, z którym prowadzimy korespondencję, ale na całe lotnisko i odpowiedzieć sobie na kilka pytań:

- Czy za minutę dwa samoloty nie spotkają się na tej samej drodze kołowania?
- Czy wypychany samolot nie zablokuje właśnie wybranej trasy?
- Czy można poprowadzić ruch tak, aby uniknąć zatrzymań?
- Czy większy statek powietrzny zmieści się na planowanej trasie kołowania?
- Czy obowiązujące procedury (np. LVP) nie wykluczają wykorzystania wybranych dróg kołowania?

Płynny ruch naziemny rzadko jest efektem szybkiego wydawania instrukcji. Zazwyczaj wynika z odpowiednio wczesnego planowania i przewidywania sytuacji, które wystąpią za kilkadziesiąt sekund. To właśnie umiejętność patrzenia kilka ruchów naprzód jest jedną z najważniejszych cech dobrego kontrolera GND.
