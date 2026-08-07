# Plan lotu w realiach VATSIM

Choć w symulowanym lataniu w sieci VATSIM plan lotu nie pełni tylu funkcji, co w rzeczywistości, pozostaje istotnym narzędziem ułatwiającym życie zarówno wirtualnym pilotom, jak i kontrolerom, i informatorom. Ponadto, skoro w sieci kierujemy się maksymą **as real as it gets**, złożenie poprawnego planu lotu ma też kapitalne znaczenie dla immersji. Znacznie milej lata się, a szczególnie kontroluje, gdy plan lotu wygląda tak, jak mógłby wyglądać analogiczny dokument złożony przez załogę rzeczywistego lotu. O weryfikacji planów, mieszczącej się w zakresie obowiązków kontrolera Delivery, piszemy wśród materiałów dla [ratingu S1](../../../s1/delivery/delivery-flight-plan-validation). W tym miejscu opisujemy na ogólniejszym poziomie, czym jest plan lotu, co może zawierać i jakie są kluczowe różnice między "prawdziwym lotnictwem" a VATSIM.

## Co to jest plan lotu?

Czym w zasadzie jest plan lotu? Zgodnie z prawną definicją są to "określone informacje dotyczące zamierzonego lotu lub części lotu statku powietrznego, dostarczane organom służb ruchu lotniczego". Przekładając to na bardziej ludzki język - chodzi o to, by było wiadomo, kto leci, czym, z kim, skąd i dokąd, którędy i jak wysoko. Do tego dochodzi kilka dodatkowych danych, które mogą przydać się kontrolerom ruchu lotniczego lub informatorom FIS. Zgodnie z SERA.4005 oraz polskimi przepisami, plan powinien zawierać następujące informacje:

1. znak rozpoznawczy statku powietrznego;
2. przepisy wykonywania lotu i rodzaj lotu;
3. liczba i typ(-y) statku(-ów) powietrznego(-ych) oraz kategoria turbulencji w śladzie aerodynamicznym;
4. wyposażenie;
5. lotnisko odlotu lub miejsce operacji lotniczej;
6. przewidywany czas odblokowania;
7. prędkość(-ci) przelotowa(-e);
8. poziom(-y) przelotu;
9. trasa zamierzonego lotu;
10. docelowe lotnisko lub miejsce operacji lotniczej i całkowity przewidywany czas przelotu;
11. zapasowe lotnisko(-a) lub miejsce(-a) operacji lotniczej;
12. zapas paliwa;
13. liczba wszystkich osób na pokładzie;
14. wyposażenie awaryjne i ratownicze;
15. inne informacje.

:::info
Już po lekturze tej listy można zauważyć, że część z tych informacji w realiach VATSIM ma bardzo ograniczoną przydatność (np. liczba osób na pokładzie czy informacje o wyposażeniu ratowniczym). O różnicach między "prawdziwym" formularzem planu lotu a tym stosowanym na VATSIM piszemy więcej w dalszej części tekstu.
:::

## W jakich przypadkach należy złożyć plan lotu?

W polskiej przestrzeni powietrznej, w pewnym uproszczeniu, można podsumować obowiązek składania planu lotu tak:

- dla lotów **IFR**: zawsze, nawet jeśli cały lot odbywa się w przestrzeni niekontrolowanej
- dla lotów **VFR**:
  - jeśli choćby część lotu będzie wykonywana w przestrzeni kontrolowanej
  - jeśli choćby część lotu jest zaplanowana w przestrzeni obowiązkowego składania planu lotu (MFPA, *Mandatory Flight Plan Area*)
  - jeśli dla lotu ma być zapewniona służba informacji powietrznej i służba alarmowa
  - jeśli lot odbywa się w nocy i opuszcza sąsiedztwo lotniska
  - jeśli trasa lotu zakłada przekroczenie granicy Polski stanowiącej granicę zewnętrzną strefy Schengen,
  - jeśli choćby część lotu jest zaplanowana w przestrzeni ADIZ (*Air Defence Identification Zone*), czyli Strefie Identyfikacji Obrony Powietrznej.

