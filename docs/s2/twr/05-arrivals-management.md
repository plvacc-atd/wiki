# Zarządzanie przylotami

Bezpieczne zarządzanie ruchem przylatującym jest jednym z zadań kontrolera TWR. Obejmuje ono wydawanie zezwoleń na lądowanie, monitorowanie przebiegu podejścia oraz podejmowanie decyzji dotyczących odejścia na drugi krąg, jeżeli bezpieczne wykonanie lądowania nie jest możliwe. Podczas dużego natężenia ruchu szczególnego znaczenia nabiera przewidywanie momentu zwolnienia pasa oraz odpowiednie planowanie wykorzystania dostępnych luk pomiędzy kolejnymi podejściami.

## Prędkość statków powietrznych na podejściu

Kontroler TWR ma bardzo ograniczone możliwości wpływania na prędkość statku powietrznego wykonującego podejście. W praktyce jedyną instrukcją dotyczącą prędkości, jaką może wydać, jest polecenie jej zredukowania do minimalnej prędkości podejścia. Instrukcja ta wykorzystywana jest przede wszystkim wtedy, gdy konieczne jest zwiększenie odstępu czasowego od poprzedzającego ruchu lub stworzenie możliwości wykonania dodatkowej operacji na drodze startowej.

> **ATC**: SP-ABC, Kraków Tower, reduce to minimum approach speed. <br/>**ATC**: SP-ABC, Kraków Wieża, zredukuj do minimalnej prędkości podejścia.

Jednocześnie, to kontroler APP (jeśli jest zalogowany) jest odpowiedzialny za separację statków powietrznych na podejściu oraz za ich prędkości. Odpowiedzialność ta dotyczy także statków powietrznych znajdujących się już w przestrzeni CTR. Z tego względu, pomijając ewidentne przypadki minimalnego ruchu (np. samotny przylot), wydanie przez TWR instrukcji dotyczącej redukcji prędkości wymaga koordynacji z kontrolerem APP. 

W każdym wypadku konieczna jest ocena sytuacji w powietrzu z uwagi na konsekwencje nieprzemyślanej redukcji prędkości, w szczególności: 
- jeżeli instrukcja jest wydana zbyt wcześnie (np. na dziesięć mil od progu pasa), może zakłócić zaplanowaną przez kontrolera APP organizację ruchu na podejściu,
- jeżeli instrukcja jest wydana, gdy w niedużej odległości (np. pięć mil wcześniej) na podejściu znajduje się kolejny, szybszy statek powietrzny, łatwo doprowadzi do załamania separacji,
- jeżeli instrukcja jest wydana niewielkiemu statkowi powietrznemu (np. jednemu z popularnych na VATSIM *business jetów*), to z reguły spowoduje znaczną redukcję prędkości (np. do 100 kts), co może zaburzyć płynność ruchu lub wręcz spowodować załamanie separacji z kolejnym, szybszym podchodzącym statkiem powietrznym.

:::tip
Wielu problemów opisanych powyżej można uniknąć dzięki odpowiedniej koordynacji. Przykładowo, kontroler TWR może uzgodnić z kontrolerem APP zwiększenie odstępów między podchodzącymi samolotami, odsunięcie w czasie przylotu albo wręcz nakazanie przylatującemu samolotowi przerwanie podejścia zanim zostanie przekazany kontrolerowi TWR. Wymaga to jednak dobrej świadomości sytuacyjnej i działania z wyprzedzeniem.
:::

## Zezwolenie na lądowanie

Zezwolenie na lądowanie jest najczęściej wydawanym przez kontrolera TWR zezwoleniem wobec przylotów. Przed wydaniem zezwolenia kontroler powinien upewnić się, że:
- droga startowa będzie dostępna;
- zostaną zachowane wymagane minima separacji;
- nie istnieją inne przeszkody uniemożliwiające wykonanie lądowania.

Zezwolenie na lądowanie powinno zostać wydane możliwie wcześnie, jednak nie wcześniej niż kontroler uzyska uzasadnioną pewność, że droga startowa będzie dostępna w chwili przyziemienia statku powietrznego. Dla ruchu IFR powinno zostać wydane najpóźniej 2 mile przed progiem pasa, chyba że pilotowi przekazano informację, iż ma się spodziewać późnego zezwolenia na lądowanie. W takiej sytuacji zezwolenie można wydać najpóźniej tuż przed przyziemieniem.

> **ATC**: SP-ABC, Kraków Tower, expect late landing clearance. <br/>**ATC**: SP-ABC, Kraków Wieża, spodziewaj się późnego zezwolenia na lądowanie.

Dla ruchu VFR zezwolenie powinno zostać wydane przed przecięciem przez statek powietrzny progu pasa.

### Struktura zezwolenia na operację przylotową

Zezwolenie na operację przylotową wykorzystującą drogę startową powinno zawierać:
1. identyfikację statku powietrznego (np. SP-ABC);
2. kierunek oraz siłę wiatru (np. wind two five zero degrees five knots);
3. oznaczenie drogi startowej (np. runway 25);
4. typ operacji, na który wydawane jest zezwolenie (np. cleared to land).

