# Czynniki ludzkie

Jedną z największych różnic pomiędzy rzeczywistą służbą kontroli ruchu lotniczego a sprawowaniem tejże w sieci VATSIM jest fakt, że w tym drugim przypadku "po drugiej stronie częstotliwości" znajdują się osoby o bardzo różnym poziomie doświadczenia. Obok pilotów z wieloletnim stażem regularnie pojawiają się osoby wykonujące swój pierwszy lot online, uczące się zarówno zasad komunikacji radiowej, jak i obsługi symulatora czy też wybranego przez siebie statku powietrznego. O ile kontrolerzy przechodzą wieloetapowe szkolenie zanim zaczną samodzielnie obsadzać pozycje w ramach danego vFIR, o tyle od pilotów nie wymaga się przechodzenia obowiązkowego szkolenia przed rozpoczęciem lotów w sieci.

Rolą kontrolera nie jest wyłącznie prowadzenie ruchu lotniczego zgodnie z obowiązującymi procedurami. Równie istotne jest zachowanie profesjonalnego i przyjaznego podejścia do każdego użytkownika sieci, niezależnie od jego doświadczenia. VATSIM jako organizacja kładzie szczególny nacisk na kulturę komunikacji, cierpliwość oraz umiejętność odróżnienia zwykłego błędu od świadomego łamania zasad.

## Błąd ludzki vs świadome łamanie zasad

Każdy pilot, podobnie zresztą jak każdy kontroler, może popełnić błąd. Pomyłka w odczytaniu zezwolenia, wykonanie skrętu w lewo zamiast w prawo, niezamierzone naruszenie przestrzeni kontrolowanej czy przypadkowe zajęcie niewłaściwego stanowiska na płycie są naturalnym elementem procesu nauki i mogą zdarzyć się nawet doświadczonym użytkownikom. Takie sytuacje nie oznaczają automatycznie naruszenia przepisów VATSIM.

Kontroler powinien przede wszystkim:
- zachować spokój;
- wydać instrukcje pozwalające bezpiecznie rozwiązać sytuację;
- upewnić się, że pilot zrozumiał polecenie;
- w razie potrzeby powtórzyć instrukcję lub przekazać ją również w formie tekstowej.

Inaczej należy traktować sytuacje, w których użytkownik świadomie ignoruje instrukcje ATC, celowo zakłóca pracę innych uczestników sieci lub uporczywie odmawia stosowania się do obowiązujących zasad. W takich przypadkach nie mamy już do czynienia z błędem, lecz z naruszeniem zasad sieci, które możemy zgłosić jak opisano w części dotyczącej komendy .wallop.

## Podejście do początkujących pilotów

