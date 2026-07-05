# Koordynacja

Trasa pokonywana przez statek powietrzny praktycznie zawsze przebiega przez kilka obszarów, za które odpowiadają różni kontrolerzy. Choć na VATSIM, w związku z regułą *top-down*, czasem ta sama osoba odpowiada za więcej niż jedną pozycję, także tutaj pojawia się konieczność uzgodnienia przez różnych kontrolerów treści zezwoleń, instrukcji czy informacji przekazywanych statkom powietrznym. Wszystko po to, by dalsze działania zaplanować tak, aby były akceptowalne dla wszystkich zainteresowanych kontrolerów.

Płynna i świadoma koordynacja pozwala usprawnić przepływ ruchu i ułatwić pracę kolejnym kontrolerom. Brak koordynacji, ale także pochopna akceptacja niestandardowego rozwiązania, nie tylko może utrudnić pracę sąsiednich kontrolerów, dodając im pracy, ale niejednokrotnie powoduje także ryzyko wystąpienia sytuacji niebezpiecznej.

## Potrzeba i przedmiot koordynacji

W największym uproszczeniu: koordynacja jest potrzebna wtedy, kiedy w danej sytuacji z góry nie ustalono (np. w instrukcji operacyjnej INOP lub w LoA/Letter of Agreement) obowiązującej procedury albo kiedy kontroler chce od takiej procedury odstąpić w sposób, który wpływa na sytuację kolejnego kontrolera.

Koordynacja może dotyczyć jednorazowej sytuacji, albo określać zasady współpracy w bardziej ogólny sposób. 

:::info
Przykładem jednorazowej koordynacji może być uzgodnienie przez kontrolera APP z kontrolerem ACC, że dany statek powietrzny zostanie skierowany bezpośrednio do punktu znajdującego się w obszarze odpowiedzialności APP (skrót). Kontroler ACC nie może podjąć tej decyzji samodzielnie, ponieważ taki skrót wpływa na sytuację kontrolera APP. Z kolei kontroler GND może ustalić z kontrolerem TWR, że na czas danej sesji (np. do zakończenia eventu) statki powietrze będą od GND otrzymywać polecenie monitorowania częstotliwości TWR, a nie nawiązywania łączności.
:::

Nie ma wyczerpującej listy zagadnień, które powinny być koordynowane. Warto jednak pamiętać, że koordynacja jest nieodzowna w każdym przypadku współpracy z innym kontrolerem. 

:::caution
Można kierować się prostą zasadą: jeśli masz wątpliwości, czy to, co robisz jest niestandardowe i czy wpływa na sytuację innego kontrolera, to założ, że trzeba to skoordynować.
:::

Przykłady podane poniżej należą do najczęstszych w realiach VATSIM. Ilekroć podawana jest konkretna pozycja, należy uwzględnić możliwość pełnienia tych samych zadań przez innnego kontrolera zgodnie z regułą *top-down* (np. kontroler TWR może koordynować zagadnienia, które w innych warunkach ustalałby zalogowany kontroler TWR).

### Zagadnienia ogólne
1. Przekazanie po zalogowaniu się przez kontrolera na "niższej" pozycji informacji o pasach w użyciu oraz aktualnej informacji ATIS.
1. Poinformowanie sąsiednich kontrolerów z wyprzedzeniem o zamiarze wylogowania się z sieci.

### Koordynacja GND-TWR
1. Ustalenie przez kontrolera GND z kontrolerem TWR zasad przekazywania łączności odpowiednio z odlatującymi i przylatującymi statkami powietrznymi 
1. Ustalenie przez kontrolera GND z kontrolerem TWR, w którą drogę kołowania przylatujący statek powietrzny powinien zwolnić pas.

### Koordynacja DEL-APP i TWR-APP
1. Poinformowanie kontrolera APP przez kontrolera TWR o zamiarze zmiany pasa w użyciu.
1. Ustalenie przez kontrolera DEL z kontrolerem APP możliwości odlotu na niestandardowych zasadach, np. z pominięciem standardowej procedury odlotu SID albo z pasa innego, niż będący w użyciu.
1. Poinformowanie kontrolera TWR przez kontrolera APP, że przylatujący statek powietrzny wykonuje podejście inne niż standardowe (np. podejście z widocznością).
1. Poinformowanie kontrolera TWR przez kontrolera APP o niestandardowych instrukcjach dla przylatującego statku powietrznego w razie nieudanego podejścia, gdy takie instrukcje nie zostały opublikowane.
1. Poinformowanie kontrolera APP przez kontrolera TWR o nieudanym podejściu.
1. Uzgodnienie między kontrolerem TWR i APP postępowania z odlotami (np. wstrzymanie odlotów w związku z ryzykiem kolizji po starcie, wznowienie odlotów po nieudanym podejściu) i przylotami (np. zwiększenie odstępów między przylotami w celu umożliwienia innych operacji na pasie).

