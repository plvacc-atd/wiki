# Instrukcje i zezwolenia warunkowe

Jak już wspomniano w dziale GND poświęconym [instrukcjom warunkowym](/docs/s1/ground/04-conditional-instructions.md), instrukcje i zezwolenia warunkowe (_conditional instructions / clearances_) umożliwiają zwiększenie płynności ruchu poprzez uzależnienie wykonania danej czynności od wystąpienia określonego zdarzenia lub zakończenia innej operacji. Ich zastosowanie wymaga jednak szczególnej ostrożności, ponieważ warunkiem bezpiecznego stosowania instrukcji warunkowych jest jednoznaczne zrozumienie przez pilota treści warunku oraz jego prawidłowe odczytanie podczas readbacku.

Zgodnie z zasadami ICAO zezwolenie warunkowe powinno zawierać:
1. identyfikację statku powietrznego (np. LOT123);
2. warunek, od którego zależy wykonanie operacji (np. behind landing traffic);
3. właściwą instrukcję lub zezwolenie (np. line up and wait runway 25);
4. powtórzenie warunku (np. behind).

Pilot przed otrzymaniem takiego zezwolenia powinien otrzymać informację umożliwiającą jednoznaczne zidentyfikowanie ruchu, którego dotyczy warunek. Instrukcje warunkowe mogą być bowiem wydawane wyłącznie w odniesieniu do statku powietrznego lub pojazdu znajdującego się w zasięgu wzroku pilota. W praktyce oznacza to, że przed wydaniem instrukcji warunkowej kontroler powinien upewnić się, iż pilot potwierdził nawiązanie kontaktu wzrokowego z odpowiednim ruchem. Jeżeli pilot nie potwierdzi nawiązania kontaktu wzrokowego z ruchem, którego dotyczy warunek, kontroler nie może wydać instrukcji ani zezwolenia warunkowego.

:::info
W sieci VATSIM dodatkowym utrudnieniem podczas wydawania instrukcji warunkowych może być tzw. _model matching_, czyli sposób, w jaki symulator odwzorowuje statki powietrzne innych użytkowników. W praktyce pilot może widzieć inny typ statku powietrznego niż ten, który wykonuje lot (np. śmigłowiec jako Airbus A320, dwusilnikowy Diamond DA62 jako Boeing B738 lub Boeing B738 w domyślnym malowaniu zamiast samolotu linii Ryanair). Z tego względu przy wydawaniu instrukcji warunkowych warto wykorzystywać również położenie statku powietrznego, jego kierunek lotu lub wykonywaną operację, a nie opierać identyfikacji wyłącznie na typie statku powietrznego.
:::

Poza instrukcjami warunkowymi dotyczącymi ruchu na polu manewrowym lotniska, kontroler TWR może również wydawać zezwolenia warunkowe dotyczące drogi startowej, na przykład:

> **ATC:** LOT123, report Boeing 737 on three-mile final runway 25 in sight. <br/>**Pilot**: Traffic in sight, LOT 123. <br/>**ATC**: LOT123, **behind landing traffic**, line up and wait runway 25, **behind**. <br/>**Pilot**: **Behind** landing traffic line up and wait runway 25, LOT123. <br/><br/>**ATC:** LOT123, zgłoś w zasięgu wzroku Boeinga 737 na trzeciej mili do pasa 25. <br/>**Pilot**: Ruch obserwujemy, LOT 123. <br/>**ATC**: LOT123, **za lądującym** Boeingiem 737, zajmij pas 25 i oczekuj, **za lądującym**. <br/>**Pilot**: **Za lądującym** zajmujemy pas 25 i oczekujemy, LOT123.

Instrukcje warunkowe powinny być stosowane wyłącznie wtedy, gdy nie istnieje ryzyko nieporozumienia, a sytuacja ruchowa pozwala na jednoznaczne określenie kolejności wykonywania operacji. Instrukcji ani zezwoleń warunkowych **nie stosuje się do startów ani lądowań**. Zezwolenie na start oraz zezwolenie na lądowanie mogą zostać wydane wyłącznie jako bezwarunkowe.
