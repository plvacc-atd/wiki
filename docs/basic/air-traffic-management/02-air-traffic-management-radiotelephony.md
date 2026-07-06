# Radiotelefonia i frazeologia

Komunikacja radiowa jest jednym z podstawowych elementów zapewnienia bezpieczeństwa ruchu lotniczego. W odróżnieniu od zwykłej rozmowy, każda transmisja radiowa ma określoną strukturę, wykorzystuje ustandaryzowaną frazeologię oraz podlega ścisłym zasadom określonym przez dokument **ICAO Doc 4444 – PANS-ATM** oraz **Załącznik nr 3 do Konwencji o międzynarodowym lotnictwie cywilnym: Łączność lotnicza**. Celem tych zasad jest zapewnienie, aby każda informacja została przekazana **krótko, jednoznacznie i bez możliwości błędnej interpretacji**.

Podstawowym językiem w łączności lotniczej w vFIR Warszawa jest język angielski, a język polski dostępny jest na życzenie pilota, wyrażone np. poprzez rozpoczęcie przez niego korespondencji właśnie w języku polskim.

## Voice, Receive, Text

W przypadku braku możliwości prowadzenia przez pilota łączności głosowej (Voice), sieć VATSIM dopuszcza również dwa inne tryby prowadzenia komunikacji, oznaczane przez pilota w planie lotu i wyświetlane obok znaku wywoławczego na listach programu Euroscope (np. Departure List, Arrival List itp.):
- **/R** (Receive) - oznacza możliwość odbierania przez pilota transmisji głosowych od kontrolera, przy jednoczesnym prowadzeniu przez pilota korespondencji zwrotnej wyłącznie w formie tekstowej na czacie danej częstotliwości;
- **/T** (Text) - oznacza brak możliwości prowadzenia łączności głosowej w obu kierunkach; cała komunikacja pomiędzy pilotem a kontrolerem odbywa się wyłącznie w formie tekstowej na czacie danej częstotliwości.

## Tryb SIMPLEX

Łączność lotnicza prowadzona jest w trybie **simplex**, co oznacza, że w danym momencie na jednej częstotliwości skutecznie może być prowadzona tylko jedna transmisja. Jeżeli dwie osoby rozpoczną nadawanie jednocześnie, ich sygnały nałożą się na siebie i w praktyce żadna z transmisji nie będzie czytelna. 

Na tej samej zasadzie działają również klienci sieci **VATSIM** (m.in. **vPilot** i **xPilot**) oraz oprogramowanie używane przez kontrolerów ruchu lotniczego. Jednoczesne naciśnięcie przycisku nadawania przez dwóch użytkowników powoduje tzw. **podwójną transmisję (double transmission)**, w wyniku której komunikaty wzajemnie się zakłócają. Dlatego właśnie przed rozpoczęciem nadawania zawsze należy upewnić się, że częstotliwość jest wolna. Jeżeli pilot nie odpowiada na wywołanie, jedną z możliwych przyczyn może być właśnie podwójna transmisja.

## Zanim zaczniesz nadawać

Jedną z podstawowych zasad radiotelefonii jest upewnienie się, że częstotliwość jest wolna przed rozpoczęciem nadawania. Jeżeli na częstotliwości trwa transmisja, należy poczekać do jej zakończenia. W przypadku wątpliwości warto odczekać jeszcze krótką chwilę przed naciśnięciem przycisku nadawania (PTT), aby uniknąć przypadkowego przerwania odpowiedzi drugiej strony.

:::info
Jeżeli usłyszysz jedynie charakterystyczny dźwięk nakładających się transmisji lub nie zrozumiesz komunikatu, nie zgaduj jego treści. Zaczekaj na zakończenie korespondencji i poproś o jej powtórzenie ("say again / powtórz").  
:::

