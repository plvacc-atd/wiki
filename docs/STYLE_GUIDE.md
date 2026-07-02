# Style Guide — Polish VACC Wiki

Ten dokument powstał na bazie czterech artykułów z sekcji [„Demo do kalibracji"](https://wiki.plvacc.pl/category/demo-do-kalibracji).
Porównanie tych artykułów pokazało konkretne rozjazdy w poziomie i formie — poniższe zasady
mają je wyeliminować w kolejnych artykułach. To nie jest regulamin do wykucia na pamięć —
to checklista, którą przechodzisz pisząc i recenzując artykuł.

---

## 1. Dla kogo piszemy

Zanim zaczniesz pisać, ustal, do kogo mówi dany artykuł. Poziom wiedzy czytelnika **musi** być
zadeklarowany w kategorii, a artykuł ma się go trzymać:

| Kategoria | Zakładana wiedza czytelnika | Czego NIE trzeba tłumaczyć |
|---|---|---|
| Zagadnienia ogólne | Brak wiedzy lotniczej | — |
| Rating S1 | Podstawy z sekcji ogólnej | Co to jest droga startowa |
| Rating S2 | Wszystko z S1 + separacje, koordynacja | Podstawowa frazeologia delivery/ground |


**Zasada:** jedno zdanie na górze artykułu (może być w komentarzu MDX, nie musi być widoczne
dla czytelnika) określające: *„Zakładam, że czytelnik wie X. Artykuł uczy go Y."* Patrz sekcja
`<!-- persona -->` w szablonie.

Przykład problemu, którego to unika: artykuł *„Lotniska"* tłumaczy pojęcia od zera (dobre dla
S1), a *„Sprawdzenie poprawności planu lotu"* zakłada już swobodną znajomość ICAO Doc 8643 —
oba są w tej samej kategorii demo, więc czytelnik nie wie, czego się spodziewać.

---

## 2. Struktura artykułu

Każdy artykuł proceduralny/operacyjny ma mieć tę kolejność sekcji (nie wszystkie są
obowiązkowe — ale kolejność jest stała, żeby czytelnik wiedział, gdzie czego szukać):

1. **Wprowadzenie** (1–3 zdania) — co to jest i dlaczego to ważne dla czytelnika
2. **Definicje** (jeśli potrzebne) — patrz sekcja 4 niżej, preferuj link do glosariusza
3. **Procedura / zasada** — sedno artykułu
4. **Przykład** — zwłaszcza jeśli w grę wchodzi frazeologia radiowa (patrz sekcja 5)
5. **Wyjątki / częste błędy** (jeśli dotyczy)
6. **Zobacz też** — linki do powiązanych artykułów

### Nagłówki — jedna zasada, bez wyjątków

