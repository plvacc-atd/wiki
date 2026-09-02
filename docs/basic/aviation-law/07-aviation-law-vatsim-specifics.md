# Przepisy ruchu lotniczego w realiach VATSIM

Nie wszystkie przepisy ruchu lotniczego objęte [załącznikiem nr 2 do konwencji ICAO](https://ulc.gov.pl/_download/prawo/prawo_miedzynarodowe/konwencje/ICAO-ZA%C5%81_2_zm_1-48.pdf) mają sens w symulowanych warunkach VATSIM, nawet przy uwzględnieniu zasady *as real as it gets*. Ponadto, w niektórych przypadkach reguły obowiązujące w sieci, opisane przede wszystkim w  [VATSIM Code of Conduct](https://vatsim.net/docs/policy/code-of-conduct) różnią się od tych, które funkcjonują w "prawdziwym" lotnictwie. Ogólne regulacje CoC zostały częściowo wyjaśnione w oficjalnym komentarzu, czylli (CoC Companion Document)[https://drive.google.com/file/d/1_A9Hnqmv0G-TCG34tCJJ5czdgpC06y0Y/view].

## Najważniejsze reguły specyficzne dla VATSIM

### Reguła ogólna: zakaz narzucania pierwszeństwa

Zgodnie z VATSIM CoC B6, żaden użytkownik sieci nie może jednostronnie narzucić innym pierwszeństwa. Reguła ta ma zastosowanie także w przypadku lotów pod kontrolą. To z niej wynikają ograniczenia dotyczące symulowania sytuacji szczególnych i niebezpiecznych, a także podejście do [obsługi lotów ratowniczych](../../../s2/hems/hems-ops).

### Sytuacje szczególne i niebezpieczne

Do najważniejszych odstępstw od "rzeczywistych" przepisów należą regulacje dotyczące symulowania sytuacji szczególnych i niebezpiecznych, wynikające z VATSIM CoC B6. Zagadnienie to jest omawiane szczegółowo w [odrębnym artykule](../../basic/special_unsafe_situations/special-and-unsafe-situations). W tym miejscu podkreślmy tylko, że **zabronione** jest symulowanie bezprawnej ingerencji ("porwania"), a symulowanie sytuacji awaryjnych jest dopuszczalne, ale pod warunkiem przestrzegania kilku ograniczeń.

### Katastrofy lotnicze

Zabronione jest symulowanie wypadków, katastrof i innych podobnych tragicznych wydarzeń (VATSIM CoC A17).

### Umiejętności pilotów

Skoro wirtualnych pilotów na VATSIM nie obowiązują rygory dotyczące licencji, trzeba liczyć się ze zróżnicowanym poziomem ich umiejętności. VATSIM CoC B8 przewiduje jednak kilka zupenie podstawowych wymogów, do których należą:

1. umiejętność obsłgi wybranego statku powietrznego (uczenie pilotów, jak latać nie jest rolą wirtualnego kontrolera ruchu lotniczego)
1. niezwłoczne wykonywanie przynajmniej instrukcji dotyczących: utrzymywania pozycji na ziemi, wykonywania lotu z przydzieloną prędkością, kursem oraz na przydzielonej wysokości lub poziomie lotu
1. wykonania podejścia instrumentalnego luz widocznością
1. w przypadku lotów IFR: umiejętność wykonania lotu zgodnie z zaplanowaną trasą, lotu do punktu lub pomocy nawigacyjnej nieobjętych planem, oczekiwania w nakazanym miejscu (*holding*)

Obowiązkiem pilotów jest także przygotowanie do lotu, obejmujące zaznajomienie z lotniskami, procedurami, przestrzenią powietrzną oraz zaplanowaną trasą. 

Piloci muszą też dobrać statek powietrzny do lotniska. Przykładowo, niedopuszczalny byłby lot Airbusem A380 do Modlina (EPMO), czy próba wylądowania Boeingiem 737 w Pobiedniku Wielkim (EPKP).

:::info
Choć część obowiązków pilotów wskazanych w VATSIM CoC dotyczy wyraźnie tylko lotów IFR, nie oznacza to, że analogiczne obowiązki nie dotyczą lotów VFR. Przykładowo, pilot wykonujący lot VFR w przestrzeni kontrolowanej lotniska musi wiedzieć, gdzie znajdują się punkty nawigacyjne VFR (np. Kilo i Zulu w CTR EPKK) i jak wykonywać oczekiwanie nad nimi. Wynika to z obowiązku posiadania podstawowych umiejętności pilotażu oraz znajomości przestrzeni, w której wykonywany jest lot.
:::

### Pogoda

VATSIM CoC B13 zachęca, ale nie nakazuje pilotom włączania w symulatorach rzeczywistej pogody w pełnym zakresie. Obowiązkowe jest jednak utrzymywanie rzeczywistej temperatury, ciśnienia i wiatru.

W praktyce oznacza to na przykład, że gdy na lotnisku panują warunki pogodowe, które w typowej sytuacji wykluczałyby wydwanie zezwolenia na lot VFR, kontroler może je wydać po upewnieniu się, że pilot w symulatorze ma włączone warunki VMC (Visual Meteorological Conditions).

### Dane nawigacyjne

Użytkownicy wykonujący loty IFR muszą być w stanie wykonywać procedury oparte na aktualnych mapach i danych nawigacyjnych (VATSIM CoC B14). Typowym naruszeniem tej zasady jest "nieaktualny AIRAC".

Opisany tu obowiązek nie jest bewzględny w tym sensie, że nie narzuca wykorzystania samolotów zdolnych do wykonywania aktualnych procedur. Przykładowo, na VATSIM dozwolone jest wykonanie lotu IFR samolotem wyposażonym w VOR i ILS, ale nie w system nawigacji obszarowej GNSS.

### Podłączanie do sieci 

Zgodnie z VATSIM CoC B1 zabronione jest podłączanie do sieci na drodze startowej lub drodze kołowania. Przy podłączaniu na płycie obowiązuje zasada "kto pierwszy ten lepszy", a zatem użytkownik, który podłączył się na danym stanowisku jako drugi, ma obowiązek je zwolnić. Podłączenie do sieci w powietrzu nie jest zabronione, ale obowiązkiem pilota jest upewnienie się, że nie spowoduje to zakłóceń dla innych użytkowników sieci. 

Użytkownicy, których omawiana reguła chroni przed zakłóceniami, to nie tylko piloci, ale także kontrolerzy. Tym samym, przykładem naruszenia opisanej tu reguły byłoby nie tylko podłączenie do sieci na prostej do pasa, bezpośrednio przed innym podchodzącym statkiem powietrznym, ale także podłączenie w środku ruchliwego wydarzenia, zaburzające płynność zaplanowanej już kolejki przylotów. Zgodnie z oficjalną interpretacją wskazaną w CoC Companion Document, przed normalnym podłączeniem do sieci w powietrzu w przestrzeni kontrolowanej pilot powinien podłączyć się jako obserwator i ustalić dalsze kroki z kontrolerem.

### Ograniczenia dotyczące operacji specjalnych

Jak wynika z VATSIM CoC A13, symulowanie lotów o charakterze wojskowym, paramilitarnym, a także lotów cywilnych organów rządowch jest dozwolone tylko jeśli użytkownik należy do zatwierdzonej organizacji vSOA (*Virtual Special Operations Association (VSOA)*). 

Interpretacja tego przepisu jest dość złożona. Niektóre operacje, które w każdych okolicznościach są zastrzeżone do vSOA, zostały wymienione w dokumencie [VATSIM-POL-Special Operations](https://cdn.vatsim.net/policy-documents/VATSIM-POL-Special_Operations_v5.0.pdf). Należą do nich między innymi: pokazy lotnicze, eskortowanie lub przechwytywanie statków powietrznych, manewry taktyczne (*air combat maneuvers*) czy tankowanie w powietrzu. Z kolei zgodnie z interpretacją przyjętą we wspomnianym wcześniej komentarzu do CoC ograniczenia nie dotyczą między innymi lotów wykonywanych co prawda wojskowym statkiem powietrznym, ale po cywilnych trasach i z poddźwiękową prędkością, czy też lotów transportowych wykonywanych pomiędzy lotniskami wojskowymi.

Trzeba tu dodać, że zgodnie z instrukcją operacyjną Polish VACC większość lotnisk wojskowych jest niekontrolowana, a nieliczne, dla których przewidziano taką możliwość, nie są niemal nigdy obsadzane przez kontrolerów. Oznacza to, że w zdecydowanej większości przypadków wojskowa przestrzeń kontrolowa (MCTR i MTMA) jest degradowana do klasy G, czyli jest przestrzenią niekontrolowaną.

### Komunikacja inna niż głosowa

Obowiązkowa dla kontrolerów, a preferowana dla pilotów jest komunikacja głosowa. Piloci mogą, jeśli to konieczne, użyć niesymetrycznej komunikacji zakładającej odbieranie głosu i "nadawanie" tekstu (*Receive-Only*), albo komunikacji tekstowej (*Text-Only*).

Zgodnie z oficjalną interpretacją wskazaną w CoC Companion Document, choć kontrolerzy nie mogą z góry odmówić obsługi pilotów, którzy nie wykorzystują pełnej komunikacji głosowej, w przypadku zwiększonego obciążenia dopuszczalne jest traktowanie komunikacji głosowej jako priorytetowej.

### Zdolność pilota do postrzegania 

Inaczej niż załącznik nr 2 do konwencji ICAO, w sieci VATSIM nie obowiązuje zakaz wykonywania lotów "pod wpływem jakichkolwiek środków psychoaktywnych, ograniczających zdolności postrzegania". Nie oznacza to jednak pełnej dowolności, ponieważ w myśl VATSIM CoC B3(a) obowiązkiem pilota jest monitorowanie lotu przez cały czas. Z punktu widzenia kontrolerów i pilotów, których doświadczenia popsuje pilot nieodpowiadający na instrukcje podczas wektorowania do podejścia, jest całkowicie obojętne, czy nieuwaga była spowodowana jakąś substancją, czy prowadzeniem rozmowy przez komunikator albo oglądaniem filmu.

### Loty w formacji

Wykonywanie lotów w formacji jest dozwolone także w przypadku lotów cywilnych. Kontroler może jednak w każdej chwili zażądać rozdzielenia formacji.