Co więcej, dobra komunikacja radiowa zaczyna się jeszcze przed rozpoczęciem nadawania. Warto wcześniej ułożyć sobie w myślach całą wypowiedź, tak aby była krótka, logiczna i zgodna z frazeologią ICAO. Unikanie długich przerw, wypełniaczy ("yyy", "eee", "iii"), mylenia znaków wywoławczych oraz zastanawiania się podczas nadawania sprawia, że częstotliwość pozostaje dostępna dla pozostałych użytkowników.

Transmisje radiowe powinny być również prowadzone spokojnym, wyraźnym i umiarkowanym tempem. Nie należy mówić ani zbyt szybko, ani przesadnie wolno - ICAO Doc 9432 w punkcie 2.2.1.d) zaleca prędkość mówienia nie więcej niż 100 słów na minutę. Równie ważna jest wyraźna artykulacja liczb, znaków wywoławczych oraz nazw punktów nawigacyjnych. Celem nie jest efektowne brzmienie, lecz jednoznaczne przekazanie informacji. Należy znać zarówno **specyfikę wymowy niektórych słów**, która w wielu przypadkach odbiega od standardowej wymowy języka angielskiego w celu uniknięcia nieporozumień (np. "three" wymawiamy w lotnictwie jako "tree", czyli po prostu TRI, a "nine" zamienia się w "niner"), jak i **alfabet fonetyczny ICAO** zwany również alfabetem fonetycznym NATO (np. pomoc radionawigacyjna KAX to "Kilo Alfa Xray").

## Znak wywoławczy (Callsign)

Znak wywoławczy statku powietrznego jest podstawowym elementem identyfikującym uczestnika korespondencji radiowej. Może być oparty na rejestracji statku powietrznego (np. SP-ABC) lub na oznaczeniu przewoźnika i numerze lotu (np. LOT1, WZZ23, RYR7AC czy RYS174B - maksymalnie siedem znaków).

Zgodnie z zapisami _ICAO 9432_, pilot **nie skraca samodzielnie** swojego znaku wywoławczego. Skróconą formę może jako pierwszy zastosować wyłącznie kontroler. Dopiero od tego momentu pilot może posługiwać się identycznym skrótem. Dla znaków wywoławczych będących rejestracją samolotu, skrócony callsign to pierwszy i dwa ostatnie znaki.

Przykład:
> **ATC:** SP-ABC, taxi holding point runway 25 via Z and A.<br/>

Pilot odpowiada:
> **Pilot**:: Taxi holding point runway 25 via Z and A, SP-ABC.<br/>

W kolejnej transmisji:
> **ATC:** S-BC, contact Kraków Tower, 123.255.<br/>

Pilot może już odpowiedzieć:
> **Pilot**: Kraków Tower 123.255, S-BC.<br/>

Samodzielne skracanie znaku wywoławczego przez pilotów nie jest zgodne z zaleceniami ICAO i może prowadzić do nieporozumień, zwłaszcza gdy na częstotliwości znajduje się kilka statków powietrznych o podobnych znakach, np. SP-ABC, SP-PBC oraz SP-SBC. W takiej sytuacji, dla jasności komunikacji oraz przede wszystkim dla bezpieczeństwa uczestników ruchu lotniczego, kontroler nie powinien inicjować skracania znaku wywoławczego.

## Zasada budowy transmisji

Transmisja radiowa w lotnictwie rozpoczyna się od wskazania adresata, następnie identyfikacji nadawcy, a dopiero potem przekazania właściwej treści. Dzięki takiej kolejności kontroler od razu wie, że komunikat jest skierowany właśnie do niego oraz który statek powietrzny go wywołuje. Przykład pierwszego wywołania:

> **Pilot**: Kraków Tower, SP-ABC, ready to copy IFR clearance.<br/>**Pilot**: Kraków Wieża, SP-ABC, gotowy do zapisania zezwolenia na lot.

 Po nawiązaniu łączności kolejność ulega zmianie. Kontroler rozpoczyna transmisję od znaku wywoławczego statku powietrznego, do którego kieruje komunikat.