### Koordynacja APP-APP i APP-ACC
1. Uzgodnienie między kontrolerem (lub kontrolerami) APP i ACC skierowania statku powietrznego na określony punkt nawigacyjny, wykonywania lotu z określonym kursem albo utrzymywania wskazanej wysokości (np. w celu przyspieszenia lotu lub zapewnienia separacji).
1. Uzgodnienie między kontrolerami APP odpowiadającymi za sąsiednie sektory kolejności podejścia lub innych instrukcji dla przylatujących statków powietrznych (np. konieczności oczekiwania lub redukcji prędkości).

## LoA (Letters of Agreement)

LoA (*Letters of Agreement*) ustalają zasady współpracy między sąsiednimi pozycjami. Obowiązująca instrukcja operacyjna (INOP) PLVACC zawiera treść LoA obowiązujących pomiędzy pozycjami APP i ACC wewnątrz polskiej wirtualnej przestrzeni powietrznej. Oprócz tego obowiązują także LoA z sąsiednimi vFIR, które określają zasady współpracy w przypadku lotów przekraczających granicę Polski. W praktyce znajomość LoA jest najważniejsza dla kontrolerów zapewniających służbę kontroli zbliżania oraz kontroli obszaru.

:::info
Przykładowo, zgodnie z obowiązującym LoA, statki powietrzne odlatujące z Krakowa (EPKK) przez punkt POBOK mogą bez koordynacji z ACC otrzymać instrukcję wznoszenia do FL170. Jeśli dalsze wznoszenie nie zostanie skoordynowane, instrukcje dalszego wznoszenia wydaje kontroler ACC. Z kolei w myśl obowiązującego LoA z vFIR Bremen, statki powietrzne lecące do Berlina (EDDB) przez punkt GOVEN, gdy w Berlinie w użyciu jest pas 24, powinny być zniżane do FL120 przez kontrolera ACC odpowiedzialnego za sektor D LOW.
:::

## Departure release jako szczególny przypadek

*Departure release* to zwolnienie statku powietrznego z dalszego oczekiwania na odlot. Jako kontroler TWR masz obowiązek uzyskania takiego zwolnienia od kontrolera APP w trzech przypadkach:
* kiedy instrukcja operacyjna (INOP) nie anuluje tego obowiązku (aktualnie *departure release* jest domyślnie wymagany tylko dla odlotów z EPMO)
* dla pierwszego odlotu po tym, jak przylatujący statek powietrzny wykonał nieudane podejście (*go around*)
* dla wznowienia odlotów po tym, jak kontroler APP nakazał ich wstrzymanie

Szczególnie w przypadku wzmożonego obciążenia kontrolera APP, dobrą praktyką po stronie kontrolera TWR jest przypomnienie o potrzebie udzielenia *departure release*. Kontroler TWR może ułatwić pracę APP, przekazując wraz z prośbą informacje na temat kierunku kolejnego odlotu.

:::info
Zamiast *Kiedy można odlot?* jako kontroler EPKK_TWR napisz nawet skrótowo *Req dep rls, LOT123 via BABKO*. Ta dodatkowa informacja zwiększa świadomość sytuacyjną kontrolera APP. Przykładowo, jeśli statek powietrzny po nieudanym podejściu otrzymał instrukcję skręcenia na północ, to szybciej oddali się od kolejnego odlatującego na południe w stronę punktu BABKO.
:::

## Metody koordynacji

W realiach VATSIM do koordynacji używamy kilku narzędzi.

* komunikacja tekstowa przez EuroScope

Wysłanie prywatnej wiadomości do innego kontrolera po otwarciu okienka czatu przez dwukrotne kliknięcie na znak wywoławczy na liście zalogowanych pozycji. W praktyce ta metoda najlepiej sprawdza się w sytuacjach najmniej skomplikowanych albo niewymagających natychmiastowej reakcji (np. informacja o pasach w użyciu). Można też odwołać się do niej, gdy zawodzą inne metody (np. kontroler nie reaguje na zgłoszenia "cichej" koordynacji w EuroScope lub nie jest w danym momencie dostępny na kanale głosowym).

* komunikacja głosowa przez Discord

Dostępne dla kontrolerów kanały głosowe ATC mogą posłużyć do koordynacji głosowej. Podłączanie się do tych kanałów nie jest obowiązkowe, ale jest zalecane szczególnie w przypadku większego ruchu i zalogowanej większej liczby pozycji (np. podczas wydarzeń). Połączenie przez Discorda jest trwałe, a na tym samym kanale mogą przebywać kontrolerzy mniej i bardziej obciążeni ruchem. Dla tych ostatnich prowadzenie rozmów "w tle" może być znacznym utrudniniem, gdy jednocześnie muszą prowadzić korespondencję radiową z załogami.

