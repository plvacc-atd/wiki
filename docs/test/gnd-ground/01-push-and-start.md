# Wypychanie i uruchamianie

Jednym z podstawowych zadań kontrolera GND jest wydawanie instrukcji dotyczących **wypychania (pushback)** oraz **uruchomienia silników (startup)**. Choć w sieci VATSIM procedury te są znacznie uproszczone w porównaniu z realnymi operacjami lotniczymi (w rzeczywistości wypychanie samolotu jest wykonywane przez obsługę naziemną przy użyciu holownika), warto znać zasady obowiązujące w prawdziwym świecie i stosować je wszędzie tam, gdzie ma to wpływ na bezpieczeństwo oraz płynność ruchu naziemnego.

## Komunikacja

Na VATSIM załoga najczęściej zgłasza gotowość do wypychania i uruchomienia silników komunikatem:

> **Kraków Ground, SP-ABC, ready for pushback and startup.** <br/>
> **Kraków Ground, SP-ABC, gotowy do wypychania i uruchamiania.**

Jeżeli sytuacja na płycie postojowej na to pozwala, kontroler może umożliwić jednoczesne wypychanie i uruchomienie silników, podając przy tym aktualne ciśnienie QNH.

> **SP-ABC, Kraków Ground, QNH 1013, pushback and startup approved (facing east).** <br/>
> **SP-ABC, Kraków Ground, QNH 1013, możesz wypychać i uruchamiać (dziobem na wschód).** 

:::info
Warto zauważyć, że prawidłowa frazeologia to "pushback and startup approved / możecie wypychać i uruchamiać". Ze względu na specyfikę odpowiedzialności za poszczególne obszary lotniska kontroler GND **nie wydaje zezwolenia** na uruchamianie / wypychanie i uruchamianie, jedynie informuje, że załoga może tę czynność wykonywać.
:::

Jeżeli kierunek wypchnięcia jest oczywisty i wynika z lokalnych procedur, można pominąć informację o kierunku. Warto jednak podawać ją zawsze wtedy, gdy istnieje więcej niż jeden możliwy wariant wypchnięcia lub gdy ma ona znaczenie dla dalszego kołowania.

Załoga wykonuje wypychanie samodzielnie przy pomocy funkcji dostępnych w symulatorze lub używając dodatku obsługującego handling naziemny. Zadaniem kontrolera jest **upewnienie się, że rozpoczęcie wypychania nie spowoduje konfliktu z innym ruchem naziemnym**. Najczęściej spotykaną sytuacją wymagającą odmowy lub opóźnienia wypychania jest kołowanie innego statku powietrznego za samolotem oczekującym na wypychanie lub wypychanie statku powietrznego na stanowisku sąsiednim lub przeciwległym. Wypychanie mogłoby wówczas zablokować drogę kołowania lub doprowadzić do niebezpiecznego zbliżenia dwóch statków powietrznych. W takiej sytuacji należy odczekać na zwolnienie drogi kołowania.

Przykładowa frazeologia:

> **SP-ABC, standby, expect one minute delay due traffic taxiing behind.**
> **SP-ABC, czekaj, spodziewaj się minuty opóźnienia z powodu ruchu kołującego za tobą**.

Dopiero po przekołowaniu drugiego samolotu można poinformować załogę, że może rozpocząć wypychanie.

## Wybór kierunku wypychania

Należy również zwrócić uwagę na kierunek wypchnięcia w kontekście dalszego kołowania. Często istnieje jeden preferowany kierunek, który pozwala samolotowi bezkolizyjnie rozpocząć kołowanie do aktywnego pasa startowego. Wypchnięcie w przeciwną stronę może skutkować koniecznością wykonania dodatkowych manewrów, utrudnić ruch innym statkom powietrznym lub nawet uniemożliwić dalsze kołowanie większym samolotom z uwagi na ograniczenia szerokości dróg kołowania. Przykładowo na lotnisku Kraków-Balice samoloty zaparkowane przy rękawach mogą być wypychane zarówno dziobem na wschód, jak i na zachód, jednak wybór kierunku powinien uwzględniać zarówno rozpiętość skrzydeł statku powietrznego, jak i planowaną trasę kołowania.

Dla większych samolotów, takich jak **Boeing 787**, wypchnięcie dziobem na zachód pozwala ominąć drogi kołowania **Z4, Z5 i Z6**, które nie są dostępne dla statków powietrznych o rozpiętości skrzydeł przekraczającej **52 m**. Mniejsze samoloty, np. **Boeing 737** czy **Airbus A320**, mogą natomiast zostać wypchnięte w obu kierunkach, a wybór zależy przede wszystkim od aktualnej sytuacji ruchowej.

## Stanowiska niewymagające wypychania

Warto pamiętać, że nie każde stanowisko wymaga wypychania. Na wielu lotniskach znajdują się tzw. stanowiska przelotowe, na które samolot wjeżdża od jednej strony i po postoju może z nich wykołować "przed siebie" o własnych siłach po uruchomieniu silników. Dotyczy to najczęściej stanowisk oddalonych od terminala. Na lotnisku EPKK są to np. stanowiska 13-16 (samoloty po uruchomieniu silników wykołowują samodzielnie na drogę kołowania Z), 17-21 (po uruchomieniu można kołować drogą kołowania S), 22-25 (kołowanie na drogę kołowania B) oraz 26-30 (wyjazd na drogę kołowania G). W takim przypadku, komunikacja wygląda zazwyczaj następująco:

> **Kraków Ground, SP-ABC, ready for startup.**
> **Kraków Ground, SP-ABC, gotowy do uruchamiania.**

> **SP-ABC, Kraków Ground, QNH 1013, startup approved.**
> **SP-ABC, Kraków Ground, QNH 1013, możesz uruchamiać.**

:::info
W odróżnieniu od załóg samolotów komunikacyjnych, piloci małych i średnich samolotów lotnictwa ogólnego (GA) często proszą najpierw o uruchomienie silnika, a dopiero później o wydanie zezwolenia na lot. Pozwala to ograniczyć czas pracy urządzeń pokładowych zasilanych z akumulatora przed uruchomieniem silnika, kiedy to akumulator nie jest jeszcze doładowywany przez alternator lub generator.
:::

## Dobra praktyka

Gdy załoga prosi o wypychanie i uruchamianie, warto poświęcić kilka sekund na ocenę sytuacji na płycie postojowej i odpowiedzieć sobie na kilka pytań:

- Czy wypychany samolot nie zablokuje drogi kołowania?
- Czy nie będzie kolidował z innym wypychaniem?
- Czy wybrany kierunek umożliwi sprawne kołowanie do aktywnego pasa?
- Czy samolot nie ma przydzielonego slotu odlotowego (CTOT) np. za godzinę?

W praktyce to właśnie takie pozornie drobne decyzje w największym stopniu wpływają na płynność ruchu naziemnego i odróżniają uporządkowane zarządzanie ruchem od mechanicznego wydawania kolejnych instrukcji i zezwoleń.
