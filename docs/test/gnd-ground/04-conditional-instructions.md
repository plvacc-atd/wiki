# Instrukcje warunkowe

W sytuacjach, gdy wydanie instrukcji zależy od wykonania określonego manewru przez inny statek powietrzny lub pojazd, kontroler może zastosować **instrukcję warunkową**. Pozwala ona ograniczyć liczbę transmisji radiowych i zwiększyć płynność ruchu naziemnego bez negatywnego wpływu na poziom bezpieczeństwa. Zamiast oczekiwać na zakończenie manewru wykonywanego przez inny statek powietrzny i dopiero wtedy wydawać kolejną instrukcję, kontroler może przekazać ją wcześniej, wskazując warunek, po którego spełnieniu załoga będzie mogła rozpocząć wykonywanie manewru. Załoga **nie może rozpocząć wykonywania instrukcji przed spełnieniem wskazanego warunku**.

Najczęstszym zastosowaniem instrukcji warunkowych przez kontrolera GND jest **wypychanie**. Instrukcje warunkowe można wykorzystywać również podczas **kołowania**.

## Budowa instrukcji warunkowej

Instrukcja warunkowa składa się z:
1) identyfikatora statku powietrznego, do którego jest skierowana
2) warunku, który musi zostać spełniony
3) właściwej instrukcji

**Identyfikator** to znak wywoławczy statku powietrznego, dla którego wydawana jest instrukcja warunkowa. **Warunek** to jednoznaczne odniesienie do innego statku powietrznego, który załoga może łatwo zidentyfikować wzrokowo (np. typ statku powietrznego, znak wywoławczy, kierunek przemieszczania się). **Instrukcja** to czynność, którą załoga może wykonać po spełnieniu warunku.

Kluczowa jest właśnie ta kolejność: załoga nie powinna otrzymywać najpierw instrukcji, a dopiero później warunku, ponieważ mogłoby to prowadzić do wątpliwości, czy instrukcja nie obowiązuje natychmiast.

## Przykłady

1) Za samolotem oczekującym na wypychanie kołuje inny statek powietrzny. Zamiast rozdzielać komunikację na dwie osobne transmisje, tj.:

> **SP-ABC, standby.
> SP-ABC, oczekujcie.**

I po chwili:
> **SP-ABC, QNH ... push and start approved, facing east.
> SP-ABC, QNH ..., możecie wypychać i uruchamiać, dziobem na wschód**

Kontroler może wydać instrukcję warunkową:
> **SP-ABC, after Ryanair Boeing 737 passing behind you, push and start approved facing east, QNH ....
> SP-ABC, po minięciu przez Boeinga 737 Ryanair za wami możecie wypychać i uruchamiać dziobem na wschód, QNH ...**


2) Instrukcje warunkowe można wykorzystywać również podczas kołowania. Przykładowo, dwa statki powietrzne zbliżają się do skrzyżowania dróg kołowania. Zamiast zatrzymywać jeden z nich i wydawać kolejną instrukcję po minięciu skrzyżowania przez drugi statek powietrzny, kontroler może zawrzeć cały zamiar w jednej transmisji:

> **SP-ABC, after the Airbus A320 passes, continue taxi to holding point runway 25 via Z and A.
> SP-ABC, po minięciu przez Airbusa A320 kontynuujcie kołowania do punktu oczekiwania przed pasem 25 drogami Z oraz A.**

:::info
**Instrukcja warunkowa nie zwalnia kontrolera z obowiązku monitorowania sytuacji.** Jeżeli warunki ruchowe ulegną zmianie, a wykonanie wydanej wcześniej instrukcji może doprowadzić do konfliktu, kontroler powinien niezwłocznie wydać nową instrukcję anulującą lub modyfikującą wcześniejsze polecenie.
:::