Jedną z podstawowych zasad funkcjonowania VATSIM jest tworzenie środowiska przyjaznego dla osób rozpoczynających swoją przygodę z lotami online. Zarówno VATSIM [Code of Conduct](https://vatsim.net/docs/policy/code-of-conduct), jak i [Code of Regulations](https://vatsim.net/docs/policy/code-of-regulations) podkreślają, że od kontrolerów oczekuje się profesjonalnego i życzliwego podejścia do mniej doświadczonych pilotów.

W praktyce oznacza to, że kontroler powinien:
- mówić spokojnie i wyraźnie;
- dostosować tempo komunikacji do możliwości pilota;
- w razie potrzeby uprościć wydawane instrukcje, nadal stosując właściwą frazeologię;
- umożliwić (w miarę zdrowego rozsądku i natężenia ruchu) prowadzenie korespondencji tekstowej, jeśli pilot ma trudności z komunikacją głosową;
- wykazać cierpliwość wobec osób uczących się zasad lotnictwa.

VATSIM istnieje między innymi po to, aby umożliwiać naukę w możliwie realistycznym środowisku. Nie oznacza to jednak rezygnacji z zapewnienia bezpieczeństwa i płynności ruchu. Jeżeli sytuacja tego wymaga, kontroler może wydawać prostsze instrukcje lub ograniczyć zakres świadczonej służby wobec danego pilota, zachowując przy tym profesjonalny sposób komunikacji.

Znaczenie właściwego podejścia do użytkowników sieci znajduje odzwierciedlenie również w wymaganiach egzaminacyjnych VATSIM. Poza sytuacjami, w których sposób prowadzenia ruchu stwarza zagrożenie dla bezpieczeństwa operacji lotniczych, jedną z nielicznych przesłanek skutkujących niejako automatycznie niezaliczeniem egzaminu praktycznego jest nieprofesjonalne traktowanie pilotów mających trudności z wykonywaniem poleceń. Oznacza to, że nawet poprawne prowadzenie ruchu lotniczego może nie wystarczyć do zaliczenia egzaminu, jeśli kandydat reaguje na błędy pilotów w sposób pełen kpiny, niecierpliwy, lekceważący lub nieprofesjonalny.

:::caution
Profesjonalizm kontrolera nie polega wyłącznie na znajomości i poprawnym stosowaniu procedur, ale również na sposobie komunikacji z użytkownikami. Umiejętność spokojnego prowadzenia początkującego pilota jest jedną z cech dobrego kontrolera ruchu lotniczego.  
:::

## Komenda `.wallop`

W sytuacjach, gdy użytkownik świadomie narusza przepisy VATSIM lub swoim zachowaniem uniemożliwia normalne prowadzenie ruchu lotniczego, kontroler może skorzystać z komendy:

```
.wallop <wiadomość>
```

Powoduje ona przekazanie zgłoszenia do dostępnych Supervisorów (SUP), którzy oceniają sytuację i podejmują dalsze działania zgodnie z obowiązującymi procedurami. Jeśli nie jest zalogowany żaden z Supervisorów, wiadomość zostanie zarchiwizowana i można liczyć na podjęcie tematu przez właściwe osoby również po pewnym czasie.

Komenda `.wallop` powinna być wykorzystywana przede wszystkim w przypadku:
- świadomego ignorowania instrukcji ATC;
- celowego zakłócania pracy innych użytkowników;
- trolowania lub zachowań o charakterze prowokacyjnym;
- wykonywania operacji niezgodnych z obowiązującymi zasadami VATSIM lub właściwego vACC (np. loty wojskowe wykonywane przez osoby, które nie są członkami organizacji vSOA);
- uporczywego łamania przepisów VATSIM mimo wcześniejszych wyjaśnień.

Nie należy używać komendy `.wallop` wyłącznie dlatego, że pilot jest początkujący lub popełnia błędy wynikające z braku doświadczenia. W takich sytuacjach oczekuje się od kontrolera podjęcia próby rozwiązania problemu poprzez spokojną komunikację i udzielenie niezbędnej pomocy.

Jeżeli interwencja Supervisora okaże się jednak konieczna, warto przekazać w zgłoszeniu krótki opis sytuacji, np. znak wywoławczy pilota oraz rodzaj naruszenia, najlepiej z powołaniem się na konkretny punkt CoC VATSIM. Ułatwi to Supervisorowi szybką ocenę zdarzenia i podjęcie odpowiednich działań. Rolą Supervisora nie jest karanie użytkowników za każdy popełniony błąd. W pierwszej kolejności dąży on do wyjaśnienia sytuacji, edukacji użytkowników oraz przywrócenia prawidłowego przebiegu operacji. Dopiero w przypadku świadomego lub uporczywego naruszania zasad może zastosować środki przewidziane w regulaminach VATSIM.

:::info
**Dobry kontroler potrafi bezpiecznie prowadzić ruch. Bardzo dobry kontroler potrafi zrobić to również wtedy, gdy po drugiej stronie mikrofonu znajduje się osoba wykonująca swój pierwszy lot online, która jednak wykazuje chęć nauki i rozwoju.**
:::
