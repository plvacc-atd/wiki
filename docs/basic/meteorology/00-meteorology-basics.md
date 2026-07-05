# Podstawowe zjawiska meteorologiczne oraz ich wpływ na lotnictwo

**Meteorologia** to nauka zajmująca się badaniem atmosfery ziemskiej, jej procesów oraz zjawisk zachodzących w warstwie przyziemnej i wyższych warstwach troposfery. W lotnictwie jej znaczenie jest kluczowe, ponieważ warunki meteorologiczne bezpośrednio wpływają na bezpieczeństwo i organizację ruchu lotniczego oraz na osiągi statków powietrznych.

W środowisku VATSIM, mimo że operujemy w symulacji, zasady interpretacji pogody oraz jej wpływu na ruch lotniczy powinny możliwie wiernie odzwierciedlać realne procedury. Zgodnie bowiem z obowiązującymi wytycznymi [VATSIM CoC](https://vatsim.net/docs/policy/code-of-conduct) B13:

:::caution
Piloci **są zachęcani do korzystania z aktualnej, rzeczywistej pogody** (real-world weather) przez cały czas. Piloci **muszą** wykorzystywać co najmniej następujące aktualne parametry meteorologiczne podczas wszystkich faz lotu:  
(a) wiatr
(b) ciśnienie
(c) temperatura
:::

Oznacza to, że nawet w środowisku symulacji zakłada się spójność warunków atmosferycznych pomiędzy wszystkimi użytkownikami sieci. Dzięki temu wszyscy użytkownicy sieci funkcjonują w tym samym _środowisku meteorologicznym_, co pozwala wiernie odwzorować rzeczywiste procedury operacyjne:

- **wiatr** determinuje m.in. wybór pasa startowego w użyciu, a podczas lotów np. po kręgu nadlotniskowym może mieć niemały wpływ na prędkość statków powietrznych względem ziemi;
- **ciśnienie** jest kluczowe dla poprawnego ustawienia wysokościomierzy i zapewnienie statkom powietrznym separacji pionowej,
- **temperatura** wpływa na osiągi statków powietrznych.

Kontroler musi rozumieć pogodę i uwzględniać ją przy podejmowaniu decyzji operacyjnych dotyczących założeń w zakresie wyboru kierunku operacji, planowania ruchu, wprowadzania procedur ograniczonej widzialności (LVP) czy spodziewanych procedur odladzania.

## Burze i opady

Burze (TS – _thunderstorms_) oraz intensywne opady (RA - _rain_, SN - _snow_, GR - _hail_) należą do najbardziej dynamicznych i operacyjnie wymagających zjawisk meteorologicznych.

### Burze i opady w depeszach meteorologicznych

W depeszach meteorologicznych (np. METAR, TAF) burze i opady oznaczane są skrótami:

- **TS** – burza;
- **TSRA** – burza z deszczem;
- **TSSN** - burza ze śniegiem;
- **VCTS** – burza w pobliżu lotniska (zwykle w promieniu 5–10 mil od ARP - punktu odniesienia lotniska);
- **RETS** – burza, która zakończyła się w ciągu ostatniej godziny;
- **GR** - grad;
- **FZRA** - marznący deszcz.

Dodatkowo stosuje się oznaczenia intensywności:

- **+TS / +TSRA / +TSSN** / **+RA** / **+SN** – burza / opad o dużym natężeniu;
- **TS / TSRA / TSSN** / **RA** / **SN** – burza / opad o średnim natężeniu (brak znaku + lub -);
- **-TS / -TSRA / -TSSN** / **-RA** / **-SN** – burza / opad o niskim natężeniu.

### Wpływ operacyjny

Burze mogą generować turbulencje, wyładowania atmosferyczne, intensywne opady, szybkie i nieprzewidywalne zmiany kierunku oraz siły wiatru.

W praktyce ATC zjawiska takie powodują konieczność elastycznego zarządzania przepływem ruchu. Ze strony załóg w pełni symulujących zjawiska pogodowe mogą np. pojawić się prośby o zmiany kursu w celu omijania komórek burzowych. W przypadku silnych burz załogi mogą również zgłaszać konieczność odejścia na drugi krąg, wykonania holdingu lub wręcz odlotu na lotnisko zapasowe.

## Mgła

Mgła (FG – _fog_) oraz zamglenie (BR – _mist_) to zawiesina mikroskopijnych kropli wody lub kryształków lodu w powietrzu w pobliżu w powierzchni ziemi. Są one zjawiskami meteorologicznymi mającymi istotny wpływ na operacje lotnicze, przede wszystkim ze względu na ograniczenie widzialności.

### Mgła w depeszach meteorologicznych

W depeszach meteorologicznych (np. METAR, TAF) mgła i zjawiska pokrewne oznaczane są m.in. jako:

- **FG** – mgła (widzialność poniżej 1 000 m);
- **BR** – zamglenie (widzialność od 1 000 do 5 000 m);
- **MIFG** – mgła przyziemna, w praktyce do wysokości ok. 2 m (shallow fog);
- **BCFG** – miejscowa mgła (patches of fog).

Widzialność podawana jest osobno jako wartość liczbowa poprzedzająca opis zjawisk pogodowych, np.:

- **9999** – widzialność co najmniej 10 km;
- **5000** – widzialność 5 km;
- **0800** – widzialność 800 m.

### Wpływ operacyjny

Najważniejszym skutkiem występowania mgły jest ograniczenie widzialności, wpływające zarówno na operacje w powietrzu, jak i na polu manewrowym lotniska.

W praktyce ATC może to oznaczać konieczność stosowania procedur ograniczonej widzialności (**LVP**). Procedury LVP mają na celu zapewnienie bezpiecznego prowadzenia operacji lotniczych w warunkach znacznie ograniczonej widzialności poprzez zastosowanie dodatkowych ograniczeń i zwiększenie marginesów bezpieczeństwa. Na VATSIM decyzja o wprowadzeniu procedur LVP zależy od lokalnych przepisów obowiązujących w vFIR lub na danym lotnisku. Kontroler powinien znać obowiązujące minima oraz procedury opisane w dokumentacji operacyjnej.

## Wiatr

Wiatr to poziomy ruch mas powietrza względem powierzchni Ziemi, który powstaje w wyniku różnic ciśnienia atmosferycznego i jest jednym z najważniejszych parametrów meteorologicznych w lotnictwie. Wpływa zarówno na osiągi statku powietrznego, jak i na organizację ruchu lotniczego.

### Wiatr w depeszach meteorologicznych

W depeszach meteorologicznych (np. METAR, TAF) kierunek i prędkość wiatru zapisywane są jako jeden z pierwszych podawanych parametrów. Należy wiedzieć, że w meteorologii kierunek wiatru podaje się według strony świata, z której wieje wiatr, a nie tej, w kierunku której zmierza. Stąd też:

- **25012KT** – wiatr z kierunku 250 stopni o sile 12 węzłów;
- **25012G22KT** – wiatr z kierunku 250 stopni o sile 12 węzłów, w porywach do 22 węzłów;
- **25010KT 190V300** - wiatr z kierunku 250 stopni o sile 10 węzłów, zmienny od 190 do 300 stopni;
- **VRB03KT** – wiatr o zmiennym kierunku i sile 3 węzłów;
- **VRB01KT** (i słabszy) - traktowany jako **cisza**.

### Wpływ operacyjny

Wiatr wpływa przede wszystkim na wybór pasa startowego w użyciu. Co do zasady operacje lotnicze wykonuje się **pod wiatr**, ponieważ poprawia to osiągi statku powietrznego podczas startu i lądowania - skraca rozbieg podczas startu oraz drogę dobiegu po lądowaniu.

Istotne znaczenie mają również:
- **wiatr tylny (tailwind)** – wydłuża rozbieg i dobieg, każdy typ statku powietrznego posiada określoną maksymalną dopuszczalną składową wiatru tylnego (maximum tailwind component), przy której możliwe jest wykonywanie startów i lądowań;
- **wiatr boczny (crosswind)** – może ograniczać możliwość wykonywania operacji przez niektóre statki powietrzne ze względu na maksymalną dopuszczalną składową wiatru bocznego określoną przez producenta lub operatora;
- **porywy wiatru (gusts)** – utrudniają utrzymanie stabilnego podejścia i zwiększają prawdopodobieństwo podjęcia przez załogę decyzji o odejściu na drugi krąg.

W praktyce ATC znaczna zmiana kierunku wiatru może skutkować decyzją o zmianie pasa startowego w użyciu, co często wiąże się z koniecznością reorganizacji całego ruchu lotniczego. Na VATSIM decyzja o zmianie kierunku operacji powinna uwzględniać zarówno obowiązujące procedury, jak i natężenie ruchu oraz aktualne warunki meteorologiczne.

## Zachmurzenie

Zachmurzenie to stopień pokrycia nieba przez chmury oraz wysokość ich podstawy. W lotnictwie ma ono istotne znaczenie, ponieważ wpływa na możliwość wykonywania lotów według przepisów z widocznością (VFR) czy też sprawia, że uważnie należy zapoznać się z minimami podejść według wskazań przyrządów (IFR).

### Zachmurzenie w depeszach meteorologicznych

W depeszach meteorologicznych (np. METAR, TAF) zachmurzenie opisywane jest za pomocą skrótów określających stopień pokrycia nieba (w oktantach, tj. ósmych częściach pokrycia nieba) oraz wysokość podstawy chmur. Wysokość podstawy chmur podawana jest w setkach stóp nad poziomem gruntu (AGL). W praktyce oznacza to wysokość podstawy chmur nad poziomem lotniska, dla którego sporządzono depeszę METAR, np.:

- **NSC** – brak chmur o znaczeniu operacyjnym (gdy oprócz tego widzialność wynosi 10 km lub więcej, używa się pojęcia **CAVOK**);
- **FEW020** – niewielkie zachmurzenie (1–2 oktanty), podstawa chmur na wysokości 2 000 stóp; 
- **SCT030** – zachmurzenie rozproszone (3–4 oktanty), podstawa chmur na wysokości 3 000 stóp;
- **BKN015** – zachmurzenie duże (5–7 oktantów), podstawa chmur na wysokości 1 500 stóp;
- **OVC008** – zachmurzenie całkowite (8 oktantów), podstawa chmur na wysokości 800 stóp;
- **VV002** – widzialność pionowa 200 stóp (Vertical Visibility), podawana zamiast wysokości podstawy chmur, gdy nieba nie można obserwować z powodu mgły, opadu lub innych zjawisk ograniczających widzialność.

W jednej depeszy może występować kilka warstw chmur, np. **FEW020 SCT040 BKN055** oznacza niewielkie zachmurzenie na wysokości 2 000 stóp, zachmurzenie rozproszone na 4 000 stóp oraz warstwę zachmurzenia dużego na wysokości 5 500 stóp.

Poza stopniem pokrycia nieba chmurami, w depeszach meteorologicznych można spotkać również oznaczenia dwóch typów chmur o szczególnym znaczeniu dla lotnictwa:

- **CB** – Cumulonimbus (chmura burzowa), np. **BKN020CB**;
- **TCU** – Towering Cumulus (wypiętrzona chmura kłębiasta - może rozwinąć się w CB), np. **SCT025TCU**.

Oba typy chmur związane są z możliwością występowania silnych prądów wstępujących i zstępujących, turbulencji oraz intensywnych opadów, dlatego mają istotne znaczenie podczas planowania i wykonywania operacji lotniczych.


### Wpływ operacyjny

Największe znaczenie operacyjne ma **wysokość podstawy chmur**, a nie sam stopień pokrycia nieba chmurami. Niska podstawa chmur może ograniczać możliwość wykonywania lotów z widocznością (VFR), wpływać na minima podejść według wskazań przyrządów oraz zwiększać prawdopodobieństwo wykonywania procedur nieudanego podejścia (go-around).

:::info
Dla potrzeb oceny warunków VMC/IMC oraz wykonywania lotów VFR, za pułap chmur (ang. _ceiling_) uznaje się **podstawę najniższej warstwy zachmurzenia BKN lub OVC**. Oznacza to, że występowanie zachmurzenia FEW lub SCT, nawet z podstawą na wysokości poniżej minimów VMC, samo w sobie nie oznacza braku warunków VMC.
:::

W praktyce ATC zachmurzenie jest jednym z podstawowych elementów branych pod uwagę podczas oceny warunków meteorologicznych. W połączeniu z widzialnością decyduje ono o tym, czy na lotnisku panują warunki **VMC (Visual Meteorological Conditions)** czy **IMC (Instrument Meteorological Conditions)**. Informacje o zachmurzeniu wykorzystywane są zarówno przez kontrolerów, jak i załogi statków powietrznych podczas planowania i wykonywania operacji lotniczych.