Docusaurus generuje numerację i spis treści automatycznie z nagłówków `##` / `###`.
**Nie numerujemy nagłówków ręcznie w tekście** (nie piszemy „1.1. Przyloty:") — to jest
źródło błędów, gdy ktoś w połowie artykułu przeskakuje z `##` na `#` i cała hierarchia się
sypie (dokładnie to się stało w *„Zarządzaniu przylotami"*). Tytuł sekcji ma być czystym
opisem: `## Przyloty`, `## Zezwolenie na przylot`.

Jeśli kolejność kroków jest ważna merytorycznie (np. checklist), używaj listy numerowanej
`1. 2. 3.` **wewnątrz** sekcji, nie w samym nagłówku.

### Minimalna struktura nagłówków

Artykuł nie może być jednym blokiem tekstu bez nagłówków (jak *„Przydzielanie stanowisk"*,
gdzie cała treść siedzi pod jednym H1). Jeśli artykuł ma więcej niż ok. 300 słów, potnij go
na sekcje `##`.

---

## 3. Ton i forma

Wybieramy **jeden** rejestr i trzymamy się go w całym artykule:

- Zwracamy się do czytelnika bezpośrednio, drugą osobą: *„Twoim zadaniem jest..."*,
  *„Sprawdzasz..."* — a nie mieszanka z formami bezosobowymi typu *„Kontroler ma obowiązek..."*
  w jednym akapicie i *„Musisz..."* w następnym.
- Domyślnie: **druga osoba, tryb bezpośredni** (jak w praktycznych fragmentach
  *„Zarządzania przylotami"*) — to jest wiki szkoleniowe, nie tekst prawny. Formę bezosobową
  (*„kontroler powinien"*) zostawiamy tylko dla cytowania właściwych przepisów.
- Unikaj wielokrotnych wykrzykników i pisania fragmentów WIELKIMI LITERAMI dla podkreślenia —
  do tego służą admonicje (patrz sekcja 6).

---

## 4. Definicje i terminologia — jedno źródło prawdy

Artykuł *„Lotniska"* cytuje pełne definicje prawne (droga startowa, pole manewrowe, pas drogi
startowej...). To świetna treść — ale jeśli każdy kolejny artykuł operacyjny będzie od nowa
tłumaczył te same pojęcia własnymi słowami, poziom i dokładność będą się rozjeżdżać.

**Zasada:**
- Pełne definicje prawne/ICAO trzymamy w **jednym miejscu** — stronie/kategorii „Glosariusz"
  lub w artykułach referencyjnych typu *„Lotniska"*.
- Artykuły proceduralne **linkują** do definicji zamiast je powtarzać:
  `[droga startowa](/glossary#runway)` zamiast ponownego cytowania definicji ICAO.
- Skrót przy pierwszym użyciu w artykule rozwijamy raz: „KRL (kontroler ruchu lotniczego)" —
  dalej już tylko skrót.
- Angielski termin w nawiasie kursywą przy pierwszym wystąpieniu, jeśli to pojęcie ma swój
  odpowiednik w dokumentach źródłowych: „droga startowa (*runway*)".

---

## 5. Przykłady frazeologii radiowej

To jest najmocniejsza część istniejących artykułów (*„Zarządzanie przylotami"*) i warto to
ujednolicić formatem, a nie tylko pogrubieniem w zdaniu. Frazeologia zawsze w bloku kodu,
nie jako pogrubiony tekst wtopiony w akapit — łatwiej to wtedy skanować wzrokiem:

```
SPABC, wind 290 degrees 5 knots, runway 25, cleared to land
```

Jeśli przykład wymaga kontekstu (co poprzedza, co po nim następuje), opisz to zdaniem przed
blokiem, nie w komentarzu w środku frazeologii.

---

## 6. Admonicje (info / caution / tip)

Docusaurus wspiera bloki `:::info`, `:::tip`, `:::caution`, `:::danger`. Używamy ich zamiast
zwykłych akapitów, kiedy chcemy **wyraźnie wyróżnić** dygresję, wyjątek lub coś krytycznego
z punktu widzenia bezpieczeństwa:

```
:::caution Krytyczne dla separacji
Jeśli w CTR jest inny ruch VFR, musisz poinformować o nim pilota podchodzącego statku.
:::
```

Nie nadużywamy — jeśli w artykule jest więcej niż 3–4 admonicje, prawdopodobnie tekst główny
jest źle zorganizowany.

---

## 7. Materiały niedokończone

Jeśli artykuł zawiera coś, czego jeszcze nie ma (tabela, zrzut ekranu), **nie zostawiamy tego
jako zwykły tekst w nawiasach** typu „(tabelka do wklejenia)" czy „[SCREEN Z ARRIVAL LISTY]" —
to wygląda jak literówka i łatwo przegapić przy publikacji. Zamiast tego:

```
:::caution TODO
Tabela separacji w śladzie aerodynamicznym — do uzupełnienia.
:::
```

Dzięki temu takie miejsca są wizualnie widoczne i łatwe do wyszukania (`grep -r "TODO"` albo
wyszukiwarka Algolia) przed mergem.

---

## 8. Odwołania do dokumentów źródłowych

Gdy artykuł powołuje się na przepis (ICAO Doc, AIP, PANS-ATM), **zawsze podajemy konkretny
dokument i — jeśli to możliwe — sekcję**, tak jak robi to *„Sprawdzenie poprawności planu
lotu"* („ICAO Doc 8643", „Doc 7910"). To nie tylko wiarygodność — to też ułatwia
aktualizację, gdy przepis się zmieni.

Format: *nazwa przepisu w tekście* + dokument źródłowy w nawiasie lub jako link, np.:
„Kategoria turbulencji w śladzie aerodynamicznym (ICAO Doc 8643, Aircraft Type Designators)".

---

## 9. Długość

Orientacyjne widełki — to nie sztywny limit, ale sygnał, że warto podzielić artykuł:

- Artykuł wprowadzający / koncepcyjny: 300–800 słów
- Artykuł proceduralny (krok po kroku): bez sztywnego limitu, ale jeśli przekracza
  ok. 1500 słów, rozważ podział na kilka artykułów (np. *„Plan lotu — pola ogólne"* +
  *„Plan lotu — trasa i poziomy"*)

---

## 10. Checklist przed PR

- [ ] Persona czytelnika jest jasna (kategoria + zakładana wiedza)
- [ ] Nagłówki `##`/`###` bez ręcznej numeracji, spójna hierarchia (brak przeskoków `#`↔`##`)
- [ ] Definicje linkują do glosariusza zamiast go duplikować
- [ ] Skróty rozwinięte przy pierwszym użyciu
- [ ] Frazeologia w blokach kodu, nie w pogrubieniu wtopionym w zdanie
- [ ] Brak niedokończonych fragmentów bez oznaczenia `:::caution TODO`
- [ ] Przepisy mają wskazany dokument źródłowy
- [ ] Artykuł ma sekcję „Zobacz też" jeśli istnieją powiązane strony
- [ ] Sprawdzone pod kątem literówek (szczególnie nazwy własne: EPKT, ICAO, itp.)

---

## Jak dalej rozwijać te zasady

Ten dokument to punkt startowy, nie ostateczna wersja. Gdy powstanie kolejnych 5–10
artykułów, wróćcie do tego pliku i sprawdźcie: które zasady faktycznie były stosowane, które
się nie sprawdziły, co trzeba dopisać. Style guide, który nikt nie aktualizuje, szybko
przestaje odzwierciedlać rzeczywistą praktykę.