:::info
W Polish VACC nie symulujemy służby alarmowej ani przestrzeni ADIZ. Jeśli chodzi o MFPA, prawie wszystkie pokrywają się z granicami przestrzeni kontrolowanej, z wyjątkiem MFPA DORSZ (w okolicach Rzeszowa). W realiach VATSIM najczęstsze przypadki, w których złożenie planu lotu jest obowiązkowe dla lotów VFR, dotyczą lotów rozpoczynających się lub kończących w przestrzeni kontrolowanej lotniska, czyli CTR.
:::


## O co chodzi z "otwarciem" i "zamknięciem" planu lotu?

Jedną z funkcji planu lotu jest ułatwienie sprawdzenia, czy lot odbył się bezpiecznie. Jest to trywialne w przypadku, gdy lot zaczyna się i kończy na lotnisku kontrolowanym, bo po prostu widać i słychać (przez radio), że ktoś odleciał lub przyleciał, więc nie trzeba osobnego meldunku o rozpoczęciu lub zakończeniu lotu. Jednak co jeśli lot rozpoczyna się lub kończy na lotnisku niekontrolowanym? Wówczas, po odlocie załoga powinna poprosić o otwarcie planu lotu, podając czas startu. Przeważnie następuje to po nawiązaniu łączności z FIS. Z kolei po lądowaniu na lotnisku niekontrolowanym także należy poinformować o jego zakończeniu (telefonicznie lub w aplikacji online). Jeśli informacja o zakończeniu planu lotu lub lądowaniu nie zostanie zgłoszona w ciągu 30 minut od przewidywanego zakończenia planu lotu, uruchamiana jest służba alarmowa.

:::info
Ponownie widać tu różnicę między "prawdziwym lotnictwem" a realiami VATSIM. Nie zapewniamy służby alarmowej, bo nikt nie będzie przecież prowadził akcji poszukiwawczej, jeśli pilot po zakończeniu lotu wyłączył symulator i poszedł na spacer, nikomu niczego nie zgłaszając. Oczywiście nic nie stoi na przeszkodzie, żeby załogi symulowały otwarcie i zamknięcie planu lotu, ale w sieci VATSIM nie pociąga to za sobą praktycznie żadnych konsekwencji, w szczególności nie jest rejestrowane w narzędziach dostępnych wirtualnym kontrolerom i informatorom.
:::

## Kiedy należy złożyć plan lotu?

W "prawdziwym lotnictwie" obowiązuje kilka reguł dotyczących złożenia planu lotu. Podajemy je tu w uproszczonej postaci. Dla lotów IFR maksymalne wyprzedzenie to 120 godzin przed planowanym czasem odblokowania (EOBT), a minimalnie 3 godziny lub 1 godzina przed EOBT, odpowiednio dla lotów podlegających regulacjom o zarządzaniu przepływem ruchu lotniczego (ATFM) i lotów, które nie są nimi objęte. Z kolei dla lotów VFR plan powinien być złożony najpóźniej 30 minut przed odlotem w przypadku lotu w przestrzeni niekontrolowanej, a 1 godzinę przed EOBT w przypadku lotów przebiegających przez przestrzeń kontrolowaną lub przekraczających granicę państwa.

:::info
W realiach VATSIM stosujemy dużo prostsze reguły. Podstawowa brzmi banalnie: trzeba zaplanować lot, który ma odbyć się w przyszłości. W praktyce oznacza to, że załoga powinna zgłosić w planie lotu EOBT, który jeszcze nie minął. Bardziej szczegółowo: załogi powinny skontaktować się z kontrolerem Delivery (lub innym zapewniającym tę pozycję *top-down*) na co najmniej 30 minut przed EOBT, a zatem już wówczas plan lotu powinien być wysłany. W praktyce ta reguła stosowana jest jednak przede wszystkim w przypadku znacznego ruchu, zwłaszcza podczas eventów. Jej przestrzeganie ma wtedy istotne znaczenie dla zapewnienia płynności ruchu i uczciwej kolejki odlotów.
:::