> **ATC:** SP-ABC, Kraków Tower, cleared to ...<br/>**ATC:** SP-ABC, Kraków Wieża, zezwalam na lot ...

Pilot odpowiada natomiast zazwyczaj treścią komunikatu, kończąc transmisję własnym znakiem wywoławczym.

> **Pilot**: Cleared to ..., SP-ABC.<br/>**Pilot**: Zezwalasz na lot ..., SP-ABC.

Taki układ pozwala obu stronom korespondencji radiowej upewnić się, że komunikat został skierowany do właściwego odbiorcy. W praktyce oznacza to następującą zasadę: **wywołując stację, najpierw podajemy jej nazwę, a po nawiązaniu łączności kończymy własną transmisją swoim znakiem wywoławczym.**

:::tip
Co prawda dokumenty ICAO nie wymagają stosowania zwrotów grzecznościowych na początku korespondencji, ale **VATSIM jako organizacja przywiązuje dużą wagę do kultury komunikacji**. Warto zatem podczas pierwszej transmisji do pilota przywitać się krótkim „hello” lub „dzień dobry / dobry wieczór” a po zezwoleniu na start dorzucić "have a nice flight / miłego lotu". To właśnie pierwszy kontakt z kontrolerem często buduje wrażenie pilota o jakości obsługi oraz o całym PL-VACC.

**Uprzejmość nie oznacza jednak odchodzenia od standardowej frazeologii**. Kontroler wydaje zezwolenia i instrukcje, dlatego w korespondencji radiowej nie stosuje zwrotów takich jak „please / proszę”. Profesjonalny, spokojny ton oraz życzliwe przywitanie w pełni wystarczają do zachowania właściwej kultury komunikacji.
:::

## Standardowa frazeologia

Frazeologia ICAO została opracowana po to, aby ograniczyć możliwość błędnej interpretacji przekazywanych informacji. Z tego właśnie powodu należy korzystać z ustalonych zwrotów zamiast ich potocznych odpowiedników. Przykładowo:

|Należy używać|Gdy chcemy powiedzieć po angielsku|Gdy chcemy powiedzieć po polsku|
|---|---|---|
|**Affirm /<br/>Potwierdzam**|Yes|Tak|
|**Negative /<br/>Nie**|No|Nie|
|**Correction /<br/>Poprawiam**|I meant something else|Miałem na myśli coś innego|
|**Roger /<br/>Przyjąłem**|OK|Zrozumiałem|
|**Wilco /<br/>Tak będzie**|I will do that|Zrozumiałem i wykonam|
|**Say again /<br/>Powtórz**|Repeat|Jeszcze raz|
|**Stand by /<br/>Oczekuj**|Wait a moment|Zaczekaj|

Stosowanie standardowej frazeologii jest niezmiernie ważne, gdyż ułatwia wzajemne zrozumienie pilotów i kontrolerów niezależnie od ich języka ojczystego. Pomaga to zwłaszcza, gdy dwie strony komunikacji nie mają wspólnego języka ojczystego.

## Break Break

W wyjątkowych sytuacjach, np. gdy konieczne jest szybkie przekazanie informacji innemu statkowi powietrznemu, kontroler może przekazać dwa niezależne komunikaty podczas jednej transmisji radiowej. Do oddzielenia ich od siebie służy zwrot **BREAK BREAK**. Oznacza on, że pierwsza część transmisji została zakończona, a kolejna skierowana jest do innego statku powietrznego. Przykład:

> **ATC:** SP-ABC, stand by. **BREAK BREAK.** LOT123, runway 25, cleared to land.<br/>**ATC:** SP-ABC, oczekuj. **BREAK BREAK**. LOT123, pas 25, lądować zezwalam.

W powyższym przykładzie pierwsza część komunikatu została skierowana do statku powietrznego **SP-ABC**, natomiast po użyciu zwrotu **BREAK BREAK** kontroler rozpoczyna nową transmisję skierowaną do **LOT123**.

