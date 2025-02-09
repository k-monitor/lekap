# lekap

Egy [userscript](https://en.wikipedia.org/wiki/Userscript), ami (részben) automatizálja [kikap](https://kikap.kormany.hu/)-os dokumentumok letöltését.

## Info

### Funkciók
- letöltések és lépkedések automatizálása
- captcha bekérő szövegdoboz szövegének láthatóvá tétele
- jobb klikk engedélyezése az oldalon

### Hibák

A script a hálózat (internet) instabilitása miatt vagy egyéb előre nem látható okokból megakadhat és elképzelhető, hogy egy vagy több oldalt nem tölt le.

Az sem kizárható, hogy bizonyos kikapos dokumentumokkal nem kompatibilis. Igyekszünk javítani az ilyen típusú hibákat, de nem sok kikapos linkhez férünk hozzá. Ha hibát észlelsz, kérlek jelezd nekünk! Ha tudsz, itt [nyiss egy issue](https://github.com/k-monitor/lekap/issues/new?template=Blank+issue)-t, de az se baj, ha [email](mailto:info@k-monitor.hu)-ben jelzed felénk.

> [!WARNING]
> A K-Monitor semmilyen felelősséget nem vállal a script által okozott problémák miatt. Többek közt, de nem kizárólag a részben letöltődött dokumentumok, bezáratlanul maradt dokumentumok és véletlenül okozott kormányváltás miatt.

## Telepítés

### Ha tudod mit csinálsz

Ajánlott böngésző: [Firefox](https://www.mozilla.org/en-US/firefox/new/)

Ajánlott bővítmény: [Violent monkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)

Telepítés: [katt ide](https://github.com/k-monitor/lekap/releases/download/v1.0/lekap.user.js)

### Részletesebb leírás

1. Telepíts egy userscript kezelő bővítményt a böngésződbe.

   Böngészőnek javasolt Firefox-ot választani, bővítménynek pedig [Violent monkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) ideális, mert nyílt forráskódú.

   *De ha már van másik userscript kezelőd, például: [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) vagy [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), használd nyugodtan azt!*

   *Chrome vagy azon alapuló böngészők (Edge, Opera, Brave) esetében szükség lehet [a fejlesztői mód bekapcsolására](https://www.tampermonkey.net/faq.php#Q209).*

3. [Kattints ide a telepítéshez.](https://github.com/k-monitor/lekap/releases/download/v1.0/lekap.user.js)

4. Nyisd meg a kikap-os linket.

5. Írd be a captcha-t.

6. Ha elkészült a dokumentum, az első oldal tetején (bal oldalt) meg kell jelennie egy `start` feliratú gombnak.

7. A start gombra kattintva elkezdődik az automatikus letöltés.

8. Dőlj hátra és nézd, ahogy egyesével letöltődnek a fájlok!

   A szerver lassúsága miatt a letöltések több másodpercig eltarthatnak, légy türelmes és közben ne lépj válts másik oldalra!

   Ha előbb le akarod állítani a letöltési folyamatot, kattints a dokumentum bezárása gombra.

10. Ha az oldalak végére ér a script, elvileg a dokumentumot is automatikusan bezárja.