W szczególnych okolicznościach, takich jak problemy techniczne uniemożliwiające złożenie planu (w praktyce niewystępujące na VATSIM) lub gdy pierwotnie plan co prawda nie był wymagany, ale jego złożenie stało się konieczne w trakcie lotu (np. pogorszenie pogody wymuszające lot na lotnisko kontrolowane), plan lotu można też złożyć podczas lotu (AFIL). Tego typu plan lotu powinien być złożony tak, by odpowiedni organ dowiedział się o planowanym przybciu statku powietrznego z wyprzedzeniem (co najmniej 10 minut przed wlotem do jego przestrzeni).


## FPL, CPL, SPL - czym się różnią?

**FPL** (*Filed Flight Plan*), czyli złożony plan lotu, to dokładnie ten plan, który został przedstawiony organom zapewniającym służbę ruchu lotniczego przez załogę lub upoważnionego przedstawiciela. Innymi słowy, to FPL wskazuje zamierzenia załogi. Tym samym skrótem określa się depeszę zawierającą taki plan. Złożony plan lotu może być zmodyfikowany. **CPL** (*Current Flight Plan*) to bieżący plan lotu, który odzwierciedla ewentualne zmiany wynikające z kolejnych zezwoleń. Ponownie, skrótem CPL oznacza się także depeszę bieżącego planu lotu. Z kolei **SPL** (*Supplementary Flight Plan*) odnosi się do depeszy wysyłanej na żądanie organów zapewniających służbę ruchu lotniczego, zawierającej informacje uzupełniające z planu lotu (zapas paliwa, liczbę osób na pokładzie czy nazwisko dowódcy statku powietrznego).

:::info
W "prawdziwym lotnictwie" obowiązują standardowe procedury dotyczące zmian planu lotu, związane m.in. z wysyłaniem depeszy (**CHG**). W realiach VATSIM różnica między FPL a CPL nie jest tak widoczna, z uwagi na uproszczone możliwości edycji planu, jakimi dysponują wirtualni kontrolerzy. Podobnie informacje uzupełniające, które w "prawdziwym" lotnictwie nie są przesyłane w depeszach FPL, są na VATSIM od razu widoczne, a niejednokrotnie po prostu są pomijane.
:::

## Formularz planu lotu

W "prawdziwym lotnictwie", aby złożyć plan lotu, należy użyć formularza zgodnego z przepisami ICAO. Obecnie złożenie planu lotu jest możliwe także elektronicznie, dzięki systemowi [Integrated Web Briefing (IWB)](https://iwb.pansa.pl/).

*Źródło:* *[PAŻP](https://www.aro.pansa.pl/en/fpl-form/)*

Formularz planu lotu [obowiązujący w sieci VATSIM](https://my.vatsim.net/pilots/flightplan/) jest wzorowany na formularzu ICAO, ale prostszy. W praktyce piloci najczęściej składają go, posługując się zewnętrznym narzędziem takim jak [SimBrief](https://www.simbrief.com/). Zwłaszcza wśród początkujących użytkowników może to oznaczać, że niekoniecznie będą w stanie świadomie wpisać dane w niektórych pozycjach albo nawet wyjaśnić, co one oznaczają.

Plan lotu na VATSIM może zostać wysłany przed zalogowaniem do sieci. Zostanie jednak usunięty, jeśli użytkownik nie zaloguje się w ciągu 2 godzin.

## Źródła
- [Rozporządzenie UE 930/2012 - SERA - Single European Rules of the Air](https://eur-lex.europa.eu/eli/reg_impl/2012/923/oj/pol)
- [Doc 4444](https://ulc.gov.pl/_download/lotniska/drogi-startowe/kompendium/Doc_4444_pl.pdf)
- [Załącznik 11 do konwencji o międzynarodowym lotnictwie cywilnym - służby ruchu lotniczego](https://ulc.gov.pl/_download/prawo/prawo_miedzynarodowe/za%C5%82_11_zm_1-53.pdf)
- [Rozporządzenie Ministra Infrastruktury z dnia 28 lipca 2020 r. w przepisów ruchu lotniczego](https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20200001305/O/D20201305.pdf)
- [AIP IFR ENR 1.10 i AIP VFR ENR 1.5](https://www.ais.pansa.pl/publikacje/aip-polska/)