Należy pamiętać, że **BREAK BREAK** może zostać użyte jedynie wtedy, gdy pierwsza część komunikatu **nie wymaga readbacku**. Z tego powodu często zwrot ten występuje po krótkich informacjach niewymagających natychmiastowej odpowiedzi, jak np. **Stand by**. Jeżeli pierwsza transmisja zawiera zezwolenie lub instrukcję wymagającą readbacku, kontroler powinien zaczekać na odpowiedź pilota przed rozpoczęciem kolejnej korespondencji.

## Radio Check

Sprawdzenie jakości łączności (**Radio Check**) wykonuje się wyłącznie wtedy, gdy istnieje uzasadnione podejrzenie problemów z odbiorem lub nadawaniem. **W normalnych warunkach nie ma potrzeby wykonywania próby radia przed każdym lotem**, aczkolwiek w sieci VATSIM wielu pilotów wykonuje próbę radia przed pierwszym kontaktem operacyjnym z kontrolerem. Przykład:

> **Pilot**: Kraków Tower, SP-ABC, radio check 123.255.<br/>**Pilot**: Kraków Wieża, SP-ABC, próba radia 123.255.

Kontroler odpowiada, określając jakość odbioru w pięciostopniowej skali czytelności. Jeśli kontroler ocenia jakość odbioru na mniej niż 5, warto podać powód, tj. krótko opisać problem, jaki zidentyfikowano.

|Ocena|Jakość transmisji|
|---|---|
|**1**|Nieczytelna|
|**2**|Czytelna z przerwami|
|**3**|Czytelna z trudnością|
|**4**|Czytelna|
|**5**|W pełni czytelna|

Najczęściej spotykaną odpowiedzią jest:

> **ATC:** SP-ABC, Kraków Tower, read you five.<br/>**ATC:** SP-ABC, Kraków Wieża, słyszę na pięć.

## Readback i Hearback

Jednym z najważniejszych elementów komunikacji radiowej jest procedura **readback**, polegająca na powtórzeniu przez pilota otrzymanego zezwolenia lub instrukcji. Równie istotny jest jednak **hearback**, czyli **obowiązek kontrolera** polegający na wysłuchaniu readbacku i sprawdzeniu, czy pilot prawidłowo zrozumiał przekazany komunikat. W praktyce szczególnie dobrze widać to podczas przekazywania **zezwolenia na lot**, które zawiera wiele elementów wymagających poprawnego odczytania. Jeżeli kontroler stwierdzi, że readback pilota jest prawidłowy, potwierdza to słowami:
> **ATC**: SP-ABC, readback correct / clearance copied correct.<br/>**ATC**: SP-ABC, odczyt prawidłowy / zezwolenie zapisano prawidłowo.

Bezpieczeństwo komunikacji radiowej zależy więc od obu stron - pilot musi prawidłowo odczytać otrzymaną transmisję, a kontroler zweryfikować poprawność tego odczytu.

:::info
**Zapamiętaj najważniejsze zasady:**
- najpierw słuchaj, potem nadawaj;
- przygotuj komunikat przed naciśnięciem przycisku PTT;
- używaj standardowej frazeologii ICAO;
- nie zgaduj treści nieczytelnych transmisji – poproś pilota o ich powtórzenie;
- uważnie słuchaj readbacku pilotów.
:::

Zrozumienie zasad radiotelefonii jest równie ważne, jak znajomość samej frazeologii. Nawet poprawnie użyte zwroty nie zapewnią skutecznej komunikacji, jeśli zostaną przekazane w niewłaściwym momencie, niezgodnie z przyjętą strukturą lub bez zachowania podstawowych zasad prowadzenia korespondencji radiowej. Dlatego dobra łączność polega nie tylko na **tym, co mówimy**, ale również **kiedy i w jaki sposób mówimy** oraz **jak słuchamy**.