> **ATC**: SP-ABC, Kraków Tower, wind two five zero degrees five knots, runway 25, cleared to land. <br/>**Pilot**: Cleared to land runway 25, SP-ABC. <br/><br/>**ATC**: SP-ABC, Kraków Wieża, wiatr dwieście pięćdziesiąt stopni pięć węzłów, pas 25 lądować zezwalam. <br/>**Pilot**: Pas 25 lądować zezwalasz, SP-ABC.

Jeśli w CTR w pobliżu lotniska znajduje się inny ruch, który może mieć znaczenie dla operacji wykonywanej z użyciem drogi startowej, należy o nim poinformować pilota podchodzącego statku powietrznego.

> **ATC**: SP-ABC, Kraków Tower, continue approach, number 2. Number 1 five miles ahead. <br/>**ATC**: SP-ABC, Kraków Tower, kontynuuj podejście jako numer 2, numer 1 pięć mil przed Tobą.

> **ATC**: SP-ABC, traffic information, 2 VFR aircraft north side of the aerodrome, both not higher than 2,000 ft altitude. <br/>**ATC**: SP-ABC, informacja o ruchu, dwa statki powietrzne VFR po północnej stronie lotniska, oba nie wyżej niż altitude 2000 stóp.

W przypadku operacji innej niż lądowanie (np. konwojer, niski przelot), razem z zezwoleniem należy również przekazać instrukcję postępowania po operacji.

> **ATC**: SP-ABC, wind two five zero degrees five knots, runway 25, cleared for touch and go, after operation join right hand traffic circuit. <br/>**ATC**: SP-ABC, wiatr dwieście pięćdziesiąt stopni pięć węzłów, pas 25 na konwojera zezwalam, po operacji dołącz do prawego kręgu.

## Odejście na drugi krąg (go around)

Odejście na drugi krąg stanowi standardową procedurę bezpieczeństwa i nie powinno być traktowane jako sytuacja wyjątkowa ani jako błąd pilota lub kontrolera. Polecenie wykonania **go around** należy wydać zawsze wtedy, gdy nie można zapewnić bezpiecznego wykonania lądowania. Najczęstsze przyczyny obejmują:
- zajętą drogę startową;
- brak wymaganej separacji;
- nagłe pojawienie się przeszkody;
- pogorszenie sytuacji ruchowej.

Decyzję o wydaniu instrukcji odejścia na drugi krąg należy podejmować możliwie wcześnie. W wielu przypadkach wcześniejsze wydanie polecenia pozwala uniknąć bardziej skomplikowanej sytuacji operacyjnej. Należy pamiętać, że taką decyzję może również podjąć dowódca statku powietrznego.

Po odejściu statku powietrznego na drugi krąg kontroler powinien ponownie ocenić sytuację ruchową i zapewnić bezpieczną separację pomiędzy statkiem powietrznym wykonującym odejście a pozostałym ruchem. W zależności od sytuacji może to wymagać:
- anulowania wydanego wcześniej zezwolenia na start lub wstrzymania kolejnych operacji na drodze startowej;
- koordynacji (na jednym ze stosowanych kanałów koordynacji + zaznaczenie w tagu) z kontrolerem APP oraz uzyskania _departure release_, czyli zezwolenia od kontrolera APP na start kolejnego statku powietrznego.

Jeśli statek powietrzny odchodzący na drugi krąg wykonuje lot VFR, zwykle nie zachodzi konieczność powyższej koordynacji. Wówczas to kontroler TWR, jako osoba odpowiedzialna za ruch w CTR, wydaje instrukcję dotyczącą dalszego postępowania. Najczęściej jest to ponowne dołączenie do kręgu lub udanie się nad jeden z wyznaczonych w CTR punktów VFR.

## Zwolnienie pasa

Płynność ruchu można zwiększyć także odpowiednio kierując statkami powietrznymi zwalniającymi pas. Pozwala to skrócić czas kołowania do stanowiska postojowego lub umożliwić szybsze wykonanie kolejnej operacji na pasie. Zróżnicowane umiejętności pilotów w sieci VATSIM sprawiają, że nie zawsze hamowanie po przyziemieniu jest wykonywane w optymalny sposób. Możliwe, a niekiedy konieczne jest ponaglenie załogi.

> **ATC**: LOT123, expedite vacating. <br/>**ATC**: LOT123, przyspiesz zwolnienie pasa.

Załoga może też otrzymać instrukcję zwolnienia pasa w określoną drogę kołowania. Tego typu instrukcje należy jednak przekazać z wyprzedzeniem, aby załoga mogła się odpowiednio przygotować. Taki komunikat można przekazać załodze nawet tuż po przekazaniu statku powietrznego przez kontrolera APP. Spóźnione byłoby przekazanie go dopiero wraz z zezwoleniem na lądowanie.

> **ATC**: LOT123, Kraków Tower, continue approach, plan to vacate via Delta. <br/>**ATC**: LOT123, Kraków Wieża, kontynuuj podejście, zaplanuj zwolnienie pasa przez Delta.

W realiach VATSIM nie wszyscy piloci będą w stanie wykonać taką instrukcję poprawnie. Może okazać się, że załoga potwierdzi instrukcję zwolnienie pasa w określony sposób, a następnie niechcący przeoczy tę drogę kołowania.