* komunikacja głosowa przez VACS

VACS to program symulujący system komunikacji głosowej (*VCS* lub *Voice Communication System*) o interfejsie podobnym do systemów wykorzystywanych w rzeczywistości przez kontrolerów ruchu lotniczego. Pozwala nawiązać kontakt z innym zalogowanym do VACS kontrolerem. Stosowanie VACS nie jest obowiązkowe, ale jest zalecane nie tylko ze względu na zwiększony realizm symulacji, ale także możliwość uniknięcia opisanych powyżej wad koordynacji przez Discord.

* "cicha" koordynacja przez funkcje EuroScope

Interaktywne listy i etykiety (TAGi) w EuroScope pozwalają wysyłać oraz akceptować żądania dotyczące poszczególnych statków powietrznych. Obecnie jest to możliwe tylko jeśli adresatem żądania jest sąsiedni ("poprzedni") kontroler. Przykładowo, kontroler Gdańsk Approach nie może wysłać żądania bezpośrednio do Kraków Approach, gdy pomiędzy nimi jest jeszcze Warszawa Radar. W takim wypadku konieczne jest dodatkowe uzgodnienie z zainteresowanymi kontrolerami czy to głosowo, czy to przez komunikator tekstowy.

## Frazeologia w koordynacji głosowej

Frazeologia w przypadku koordynacji głosowej została częściowo ustandaryzowana w [Doc 4444](https://ulc.gov.pl/_download/lotniska/drogi-startowe/kompendium/Doc_4444_pl.pdf), pkt 12.1.5. Dotyczy to jednak głównie koordynacji między APP i ACC. W praktyce PLVACC zasady te nie są obecnie ściśle przestrzegane - używany jest język potoczny, zwroty grzecznościowe itp. Mimo braku standaryzacji, dobrą praktyką jest dążenie do zwięzłej i jednoznacznej komunikacji.

Ze względu na specyfikę VATSIM (*SPO* czyli *Single Person Operations*) ta sama osoba prowadzi jednocześnie komunikację radiową i dokonuje koordynacji. Priorytet ma komunikacja z załogami. Dlatego, aby jej nie utrudniać, nie komunikuj swojej prośby od razu, tylko najpierw zgłoś potrzebę koordynacji.

:::info
Przykład nieformalnego, ale precyzyjnego ustalenia niestandardowej procedury odlotu:

>- Kraków Approach, wieża.
>- Nadawaj.
>- LOT123 chce treningowe podejścia IFR, 5000 stóp. Jaki odlot?
>- Daj mu 5000 z kursem pasa.
>- Dzięki!

Przykład komunikacji między kontrolerem Kraków Approach a Warszawa Radar (South).

>- Radar South, Kraków Approach.
>- Zaczekaj *chwila przerwy* Słucham.
>- WZZ001 nad Radomiem, poproszę na OFFUK i na prędkość 300 lub więcej.
>- Tak będzie.
:::

Bardziej formalną frazeologią często posługują się kontrolerzy sąsiednich vFIR (np. LKAA, EDWW czy EDMM).

## Gdy nie ma z kim koordynować

Specyfika VATSIM sprawia, że niekiedy nie jest zalogowany kontroler, na którego sytuację wpływałaby niestandardowa instrukcja. Nie oznacza to, że niestandardowe działanie jest wówczas dozwolone. Skoro do koordynacji nie doszło (bo nie mogło), nie możesz wydawać instrukcji wpływającej na sytuację poza własnym obszarem odpowiedzialności.

:::info
Przykładowo, gdy zalogowany jest samotny kontroler TWR, a nie ma kontrolera APP, to TWR nie może wydać zezwolenia obejmującego niestandardowe warunki odlotu, takiego jak odlot z kursem pasa z wznoszeniem do 6000 stóp. Załoga powinna wtedy wznowić własną nawigację po opuszczeniu przestrzeni, za którą odpowiada TWR. Przykładowo, dla lotu EPKK-EPKT, który zamierza wznosić do FL100, a trasa obejmuje tylko punkt KAX:

> **LOT123, you are cleared to Katowice, departure runway 25, after departure resume own navigation, squawk 1000**

Podobnie kontroler APP lub ACC nie może wydać instrukcji wykonywania lotu bezpośrednio do punktu leżącego w przestrzeni powietrznej, za którą odpowiadałby inny kontroler.
:::

## Źródła
- [Skybrary: Coordination in ATC](https://skybrary.aero/articles/coordination-atc)